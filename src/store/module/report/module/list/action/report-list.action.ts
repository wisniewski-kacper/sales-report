import {ReportListStateModel} from '../model';
import {ApiMockUtils, ReportListItemModel} from '@/common';
import {ActionContext} from 'vuex';

export const reportListAction = {
    async getList(context: ActionContext<ReportListStateModel, never>) {
        context.commit('setOnLoadingReportList')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedReportList', list());
        } catch (e) {
            context.commit('setOnErrorReportList', 'Unable to load report list')
        }
    }
}

const list = (): ReportListItemModel[] => {
    return [
        reportListItem(),
        reportListItem(),
        reportListItem(),
        reportListItem(),
    ]
}

const reportListItem = (): ReportListItemModel => {
    const id = Math.floor(Math.random() * 100) + 1;
    return {
        id: id,
        customer: `Customer #${id}`,
        fromDate: new Date(),
        toDate: new Date()
    }
}