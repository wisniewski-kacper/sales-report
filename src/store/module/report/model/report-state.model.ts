import {ReportDataModel} from '@/common';

export interface ReportStateModel {
    report: ReportDataModel|null;
    loading: boolean;
    loaded: boolean;
    error: string|null;
}