<script>
import { ref } from 'vue';
import MikuniFooter from '../components/mikuniFooter.vue';
import MikuniNavbar from '../components/mikuniNavbar.vue';
import RtiJumbotron from '../components/rtiJumbotron.vue';

export default {

    setup() {
        const isSPOpen = ref(false)
        const isSSOpen = ref(false)
        const isMedOpen = ref(false)
        const isSafeOpen = ref(false)


        function showVar(valueHere) {
            return valueHere = !valueHere
        }

        return {
            isSPOpen, showVar, isSSOpen, isMedOpen, isSafeOpen
        }
    },

    components: {
        MikuniNavbar,
        MikuniFooter,
        RtiJumbotron
    }

}


</script>

<template>
    <MikuniNavbar />
    <div class="container-fluid py-5">
        <div class="container-fluid py-3">
            <div class="row">
                <div class="col-lg-2">

                </div>
                <div class="col-lg-8">
                    <RtiJumbotron />
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="title">MTMP is affiliated with Robotic- Designed Technology, Inc. (RTI).</h1>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <p class="h4">RTI have available machines that can be used for painting and printing of Molding
                            (MD) parts.
                        </p>
                    </div>
                    <div class="row pt-3">
                        <div class="col-lg-12 d-flex align-items-center justify-content-center">
                            <img src="../assets/rti/1.png" class="img-fluid image" style="height: 490px;">
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-lg-8 d-flex align-items-center justify-content-center">
                            <img src="../assets/rti/painting/painting_machine.png" class="img-fluid image"
                                style="height: 490px;">
                        </div>
                        <div class="col-lg-4 d-flex align-items-center justify-content-center">
                            <p>
                                Feeder can convert to ‘spindle’ function to accommodate spindle painting requirements
                                (ex. Mobile phone casings)
                                <br /> <br />
                                Can paint complex product shapes
                                & orientations
                            </p>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="row pt-2">
                        <p class="h4">RTI have machines and equipment to manufacture Face Mask.
                        </p>
                    </div>
                    <div class="row pt-3">
                        <div class="col-lg-4 d-flex align-items-center justify-content-center">
                            <p class="h4">RTI Japan Quality Face mask </p>
                        </div>
                        <div class="col-lg-8 d-flex justify-content-center">
                            <img src="../assets/rti/mask/mask.png" class="img-fluid image" style="height: 490px;">
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-lg-4">
                            <div class="card" style="width: 100%;">
                                <img src="../assets/rti/mask/2.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Bacterial filtration efficiency is high as 99.8% effectively
                                        respiratory health.
                                        .</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card" style="width: 100%;">
                                <img src="../assets/rti/mask/3.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">3.5 mm Ear loop
                                        Widen and lengthen design, comfortable to wear without tightening ears.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card" style="width: 100%;">
                                <img src="../assets/rti/mask/4.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Made of 100% plastic, bending resistance, lighter and safer.
                                        Easy to adjust the nose bar, fit the nose and face steady and comfortable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="../assets/rti/mask/machine_1.png" class="img-fluid image" style="height: 490px;">
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="../assets/rti/mask/machine_2.png" class="img-fluid image" style="height: 490px;">
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="../assets/rti/mask/machine_3.png" class="img-fluid image" style="height: 490px;">
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="../assets/rti/mask/machine_4.png" class="img-fluid image" style="height: 490px;">
                        </div>
                    </div>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="col-lg-12">
                        <p class="h3">LumiNova</p>
                    </div>
                    <div class="row pt-2">
                        <p class="h4">High- brightness phosphorescent. Effective for evacuation guidance in the event of
                            a disaster power outage.
                        </p>
                    </div>
                    <div class="row pt-2">
                        <div class="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/rti/lumiNova/1.png" class="img-fluid image" style="height: 490px;">
                        </div>
                        <div class="col-lg-6">
                            <p>
                            <ul class="h4">
                                <li>Since this system does not use electricity, there is no need to worry about power
                                    outages or disconnections.</li>
                                <li>There is no wiring problem at the time of introduction, and the initial investment
                                    can be kept low. </li>
                                <li>There is no running cost.</li>
                                <li>Maintenance-free with no breakdowns or parts replacement.</li>
                                <li>It is a system that is friendly to the global environment.</li>
                                <br /><br />
                                In addition, this system responds
                                to smoke damage and minimizes
                                visual impairment due to smoke
                                because it displays an induction
                                display at a low position.

                                This system ensures visibility by guiding and displaying in a low position in the space.
                            </ul>
                            </p>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12 pt-5">
                            <p class="h1 text-center title">OUR PRODUCT LIST</p>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between case"
                            @click=" isSPOpen = showVar( isSPOpen)">
                            <p class="h4 title ">SPECIAL PAINT</p>
                            <p v-if="isSPOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg></p>
                            <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg></p>
                        </div>
                    </div>
                    <Transition>
                        <div v-show="isSPOpen">
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/painting/ccp-117.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">CCP-117</h5>
                                                <p class="card-text">Excellent anti-corrosive primer
                                                    that can be used over a surface of corrosion.
                                                    Used to help stop the spreading of rust.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/painting/touch_coat.jpg"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">TOUGH COAT</h5>
                                                <p class="card-text">3rd Generation Paint (Heat Exchange Paint).
                                                    Heat consumption activity works 24hours.
                                                    It also performs heat consumption effect after sunset
                                                    Prevent aged deterioration keeps continuing effect.
                                                    Energy cost saving. It exchange heat into physical energy
                                                    (movement).
                                                    It is a special paint that has acquired the "certified emission
                                                    reduction
                                                    amount" Certified Carbon Offset by the United Nation.

                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/painting/strippable_paint.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">STRIPPABLE PAINT</h5>
                                                <p class="card-text">It is a clear water thinned paint that when applied
                                                    and
                                                    and
                                                    allow
                                                    to dry it can be peeled off without affecting the surface. It is a
                                                    temporary low adhesion coating. Use to mask surfaces prior to
                                                    painting or as a coating to protect
                                                    surfaces against scratching, staining or marking.


                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/painting/f-360_floor_paint.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">F-360 Floor Paint</h5>
                                                <p class="card-text">A coated floor series with excellent mechanical
                                                    strength,
                                                    chemical
                                                    resistance, heat resistance, as well as safety and adhesiveness.
                                                    Slight fragrance and ougas resistance that are friendly to both
                                                    humans
                                                    and environment. Epoxy resin with a stable track record is the
                                                    basis.
                                                    Uses materials that eliminate harmful substances. Top priority is on
                                                    adhesive performance and recoat ability. Various performances are
                                                    secured up to antibacterial properties.
                                                    Color: Any Basic Color



                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/painting/chris_coat.jpg"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">CHRIS COAT (X'COAT)</h5>
                                                <p class="card-text">High performance glass heat shield coating
                                                    Blocks untraviolet rays while maintaining
                                                    transparency just by coating the glass surface.
                                                    Insect repellant effect
                                                    Cuts 90%+ of Infrared rays.
                                                    Energy saving (annual reduction rate-25%+)
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/painting/cozy_pack_air.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">COZY PACK AIR</h5>
                                                <p class="card-text">Is a new product that has Antibacterial and
                                                    Antiviral
                                                    Air cleaning/purifying and deodorant effects due to its
                                                    Photocatalytic function. Which has been well received as an
                                                    ultra-low odor indoor water-based paint.
                                                    Inactivate bacteria and viruses in a short time of light.
                                                    Can - 16 KG. (color available: Beige and White)

                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between case"
                            @click=" isSSOpen = showVar( isSSOpen)">
                            <p class="h4 title ">SPECIAL SOLVENTS</p>
                            <p v-if="isSSOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg></p>
                            <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg></p>
                        </div>
                    </div>
                    <Transition>
                        <div v-show="isSSOpen">
                            <div class="row">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/solvents/dyanmic2.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">DYNAMIC GC-S</h5>
                                                <p class="card-text">Water-based, strong alkaline-based, reduced
                                                    water-based,
                                                    coconut oil-based. Cleaning targets - food oil, tar, sebum,
                                                    industrial grease, printer ink, blood stains, exhaust gas, car body
                                                    insects car casses, air conditioners, chiller aluminum fins,
                                                    degreasing of aluminum parts, slimy parts of hot, bath facilities,
                                                    dirt containing solids in the air conditioner, sticky stains inside
                                                    the
                                                    car (sweets,juice marks). cleaning the walls of large-scale
                                                    factories.
                                                    pH - 12.0 ; Appearance - Liquid
                                                    Container unit - Plastic container-5 Gallon


                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/solvents/rti_best2.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">RTI BEST CLEANER</h5>
                                                <p class="card-text">Strong Organic acid cleaner, strongly acidic but
                                                    gentle
                                                    safe for nature and workers.
                                                    Hazard Classification - no contents as specified in the
                                                    hazardous substance standard.
                                                    pH - 1.0 ; Appearance - Liquid
                                                    Container unit - Plastic container-5 gallon


                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between case"
                            @click=" isMedOpen = showVar( isMedOpen)">
                            <p class="h4 title ">MEDICAL</p>
                            <p v-if="isMedOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg></p>
                            <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg></p>
                        </div>
                    </div>
                    <Transition>
                        <div v-show="isMedOpen">
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/medical/rti_coat.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">RTI VS COAT</h5>
                                                <p class="card-text">Antimicrobial and antiviral coating agent. (spray)
                                                    Reduces bacteria and viruses by more than 99.9% after only
                                                    10minutes.
                                                    Effect lasts up to 3 months.<br /> <br />
                                                    Antimicrobial and antiviral agent used have cleared the safety
                                                    standards
                                                    established by SIAA (Antimicribial Products Technology Council)
                                                    Bottle - 140 ml
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/medical/my_air.jpg" class="img-fluid rounded-start"
                                                alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">MY AIR
                                                    <br />
                                                    Portable Air Purifier
                                                    Hanging Type
                                                </h5>
                                                <p class="card-text">Model: KL-P01-W/KL-P01-O/KL-P01-K<br />
                                                    Body: Diameter 32 x Height 115<br />
                                                    Weight: Approx 75g<br />
                                                    Power Supply: Lithium Battery 3.7V 1500mAh 5.6Wh<br />
                                                    Charging Time: Approx 4hours<br />
                                                    Usable Time: Approx 8hours (fully charge)

                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/medical/facemas.jpg" class="img-fluid rounded-start"
                                                alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">RTI Facemask
                                                    <br />
                                                    Japan Quality

                                                </h5>
                                                <p class="card-text">N99 level material<br />
                                                    Photocatalytic disinfection<br />
                                                    BFE Requirement = 3.0 Microns: ≥95%<br />
                                                    Test Result = BFE1=99.9<br />
                                                    PFE Requirement = 0.1 Microns: ≥95%<br />
                                                    Test Result = PFE=99.23<br />
                                                    3 layers, adjustable nose strip, seamless crimping<br />
                                                    50pcs/box


                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between case"
                            @click=" isSafeOpen = showVar( isSafeOpen)">
                            <p class="h4 title ">SAFETY</p>
                            <p v-if="isSafeOpen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg></p>
                            <p v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg></p>
                        </div>
                    </div>
                    <Transition>
                        <div v-show="isSafeOpen">
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/safety/luminova1.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">LumiNova Tape


                                                </h5>
                                                <p class="card-text">High-intensity phosphorescent guide sign
                                                    that stores and emits natural light and illumination light.
                                                    Easy to install without wiring work.<br /><br />
                                                    There is no running cost because it does not use electricity.
                                                    Unlike the mechanical type, there is no failure and maintenance is
                                                    free.
                                                    Acquired certification for firefighting equipment type in Japan.
                                                    Excellent design and texture.<br /><br />
                                                    Japan Fire Equipment Safety Center Highest grade: S50
                                                    class<br /><br />
                                                    TAPE - MOQ 10pcs.<br />
                                                    Thickness - 0.5mm<br />
                                                    Appearance Color - Light yellowish green<br />
                                                    Emission Color - Green<br />
                                                    Material - PET (polyethylene terephthalate)<br />
                                                    EGL-30U-C25 25mmx10mm TAPE<br />
                                                    EGL-30U-C50 50mmx10mm TAPE<br />
                                                    PLATE - MOQ 10pcs.<br />
                                                    Thickness - 4.2mm<br />
                                                    Material - High brightness phosphorescent resin layer, Aluminum
                                                    base<br />
                                                    S50 UPW-120L L-R-LR 120MMX120MM t4.2mm PLATE<br />



                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/safety/heat_shield1.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">JAPAN HEAT SHIELD
                                                </h5>
                                                <p class="card-text">The film using 99% aluminum purity has the ability
                                                    to
                                                    reflect 98%
                                                    of radiant heat. It is ultra thin with the thickness of only 0.1mm.
                                                    General Purpose Heat Shield Material features a thin and pale satin
                                                    finish.
                                                    THB-FX (1m x 15cm) 13.9 KG.
                                                    <br /><br />
                                                    TBH-FX<br />
                                                    (General Purpose Heatshield)<br />
                                                    (Non-Combustible Certified Product)<br />
                                                    (Electrolytic Corrosion Prevention Treatment)<br />
                                                    0.2MM x 1M x 50M

                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="card border-light bg-light mb-3 p-2">
                                    <div class="row g-0">
                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img src="../assets/rti/safety/heat_shield2.png"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 d-flex justify-content-center align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">JAPAN HEAT SHIELD
                                                </h5>
                                                <p class="card-text">The film using 99% aluminum purity has the ability
                                                    to
                                                    reflect 98%
                                                    of radiant heat. It is ultra thin with the thickness of only 0.1mm.
                                                    General Purpose Heat Shield Material features a thin and pale satin
                                                    finish.
                                                    THB-FR30 (1m x 15cm) 9.8 KG.

                                                    <br /><br />
                                                    TBH-FR30<br />
                                                    (Heat Resistant - Heat Shielding Material)<br />
                                                    (Heat Resistant Temperature 220°)<br />
                                                    0.3MM x 1M x 30M
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div class="row pt-4">
                        <hr class="hr">
                    </div>
                    <div class="row pt-3">
                        <p class="text-center h5">Robotic-Designed Technology, Inc. (“RTI” for brevity) .RTI is
                            primarily engaged in the
                            business of manufacturing, production, sub-contracting, export, import, printing, coating,
                            purchase, sale, and distribution of any form of goods or merchandise which may be the object
                            of commerce such as but not limited to chemicals, paints, industrial or medical facemask and
                            other medical equipment and supplies and in furtherance thereof, provide and/or render after
                            sales service to industrial, medical and commercial facilities, plants or buildings.
                            <br /><br />
                            Please let us know what your company's needs are, and we'll do our best to find them.<br />
                            <span class="text-end">Thank
                                you very much!</span>
                        </p>
                    </div>
                    <RtiJumbotron />

                </div>
                <div class="col-lg-2">

                </div>
            </div>

        </div>
    </div>
    <MikuniFooter />
</template>

<style scoped>
.title {
    color: #0A2060;
    font-family: var(--p-mikuni);
    font-weight: 700;
    animation-name: onLoad;
    animation-duration: 0.5s;
    animation-timing-function: ease;
}

.image {
    width: 100%;
    height: 100%;
    animation-name: onLoad;
    animation-duration: 0.5s;
    animation-timing-function: ease;
}

.card {
    animation-name: onLoad;
    animation-duration: 0.5s;
    animation-timing-function: ease;
}

p {
    color: #0A2060;
    font-weight: 700;
}

.hr {
    border-top: 3px solid #0A2060 !important;
    animation-name: onLoad;
    animation-duration: 0.5s;
    animation-timing-function: ease;
}

.image:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.message {
    color: #0A2060;
    text-align: left;
}

.mes-desc {
    text-align: left;
}

.case:hover {
    background-color: whitesmoke;
    cursor: pointer;
}

@media screen and (max-width :993px) {
    .message {
        text-align: center;
    }

    .mes-desc {
        text-align: center;
    }
}
</style>