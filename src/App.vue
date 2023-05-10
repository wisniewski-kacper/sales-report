<template>
    <div class="container py-2">
        <div class="row">
            <div class="col-10 mx-auto mb-5">
                <div class="card px-4">
                    <nav class="navbar navbar-expand navbar-light">
                        <span class="navbar-brand">Sales Report</span>

                        <ul class="navbar-nav d-flex align-items-center align-content-center">
                            <li class="{{this.$route.name.includes('report') ? 'nav-item active': 'nav-item'}}">
                                <router-link class="nav-link" to="/report/list">Report</router-link>
                            </li>

                            <li class="{{this.$route.name.includes('product') ? 'nav-item active': 'nav-item'}}">
                                <router-link class="nav-link" to="/product/list">Product</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="btn btn-outline-primary" to="/order">
                                    <i class="bi bi-plus"></i>

                                    Order
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <router-view/>
    </div>
</template>

<style lang="scss">
</style>
<script setup lang="ts">
</script>