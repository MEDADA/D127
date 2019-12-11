<template>
    <div>
        <div>
            <div>
                face api
            </div>
            <div>
                name:
                <input type="text" v-model="peopleName">
            </div>
        </div>
        <div class="faceName-list">
            <giant-row align="center">
                <giant-col :span="6" v-for="(item,index) in faceListName" :key="index">
                    <van-button type="default" @click="matchFaceSelectHandle(item)"
                                :class="[{'match-face-active' : item === matchName},'faceName-item']">{{item}}
                    </van-button>
                </giant-col>
            </giant-row>

        </div>
        <div style="text-align: center;" v-if="faceImage === ''">
            <upload @uploadSuccess="uploadSuccess"></upload>
        </div>
        <div v-else-if="faceImage !== ''">
            <div class="faceImage-content">
                <img :src="faceImage" ref="checkFace" crossorigin="http://localhost:3000/">
                <div class="removeImage" @click="removeImageHandle">
                    delete
                </div>
                <canvas id="overlay" width="0" height="0"></canvas>
            </div>
            <div>
                score:{{faceScore | toFixed2}}
            </div>
            <button @click="checkFaceHandle" :disabled="faceCheckLoading">check face</button>
            <button @click="saveFaceHandle" :disabled="faceCheckLoading">save face</button>
            <button @click="matchFaceHandle" :disabled="faceCheckLoading">1v1 match face</button>
            <button @click="queryFaceName" :disabled="faceCheckLoading">query face name</button>
        </div>
    </div>
</template>

