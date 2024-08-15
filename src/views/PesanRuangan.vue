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
                <div class="content-head mt-3">
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
                    <h6>Informasi Ruang Meeting</h6>
                    <div class="info-rmeet d-flex flex-row gap-3 mt-3">
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Unit</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Ruang Meeting</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="info-rmeet d-flex flex-row mt-3">
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Kapasitas</label>
                            <input type="number" class="form-control form-input" id="kapasitas" disabled />
                        </div>
                    </div>

                    <hr />
                    <h6>Informasi Rapat</h6>
                    <div class="info-rmeet d-flex flex-row gap-3 mt-3">
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Unit</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Ruang Meeting</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Ruang Meeting</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="info-rmeet d-flex flex-row mt-3">
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Jumlah Peserta</label>
                            <input type="number" class="form-control form-input" id="jumlah_peserta" />
                        </div>
                    </div>
                    <div class="info-rmeet d-flex flex-column mt-3">
                        <label for="exampleFormControlInput1" class="form-label">Jenis Konsumsi</label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
                        </div>
                    </div>
                    <div class="info-rmeet d-flex flex-row mt-3">
                        <div class="info-rmeet-item">
                            <label for="exampleFormControlInput1" class="form-label">Nominal Konsumsi</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Rp.</span>
                                <input type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div class="info-rmeet d-flex flex-row justify-content-end align-items-flex-end">
                        <button type="submit" class="btn btn-primary btn-submit">Submit</button>
                        <button type="submit" class="btn btn-secondary btn-reset">Reset</button>
                    </div>
                </div>
                <!-- end main content -->
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
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.content-head {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
    top: 0;
}

.main-content {
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px #6a6a6a1a;
}

label {
    font-weight: 500;
}

hr {
    margin-top: 36px;
    margin-bottom: 36px;
    border: 2px solid #c7c7c7;
}
</style>
