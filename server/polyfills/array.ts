/* eslint-disable no-extend-native */
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value(predicate: Function) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            const o = Object(this);

            // eslint-disable-next-line no-bitwise
            const len = o.length >>> 0;

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // eslint-disable-next-line prefer-rest-params
            const thisArg = arguments[1];

            let k = 0;

            while (k < len) {
                const kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }

                k++;
            }

            return undefined;
        },
        configurable: true,
        writable    : true
    });
}
