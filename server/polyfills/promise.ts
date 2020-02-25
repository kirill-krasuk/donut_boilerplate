interface PromiseConstructor {
    allSettled: Function;
}

if (!Promise.allSettled) {
    Promise.allSettled = (promises: any): Promise<any> => Promise.all(
        promises.map((promise: Promise<{ status: string; value: any }>) => promise
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
