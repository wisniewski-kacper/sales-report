import {productCreateModule, productListModule} from './module';

export const productModule = {
    namespaced: true,
    modules: {
        list: productListModule,
        create: productCreateModule
    }
}