import {ReportDetailsStateModel} from '../model';

export const reportDetailsInitState = (): ReportDetailsStateModel => ({
    report: null,
    loading: false,
    loaded: false,
    error: null
})