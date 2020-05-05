import {
    minLength,
    oneCapital,
    oneNumber,
    isChecked,
    isRequired
} from '@core/utils/validation/rules';

export default {
    firstName: [
        minLength(8)('Need minimum {{$0}} letters'),
        oneCapital('Need one big letter')
    ],
    password: [
        isRequired(),
        oneNumber(),
        oneCapital()
    ],
    check: [
        isChecked()
    ]
};
