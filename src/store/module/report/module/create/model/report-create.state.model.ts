import {ReportFormModel} from '@/common';

export interface ReportCreateStateModel {
    form: ReportFormModel|null;
    loading: boolean;
    loaded: boolean;
    error: string|null;
}