import {ReportStateModel} from '../model';

export const reportGetters = {
    getReport: (state: ReportStateModel) => {
        return state.report;
    },

    getLoading: (state: ReportStateModel) => {
        return state.loading
    },

    getLoaded: (state: ReportStateModel) => {
        return state.loaded
    },

    getError: (state: ReportStateModel) => {
        return state.error
    },

    getReportProducts: (state: ReportStateModel) => {
        return reportGetters.getReport(state) !== null ? reportGetters.getReport(state)?.products : [];
    }
}