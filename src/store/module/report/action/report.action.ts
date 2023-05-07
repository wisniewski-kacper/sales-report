import {ReportStateModel} from '../model';
import {ApiMockUtils, ProductDataModel, ReportDataModel} from '@/common';
import {ActionContext} from "vuex";

export const reportAction = {
    async getReport(context: ActionContext<ReportStateModel, never>) {
        context.state.loading = true;

        try {
            await ApiMockUtils.wait(100)

            context.state.report = report();
        } catch (e) {
            context.state.error = 'There has been an error';
        } finally {
            context.state.loading = false;
            context.state.loaded = true;
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