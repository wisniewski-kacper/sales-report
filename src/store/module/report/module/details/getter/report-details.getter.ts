import {ReportDetailsStateModel} from '../model';
import {ReportDataModel, ReportProductDataModel} from '@/common';

export const reportDetailsGetter = {
    getReport: (state: ReportDetailsStateModel): ReportDataModel|null => {
        return state.report;
    },

    getLoading: (state: ReportDetailsStateModel): boolean => {
        return state.loading
    },

    getLoaded: (state: ReportDetailsStateModel): boolean => {
        return state.loaded
    },

    getError: (state: ReportDetailsStateModel): string|null => {
        return state.error
    },

    getReportProducts: (state: ReportDetailsStateModel): ReportProductDataModel[] | undefined => {
        return reportDetailsGetter.getReport(state) ? reportDetailsGetter.getReport(state)?.products : [];
    }
}