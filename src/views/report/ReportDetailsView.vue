<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex';
import {LoadingSpinner, ReportProductListItem, MessageDisplay} from '@/components';

@Options({
    components: {MessageDisplay, LoadingSpinner, ReportProductListItem},
    data() {
        return {
            formatter: new Intl.NumberFormat('pl-PL', {style: 'currency', currency: 'PLN'}),
        }
    },
    computed: {
        ...mapGetters('report/details', {
            products: 'getReportProducts',
            report: 'getReport',
            loading: 'getLoading',
            loaded: 'getLoaded',
            error: 'getError'
        })
    },
    methods: {
        ...mapActions('report/details', {
            getReport: 'getReport'
        })
    },
    mounted() {
        this.getReport(this.$route.params.id)
    }
})
export default class ReportDetailsView extends Vue {
}
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-10 m-auto">
            <div class="card">
                <div class="card-header">
                    <div class="card-title">
                        <h2>Generate report</h2>
                    </div>
                </div>

                <div class="card-body">
                    <div class="m-auto d-flex justify-content-center align-content-center" v-if="loading">
                        <LoadingSpinner/>
                    </div>

                    <div class="table-responsive" v-if="loaded && !error">
                        <table class="table table-bordered table-sm table-striped">
                            <thead>

                            <tr>
                                <th colspan="4">
                                    {{ report.customerName }}
                                </th>
                            </tr>

                            <tr>
                                <th>Product</th>

                                <th>Amount</th>

                                <th>Price</th>

                                <th>Total</th>
                            </tr>

                            </thead>

                            <tbody>

                            <tr v-for="product in products" :key="product.name">
                                <ReportProductListItem :product-name="product.name"
                                                       :product-amount="product.amount"
                                                       :product-price="product.price"/>
                            </tr>

                            </tbody>

                            <tfoot>

                            <tr>
                                <th colspan="2">
                                    Total amount
                                </th>

                                <td colspan="2">
                                    {{ report.totalAmount }}
                                </td>
                            </tr>

                            <tr>
                                <th colspan="2">
                                    Total price
                                </th>

                                <td colspan="2">
                                    {{ formatter.format(report.totalValue) }}
                                </td>
                            </tr>

                            </tfoot>
                        </table>
                    </div>

                    <div class="m-auto" v-if="error">
                        <MessageDisplay :msg="error" type="danger"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>