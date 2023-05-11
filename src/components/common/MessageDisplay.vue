<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    props: {
        type: String,
        msg: String
    }
})
export default class MessageDisplay extends Vue {
    type!: string;
    msg!: string;
}
</script>

<template>
    <div :class="`alert alert-${type}`" role="alert">
        {{ msg }}
    </div>
</template>

<style scoped lang="scss">
</style>