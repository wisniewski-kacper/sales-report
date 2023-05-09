import {ActionContext} from 'vuex';
import {ReportCreateStateModel} from '../model';
import {ApiMockUtils, ReportFormModel} from '@/common';

export const reportCreateAction = {
    async createReport(context: ActionContext<ReportCreateStateModel, never>, form: ReportFormModel) {
        context.commit('setOnLoadingReportCreate')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedReportCreate', form);
        } catch (e) {
            context.commit('setOnErrorReportCreate', 'Report cannot be created')
        }
    },

    clearStore(context: ActionContext<ReportCreateStateModel, never>) {
        context.commit('setOnOpenReportCreate')
    }
}