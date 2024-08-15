<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
    <main>
        <Navbar />
        <div class="main-layout">
            <Sidebar />
            <div class="content-container">
                <div class="content">
                    <div class="content-title">
                        <h1>Ruang Meeting</h1>
                        <router-link to="/" class="item-breadcrumb active text-decoration-none">Ruang Meeting</router-link>
                    </div>
                    <router-link to="/pesan-ruangan" class="btn-tambah text-decoration-none"> <img src="../assets/plus.svg" alt="add" /> Pesan Ruangan</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.main-layout {
    display: flex;
    height: calc(100vh - 68px);
}

.content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    padding: 20px;
}

.content {
    width: 100%;
    height: 20%;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.content-title {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 10px;
    letter-spacing: 0.0025em;
    text-align: left;
}

.item-breadcrumb {
    font-weight: 400;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: 0.0025em;
    text-align: left;
    color: #4a8394;
}

.item-breadcrumb.active {
    font-weight: 400;
    font-size: 14px;

    letter-spacing: 0.0025em;
    text-align: left;
    color: #4a8394;
}
.btn-tambah {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #4a8394;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: 0.0025em;
    text-align: left;
    padding: 10px 20px;
    gap: 5px;
}
</style>
