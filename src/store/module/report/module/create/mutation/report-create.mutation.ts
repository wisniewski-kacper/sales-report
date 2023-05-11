import {ReportCreateStateModel} from '../model';
import {ReportFormModel} from '@/common';

export const reportCreateMutation = {
    setOnOpenReportCreate(state: ReportCreateStateModel) {
        state.loaded = false;
        state.loading = false;
        state.error = null;
        state.form = null;
    },

    setOnLoadingReportCreate(state: ReportCreateStateModel) {
        state.loaded = false;
        state.loading = true;
        state.error = null;
        state.form = null;
    },

    setOnLoadedReportCreate(state: ReportCreateStateModel, form: ReportFormModel) {
        state.loaded = true;
        state.loading = false;
        state.error = null;
        state.form = form;
    },

    setOnErrorReportCreate(state: ReportCreateStateModel, error: string) {
        state.loaded = true;
        state.loading = false;
        state.form = null;
        state.error = error;
    }
}
