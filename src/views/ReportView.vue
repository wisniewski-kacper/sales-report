<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ReportListItem from "@/components/ReportListItem.vue";

@Options({
    components: {ReportListItem},
    data() {
        return {
            products: [
                {
                    name: 'Product #123',
                    amount: 12,
                    price: 3.20,
                    currency: 'PLN',
                },
                {
                    name: 'Product #321',
                    amount: 3,
                    price: 22.40,
                    currency: 'PLN',
                },
                {
                    name: 'Product #231',
                    amount: 4,
                    price: 13.20,
                    currency: 'PLN',
                },
            ]
        }
    }
})
export default class ReportView extends Vue {

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
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm table-striped">
                            <thead>

                            <tr>
                                <th colspan="4">
                                    Customer name
                                </th>
                            </tr>

                            <tr>
                                <th>Product</th>

                                <th>Amount</th>

                                <th>Price</th>

                                <th>product total</th>
                            </tr>

                            </thead>

                            <tbody>

                            <tr v-for="product in products" :key="product.name">
                                <ReportListItem :product-name="product.name"
                                                :product-amount="product.amount"
                                                :product-price="product.price"
                                                :currency-code="product.currency"/>
                            </tr>

                            <tr>
                                <th colspan="2">
                                    Total amount
                                </th>

                                <td colspan="2">
                                    3
                                </td>
                            </tr>

                            <tr>
                                <th colspan="2">
                                    Total price
                                </th>

                                <td colspan="2">
                                    {{ 3 * 3.99 }} PLN
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>