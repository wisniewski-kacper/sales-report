import {ReportDataModel} from '@/common';

export interface ReportDetailsStateModel {
    report: ReportDataModel|null;
    loading: boolean;
    loaded: boolean;
    error: string|null;
}