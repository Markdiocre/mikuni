<script>
import MikuniFooter from '../components/mikuniFooter.vue';
import MikuniNavbar from '../components/mikuniNavbar.vue';
import RtiJumbotron from '../components/rtiJumbotron.vue';

export default {

    components: {
        MikuniNavbar,
        MikuniFooter,
        RtiJumbotron
    }

}


</script>
    
<template>
    <MikuniNavbar />
    <div class="container-fluid pt-5">
        <div class="container-fluid pt-3">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <RtiJumbotron />
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">MISSION</p>
                            <p class="h4">Is to establish a standard and world-class robotic coating, printing,
                                injection, part-assembly, medical equipment and facemask manufacturing business that is
                                sustainable, cost saver and eco-friendly. We are committed in making our services to
                                lead the industry in terms of utilizing the advance and high-technology machineries to
                                our customers.
                            </p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">VISSION</p>
                            <p class="h4">Shall provide the highest standard and professional services to our clients,
                                and build a harmonious relationship to our valued customers and the community.
                            </p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">QUALITY POLICY</p>
                            <p class="h4">We, at <b>Robotic-Designed Technology, Inc.</b> aims to provide our
                                customers/business partners with superior product and services that will satisfy their
                                needs on Price, Quality and Delivery.
                                <br><br>

                                To Achieve that we shall:

                            <ul class="h5">
                                <li>Understand each customer requirements and expectations</li>
                                <li>Comply with safety and work standards, both local and international</li>
                                <li>Provide continues trainings to our employees</li>
                                <li>Continually improve our system with applied creativity</li>
                                <li>Maintain good relationship with our suppliers</li>
                                <li> Provide enough resources</li>
                                <li>Communicate effectively within our organization and with our customers/business
                                    partners</li>
                                <li>Maintain 5S at all time</li>
                            </ul>

                            </p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-12">
                            <p class="h1 title">ENVIRONMENTAL POLICY </p>
                            <p class="h4">We, at <b>Robotic-Designed Technology, Inc.</b> manufacturing of various
                                plastic products (injected, coated and printed) are committed to prevent pollution on
                                air, land, water; ensure the preservation of natural resources and provide appropriate
                                health and safety work environment by complying with all international, local, community
                                based and customer specific legal requirements.
                                <br /><br />
                                To achieve this, the following shall be implemented:
                                <ul class="h5">
                                    <li> management created environmental committee to implement all environmental
                                    Operational controls.</li>
                                    <li>Periodically monitor the environmental performance to identify and ensure continual
                                    Improvement of the Environmental Management System.</li>
                                    <li>Continuous education to our people to increase their awareness＆knowledge in
                                    identifying and controlling our significant aspects, impacts and compliance to legal
                                    requirements.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <RtiJumbotron />
                </div>
                <div class="col-md-2">

                </div>
            </div>

        </div>
    </div>
    <MikuniFooter />
</template>
    
<style scoped>
.title {
    color: #0A2060;
    font-weight: 700;
    animation-name: onLoad;
    animation-duration: 1s;
    animation-timing-function: ease;
}

ul{
    animation-name: onLoad;
    animation-duration: 1s;
    animation-timing-function: ease;
}

.h4 {
    animation-name: onLoad;
    animation-duration: 1s;
    animation-timing-function: ease;
}
</style>