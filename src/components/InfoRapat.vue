<script setup>
import WaktuRapat from './WaktuRapat.vue';
import { ref, onMounted, watch, computed, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
    kapasitasRuangan: Number,
});

const consumptions = ref([]);
const selectedConsumptions = ref([]);
const jumlahPeserta = ref(0);
const selectedCapacity = ref(0);
const errorPeserta = ref('');

onMounted(async () => {
    try {
        const consumptionResponse = await axios.get('https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi');
        consumptions.value = consumptionResponse.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

watch([jumlahPeserta, props.kapasitasRuangan], () => {
    if (jumlahPeserta.value > props.kapasitasRuangan) {
        errorPeserta.value = 'Jumlah peserta tidak boleh melebihi kapasitas ruangan.';
    } else {
        errorPeserta.value = '';
    }
});

const startTime = ref('');
const endTime = ref('');

watch([startTime, endTime], ([newStartTime, newEndTime]) => {
    const consumptionsToCheck = [];

    if (newStartTime && newEndTime) {
        const startHour = parseInt(newStartTime.split(':')[0], 10);
        const endHour = parseInt(newEndTime.split(':')[0], 10);

        if (startHour < 11 && endHour <= 11) {
            consumptionsToCheck.push('1');
        }
        if (startHour < 11 && endHour > 11 && endHour <= 14) {
            consumptionsToCheck.push('1');
            consumptionsToCheck.push('2');
        }
        if (startHour < 11 && endHour >= 14) {
            consumptionsToCheck.push('1');
            consumptionsToCheck.push('2');
            consumptionsToCheck.push('3');
        }
        if (startHour >= 11 && endHour <= 14) {
            consumptionsToCheck.push('2');
        }
        if (startHour >= 11 && startHour < 14 && endHour > 14) {
            consumptionsToCheck.push('2');
            consumptionsToCheck.push('3');
        }
        if (startHour >= 14 && endHour > 14) {
            consumptionsToCheck.push('3');
        }
    }

    selectedConsumptions.value = consumptionsToCheck;
});

const totalNominal = computed(() => {
    return consumptions.value.reduce((total, item) => {
        if (selectedConsumptions.value.includes(item.id)) {
            return total + jumlahPeserta.value * item.maxPrice;
        }
        return total;
    }, 0);
});

const updateJumlahPeserta = (event) => {
    jumlahPeserta.value = parseInt(event.target.value, 10) || 0;
};

const formatNumber = (number) => {
    return new Intl.NumberFormat('id-ID').format(number);
};
</script>

<template>
    <h5>Informasi Rapat</h5>
    <WaktuRapat v-model:startTime="startTime" v-model:endTime="endTime" />
    <div class="info-rmeet d-flex flex-row mt-3">
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Jumlah Peserta</label>
            <input type="number" class="form-control form-input" :class="{ 'is-invalid': errorPeserta }" id="jumlah_peserta" @input="updateJumlahPeserta" />
            <small v-if="errorPeserta" class="text-danger">{{ errorPeserta }}</small>
        </div>
    </div>
    <div class="info-rmeet d-flex flex-column mt-3">
        <label for="exampleFormControlInput1" class="form-label">Jenis Konsumsi</label>
        <div v-for="item in consumptions" :key="item.id" class="form-check">
            <input class="form-check-input" type="checkbox" :value="item.id" v-model="selectedConsumptions" readonly />
            <label class="form-check-label" :for="item.id">{{ item.name }}</label>
        </div>
    </div>
    <div class="info-rmeet d-flex flex-row mt-3">
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Nominal Konsumsi</label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Rp.</span>
                <input type="text" class="form-control" :value="formatNumber(totalNominal)" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" readonly />
            </div>
        </div>
    </div>
</template>

<style scoped>
.is-invalid {
    border-color: #dc3545; /* Warna merah untuk border */
}

.form-input {
    transition: border-color 0.3s ease;
}
</style>
