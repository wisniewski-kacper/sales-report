import {ReportListStateModel} from '../model';

export const reportListGetter = {
    getList: (state: ReportListStateModel) => {
        return state.list;
    },

    getLoading: (state: ReportListStateModel) => {
        return state.loading
    },

    getLoaded: (state: ReportListStateModel) => {
        return state.loaded
    },

    getError: (state: ReportListStateModel) => {
        return state.error
    },
}