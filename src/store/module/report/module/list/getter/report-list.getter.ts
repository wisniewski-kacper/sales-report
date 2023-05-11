import {ReportListStateModel} from '../model';
import {ReportListItem} from '@/components';
import {ReportListItemModel} from '@/common';

export const reportListGetter = {
    getList: (state: ReportListStateModel): ReportListItemModel[] => {
        return state.list;
    },

    getLoading: (state: ReportListStateModel): boolean => {
        return state.loading;
    },

    getLoaded: (state: ReportListStateModel): boolean => {
        return state.loaded;
    },

    getError: (state: ReportListStateModel): string|null => {
        return state.error;
    },
}