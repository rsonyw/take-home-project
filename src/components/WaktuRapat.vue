<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    startTime: String,
    endTime: String,
});

const emit = defineEmits(['update:startTime', 'update:endTime']);

const startTime = ref(props.startTime);
const endTime = ref(props.endTime);

const startTimes = ref([]);
const endTimes = ref([]);
const errorTime = ref('');

const generateTimeOptions = () => {
    const startHour = 8;
    const endHour = 23;
    const interval = 30;

    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            startTimes.value.push(timeString);
            endTimes.value.push(timeString);
        }
    }
};

generateTimeOptions();

watch(startTime, (newStartTime) => {
    if (endTime.value && endTime.value <= newStartTime) {
        errorTime.value = 'Waktu selesai tidak boleh lebih kecil dari waktu mulai';
    } else {
        errorTime.value = '';
    }
    emit('update:startTime', newStartTime);
});

watch(endTime, (newEndTime) => {
    if (newEndTime && newEndTime <= startTime.value) {
        errorTime.value = 'Waktu selesai tidak boleh lebih kecil dari waktu mulai';
    } else {
        errorTime.value = '';
    }
    emit('update:endTime', newEndTime);
});

//validasi tanggal
const selectedDate = ref('');
const errorDate = ref('');

const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format YYYY-MM-DD
};

watch(selectedDate, (newDate) => {
    if (newDate && newDate < getToday()) {
        errorDate.value = 'Tidak bisa memilih tanggal sebelum hari ini.';
    } else {
        errorDate.value = '';
    }
});
</script>

<template>
    <div class="info-rmeet d-flex flex-row gap-3 mt-3">
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Tanggal Rapat<span class="text-danger">*</span></label>
            <div class="d-flex flex-column">
                <div class="input-group">
                    <span class="input-group-text bg-transparent" id="basic-addon1"><img src="../assets/calendar.svg" alt="calendar" /></span>
                    <input type="date" class="form-control" :class="{ 'is-invalid': errorDate }" placeholder="" aria-label="tanggal" aria-describedby="basic-addon1" v-model="selectedDate" @focus="this.type = 'date'" />
                </div>
                <small v-if="errorDate" class="text-danger">{{ errorDate }}</small>
            </div>
        </div>
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Waktu Mulai</label>
            <select class="form-select" aria-label="Default select example" v-model="startTime">
                <option value="" selected>Pilih Waktu Mulai</option>
                <option v-for="time in startTimes" :key="time" :value="time">{{ time }}</option>
            </select>
        </div>
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Waktu Selesai</label>
            <select class="form-select" :class="{ 'is-invalid': errorTime }" aria-label="Default select example" v-model="endTime">
                <option value="" selected>Pilih Waktu Selesai</option>
                <option v-for="time in endTimes" :key="time" :value="time">{{ time }}</option>
            </select>
            <small v-if="errorTime" class="text-danger">{{ errorTime }}</small>
        </div>
    </div>
</template>

<style scoped>
.input-group input {
    width: 230px;
}

.waktu {
    width: 268px;
}

.is-invalid {
    border-color: #dc3545; /* Warna merah untuk border */
}

.form-select {
    transition: border-color 0.3s ease;
}
</style>
