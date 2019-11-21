import req from "../http/http";

export default {
    uploadImg:(params,config) => req('post','common/upload',params,config),
    getImageList:params => req('post','images/getImageList',params),
}