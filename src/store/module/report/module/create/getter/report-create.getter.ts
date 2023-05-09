import {ReportCreateStateModel} from '../model';
export const reportCreateGetter = {
    getForm: (state: ReportCreateStateModel) => {
        return state.form;
    },

    getLoading: (state: ReportCreateStateModel) => {
        return state.loading;
    },

    getLoaded: (state: ReportCreateStateModel) => {
        return state.loaded;
    },

    getError: (state: ReportCreateStateModel) => {
        return state.error
    }
}