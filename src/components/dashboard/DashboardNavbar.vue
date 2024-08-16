<script setup></script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <div class="nav-left ms-3">
                <a class="navbar-brand" href="#">
                    <img src="../../assets/gear.svg" alt="Logo" class="d-inline-block align-text-top" />
                </a>
                <span class="navbar-brand navbar-text">DASHBOARD</span>
            </div>
            <div class="nav-right">
                <router-link to="/" class="navbar-btn">
                    <img src="../../assets/right.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2" />
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: relative;
    height: 68px;
    padding: 0px 8px;
    background-color: white;
    /* border-bottom: 1px solid #ecf0f2; */
}

.navbar-text {
    color: BLACK;
    font-weight: 700;
    line-height: 21.79px;
    letter-spacing: 0.0025em;
    text-align: left;
}
.container-fluid {
    display: flex;
    justify-content: space-between;
}

.nav-left {
    display: flex;
    align-items: center;
}

.nav-right {
    display: flex;
    align-items: center;
}

.toggle-dropdown {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    color: white;
}
</style>
