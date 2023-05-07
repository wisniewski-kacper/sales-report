<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
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

    <td>{{ new Intl.NumberFormat('en-US', {style: 'currency', currency: currencyCode}).format(productPrice) }}</td>

    <td>{{ new Intl.NumberFormat('en-US', {style: 'currency', currency: currencyCode}).format(productAmount * productPrice) }}</td>
</template>

<style scoped lang="scss">
</style>
