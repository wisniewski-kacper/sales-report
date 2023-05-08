import {ReportListStateModel} from '../model';

export const reportListInitState = (): ReportListStateModel => ({
    list: [],
    loaded: false,
    loading: false,
    error: null
})