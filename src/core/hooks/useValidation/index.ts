import { useState, useEffect, useCallback } from 'react';
import { fromEvent, Subscription }          from 'rxjs';
import { pluck }                            from 'rxjs/operators';
import R                                    from 'ramda';
import * as O                               from 'fp-ts/lib/Option';
import { pipe }                             from 'fp-ts/lib/pipeable';

import { isValid, parseErrors }             from '@core/utils/validation';
import { prevent }                          from '@core/utils/dom';
import { ValidationMode }                   from '@core/enums/validation';
import {
    getElementEventType,
    targetFlow,
    checkScheme,
    checkSchemeByField,
    checkMode
} from './utils';
import {
    ValidationElem,
    Errors,
    ValidationScheme,
    ProvideErrors
} from './types';

// TODO: extend with comparing functional
export function useValidation<T extends object>(validationScheme: ValidationScheme<T> | {}, modes: ValidationMode = 0) {
    // TODO: resolve type
    // @ts-ignore
    const [ values, setValues ]       = useState<T>({});

    // @ts-ignore
    const [ errors, setErrors ]       = useState<Errors<T>>({});
    const [ invalid, setInvalid ]     = useState(true);
    const [ eventSubs, setEventSubs ] = useState<Subscription[]>([]);
    const [ blurSubs, setBlurSubs ]   = useState<O.Option<Subscription>[]>([]);
    const [ elements, setElements ]   = useState<O.Option<HTMLInputElement>[]>([]);

    const isModeEnabled = checkMode(modes);

    const provideErrors = ({ errors, valid }: ProvideErrors<T>) => {
        setInvalid(!valid);
        setErrors((allErrors: Errors<T>) => ({ ...allErrors, ...errors }));

        return valid;
    };

    const checkIsValid = (errors: Errors<T>) => ({ errors, valid: isValid(errors) });

    const validate = (needValidate: boolean | undefined) => needValidate && pipe(
        checkScheme<T>(validationScheme, values),
        checkIsValid,
        provideErrors
    );

    const validateByField = (field: string) => pipe(
        checkSchemeByField<T>(field, validationScheme, values),
        checkIsValid,
        provideErrors
    );

    const validateStartBy = (mode: ValidationMode) => validate(isModeEnabled(mode));

    const pushSubsToState = (subscription: Subscription) => setEventSubs(subs => [ ...subs, subscription ]);

    const mergeFields = (value: string | boolean) => (name: string) => (
        setValues(R.mergeDeepLeft({ [name]: value }))
    );

    const handleElement = (element: ValidationElem) => {
        setElements(elements => [ ...elements, O.some(element) ]);

        return (
            fromEvent<React.ChangeEvent<ValidationElem>>(element, getElementEventType(element))
                .pipe(
                    pluck('currentTarget'),
                )
                .subscribe(targetFlow(mergeFields))
        );
    };

    const actionBeforeSubscription = (element: ValidationElem): O.Option<ValidationElem> => (
        element
            ? (mergeFields('')(element.name), O.some(element))
            : O.none
    );

    const register = useCallback((element: ValidationElem) => pipe(
        actionBeforeSubscription(element),
        O.map(handleElement),
        O.map(pushSubsToState)
    ), []);

    const validityAction = (submitFn: (f: T) => void) => prevent(() => (
        validateStartBy(ValidationMode.Submit) && submitFn(values)
    ));

    useEffect(() => () => (
        eventSubs && eventSubs.forEach(sub => sub.unsubscribe)
    ), [ eventSubs ]);

    useEffect(() => {
        !R.isEmpty(values) && validateStartBy(ValidationMode.Change);
    }, [ values ]);

    // TODO: refactor
    useEffect(() => {
        if (isModeEnabled(ValidationMode.Blur) && !R.isEmpty(elements)) {
            if (!R.isEmpty(blurSubs)) {
                blurSubs.forEach(subOption => pipe(
                    subOption,
                    O.map(sub => sub.unsubscribe())
                ));
            }

            pipe(
                elements.map(element => pipe(
                    element,
                    O.map((elem: ValidationElem) => (
                        fromEvent(elem, 'blur')
                            .pipe(pluck<Event, string>('target', 'name'))
                    )),
                    O.map(event$ => event$.subscribe(name => validateByField(name)))
                )),
                setBlurSubs
            );
        }
    }, [ elements, values ]);

    return {
        register,
        validityAction,
        values,
        errors : parseErrors(errors) as Record<keyof T, string[]>,
        isValid: !invalid
    };
}
