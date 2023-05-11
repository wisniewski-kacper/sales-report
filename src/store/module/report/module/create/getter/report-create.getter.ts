import {ReportCreateStateModel} from '../model';
import {ReportFormModel} from '@/common';
export const reportCreateGetter = {
    getForm: (state: ReportCreateStateModel): ReportFormModel|null => {
        return state.form;
    },

    getLoading: (state: ReportCreateStateModel): boolean => {
        return state.loading;
    },

    getLoaded: (state: ReportCreateStateModel): boolean => {
        return state.loaded;
    },

    getError: (state: ReportCreateStateModel): string|null => {
        return state.error
    }
}