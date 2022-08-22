<script>
import MikuniNavbar from '../../components/mikuniNavbar.vue';
import MikuniFooter from '../../components/mikuniFooter.vue';
import { useRouter } from 'vue-router';
export default {
    components:{
        MikuniNavbar,
        MikuniFooter
    },
    setup() {
        const router = useRouter()

        function navToCorporate(){
            router.push({name: 'mikuniCompanyProfile'})
        }

        return{
            navToCorporate
        }
    },
}
</script>

<template>
    <MikuniNavbar/>
    <div class="pt-5">
        <div class="pt-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-12">
                                 <p class="h1 title">COMPANY HISTORY</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 py-5">
                                <p class="h3 timeline">1998</p>
                                <p class="timeline-desc h5">Started operation as “Omron Mechatronics of The Philippines Corp.”, 100% owned by Omron Corporation</p>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-md-12 py-5">
                                <p class="h3 timeline">2004</p>
                                <p class="timeline-desc h5">Changed the corporate name to“Top Mechatronics Corp.” 100% owned by Hitachi-Omron Terminal Solutions, Corp.</p>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-md-12 py-5">
                                <p class="h3 timeline">2007</p>
                                <p class="timeline-desc h5">Changed the corporate name to “Hitachi Terminals Mechatronics Philippines Corp.” 100% owned by Hitachi-Omron Terminal Solutions, Corp.</p>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-md-12 py-5">
                                <p class="h3 timeline">2019</p>
                                <p class="timeline-desc h5">Acquired by Mikuni Toyo Changed the corporate name to “Mikuni Terminals Mechatronics Philippines Corporation” 100% owned by Mikuni Toyo, Co. Ltd.</p>
                            </div>
                        </div>
                       

                        <div class="row">
                            <div class="col-md-6 pt-2">
                                <button class="nav-button h5" @click="navToCorporate">Corporate Profile</button>
                            </div>
                            <div class="col-md-6 pt-2">
                                <button class="nav-button h5">Mission, Vision, and Quality Policy</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <MikuniFooter/>
</template>

<style scoped>
    #content{
        height: 100vh;
    }

    .title{
        color: #0A2060;
        font-family: var(--p-mikuni);
        font-weight: 700;
    }

    .timeline::before{
        content: ' ';
        background: #0A2060;
        display: inline-block;
        border-radius: 50%;
        border: 3px solid #0A2060;
        width: 16px;
        height: 16px;
        margin-right: 32px;
    }
    
    .timeline{
        font-weight: 700;
    }

    .timeline-desc{
        margin-left: 48px;
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
</style>