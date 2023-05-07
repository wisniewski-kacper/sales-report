import {ReportStateModel} from '../model';

export const reportInitState = (): ReportStateModel => ({
    report: null,
    loading: false,
    loaded: false,
    error: null
})