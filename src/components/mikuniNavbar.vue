<template>
    <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand mb-0 logo" :to="{name: 'home'}">MIKUNI</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link navbar-color" aria-current="page" :to="{name:'mikuniHome'}">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle navbar-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item navbar-color" :to="{name: 'mikuniMvq'}">Mission, Vision, Quality Policy</router-link></li>
                            <li><router-link class="dropdown-item navbar-color" :to="{name: 'mikuniHistory'}">History</router-link></li>
                            <li><router-link class="dropdown-item navbar-color" :to="{name: 'mikuniCompanyProfile'}">Corporate Profile</router-link></li>
                            <li><router-link class="dropdown-item navbar-color" :to="{name: 'mikuniContact'}">RTI</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link navbar-color" :to="{name: 'mikuniPaS'}">Products & Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link navbar-color" :to="{name: 'mikuniContact'}">Contact</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .logo{
        font-family: var(--logo-mikuni);
        color: #2D67FF;
        font-size: 24px;
    }

    .navbar-color{
        color: #0A2060;
    }

    .navbar-color:hover{
        color: #2D67FF;
    }

    .bg-light{
        background-color: #FFFDFD !important;
    }
</style>