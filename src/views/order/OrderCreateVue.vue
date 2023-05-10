<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex';
import {LoadingSpinner, MessageDisplay} from '@/components';
import {OrderProductDataModel} from '@/common';

@Options({
    components: {LoadingSpinner, MessageDisplay},
    data() {
        return {
            customerId: null,
            productArray: [
                {
                    id: null,
                    amount: 0,
                }
            ]
        }
    },
    computed: {
        ...mapGetters('customer', {
            customerList: 'getList',
            customerLoading: 'getLoading',
            customerLoaded: 'getLoaded',
            customerError: 'getError',
        }),

        ...mapGetters('order', {
            products: 'getProducts',
            loading: 'getGetLoading',
            loaded: 'getGetLoaded',
            getError: 'getGetError',
            form: 'getForm',
            creating: 'getSubmitLoading',
            created: 'getSubmitLoaded',
            createError: 'getSubmitError'
        })
    },
    methods: {
        ...mapActions('customer', {
            getCustomerList: 'getList'
        }),

        ...mapActions('order', {
            getProductList: 'getProductList',
            submit: 'submitForm'
        }),

        addProduct() {
            this.productArray.push({id: null, amount: null});
        },

        removeProduct(product: { id: number | null, amount: number | null }) {
            const index = this.productArray.indexOf(product);

            this.productArray.splice(index, 1);
        },

        submitForm() {
            this.submit({
                customerId: this.customerId,
                products: this.productArray
            })
        }
    },
    mounted() {
        this.getCustomerList();
        this.getProductList();
    }
})
export default class OrderCreateVue extends Vue {

}
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-10 m-auto">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex align-items-center justify-content-between align-content-between">
                        <h2 class="card-title">Product List</h2>

                        <button class="btn btn-outline-primary" @click="addProduct">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="m-auto d-flex justify-content-center align-content-center"
                         v-if="loading || customerLoading">
                        <LoadingSpinner/>
                    </div>

                    <div class="m-auto" v-if="created && !createError">
                        <MessageDisplay
                                msg="Order created"
                                type="success"/>
                    </div>

                    <div class="m-auto" v-if="createError">
                        <MessageDisplay
                                :msg="createError"
                                type="success"/>
                    </div>

                    <form @submit.prevent="submitForm" v-if="loaded && !getError && customerLoaded && !customerError">
                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="form-group">
                                    <label class="form-label">Select customer</label>

                                    <select class="form-control form-select" v-model="customerId">
                                        <option v-for="customer in customerList" :key="customer.id"
                                                :value="customer.id">
                                            {{ customer.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-8">
                                <span class="form-label">
                                    Products
                                </span>
                            </div>

                            <div class="col-4">
                                <span class="form-label">
                                    Amount
                                </span>
                            </div>
                        </div>

                        <div class="row my-2" v-for="productModel in productArray" :key="productModel.id">
                            <div class="col-8">
                                <select class="form-control form-select"
                                        v-model="productModel.id"
                                        required>
                                    <option v-for="product in products" :key="product.id" :value="product.id">
                                        {{ product.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="col-2">
                                <input type="number" class="form-control" v-model="productModel.amount" required>
                            </div>

                            <div v-if="this.productArray.length > 1" class="col-2 d-flex justify-content-end">
                                <button type="button" class="btn btn-outline-danger"
                                        @click="removeProduct(productModel)">
                                    <i class="bi bi-dash"></i>
                                </button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 d-flex justify-content-between align-content-center align-items-center">
                                <router-link class="btn btn-outline-secondary" to="/">
                                    <i class="bi bi-arrow-left"></i>

                                    Cancel
                                </router-link>

                                <button class="btn btn-success" type="submit">
                                    <i class="bi bi-check-lg"></i>

                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>

                    <div class="m-auto" v-if="getError || customerError">
                        <MessageDisplay
                                :msg="getError ? getError : customerError"
                                type="success"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>