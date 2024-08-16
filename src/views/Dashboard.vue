<script setup>
import Navbar from '../components/dashboard/DashboardNavbar.vue';
import axios from 'axios';
import CircleProgress from 'vue3-circle-progress';
import 'vue3-circle-progress/dist/circle-progress.css';
import { onMounted, ref, computed } from 'vue';

const summaries = ref([]);
// const periods = ref([]);
const selectedPeriod = ref('');

onMounted(async () => {
    try {
        selectedPeriod.value = 'Jan-2024';
        const response = await axios.get('https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/summaryBookings');
        summaries.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const filteredSummaries = computed(() => {
    if (selectedPeriod.value) {
        return summaries.value.filter((summary) => summary.period === selectedPeriod.value);
    }
    return summaries.value;
});

const getFormattedTotalPrice = (detail) => {
    const total = detail.totalConsumption.reduce((acc, item) => acc + Number(item.totalPrice), 0);
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(total);
};
</script>

<template>
    <Navbar />
    <div class="content">
        <div class="info-rmeet-item ms-3">
            <select class="form-select" v-model="selectedPeriod">
                <option value="Jan-2024">Januari 2024</option>
                <option value="Feb-2024">Februari 2024</option>
            </select>
        </div>
        <div class="row">
            <div v-for="summary in filteredSummaries" :key="summary.id" class="col-lg-4 mb-4">
                <div class="cards">
                    <div class="card-body d-flex flex-row gap-4 justify-content-space-between">
                        <div v-for="office in summary.data" :key="office.officeName">
                            <div class="d-flex flex-row align-items-center justify-content-start">
                                <img class="mb-2 me-2" src="../assets/generation.svg" alt="logo" />
                                <h5>{{ office.officeName }}</h5>
                            </div>
                            <div v-for="detail in office.detailSummary" :key="detail.roomName" class="d-flex flex-column mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">{{ detail.roomName }}</h5>
                                        <div class="d-flex flex-row justify-content-between mb-3">
                                            <div class="d-flex flex-column">
                                                <p class="card-text">Persentase Pemakaian</p>
                                                <h3>{{ ((detail.averageOccupancyPerMonth / detail.capacity) * 100).toFixed(2) }} %</h3>
                                            </div>
                                            <CircleProgress :percent="(detail.averageOccupancyPerMonth / detail.capacity) * 100" :size="60" :border-width="10" :border-bg-width="10" :color="'#288FEB'" :empty-color="'#D9D9D9'" />
                                        </div>
                                        <p class="card-text">Nominal Konsumsi</p>
                                        <div>
                                            <h3>{{ getFormattedTotalPrice(detail) }}</h3>
                                        </div>
                                        <div class="d-flex flex-row align-items-center justify-content-between" v-for="consumption in detail.totalConsumption" :key="consumption.name">
                                            <div class="konsumsi">{{ consumption.name }}</div>
                                            <div class="d-flex flex-column align-items-start ms-3">
                                                {{ consumption.totalPackage }}
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" :style="{ width: (consumption.totalPackage / Math.max(...detail.totalConsumption.map((item) => item.totalPackage))) * 100 + '%' }">
                                                        {{ consumption.totalPackage }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.content {
    width: 100%;
    padding: 20px;
}
.cards {
    width: 92rem;
    border-radius: 8px;
}

h5 {
    color: #868e96;
}

p {
    font-size: 12px;
}

.konsumsi {
    font-size: 14px;
    font-weight: bold;
}

.card {
    border: none;
    height: 350px;
    border-radius: 8px;
    background-color: #f2f2f2;
}

.card-text {
    line-height: 0;
    font-size: 14px;
    color: #625b71;
}
.card-body {
    width: 270px;
    height: 100%;
    padding: 1.25rem;
}

.progress {
    width: 100px;
    max-width: 500px;
    background-color: #e9ecef;
    border-radius: 5px;
    overflow: hidden;
}

.progress-bar {
    background-color: #288feb;
    height: 20px;
    line-height: 20px;
    color: #288feb;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
}
</style>
