<script>
import MikuniNavbar from '../components/mikuniNavbar.vue';
import MikuniFooter from '../components/mikuniFooter.vue';
import { useRouter } from 'vue-router';
export default {
    components:{
    MikuniNavbar,
    MikuniFooter
},
    setup() {
        const router = useRouter()

        function navToHistory(){
            router.push({name: 'mikuniHistory'})
        }

        function navToMvq(){
            router.push({name: 'mikuniMvq'})
        }

        return{
            navToHistory,
            navToMvq
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
                    <div class="row">
                        <div class="col-md-12">
                            <p class="h1 title">COMPANY PROFILE</p>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <img src="../assets/cp/cover.png" class="img-fluid image" style="height: 490px;">
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <table class="table table-light table-hover table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Company Name <span class="jp">社名</span>:</th>
                                        <td>Mikuni Terminals Mechatronics Philippines Corporation (MTMP)
                                            <span class="jp">三国ターミナルメカトロニクスフィリピン株式会社（MTMP）</span> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Representatives <span class="jp">会社代表</span>:</th>
                                        <td>
                                            <ul>
                                                <li>Mr. Kenichi Kiga, President</li>
                                                <li>Mr. Tatsuya Oguri, Vice President</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Headquarters <span class="jp">本部</span>:</th>
                                        <td>Mikuni Toyo, Yokohama, Kanagawa Prefecture
                                            <span class="jp">神奈川県横浜市 三国東洋</span> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Business Site <span class="jp">事業拠点</span>:</th>
                                        <td>Block E-1, Subic Techno Park, Subic Bay Freeport Zone, Philippines
                                            <span class="jp">フィリピン、スービック湾自由港、スービック テクノパーク、</span> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Date Established <span class="jp">設立日</span>:</th>
                                        <td>February 1997 
                                            <span class="jp">1997年2月</span> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Date Acquired <span class="jp">買収日</span>:</th>
                                        <td>December 21, 2019 
                                            <span class="jp">2019年12月21日</span> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Capital <span class="jp">資本</span>:</th>
                                        <td>7.5 M US$ (Including Capital Reserve)
                                            <span class="jp">750万ドル（資本準備金含）</span> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Business Activities <span class="jp">事業一覧</span>:</th>
                                        <td>
                                            <ul>
                                                <li>Mechatronics Assembly Products (ATM Module Components) <span class="jp">メカトロニック組立製品（ATMモジュール）</span></li>
                                                <li>
                                                    Card Readers <span class="jp">カード・リーダー</span>
                                                </li>
                                                <li>
                                                    Precision Parts (Sheet Metal, Shaft, Plastic Molding) <span class="jp">精密部品（板金、シャフト、射出成形）</span>
                                                </li>
                                                <li>
                                                    Plastic Molding Die & Press Stamping Dies <span class="jp">射出成形金型・プレス抜き金型</span>
                                                </li>
                                                <li>
                                                    PCB Production <span class="jp">基板製造</span>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Number of Employees <span class="jp">員数</span>:</th>
                                        <td>
                                            <ul>
                                                <li>
                                                    Japanese Expats <span class="jp"> 日本人社員</span>–  4
                                                </li>
                                                <li>
                                                    Regular/Probationary <span class="jp"> 正社員・試用期間従業員 </span>– 209; Agency <span class="jp"> 請負 </span>- 179
                                                </li>
                                                <li>
                                                    Total <span class="jp"> 全員人数 </span>- 392 (as of June-End 2022 <span class="jp">2022年6月当時</span>)
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <hr class="hr">
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <p class="h1 title">OUR BUILDING SITE</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 pt-2 d-flex align-items-center justify-content-center">
                            <p class="h5 desc">MTMPは、スービック湾に位置するスービック湾自由港（SBFZ）というスービック湾首都
圏庁（SBMA）の管轄下の経済特別区で運営しております。元々米国海軍基地で、1991年米国から復元さ
れ、フィリピン大統領直轄のSBMAの管轄となりました。<br>MTMP is located at Subic Bay Freeport Zone (SBFZ), a region which is centered on Subic Bay, Philippines. It is a special economic zone under the jurisdiction of Subic Bay Metropolitan Authority agency (SBMA), which is under the direct control of the Philippine President after the naval base was restored from the United States (1991).</p>
                        </div>
                        <div class="col-lg-6 pt-2">
                            <div class="google-maps">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=mikuni%20terninals%20&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 pt-2">
                            <div class="overlay">
                            <img src="../assets/cp/build12.png" class="img-fluid image" alt="..." style="height: 360px;">
                            <div class="middle">
                                <div class="text container-fluid" >
                                    <div class="row">
                                        <div class="col">
                                            <p class="h5">Building 1<br>
                                                        6,000m2<br>
                                                        <br>
                                                        Parts Manufacturing<br>
                                                        Die Manufacturing<br>
                                                        PCB Manufacturing</p> 
                                        </div>
                                        <div class="col">
                                            <p class="h5">Building 2<br>
                                                4,800m2<br>
                                                <br>
                                                Assembly Mechatronics<br>
                                                Card Reader Assembly</p> 
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                       </div>
                        </div>
                        <div class="col-lg-6 pt-2">
                            <div class="overlay">
                            <img src="../assets/cp/building3.png" class="img-fluid image" alt="..." style="height: 360px;">
                            <div class="middle">
                                <div class="text container-fluid" >
                                    <div class="row">
                                        <div class="col">
                                            <p class="h5">Building 3<br>
                                                    3,600m2<br>
                                                    <br>
                                                    Parts Warehouse</p> 
                                        </div>
                                        <div class="col">
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <hr class="hr">
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <p class="h1 title">MESSAGES FROM THE MANAGEMENT</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 d-flex align-items-center justify-content-center pt-2">
                            <img src="../assets/cp/pres.png" class="img-fluid image" style="height: 296px; width: 296px;">
                        </div>
                        <div class="col-lg-9 d-flex align-items-center pt-2">
                            <div class="row">
                                <p class="h4 message"><b>Kenichi Kiga,</b> President</p>
                                <p class="h5 mes-desc">MTMPは社内外の信頼を基盤とし、不断の努力と革新によって、お客様に卓越した価
値を提供します。<br>Based on internal and external trust, MTMP provides customers with outstanding
value through constant efforts and innovation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 d-flex align-items-center justify-content-center pt-2">
                            <img src="../assets/cp/vp.png" class="img-fluid image" style="height: 296px; width: 296px;">
                        </div>
                        <div class="col-lg-9 d-flex align-items-center pt-2">
                            <div class="row">
                                <p class="h4 message"><b>Tatsuya Ogiri,</b> Vice President</p>
                                <p class="h5 mes-desc">MTMPは、20年以上に渡って培われた加工部品製造技術、メカトロニク
ス組立技術、品質管理能力に基づいたワンストップ組立製品と個別部
品をお客様に提供します。<br>MTMP provides customers one-stop assembly products and individual parts based on the processed parts manufacturing technology, mechatronics assembly technology, and quality control capabilities cultivated over 20 years.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 d-flex align-items-center justify-content-center pt-2">
                            <img src="../assets/cp/manager.png" class="img-fluid image" style="height: 296px; width: 296px;">
                        </div>
                        <div class="col-lg-9 d-flex align-items-center pt-2">
                            <div class="row">
                                <p class="h4 message"><b>Eugene Kalaw,</b> General Manager</p>
                                <p class="h5 mes-desc">MTMPは、当社全社員の情熱のうえ、才能、能力、ならびに、技
術に対する順応性を大事にしております。それによって、我が社
員のモチベーションを上昇させ、キャリア展望の伸展に繋がれま
す。弊社は、社員が最も貴重な財産だとしており、当社事業にお
ける核そのものです。<br>MTMP values our people because of their dedication, fine talents, proficiency and adaptability to technology. By this, we are able to increase the motivation and career perspective of our Members.
                                <br><br>
We consider our people as our greatest asset and the heart and soul of our operation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <hr class="hr">
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <p class="h1 title">CERTIFICATIONS</p>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <img src="../assets/cp/certs.png" class="img-fluid image" style="height: 823px;">
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-12">
                            <img src="../assets/cp/certs1.png" class="img-fluid image" style="height: 271px;">
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <button class="nav-button h5" @click="navToHistory()">Company History</button>
                        </div>
                        <div class="col-md-6">
                            <button class="nav-button h5" @click="navToMvq">Mission, Vision, and Quality Policy</button>
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

    .jp{
        color: tomato;
    }

    table tbody tr td, table tbody tr th{
        color: #0A2060;
        animation-name: onLoad;
        animation-duration: 0.5s;
        animation-timing-function: ease;
    }

    .table-bordered{
        border-color: #0A2060;
    }

    .hr{
        border-top: 3px solid #0A2060 !important;
    }

    #gmap_canvas{
        width: 100%;
        height: 486px;
    }

    .desc{
        vertical-align: middle;
    }

    .overlay{
        position: relative;
        background-color: black;
    }
    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        }

    .overlay:hover .image {
        opacity: 0.2;
        background-color: black;
    }

    .overlay:hover .middle {
        opacity: 1;
    }

    .text {
        color: white;
        font-size: 16px;
        font-family: var(--p-mikuni);
    }

    .message{
        color: #0A2060;
        text-align: left;
    }

    .mes-desc{
        text-align: left;
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

    @media screen and (max-width :993px) {
        .message{
            text-align: center;
        }

        .mes-desc{
            text-align: center;
        }
    }
</style>