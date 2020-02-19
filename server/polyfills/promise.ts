interface PromiseConstructor {
    allSettled: Function;
}

if (!Promise.allSettled) {
    Promise.allSettled = (promises): Promise<any> => Promise.all(
        promises.map(promise => promise
            .then(value => ({
                status: 'fulfilled',
                value,
            }))
            .catch(reason => ({
                status: 'rejected',
                reason,
            }))
        )
    );
}
