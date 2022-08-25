<script>
import MikuniNavbar from '../../components/mikuniNavbar.vue';
export default {
    components:{
    MikuniNavbar
},
    setup() {
        
    },
}
</script>
<template>
    <MikuniNavbar/>
    <div class="container-fluid py-5">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="h1 title">CONTACT US</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 pt-2">
                            <div class="box container-fluid">
                                <div class="row p-4">
                                    <div class="col-md-12">
                                        <p class="h5 title">TELEPHONE NUMBERS</p>
                                        <ul>
                                            <li class="pt-4 g">ADMIN OFFICE: (047) 252 - 1490</li>
                                            <li class="pt-4 g">SALES OFFICE: (047) 252 - 5221</li>
                                            <li class="pt-4 g">PURCHASING OFFICE: (047) 252 - 9480</li>
                                            <li class="pt-4 g">FINANCE OFFICE: (047) 252 - 5220</li>
                                            <li class="pt-4 g">QUALITY OFFICE: (047) 252 - 7049</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 pt-2">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=mikuni%20terninals%20&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="container-fluid">
                            <div id="entry" class="d-flex align-items-center justify-content-center">
                                <div class="container-fluid">
                                    <div class="row">
                                        <p class="sign h1">MIKUNI TERMINALS MECHATRONICS PHILIPPINES CORPORATION (MTMP)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .box{
        border: 3px solid #0A2060;
    }

    .g{
        font-weight: 700;
    }

    .title{
        font-weight: 700;
        color:#0A2060;
    }

    .try{
        background-color: aqua;
    }

    #gmap_canvas{
        width: 100%;
        height: 100%;
    }

    #entry{
        height: 30vh;
    }
    
    .sign{
        font-family: var(--p-mikuni);
        font-weight: 700;
        text-align: center;
        padding-left: 100px;
        padding-right: 100px;
        color: #0A2060;
    }

    @media screen and (max-width: 992px) {
        #gmap_canvas{
            height: 400px;
        }
    }
</style>