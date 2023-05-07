<template>
    <div class="row">
        <div class="col-10 mx-auto mb-5">
            <div class="card px-4">
                <nav class="navbar navbar-expand navbar-light">
                    <span class="navbar-brand">Sales Report</span>

                    <ul class="navbar-nav">
                        <li class="{{this.$route.name === 'report' ? 'nav-item active': 'nav-item'}}">
                            <router-link class="nav-link" to="/report">Report</router-link>
                        </li>

                        <li class="{{this.$route.name === 'list' ? 'nav-item active': 'nav-item'}}">
                            <router-link class="nav-link" to="/list">List</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<style lang="scss">
</style>
<script setup lang="ts">
</script>