import {ProductListStateModel} from '@/store/module/product/module/list/model';
import {ActionContext} from 'vuex';
import {ApiMockUtils, ProductListItemModel} from '@/common';

export const productListAction = {
    async getList(context: ActionContext<ProductListStateModel, never>) {
        context.commit('setOnLoadingProductList');

        try {
            await ApiMockUtils.wait(1000);

            context.commit('setOnLoadedProductList', list());
        } catch (e) {
            context.commit('setOnErrorProductList', 'Unable to load product list')
        }
    }
}

const list = (): ProductListItemModel[] => {
    return [
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
        productListItem(),
    ]
}

const productListItem = (): ProductListItemModel => {
    const id = Math.floor(Math.random() * 100) + 1;
    return {
        id: id,
        name: `Product #${id}`,
        price: Math.floor(Math.random()*10000) / 100,
        currency: 'PLN'
    }
}