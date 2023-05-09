<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    data() {
        return {
            formatter: new Intl.NumberFormat('pl-PL', {style: 'currency', currency: 'PLN'}),
        }
    },
    props: {
        productId: Number,
        productName: String,
        productPrice: Number,
        currencyCode: String,
    }
})
export default class ProductListItem extends Vue {
    productId!: string
    productName!: string
    productPrice!: string
    currencyCode!: string
}
</script>

<template>
    <td>{{ productId }}</td>

    <td>{{ productName }}</td>

    <td>{{ formatter.format(productPrice) }}</td>
</template>

<style scoped lang="scss">
</style>
