// @flow

export type CallModalType = {
    type: 'core/CALL_MODAL',
    payload: string | {|
        history: boolean,
        id: string
    |}
}

export type SetModalType = {
    type: 'core/SET_MODAL',
    payload: string
}

export type SetModalHistoryFlagType = {
    type: 'core/SET_MODAL_HISTORY_FLAG',
    payload: boolean
}

export type CloseModalType = {
    type: 'core/CLOSE_MODAL',
    payload: void
}
