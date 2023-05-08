import {ReportDetailsStateModel} from '../model';

export const reportDetailsGetters = {
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
        return reportDetailsGetters.getReport(state) !== null ? reportDetailsGetters.getReport(state)?.products : [];
    }
}