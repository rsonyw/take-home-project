<script setup></script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <div class="nav-left">
                <a class="navbar-brand" href="#">
                    <img src="../assets/pln.png" alt="Logo" class="d-inline-block align-text-top" />
                </a>
                <span class="navbar-brand navbar-text">iMeeting</span>
            </div>
            <div class="nav-right">
                <img src="../assets/bell.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2" />
                <div class="dropdown">
                    <a class="btn toggle-dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                        ><img src="../assets/picture.png" alt="" /> John Doe <img src="../assets/toggle.svg" alt="toggle" class="toggleIcon" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: relative;
    height: 68px;
    padding: 0px 8px;
    background: linear-gradient(89.98deg, #18a2ba 14.11%, #296377 86.26%);
}

.navbar-text {
    color: white;
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
