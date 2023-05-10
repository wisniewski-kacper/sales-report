<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    data() {
        return {
            productArray: [
                {
                    id: null,
                    amount: null,
                }
            ]
        }
    },
    methods: {
        addProduct() {
            this.productArray.push({id: null, amount: null})
        },

        removeProduct(product: { id: number | null, amount: number | null }) {
            const index = this.productArray.indexOf(product)

            this.productArray.splice(index, 1)
        },

        submitForm() {
            console.log(this.productArray);
        }
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
                    <div class="row">
                        <div class="col-8">
                            <h3 class="card-subtitle">
                                Products
                            </h3>
                        </div>

                        <div class="col-4">
                            <h3 class="card-subtitle">
                                Amount
                            </h3>
                        </div>
                    </div>

                    <form @submit.prevent="submitForm">
                        <div class="row my-2" v-for="product in productArray" :key="product.id">
                            <div class="col-8">
                                <select class="form-control form-select" v-model="product.id" required>

                                </select>
                            </div>

                            <div class="col-2">
                                <input type="number" class="form-control" v-model="product.amount" required>
                            </div>

                            <div v-if="this.productArray.length > 1" class="col-2 d-flex justify-content-end">
                                <button type="button" class="btn btn-outline-danger" @click="removeProduct(product)">
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
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>