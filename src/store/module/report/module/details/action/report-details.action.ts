import {ReportDetailsStateModel} from '../model';
import {ApiMockUtils, ProductDataModel, ReportDataModel} from '@/common';
import {ActionContext} from 'vuex';

export const reportDetailsAction = {
    async getReport(context: ActionContext<ReportDetailsStateModel, never>) {
        context.commit('setOnLoadingReportDetail')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnErrorReportDetail', 'Report not found');
        } catch (e) {
            context.commit('setOnErrorReportDetail', 'Report not found');
        }
    }
}

const report = (): ReportDataModel => {
    return {
        customerName: `Customer #${Math.random()}`,
        products: [
            product(13, 32.20),
            product(2, 62.20),
            product(40, 820.42),
            product(32, 826.21),
        ],
        totalAmount: 87,
        totalValue: 59798.52,
        currency: 'PLN'
    }
}

const product = (amount: number, price: number): ProductDataModel => {
    return {
        name: `Product #${Math.random()}`,
        amount,
        price
    }
}