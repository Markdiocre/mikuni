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

        function navToCorpo(){
            router.push({name:'mikuniCompanyProfile'})
        }

        function navToHistory(){
            router.push({name:'mikuniHistory'})
        }

        return{
            navToCorpo, navToHistory
        }
    },
}
</script>

<template>
    <MikuniNavbar/>
    <div class="container-fluid pt-5">
        <div class="container-fluid pt-4">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">MISSION</p>
                            <p class="h4">We provide world class products and expert services with the use of our excellent skills and technology  in manufacturing processed parts to mechatronics products.</p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">VISSION</p>
                            <p class="h4">Our vision is to become a trusted business partner and to be globally recognized in the manufacturing industry.</p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">QUALITY POLICY</p>
                            <p class="h4"><b> QUALITY EXCELLENCE!</b><br>
Recognizing quality in all we do philosophy at all levels of organization through continual improvement to meet and exceeds customer needs and expectations!</p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-6">
                            <button class="nav-button h5" @click="navToCorpo()">Corporate Profile</button>
                        </div>
                        <div class="col-md-6">
                            <button class="nav-button h5" @click="navToHistory">Company History</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    </div>
    <MikuniFooter/>
</template>

<style scoped>
    .title{
        color: #0A2060;
        font-weight: 700;
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