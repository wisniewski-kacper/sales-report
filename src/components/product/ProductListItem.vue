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
    }
})
export default class ProductListItem extends Vue {
    productId!: string
    productName!: string
    productPrice!: string
}
</script>

<template>
    <td>{{ productId }}</td>

    <td>
        <router-link class="link-primary text-decoration-none" :to="`/product/edit/${productId}`">
            {{ productName }}
        </router-link>
    </td>

    <td>{{ formatter.format(productPrice) }}</td>
</template>

<style scoped lang="scss">
</style>
