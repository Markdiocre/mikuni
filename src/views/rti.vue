<script>
import MikuniFooter from '../components/mikuniFooter.vue';
import MikuniNavbar from '../components/mikuniNavbar.vue';

export default {

    components: {
    MikuniNavbar, MikuniFooter
}

}


</script>

<template>
    <MikuniNavbar/>
    <div class="pt-5">
        <div class="pt-3">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title">MTMP is affiliated with Robotic- Designed Technology, Inc. (RTI).</h1>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <p class="h4">RTI have available machines that can be used for painting and printing of Molding (MD) parts.
                        </p>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <img src="../assets/rti/1.png" class="img-fluid image" style="height: 490px;">
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-6 d-flex align-items-center">
                            <p class="h4 text-center">RTI have machines and equipment to manufacture Face Mask.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="../assets/rti/mask.png" class="img-fluid image" style="height: 490px;" />
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <img src="../assets/rti/2.png" class="img-fluid image" style="height: 490px;" />
                        </div>
                        <div class="col-md-6">
                            <img src="../assets/rti/3.png" class="img-fluid image" style="height: 490px;" />
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
        font-family: var(--p-mikuni);
        font-weight: 700;
        animation-name: onLoad;
        animation-duration: 0.5s;
        animation-timing-function: ease;
    }

    .image{
        width: 100%;
        animation-name: onLoad;
        animation-duration: 0.5s;
        animation-timing-function: ease;
    }

    p{
        color: #0A2060;
        font-weight: 700;
    }
</style>