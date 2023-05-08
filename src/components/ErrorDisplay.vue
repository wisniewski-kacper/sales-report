<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    props: {
        msg: String
    }
})
export default class ErrorDisplay extends Vue {
    msg!: string;
}
</script>

<template>
    <div class="alert alert-danger" role="alert">
        {{ msg }}
    </div>
</template>

<style scoped lang="scss">
</style>