<script setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import axios from 'axios';

const props = defineProps({
    modelValue: Number,
});

const emit = defineEmits(['update:modelValue']);

const units = ref([]);
const meetingRooms = ref([]);
const selectedUnit = ref('');
const filteredMeetingRooms = ref([]);
const selectedMeetingRoom = ref('');

onMounted(async () => {
    try {
        const unitResponse = await axios.get('https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterOffice');
        units.value = unitResponse.data;

        const meetingRoomResponse = await axios.get('https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms');
        meetingRooms.value = meetingRoomResponse.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

watch(selectedUnit, (newUnitId) => {
    if (newUnitId) {
        filteredMeetingRooms.value = meetingRooms.value.filter((room) => room.officeId === newUnitId);
    } else {
        filteredMeetingRooms.value = [];
        selectedMeetingRoom.value = '';
    }
});

watch(selectedMeetingRoom, (newMeetingRoomId) => {
    const selectedRoom = meetingRooms.value.find((room) => room.id === newMeetingRoomId);
    const selectedCapacity = selectedRoom ? selectedRoom.capacity : 0;
    emit('update:modelValue', selectedCapacity);
});
</script>

<template>
    <h5>Informasi Ruang Meeting</h5>
    <div class="info-rmeet d-flex flex-row gap-3 mt-3">
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Unit</label>
            <select class="form-select" aria-label="Default select example" v-model="selectedUnit">
                <option value="" selected>Pilih Unit</option>
                <option v-for="unit in units" :key="unit.id" :value="unit.id">
                    {{ unit.officeName }}
                </option>
            </select>
        </div>
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Ruang Meeting</label>
            <select class="form-select" aria-label="Default select example" v-model="selectedMeetingRoom">
                <option value="" selected>Pilih Ruang Meeting</option>
                <option v-for="meetingRoom in filteredMeetingRooms" :key="meetingRoom.id" :value="meetingRoom.id">
                    {{ meetingRoom.roomName }}
                </option>
            </select>
        </div>
    </div>
    <div class="info-rmeet d-flex flex-row mt-3">
        <div class="info-rmeet-item">
            <label for="exampleFormControlInput1" class="form-label">Kapasitas</label>
            <input type="text" class="form-control form-input" id="kapasitas" :value="props.modelValue" disabled />
        </div>
    </div>
</template>

<style scoped></style>
