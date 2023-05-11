<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {LoadingSpinner, MessageDisplay, ProductListItem} from '@/components';
import {mapActions, mapGetters} from 'vuex';

@Options({
    components: {ProductListItem, MessageDisplay, LoadingSpinner},
    computed: {
        ...mapGetters('product/list', {
            list: 'getList',
            error: 'getError',
            loading: 'getLoading',
            loaded: 'getLoaded',
        })
    },
    methods: {
        ...mapActions('product/list', {
            getList: 'getList'
        })
    },
    mounted() {
        this.getList()
    }
})
export default class ProductListView extends Vue {
}
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-10 m-auto">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex align-items-center justify-content-between align-content-between">
                        <h2 class="card-title">Product List</h2>

                        <router-link class="btn btn-outline-primary" to="/product/create">
                            <i class="bi bi-plus"></i>

                            New
                        </router-link>
                    </div>
                </div>

                <div class="card-body">
                    <div class="m-auto d-flex justify-content-center align-content-center" v-if="loading">
                        <LoadingSpinner/>
                    </div>

                    <div class="table-responsive" v-if="loaded && !error">
                        <table class="table table-bordered table-sm">
                            <thead>

                            <tr>
                                <th>ID</th>

                                <th>Name</th>

                                <th>Price</th>
                            </tr>

                            </thead>

                            <tbody>

                            <tr v-for="product in list" :key="product.id">
                                <ProductListItem
                                        :product-id="product.id"
                                        :product-name="product.name"
                                        :product-price="product.price"/>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="m-auto" v-if="error">
                        <MessageDisplay :msg="error" type="danger" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>