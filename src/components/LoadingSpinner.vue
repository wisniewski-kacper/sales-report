<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class LoadingSpinner extends Vue {

}
</script>

<template>
  <div class="spinner-border text-primary" role="status"></div>
</template>

<style scoped lang="scss">

</style>