<script>
    import upload from '../components/upload'
    import giantRow from '../components/giant-row'
    import giantCol from '../components/giant-col'
    import * as faceapi from 'face-api.js';

    export default {
        name: "faceApiDemo",
        data() {
            return {
                faceImage: '',  //识别图片路径
                faceCheckLoading: false,  //识别中标识
                validFaceDescriptors: '',  //有效的面部识别数据
                faceScore: '',  //分数
                peopleName: '',//保存人脸姓名
                matchFaceDescriptors: '',
                matchName: '',
                faceListName: [],
                testFaceMatch: '-0.04005908966064453,0.12580230832099915,0.09347802400588989,-0.10415918380022049,-0.14598610997200012,0.03807493671774864,-0.08017831295728683,-0.07085225731134415,0.1310880333185196,-0.1807282269001007,0.17274291813373566,-0.13233447074890137,-0.22911272943019867,0.021359484642744064,-0.028503723442554474,0.20258425176143646,-0.16197411715984344,-0.1954456865787506,-0.023465055972337723,0.007346950005739927,0.04108467325568199,0.04368811473250389,0.0008401935338042676,0.01780930534005165,-0.12139815837144852,-0.3462434411048889,-0.08709151297807693,-0.016108384355902672,-0.005224836990237236,-0.11046234518289566,-0.09947630763053894,0.023084204643964767,-0.16736896336078644,-0.006546288728713989,0.0036616327706724405,0.10401319712400436,-0.035781919956207275,-0.13560299575328827,0.14456893503665924,-0.0176400113850832,-0.3059490919113159,0.050096962600946426,0.09014961868524551,0.23776103556156158,0.16288194060325623,0.02320842072367668,-0.031223224475979805,-0.10968343168497086,0.04549606144428253,-0.14041122794151306,0.044312480837106705,0.12603695690631866,0.07146579027175903,0.07398167997598648,0.012720650993287563,-0.14019626379013062,0.015149930492043495,0.13489045202732086,-0.09054776281118393,-0.023487700149416924,0.08895180374383926,-0.029956234619021416,0.09172454476356506,-0.1322428435087204,0.252664715051651,0.08183632045984268,-0.08452402055263519,-0.18546275794506073,0.11534035950899124,-0.1312982141971588,-0.11595697700977325,0.06013815104961395,-0.14643912017345428,-0.13899175822734833,-0.25589585304260254,-0.024827327579259872,0.3145880699157715,0.1268526017665863,-0.1853422224521637,0.02679636888206005,0.029247431084513664,-0.00820549763739109,0.12719720602035522,0.18918821215629578,-0.015604153275489807,0.04836469143629074,-0.0681634172797203,-0.004818874876946211,0.27657827734947205,-0.059816181659698486,-0.05582994595170021,0.1624365895986557,-0.0020348886027932167,0.038412295281887054,0.036135271191596985,-0.004895886871963739,-0.08043141663074493,0.049093376845121384,-0.17768476903438568,-0.013578640297055244,-0.04365520179271698,-0.046919357031583786,-0.07518773525953293,0.20444287359714508,-0.15040668845176697,0.11834357678890228,0.009009836241602898,-0.011603730730712414,-0.01413412019610405,0.09226668626070023,-0.04813258722424507,-0.08695856481790543,0.1339893341064453,-0.2194962352514267,0.13100935518741608,0.19874100387096405,0.060355812311172485,0.09443482011556625,0.12428534775972366,0.10952244699001312,0.010896489955484867,0.011226780712604523,-0.22936716675758362,-0.02585158869624138,0.1067490205168724,-0.042805515229701996,0.12078983336687088,0.05930367484688759',
                faceDescriptorsList: []  //所有的脸部识别库
            }
        },
        created() {
            this.getAllFaceName();
        },
        methods: {
            async faceapiInit(dom) {
                // using fetch
                this.faceCheckLoading = true;
                let input = dom;
                console.log(dom.width);
                //  加载静态models文件
                await faceapi.nets.ssdMobilenetv1.loadFromUri('http://192.168.18.29:3000/models');
                await faceapi.nets.faceLandmark68Net.loadFromUri('http://192.168.18.29:3000/models');
                await faceapi.nets.faceLandmark68TinyNet.loadFromUri('http://192.168.18.29:3000/models');
                await faceapi.nets.faceRecognitionNet.loadFromUri('http://192.168.18.29:3000/models');
                //执行面部识别
                const fullFaceDescriptions1 = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();
                console.log(fullFaceDescriptions1);
                if (fullFaceDescriptions1.length > 0) {
                    let domW = input.width;
                    let domH = input.height;
                    this.drawFace(fullFaceDescriptions1, domW, domH);
                    this.faceScore = fullFaceDescriptions1[0].detection.score;
                    if (this.faceScore >= 0.95 && fullFaceDescriptions1[0].descriptor) {
                        this.validFaceDescriptors = fullFaceDescriptions1[0].descriptor
                    }
                } else {
                    alert('未检测到人脸')
                }
                this.faceCheckLoading = false;
            },
            async getAllFaceDescriptors() {
                let res = await this.$api.getAllFaceDescriptors();
                if (res.data.data) {
                    this.faceDescriptorsList = res.data.data;
                }
            },
            matchFace(descriptor) {
                let matchName = this.matchName;
                let matchFaceDescriptors = [new Float32Array(this.matchFaceDescriptors.split(','))];
                console.log(descriptor.toString());
                const faceMatcher = new faceapi.FaceMatcher([
                    new faceapi.LabeledFaceDescriptors(
                        matchName, matchFaceDescriptors
                    )
                ]);
                console.log(faceMatcher);
                const bestMatch = faceMatcher.findBestMatch(descriptor);
                let distance = bestMatch.distance;
                if (distance < 0.25) {
                    console.log(bestMatch.distance);
                } else {
                    console.log('未匹配到对应人脸')
                }
            },
            async queryFaceName() {  //识别脸部姓名
                let descriptor = this.validFaceDescriptors;
                if (!descriptor || descriptor === '') return false;
                await this.getAllFaceDescriptors();
                let faceDescriptors = this.faceDescriptorsList;
                console.log(faceDescriptors);
                let matchFaceDescriptors = faceDescriptors.map((i) => {
                    return new faceapi.LabeledFaceDescriptors(i.name, [new Float32Array(i.descriptors[0].split(','))])
                });
                console.log(matchFaceDescriptors);
                console.log(descriptor.toString());
                const faceMatcher = new faceapi.FaceMatcher(matchFaceDescriptors);
                console.log(faceMatcher);
                const bestMatch = await faceMatcher.findBestMatch(descriptor);
                let distance = bestMatch.distance;
                if (distance < 0.25) {
                    console.log(bestMatch);
                    this.peopleName = bestMatch.label
                } else {
                    console.log('未匹配到对应人脸')
                }
            },
            drawFace(landmarks, w, h) {
                let canvas = document.getElementById('overlay');
                const displaySize = {width: w, height: h};
                faceapi.matchDimensions(canvas, displaySize);

                const resizedDetections = faceapi.resizeResults(landmarks, displaySize);
                // draw detections into the canvas
                faceapi.draw.drawDetections(canvas, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            },
            uploadSuccess(result) {
                if (result[0]) {
                    this.faceImage = result[0].imageUrl;
                }
            },
            removeImageHandle() {
                this.faceImage = ''
            },
            checkFaceHandle() {
                let checkFace = this.$refs.checkFace;
                this.faceapiInit(checkFace)
            },
            async saveFaceHandle() {
                let peopleName = this.peopleName;
                let descriptors = this.validFaceDescriptors.toString();
                if (peopleName !== '' || descriptors !== '') return false;
                let res = await this.$api.saveFaceDescriptors({
                    peopleName, descriptors
                });
                console.log(res);
            },
            matchFaceHandle() {  //匹配人脸
                this.matchFace(this.validFaceDescriptors)
            },
            async getAllFaceName() { //获取人脸库有效识别所有姓名
                let res = await this.$api.getAllFaceName();
                try {
                    this.faceListName = res.data.data;
                } catch (e) {
                    console.log(e);
                }
            },
            async matchFaceSelectHandle(peopleName) {
                let res = await this.$api.getFaceDescriptors({peopleName});
                try {
                    if (res.data.descriptors) {
                        this.matchName = peopleName;
                        this.matchFaceDescriptors = res.data.descriptors[0];
                        console.log(this.matchFaceDescriptors);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        },
        filters: {
            toFixed2: function (val) {
                if (!val || val === '') return 0;
                return Math.round(val * 100) / 100
            }
        },
        components: {
            upload,
            'giant-row': giantRow,
            'giant-col': giantCol
        }
    }
</script>

<style scoped lang="scss">
    .faceImage-content {
        position: relative;
        width: 100%;

        img {
            width: 100%;
        }

        .removeImage {
            position: absolute;
            right: 0;
            top: 0;
            width: 20px;
            height: 20px;
        }
    }

    .match-face-active {
        border: 1px solid #ccc;
    }

    .faceName-item {
    }

    .faceName-list {
        display: flex;
        flex-wrap: wrap;
    }

    #overlay {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>