<script>
import { useRouter } from 'vue-router';


export default{

    setup(){

        const router = useRouter();

        function navToPas(){
            router.push({name: 'mikuniRTI'})
        }

        function navToMVQ(){
            router.push({name: 'RtiMVQ'})
        }

        return{

            navToPas, navToMVQ

        }
    }

}

</script>

<template>

    <div class="row">
        <div class="col-md-12 d-flex align-items-center justify-content-center">
            <img src="../assets/rti/logo.png" alt="" class="image">
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 pt-2">
            <button class="nav-button h6" @click="navToMVQ">Mission, Vision, Quality Policy</button>
        </div>
        <div class="col-md-6 pt-2">
            <button class="nav-button h6" @click="navToPas">Product and Services</button>
        </div>
    </div>

</template>

<style scoped>

    .nav-button{
        width: 100%;
        height: 50px;
        background: #0A2060;
        color: white;
        font-family: var(--p-mikuni);
        font-weight: 700;
        border: 0px;
    }

    .nav-button:hover{
        width: 100%;
        background: white;
        color: #0A2060;
        border: 2px solid #0A2060;
        font-family: var(--p-mikuni);
        font-weight: 700;
    }

    .image{
        width: 50% !important;
        object-fit: cover !important;
    }

</style>