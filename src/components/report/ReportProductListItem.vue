<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    data() {
        return {
            formatter: new Intl.NumberFormat('pl-PL', {style: 'currency', currency: 'PLN'}),
        }
    },
    props: {
        productName: String,
        productPrice: Number,
        productAmount: Number,
        currencyCode: String,
    }
})
export default class ReportProductListItem extends Vue {
    productName!: string
    productPrice!: string
    productAmount!: string
    currencyCode!: string
}
</script>

<template>
    <td>{{ productName }}</td>

    <td>{{ productAmount }}</td>

    <td>{{ formatter.format(productPrice) }}</td>

    <td>{{formatter.format(productAmount * productPrice) }}
    </td>
</template>

<style scoped lang="scss">
</style>
