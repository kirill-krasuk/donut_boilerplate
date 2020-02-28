declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.json' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.ttf' {
    const content: any;
    export default content;
}

declare module 'dotenv' {
    const content: any;
    export default content;
}

declare module 'webpack-dev-middleware' {
    const content: any;
    export default content;
}

declare module 'webpack-hot-middleware' {
    const content: any;
    export default content;
}

declare module '*.dev' {
    const content: any;
    export default content;
}

declare module '*.prod' {
    const content: any;
    export default content;
}

declare module 'enzyme-adapter-react-16' {
    const content: any;
    export default content;
}

// declare module 'redux-actions' {
//     declare type Reducer<S, A> = (state: S, action: A) => S;
//     declare type ReduxReducer<S, A> = (state: S | void, action: A) => S;

//     declare type ReducerMap<S, A> =
//     | { next(state: S, action: A): S }
//     | { hrow(state: S, action: A): S }
//     | {
//         next(state: S, action: A): S;
//         throw(state: S, action: A): S;
//     };

//     declare function handleActions<State, Action>(
//         reducers: { [key: string]: Reducer<State, Action> | ReducerMap<State, Action> },
//         defaultState?: State
//       ): ReduxReducer<State, Action>;
// }
