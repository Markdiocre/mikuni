<script>
import mikuniNavbar from '../../components/mikuniNavbar.vue'
import mikuniFooter from '../../components/mikuniFooter.vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router  = useRouter();

        function navToCorporate(){
            router.push({name: 'mikuniCompanyProfile'})
        }

        function navToHistory(){
            router.push({name: 'mikuniHistory'})
        }


        return{
            navToCorporate, navToHistory
        }
    },
    components: { mikuniNavbar, mikuniFooter}
}
</script>

<template>
    <mikuniNavbar/>
    <div id="entry" class="d-flex align-items-center justify-content-center">
        <div class="container-fluid">
            <div class="row">
                <p class="title">MIKUNI TERMINALS MECHATRONICS PHILIPPINES CORPORATION (MTMP)</p>
            </div>
            <div class="row d-flex align-items-center justify-content-center">
                <router-link class="mt-5 btn btn-lg bt btn-outline-secondary" :to="{name: 'mikuniCompanyProfile'}">Learn More</router-link>
            </div>
        </div>
    </div>
    <div id="content" class="container-fluid py-3">
        <div class="row">
            <div class="col-md-2">

            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <p class="h1 sub-title">OUR CAPABILITIES</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6  pt-2">
                       <div class="overlay">
                            <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                            <div class="middle">
                                <img src="../../assets/gayness.jpg" class="img-fluid" width="250px" height="250px">
                                <div class="text" ><p class="h4">Tool & Die Manufacturing</p> </div>
                            </div>
                       </div>
                    </div>
                    <div class="col-md-6  pt-2">
                        <div class="overlay">
                            <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                            <div class="middle">
                                <img src="../../assets/gayness.jpg" class="img-fluid" width="250px" height="250px">
                                <div class="text h4"> <p class="h4">Parts Manufacturing</p> </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6  pt-2">
                       <div class="overlay">
                            <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                            <div class="middle">
                                <img src="../../assets/gayness.jpg" class="img-fluid" width="250px" height="250px">
                                <div class="text" ><p class="h4">PCB Manufacturing</p> </div>
                            </div>
                       </div>
                    </div>
                    <div class="col-md-6  pt-2">
                        <div class="overlay">
                            <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                            <div class="middle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#FFF" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                                </svg>
                                <div class="text h4"> <p class="h4">Assembly Manufacturing</p> </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12  pt-2">
                       <div class="overlay">
                            <img src="../../assets/gayness.jpg" class="img-fluid image" style="height: 490px;">
                            <div class="middle">
                                <img src="../../assets/gayness.jpg" class="img-fluid" width="250px" height="250px">
                                <div class="text" ><p class="h4">Robotic-Designed Technology Inc.</p> </div>
                                <div><button class="btn btn-outline-light but btn-lg">Learn More</button></div>
                            </div>
                       </div>
                    </div>
                </div>
            
            </div>
            <div class="col-md-2">
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">

            </div>

            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12 pt-3">
                        <p class="h1 sub-title">ABOUT</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 pt-2">
                        <button class="nav-button h6">Mission, Vision, Quality Policy</button>
                    </div>
                    <div class="col-md-3 pt-2">
                        <button class="nav-button h6"  @click="navToHistory">History</button>
                    </div>
                    <div class="col-md-3 pt-2">
                        <button class="nav-button h6"  @click="navToCorporate">Corporate Profile</button>
                    </div>
                    <div class="col-md-3 pt-2">
                        <button class="nav-button h6">Products and Services</button>
                    </div>
                </div>
            </div>

            <div class="col-md-2">

            </div>
        </div>
        
    </div>
    <mikuniFooter/>
</template>

<style scoped>
    #entry{
        height: 100vh;
    }

    .title{
        font-size: 80px;
        font-family: var(--p-mikuni);
        font-weight: 700;
        text-align: center;
        padding-left: 100px;
        padding-right: 100px;
        color: #0A2060;
    }

    .bt{
        width: 20vw;
    }

    .sub-title{
        color: #0A2060;
        font-family: var(--p-mikuni);
        font-weight: 700;
    }

    .overlay{
        position: relative;
        background-color: black;
    }
    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        
        }

    .overlay:hover .image {
        opacity: 0.2;
        background-color: black;
    }

    .overlay:hover .middle {
        opacity: 1;
    }

    .text {
        padding-top: 2em;
        color: white;
        font-size: 16px;
        font-family: var(--p-mikuni);
    }

    .bg{
        background-color: #0A2060;
    }

    .card-desc{
        color: #FFF;
        font-family: var(--p-mikuni);
        font-weight: 700;
        text-align: center;
    }

    .but{
        font-family: var(--p-mikuni);
        margin-top: 10px;
    }

    .nav-button{
        width: 100%;
        height: 114px;
        background: #0A2060;
        color: white;
        font-family: var(--p-mikuni);
        font-weight: 700;
        border: 0px;
    }

    .nav-button:hover{
        width: 100%;
        height: 114px;
        background: white;
        color: #0A2060;
        border: 2px solid #0A2060;
        font-family: var(--p-mikuni);
        font-weight: 700;
    }

    @media screen and (max-width: 1180px) {
        .title{
            font-size: 60px;
            padding-left: 80px;
            padding-right: 80px;
        }

        .bt{
            width: 30vw;
        }
    }

    @media screen and (max-width: 775px) {
        .title{
            font-size: 40px;
            padding-left: 60px;
            padding-right: 60px;
        }

        .bt{
            width: 50vw;
        }
    }

     @media screen and (max-width: 450px) {
        .title{
            font-size: 30px;
            padding-left: 40px;
            padding-right: 40px;
        }
    }
</style>