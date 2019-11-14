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
        </div>
    </div>
</template>

<script>
    import upload from '../components/upload'
    import * as faceapi from 'face-api.js';

    export default {
        name: "faceApiDemo",
        data() {
            return {
                faceImage: '',  //识别图片路径
                faceCheckLoading: false,  //识别中标识
                validFaceDescriptors: '',  //有效的面部识别数据
                faceScore: '',  //分数
                peopleName: ''
            }
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
                    // this.matchFace(fullFaceDescriptions1[0].descriptor);
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
            matchFace(descriptor) {
                let _descriptor = descriptor;
                const faceMatcher = new faceapi.FaceMatcher([
                    new faceapi.LabeledFaceDescriptors(
                        'Hani', [new Float32Array(this.matchFace.split(','))]
                    )
                ]);
                console.log(faceMatcher);
                console.log(_descriptor.toString());
                const bestMatch = faceMatcher.findBestMatch(_descriptor);
                let distance = bestMatch.distance;
                console.log(bestMatch);
                if (distance < 0.25) {
                    console.log(bestMatch.distance);
                } else {
                    alert('未匹配到对应人脸')
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
                    this.faceImage = result[0].imageUrl
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
                let res = await this.$api.saveFaceDescriptors({
                    peopleName, descriptors
                });
                console.log(res);
            }
        },
        filters: {
            toFixed2: function (val) {
                if (!val || val === '') return 0;
                return Math.round(val * 100) / 100
            }
        },
        components: {
            upload
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

    #overlay {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>