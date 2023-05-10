import {
    productCreateModule,
    productListModule,
    productEditModule
} from './module';

export const productModule = {
    namespaced: true,
    modules: {
        list: productListModule,
        create: productCreateModule,
        edit: productEditModule
    }
}