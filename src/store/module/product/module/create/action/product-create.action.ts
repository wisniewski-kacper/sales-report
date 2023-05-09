import {ActionContext} from 'vuex';
import {ProductCreateStateModel} from '../model';
import {ApiMockUtils, ProductFormModel} from '@/common';

export const productCreateAction = {
    async createProduct(context: ActionContext<ProductCreateStateModel, never>, form: ProductFormModel) {
        context.commit('setOnLoadingProductCreate')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedProductCreate', form);
        } catch (e) {
            context.commit('setOnErrorProductCreate', 'Product cannot be created')
        }
    },

    clearStore(context: ActionContext<ProductCreateStateModel, never>) {
        context.commit('setOnOpenProductCreate')
    }
}