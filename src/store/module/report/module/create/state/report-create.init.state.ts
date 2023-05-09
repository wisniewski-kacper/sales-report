import {ReportCreateStateModel} from '../model';

export const reportCreateInitState = (): ReportCreateStateModel => ({
    form: null,
    loaded: false,
    loading: false,
    error: null,
})