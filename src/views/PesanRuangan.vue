<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import InfoRuangMeeting from '../components/InfoRuangMeeting.vue';
import InfoRapat from '../components/InfoRapat.vue';
import { ref, computed } from 'vue';
import CircleProgress from 'vue3-circle-progress';
import 'vue3-circle-progress/dist/circle-progress.css';

const kapasitasRuangan = ref(0);
</script>

<template>
    <main>
        <Navbar />
        <div class="main-layout">
            <Sidebar class="sidebar" />
            <div class="content-container">
                <div class="content-head">
                    <router-link to="/" class="btn-back text-decoration-none"> <img src="../assets/back.svg" alt="back" /></router-link>
                    <div class="content-title">
                        <h1>Ruang Meeting</h1>
                        <div class="breadcrumb">
                            <router-link to="/" class="item-breadcrumb text-decoration-none">Ruang Meeting</router-link>
                            <router-link to="/pesan-ruangan" class="item-breadcrumb active text-decoration-none">&nbsp;> Pesan Ruangan</router-link>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <InfoRuangMeeting v-model="kapasitasRuangan" />
                    <hr />
                    <InfoRapat v-model:startTime="startTime" v-model:endTime="endTime" :kapasitasRuangan="kapasitasRuangan" />
                    <hr />
                    <div class="info-rmeet d-flex flex-row justify-content-end align-items-flex-end gap-2">
                        <button type="submit" class="btn text-danger btn-reset">Batal</button>
                        <button type="submit" class="btn btn-submit">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.main-layout {
    display: flex;
    height: 950px;
    width: 100%;
}

.content-container {
    width: 100%;
    height: 900px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 20px 20px;
}

.content-head {
    width: 100%;
    height: 100px;
    display: flex;
    /* flex-direction: row; */
    justify-content: start;
    align-items: start;
}

.content-title {
    display: flex;
    flex-direction: column;
    /* gap: 12px; */
}

h1 {
    font-weight: 700;
    font-size: 28px;
    /* line-height: 10px; */
    letter-spacing: 0.0025em;
    text-align: left;
}

.item-breadcrumb {
    font-weight: 400;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: 0.0025em;
    text-align: left;
    color: #9e9e9e;
}

.item-breadcrumb.active {
    font-weight: 400;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: 0.0025em;
    text-align: left;
    color: #4a8394;
}

.btn-back {
    width: 48px;
    height: 48px;
    align-self: flex-start;
    /* top: 0; */
}

.main-content {
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px #6a6a6a1a;
}

hr {
    margin-top: 36px;
    margin-bottom: 36px;
    border: 2px solid #c7c7c7;
}

.btn-submit {
    background-color: #4a8394;
    border: none;
    color: white;
}
</style>
