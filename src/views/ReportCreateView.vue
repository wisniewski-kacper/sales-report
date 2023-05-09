<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex';
import {LoadingSpinner, MessageDisplay} from '@/components';
import VueDatePicker from '@vuepic/vue-datepicker';

@Options({
    components: {MessageDisplay, VueDatePicker, LoadingSpinner},
    data() {
        return {
            customerId: null,
            fromDate: null,
            toDate: null,
        }
    },
    computed: {
        ...mapGetters('customer', {
            list: 'getList',
            loading: 'getLoading',
            loaded: 'getLoaded',
            error: 'getError'
        }),
        ...mapGetters('report/create', {
            form: 'getForm',
            creating: 'getLoading',
            created: 'getLoaded',
            createError: 'getError'
        }),
    },
    methods: {
        ...mapActions('customer', {
            getList: 'getList'
        }),

        ...mapActions('report/create', {
            createReport: 'createReport'
        }),

        submitForm() {
            this.createReport({
                customerId: this.customerId,
                fromDate: this.fromDate,
                toDate: this.toDate
            })
        }
    },
    mounted() {
        this.getList();
    }
})
export default class ReportCreateView extends Vue {
}
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-10 m-auto">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Create report</h2>
                </div>

                <div class="card-body">
                    <div class="m-auto d-flex justify-content-center align-content-center" v-if="loading">
                        <LoadingSpinner/>
                    </div>

                    <div class="m-auto" v-if="created && !createError">
                        <MessageDisplay
                                :msg="`Report created for ${list.find(e => e.id = form.customerId).name} on ${fromDate} - ${toDate}`"
                                type="success"/>
                    </div>

                    <form @submit.prevent="submitForm" v-if="loaded && !error">
                        <div class="form-group mb-2">
                            <label class="form-label" for="customer">
                                Select customer
                            </label>

                            <select id="customer" class="form-control form-select" v-model="customerId" required>
                                <option v-for="customer in list" :key="customer.id" :value="customer.id">
                                    {{ customer.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group mb-2">
                            <label class="form-label" for="fromDate">
                                Pick from date
                            </label>

                            <VueDatePicker id="fromDate" v-model="fromDate" model-type="format" :enable-time-picker="false" required/>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="toDate">
                                Pick to date
                            </label>

                            <VueDatePicker id="toDate" v-model="toDate" model-type="format" :enable-time-picker="false" required/>
                        </div>

                        <div class="mt-3 d-flex justify-content-between align-items-center align-content-center">
                            <router-link class="btn btn-outline-secondary" to="/list">
                                <i class="bi bi-arrow-left"></i>

                                Cancel
                            </router-link>

                            <button :disabled="creating"
                                    :class="creating ? 'btn btn-outline-success' : 'btn btn-success'" type="submit">
                                <span v-if="!creating">
                                    <i class="bi bi-check-lg"></i>

                                    Submit
                                </span>

                                <span class="d-flex justify-content-between align-content-center align-items-center"
                                      v-if="creating">
                                    Creating...

                                    <span class="spinner-border spinner-border-sm text-success"></span>
                                </span>
                            </button>
                        </div>
                    </form>

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