export class QueryParams {
    _string = '';
    _params = [];

    constructor(string) {
        this._string = string;
    }

    set(key, value) {
        this._params.push({
            key,
            value
        });
    }

    append(key, value) {
        this._params.push({
            key,
            value
        });
    }

    toString() {
        let string = this._string || '';

        this._params.forEach((i) => {
            if (string) {
                string += `&${ i.key }=${ i.value }`;
            } else {
                string += `${ i.key }=${ i.value }`;
            }
        });

        return string;
    }
}
