<script setup></script>

<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <router-link to="/dashboard" class="sidebar-btn">
                <img src="../assets/home.svg" alt="home" />
            </router-link>
            <router-link to="/" class="sidebar-btn active">
                <img src="../assets/file.svg" alt="file" />
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    /* position: relative; */
    width: 68px;
    background-color: #ffffff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 0px 20px 0px #6a6a6a1a;
}

.sidebar-menu {
    margin-top: 10px;
}

.sidebar-btn {
    width: 48px;
    height: 48px;
    background-color: transparent;
    color: #4a8394;
    border: none;
    border-radius: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

.active {
    background-color: #4a8394;
}
</style>
