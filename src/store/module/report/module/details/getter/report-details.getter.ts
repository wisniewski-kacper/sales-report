import {ReportDetailsStateModel} from '../model';

export const reportDetailsGetter = {
    getReport: (state: ReportDetailsStateModel) => {
        return state.report;
    },

    getLoading: (state: ReportDetailsStateModel) => {
        return state.loading
    },

    getLoaded: (state: ReportDetailsStateModel) => {
        return state.loaded
    },

    getError: (state: ReportDetailsStateModel) => {
        return state.error
    },

    getReportProducts: (state: ReportDetailsStateModel) => {
        return reportDetailsGetter.getReport(state) !== null ? reportDetailsGetter.getReport(state)?.products : [];
    }
}