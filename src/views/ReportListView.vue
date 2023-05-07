<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {ReportListItem} from '@/components';

@Options({
    components: {ReportListItem},
    data() {
        return {
            reports: [
                {
                    id: 123,
                    customer: 'Customer #123',
                    fromDate: new Date('01.01.2023'),
                    toDate: new Date('01.31.2023')
                },
                {
                    id: 321,
                    customer: 'Customer #123',
                    fromDate: new Date('02.01.2023'),
                    toDate: new Date('01.28.2023')
                },
                {
                    id: 231,
                    customer: 'Customer #123',
                    fromDate: new Date('03.01.2023'),
                    toDate: new Date('03.31.2023')
                },
            ]
        }
    }
})
export default class ReportListView extends Vue {
}
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-10 m-auto">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex align-items-center justify-content-between align-content-between">
                        <h2 class="card-title">Report List</h2>

                        <button class="btn btn-outline-primary">
                            <i class="bi bi-plus"></i>

                            New
                        </button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm">
                            <thead>

                            <tr>
                                <th>ID</th>

                                <th>Customer</th>

                                <th>Date range</th>
                            </tr>

                            </thead>

                            <tbody>

                            <tr v-for="report in reports" :key="report.id">
                                <ReportListItem
                                        :report-id="report.id"
                                        :report-customer="report.customer"
                                        :report-from-date="report.fromDate.toLocaleDateString()"
                                        :report-to-date="report.toDate.toLocaleDateString()"/>
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