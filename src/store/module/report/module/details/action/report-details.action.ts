import {ReportDetailsStateModel} from '../model';
import {ApiMockUtils, ReportProductDataModel, ReportDataModel} from '@/common';
import {ActionContext} from 'vuex';

export const reportDetailsAction = {
    async getReport(context: ActionContext<ReportDetailsStateModel, never>, id: number) {
        context.commit('setOnLoadingReportDetail')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedReportDetail', report(id));
        } catch (e) {
            context.commit('setOnErrorReportDetail', 'Report not found');
        }
    }
}

const report = (id: number): ReportDataModel => {
    return {
        customerName: `Customer #${id}`,
        products: [
            product(13, 32.20),
            product(2, 62.20),
            product(40, 820.42),
            product(32, 826.21),
        ],
        totalAmount: 87,
        totalValue: 59798.52,
    }
}

const product = (amount: number, price: number): ReportProductDataModel => {
    return {
        name: `Product #${Math.random()}`,
        amount,
        price
    }
}