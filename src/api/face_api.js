import req from "../http/http";

export default {
    getUserFaceDescriptors:params => req('post','/faceDescriptors/getUserFaceDescriptors',params),
    saveFaceDescriptors:params => req('post','/faceDescriptors/saveFaceDescriptors',params),
    getFaceDescriptors:params => req('post','/faceDescriptors/getFaceDescriptors',params),
    getAllFaceName:params => req('get','/faceDescriptors/getAllFaceName',params),
}