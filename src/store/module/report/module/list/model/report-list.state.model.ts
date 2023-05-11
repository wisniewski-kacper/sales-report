import {ReportListItemModel} from '@/common';

export interface ReportListStateModel {
    list: ReportListItemModel[];
    loaded: boolean;
    loading: boolean;
    error: string|null;
}