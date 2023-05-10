<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex';
import {LoadingSpinner, MessageDisplay} from '@/components';

@Options({
    components: {MessageDisplay, LoadingSpinner},
    data() {
        return {
            productName: null,
            formatter: new Intl.NumberFormat('pl-PL', {style: 'currency', currency: 'PLN'}),
            price: 0,
        }
    },
    computed: {
        ...mapGetters('product/edit', {
            product: 'getProduct',
            loading: 'getGetLoading',
            loaded: 'getGetLoaded',
            getError: 'getGetError',
            form: 'getForm',
            creating: 'getSubmitLoading',
            created: 'getSubmitLoaded',
            createError: 'getSubmitError'
        }),
    },
    methods: {
        ...mapActions('product/edit', {
            getProduct: 'getProduct',
            createProduct: 'editProduct',
            clearStore: 'clearStore',
        }),

        submitForm() {
            this.createProduct({
                name: this.productName,
                price: Number(this.price.toString().replace(/[^0-9.-]+/g,"")) / 10
            })
        },

        changePrice() {
            this.price = this.formatter.format(Number.parseFloat(this.price.toString().replace(',', '.')));
        }
    },
    mounted() {
        this.clearStore();
        this.getProduct(this.$route.params.id).then(() => {
            this.productName = this.product.name;
            this.price = this.formatter.format(Number(this.product.price));
        });


    }
})
export default class ProductEditView extends Vue {
}
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-10 m-auto">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Edit report</h2>
                </div>

                <div class="card-body">
                    <div class="m-auto d-flex justify-content-center align-content-center" v-if="loading">
                        <LoadingSpinner/>
                    </div>

                    <div class="m-auto" v-if="created && !createError">
                        <MessageDisplay
                                :msg="`Product edited`"
                                type="success"/>
                    </div>

                    <form @submit.prevent="submitForm" v-if="loaded">
                        <div class="form-group mb-2">
                            <label class="form-label" for="productName">
                                Enter product name
                            </label>

                            <input type="text" id="productName" class="form-control" v-model="productName" required/>
                        </div>

                        <div class="form-group mb-2">
                            <label class="form-label" for="productPrice">
                                Enter product price
                            </label>

                            <input id="productPrice"
                                   class="form-control"
                                   type="text"
                                   @change="changePrice"
                                   v-model="price"/>
                        </div>

                        <div class="mt-3 d-flex justify-content-between align-items-center align-content-center">
                            <router-link class="btn btn-outline-secondary" to="/product/list">
                                <i class="bi bi-arrow-left"></i>

                                Cancel
                            </router-link>

                            <button :disabled="creating"
                                    :class="creating ? 'btn btn-outline-success' : 'btn btn-success'" type="submit">
                                <span v-if="!creating">
                                    <i class="bi bi-check-lg"></i>

                                    Submit
                                </span>

                                <span class="d-flex justify-content-between align-content-center align-items-center"
                                      v-if="creating">
                                    Creating...

                                    <span class="spinner-border spinner-border-sm text-success"></span>
                                </span>
                            </button>
                        </div>
                    </form>

                    <div class="m-auto" v-if="getError">
                        <MessageDisplay
                            :msg="getError"
                            type="danger"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>