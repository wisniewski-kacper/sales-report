import {ReportDetailsStateModel} from '../model';
import {ReportDataModel} from '@/common';

export const reportDetailsMutation = {
    setOnLoadingReportDetail(state: ReportDetailsStateModel) {
        state.loaded = false;
        state.loading = true;
        state.error = null;
        state.report = null;
    },

    setOnLoadedReportDetail(state: ReportDetailsStateModel, report: ReportDataModel) {
        state.loaded = true;
        state.loading = false;
        state.error = null;
        state.report = report;
    },

    setOnErrorReportDetail(state: ReportDetailsStateModel, error: string) {
        state.loaded = true;
        state.loading = false;
        state.error = error;
        state.report = null;
    }
}