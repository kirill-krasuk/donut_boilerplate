import { createSelector } from 'reselect';
import R                  from 'ramda';

enum Locale {
    En = 'en',
    Ru = 'ru'
}

const selectProp: (state: Record<string, any>) => Locale = R.prop('locale');

export const getLocale = createSelector<object, ReturnType<typeof selectProp>, Locale>(selectProp, R.identity);
