<script>
import MikuniNavbar from '../../components/mikuniNavbar.vue';
import MikuniFooter from '../../components/mikuniFooter.vue';
import { ref } from '@vue/reactivity';
export default {
    setup() {

        const isDMOpen = ref(false)
        const isToolOpen = ref(false)
        const isInjectionOpen = ref(false)
        const isResin = ref(false)

        function showVar(valueHere){
            return valueHere = !valueHere
        }

        return{
            isDMOpen, showVar,isToolOpen, isInjectionOpen, isResin
        }
    },
    components: { MikuniNavbar, MikuniFooter }
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
                        <div class="row">
                            <div class="col-md-12">
                                <p class="h1 text-center title">OUR SERVICES</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="h4 text-center desc">We have the skills and technology to fully manufacture from <b>processed parts to mechatronics products</b></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 pt-2 container-fluid">
                                <div class="box">

                                
                                    <div class="row py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#FFF" class="bi bi-3-circle-fill text-center" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                                        </svg>
                                    </div>
                                    <div class="row">
                                        <p class="h5 text-center"><b>Tool & Die <br>Manufacturing</b></p>
                                    </div>
                                    <div class="row px-5">
                                        <ul>
                                            <li class="h6">Design</li>
                                            <li class="h6">CNC Machining</li>
                                            <li class="h6">Die Repair and Maintenance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 pt-2  container-fluid">
                                <div class="box">

                                
                                    <div class="row py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#FFF" class="bi bi-3-circle-fill text-center" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                                        </svg>
                                    </div>
                                    <div class="row">
                                        <p class="h5 text-center"><b>Parts <br>Manufacturing</b></p>
                                    </div>
                                    <div class="row px-5">
                                        <ul>
                                            <li>Sheet Metal</li>
                                            <ul>
                                                <li>Press Stamping</li>
                                                <li>CNC Laser/NCT</li>
                                            </ul>
                                            <li> Plastic Molding</li>
                                            <li>Precision Shaft / Pin</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 pt-2  container-fluid">
                                <div class="box">

                                
                                    <div class="row py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#FFF" class="bi bi-3-circle-fill text-center" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                                        </svg>
                                    </div>
                                    <div class="row">
                                        <p class="h5 text-center"><b>PCB <br>Manufacturing</b></p>
                                    </div>
                                    <div class="row px-5">
                                        <ul>
                                            <li>PCB Assembly</li>
                                            <li>PWB Printing</li>
                                            <li>Mounting</li>
                                            <li>Reflow Machining</li>
                                            <li>AOI Inspection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 pt-2  container-fluid">
                                <div class="box">

                                
                                    <div class="row py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#FFF" class="bi bi-3-circle-fill text-center" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                                        </svg>
                                    </div>
                                    <div class="row">
                                        <p class="h5 text-center"><b>Assembly <br> Manufacturing</b></p>
                                    </div>
                                    <div class="row px-5">
                                        <ul>
                                            <li>Parts Assembly</li>
                                            <ul>
                                                <li>Cable / Wire Routing</li>
                                                <li>Sensor and Belt Adjustment</li>
                                            </ul>
                                            <li> Electrical Adjustment</li>
                                            <li> Function Test</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 py-3">
                                <p class="h1 text-center title">BASIC STRUCTURE OF MTMP PRODUCTS</p>
                            </div>
                        </div>




                        <div class="row">
                            <div class="col-md-12">
                                <hr class="hr">
                            </div>
                        </div>
<!--Die Manufacturing-->
                        <div class="row">
                            <div class="col-md-12 d-flex justify-content-between case" @click="isDMOpen = showVar(isDMOpen)">
                                <p class="h4 title ">Die Manufacturing</p>
                                <p v-if="isDMOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg></p>
                                <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg></p>
                            </div>
                        </div>
                        <Transition>
                        <div v-show="isDMOpen">
                            <div class="row" >
                                <div class="col-md-12">
                                    <p class="desc">We perform design, die fabrication, modification, repair, improvement and trial for a variety of Customers. We also offer Technical solutions through Design for Manufacturability (DFM) and Analysis Software.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Press Die</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Mold Die</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Design for Mfg. (DFM)</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Die Design</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Wire EDM</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">CNC MIlling</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Heat Treatment</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Laser Welding</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 pt-2 table-responsive">
                                    <table class="table table-light table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="h5">Machines <span class="jp">機械・設備</span></th>
                                                <th class="h5">Type & Brand <span class="jp">機種・メーカ</span></th>
                                                <th class="h5">#</th>
                                                <th class="h5">Specification <span class="jp">仕様</span></th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>CNCマシニングセンター</td>
                                                <td>Makino V33</td>
                                                <td>1</td>
                                                <td>Table Size 398.8 x 749.3mm</td>
                                            </tr>
                                            <tr>
                                                <td>CNCマシニングセンター</td>
                                                <td>Hardinge VMC600II</td>
                                                <td>1</td>
                                                <td>Table Size 750 x 510mm</td>
                                            </tr>
                                            <tr>
                                                <td>CNCマシニングセンター</td>
                                                <td>Hitachi M406V</td>
                                                <td>1</td>
                                                <td>Table Size 901.7 x 419.1mm</td>
                                            </tr>
                                            <tr>
                                                <td>CNCワイヤ放電加工( EDM)</td>
                                                <td>Sodick AQ750L</td>
                                                <td>1</td>
                                                <td>ワークピース1050 x 750 x 400mm</td>
                                            </tr>
                                            <tr>
                                                <td>CNCワイヤ放電加工( EDM)</td>
                                                <td>Sodick MARK25</td>
                                                <td>1</td>
                                                <td>ワークピース774.7 x 637.1 x 208.3</td>
                                            </tr>
                                            <tr>
                                                <td>CNC 放電加工(EDM)</td>
                                                <td>Sodick AD35L</td>
                                                <td>1</td>
                                                <td>Table Size 600 x 400mm</td>
                                            </tr>
                                            <tr>
                                                <td>表面研磨盤(Surface Grinder)</td>
                                                <td>Okamoto-500 GRIND-X</td>
                                                <td>1</td>
                                                <td>Table Size 150 x 350mm</td>
                                            </tr>
                                            <tr>
                                                <td>表面研磨盤(Surface Grinder)</td>
                                                <td>Chevalier FSG-2040ADIII</td>
                                                <td>1</td>
                                                <td>Table Size 500 x 1,500mm</td>
                                            </tr>
                                            <tr>
                                                <td>レーザ溶接</td>
                                                <td>Sisma SWA 150</td>
                                                <td>1</td>
                                                <td>Axis Stroke 300 x 150 x 500mm</td>
                                            </tr>
                                            <tr>
                                                <td>熱炉</td>
                                                <td>Nabertherm LH120-12</td>
                                                <td>2</td>
                                                <td>ワークピース 500 x 500 x 500mm</td>
                                            </tr>
                                            <tr>
                                                <td>デジタル硬度計</td>
                                                <td>Mitutoyo</td>
                                                <td>1</td>
                                                <td>ロックウェル硬さ</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4">総計台数: 12</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 pt-2">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-3 pt-2">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-3 pt-2">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-3 pt-2">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 pt-2">
                                </div>
                                <div class="col-md-3 pt-2">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-3 pt-2">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-3 pt-2">
                                </div>
                            </div>
                            
                        </div>
                        </Transition>





                        <div class="row">
                            <div class="col-md-12">
                                <hr>
                            </div>
                        </div>
<!--Tool Steel / Carbon Steel-->
                        <div class="row">
                            <div class="col-md-12 d-flex justify-content-between case" @click="isToolOpen = showVar(isToolOpen)">
                                <p class="h4 title ">Tool Steel / Carbon Steel</p>
                                <p v-if="isToolOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg></p>
                                <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg></p>
                            </div>
                        </div>
                        <Transition>
                        <div v-show="isToolOpen">
                            <div class="row">
                                <div class="col-md-12 pt-2 table-responsive">
                                    <table class="table table-light table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="h5">Die Type</th>
                                                <th class="h5">Die Component</th>
                                                <th class="h5">Material Code</th>
                                                <th class="h5">Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowspan="2">Mold for Plastic Injection</td>
                                                <td>Cavity / Core / Slides</td>
                                                <td> NAK80, STAVAX, SKD61, SKD11</td>
                                                <td>SKD61/SKD11 - For Heat Treatment Process</td>
                                            </tr>
                                            <tr>
                                                <td>Mold Base Material</td>
                                                <td>S50C, S45C</td>
                                                <td>-</td>

                                            </tr>
                                            <tr>
                                                <td rowspan="3">Die for Press Stamping</td>
                                                <td>Die Plates / Punches</td>
                                                <td> SKD11, SLD</td>
                                                <td>For Heat Treatment Process</td>
                                            </tr>
                                            <tr>
                                                <td>Support Plates</td>
                                                <td>HPM, P20</td>
                                                <td>-</td>

                                            </tr>
                                            <tr>
                                                <td>Holders / Spacers</td>
                                                <td>SS400, S50C, S45C</td>
                                                <td>-</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 pt-2">
                                    <p class="desc">We use advanced die design software that can provide analysis & solutions to achieve and keep Customer requirements.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 pt-2 table-responsive">
                                    <table class="table table-light table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Design CAD/CAM Software 設計 CAD/CAMソフトウェア</th>
                                                <th>Other Integrated Software 他の搭載ソフトウェア</th>
                                                <th>Licenses ライセンス</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Solidworks Premium 2021</td>
                                                <td>
                                                    <ul>
                                                        <li>Imold for Solidworks - Complete Suite of Tools for Mold Design</li>
                                                        <li>Solidworks Plastics (Mold Simulation)</li>
                                                    </ul>
                                                </td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>Cimatron E9.0 Press & Mold</td>
                                                <td>
                                                    <ul>
                                                        <li>Standard components library 標準要素ライブラリ</li>
                                                        <li>Mold base & standard components library モールドベースと標準要素ライブラリ</li>
                                                    </ul>
                                                </td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>PTC Creo Parametric</td>
                                                <td>-</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Autodesk Fushion 360</td>
                                                <td>-</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Mastercam X3 Wire/3D Mill</td>
                                                <td>-</td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">Total Softwares ソフトウェアの数:</td>
                                                <td>8</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </Transition>





                        <div class="row">
                            <div class="col-md-12">
                                <hr>
                            </div>
                        </div>
                        <!--INJECTION MOLDING-->
                        <div class="row">
                            <div class="col-md-12 d-flex justify-content-between case" @click="isInjectionOpen = showVar(isInjectionOpen)">
                                <p class="h4 title ">Injection Molding</p>
                                <p v-if="isInjectionOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg></p>
                                <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg></p>
                            </div>
                        </div>
                        <Transition>
                        <div v-show="isInjectionOpen">
                            <div class="row">
                                <div class="col-md-12">We are knowledgeable on plastic injection processing using various resin materials. We assure good quality and fast delivery of critical plastic components through the use of defect detection camera system.</div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Plastic Injection Part</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Plastic Injection Part</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Die Storage</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Quick Die Change System</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Resin Drying</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Resin Loading</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Molding Injection</p> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-2">
                                    <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image">
                                        <div class="middle">
                                            <div class="h4"> <p class="h6 text ">Robot Picker</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 pt-2 table-responsive">
                                    <table class="table table-light table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Tonnage トン数</th>
                                                <th>Quantity 台数</th>
                                                <th>Brand & Model 機種・メーカ</th>
                                                <th>Screw ø スクリューø (mm)</th>
                                                <th>Tie Bar Distance (Y, X)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>30</td>
                                                <td>1</td>
                                                <td>Fanuc, S-2000i30B</td>
                                                <td>Ø 22</td>
                                                <td>310mm x 290mm</td>
                                            </tr>
                                            <tr>
                                                <td>50</td>
                                                <td>3</td>
                                                <td>Fanuc, Roboshot,α –S50iA, S-2000i50A</td>
                                                <td>Ø 22, Ø 26, Ø 226</td>
                                                <td>360mm x 320mm</td>
                                            </tr>
                                            <tr>
                                                <td>100</td>
                                                <td>2</td>
                                                <td>Fanuc, Roboshot α –S100iA,</td>
                                                <td>Ø 32</td>
                                                <td>460mm x 410mm</td>
                                            </tr>
                                            <tr>
                                                <td>150</td>
                                                <td>2</td>
                                                <td>Fanuc, Roboshot</td>
                                                <td>Ø 44</td>
                                                <td>560mm x 510mm</td>
                                            </tr>
                                            <tr>
                                                <td>180</td>
                                                <td>1</td>
                                                <td>Toyo, TM-180H</td>
                                                <td>Ø 50</td>
                                                <td>560mm x 560mm</td>
                                            </tr>
                                            <tr>
                                                <td>280</td>
                                                <td>1</td>
                                                <td>Toyo Si-280IV</td>
                                                <td>Ø 60</td>
                                                <td>710mm x 710mm</td>
                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td>1</td>
                                                <td>Fanuc, Roboshot</td>
                                                <td>Ø 48</td>
                                                <td>810mm x 810mm</td>
                                            </tr>
                                            <tr>
                                                <td>550</td>
                                                <td>1</td>
                                                <td>JSW, J550EL</td>
                                                <td>Ø 76</td>
                                                <td>900mm x 900mm</td>
                                            </tr>
                                            <tr>
                                                <td colspan=5>総計台数: 12</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                            </div>
                        </div>
                        </Transition>



                        <div class="row">
                            <div class="col-md-12">
                                <hr class="hr">
                            </div>
                        </div>
<!--RESIN MATERIALS-->
                        <div class="row">
                            <div class="col-md-12 d-flex justify-content-between case" @click="isResin = showVar(isResin)">
                                <p class="h4 title ">Resin Materials</p>
                                <p v-if="isResin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg></p>
                                <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg></p>
                            </div>
                        </div>
                        <Transition>
                        <div v-show="isResin">
                            <div class="row">
                                <div class="col-md-12 pt-2 table-responsive">
                                    <table class="table table-light table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Material Types</th>
                                                <th>Code</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Polycarbonate</td>
                                                <td>PC</td>
                                            </tr>
                                            <tr>
                                                <td>Acrylonitrile butadiene styrene + Polycarbonate</td>
                                                <td>ABS+PC</td>
                                            </tr>
                                            <tr>
                                                <td>Polyoxymethylene</td>
                                                <td>POM</td>
                                            </tr>
                                            <tr>
                                                <td>Acrylonitrile butadiene styrene</td>
                                                <td>ABS</td>
                                            </tr>
                                            <tr>
                                                <td>Polyphenylene sulfide</td>
                                                <td>PPS</td>
                                            </tr>
                                            <tr>
                                                <td>Polyphenylene Ether</td>
                                                <td>PPE</td>
                                            </tr>
                                            <tr>
                                                <td>Polystyrene + Polyphenylene Ether</td>
                                                <td>PS+PPE</td>
                                            </tr>
                                            <tr>
                                                <td>Polyamide Nylon</td>
                                                <td>PA6</td>
                                            </tr>
                                            <tr>
                                                <td>Polybutylene Terephthalate</td>
                                                <td>PBT</td>
                                            </tr>
                                            <tr>
                                                <td>Olefinic Thermoplastic Elastomer</td>
                                                <td>TPV</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                                <div class="col-md-4">
                                    <img src="../../assets/gayness.jpg" class="img-fluid image">
                                </div>
                            </div>
                        </div>
                        </Transition>






                        <div class="row">
                            <div class="col-md-12">
                                <hr class="hr">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-2">
                                <p class="h1 text-center title">PCB MANUFACTURING</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Office and Warehouse Area</p> </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Total Layout of PCB Line</p> </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Total Layout of PCB Line</p> </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-2">
                                <p class="h1 text-center title">MTMP End Products</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 pt-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Deposit Machine</p> </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 pt-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Receipt Printer</p> </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 py-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Insertion Card Reader</p> </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 py-2">
                                <div class="overlay">
                                        <img src="../../assets/gayness.jpg" class="img-fluid image" alt="..." style="height: 490px;">
                                        <div class="middle">
                                            <div class=" h4"> <p class="h4 text">Motor Driven Card Reader</p> </div>
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
    <MikuniFooter/>
</template>

<style scoped>
    .title{
        color: #0A2060;
        font-family: var(--p-mikuni);
        font-weight: 700;
    }

    .desc{
        color: #0A2060;
    }

    .box{
        background-color: #0A2060;
        color: white;
        height: 100%;
    }

    .hr{
        border-top: 3px solid #0A2060 !important;
    }

    .case:hover{
        background-color:whitesmoke;
        cursor: pointer;
    }

    .image{
        object-fit: cover;
    }

    .image:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
        font-weight: 700;
    }

    .jp{
        color: tomato;
    }

    table tbody tr td, table thead tr th{
        color: #0A2060;
        font-weight: 700;
    }

    .table-bordered{
        border-color: #0A2060;
    }

    hr{
        border-top: 3px solid #0A2060 !important;
    }

    /**Transitions */
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>