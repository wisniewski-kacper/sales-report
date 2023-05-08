<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {LoadingSpinner, ReportListItem, ErrorDisplay} from '@/components';
import {mapActions, mapGetters} from 'vuex';

@Options({
    components: {ErrorDisplay, LoadingSpinner, ReportListItem},
    computed: {
        ...mapGetters('report/list', {
            list: 'getList',
            error: 'getError',
            loading: 'getLoading',
            loaded: 'getLoaded',
        })
    },
    methods: {
        ...mapActions('report/list', {
            getList: 'getList'
        })
    },
    mounted() {
        this.getList()
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
                    <div class="m-auto d-flex justify-content-center align-content-center" v-if="loading">
                        <LoadingSpinner/>
                    </div>

                    <div class="table-responsive" v-if="loaded && !error">
                        <table class="table table-bordered table-sm">
                            <thead>

                            <tr>
                                <th>ID</th>

                                <th>Customer</th>

                                <th>Date range</th>
                            </tr>

                            </thead>

                            <tbody>

                            <tr v-for="report in list" :key="report.id">
                                <ReportListItem
                                        :report-id="report.id"
                                        :report-customer="report.customer"
                                        :report-from-date="report.fromDate.toLocaleDateString()"
                                        :report-to-date="report.toDate.toLocaleDateString()"/>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="m-auto" v-if="error">
                        <ErrorDisplay :msg="error" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>