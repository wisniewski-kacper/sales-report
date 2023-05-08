<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    props: {
        reportId: Number,
        reportCustomer: String,
        reportFromDate: String,
        reportToDate: String,
    }
})
export default class ReportListItem extends Vue {
    reportId!: number;
    reportCustomer!: string;
    reportFromDate!: string;
    reportToDate!: string;
}
</script>

<template>
    <td>{{ reportId }}</td>

    <td>{{ reportCustomer }}</td>

    <td>{{ reportFromDate }} - {{ reportToDate }}</td>
</template>

<style scoped lang="scss">

</style>