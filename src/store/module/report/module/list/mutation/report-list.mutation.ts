import {ReportListStateModel} from '../model';
import {ReportListItemModel} from '@/common';

export const reportListMutation = {
    setOnLoadingReportList(state: ReportListStateModel) {
        state.loading = true;
        state.loaded = false;
        state.list = [];
        state.error = null;
    },

    setOnLoadedReportList(state: ReportListStateModel, list: ReportListItemModel[]) {
      state.loading = false;
      state.loaded = true;
      state.list = list;
      state.error = null;
    },

    setOnErrorReportList(state: ReportListStateModel, error: string) {
        state.loading = false;
        state.loaded = true;
        state.list = [];
        state.error = error;
    }
}