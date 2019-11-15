import req from '../http/http'

export const api = {
    getUserList: params => req('post', '/users/getUserList', params),
    deleteUser:params => req('post','users/deleteUser',params),
    addUser:params => req('post','users/addUser',params),

    createBlog:params => req('post','blog/createBlog',params),
    removeBlog:params => req('post','blog/removeBlog',params),
    collectionBlog:params => req('post','blog/collectionBlog',params),
    getBlogList:params => req('post','blog/getBlogList',params),
    getBlogDetail:params => req('post','blog/getBlogDetail',params),

    getBlogCategory:params => req('post','blog/getBlogCategory',params),
    uploadImg:(params,config) => req('post','common/upload',params,config),
    getImageList:params => req('post','images/getImageList',params),
    getUserCollection:params => req('get','users/userCollection',params),
    removeCollection:params => req('post','users/removeCollection',params),
    //face api
    getUserFaceDescriptors:params => req('post','/faceDescriptors/getUserFaceDescriptors',params),
    saveFaceDescriptors:params => req('post','/faceDescriptors/saveFaceDescriptors',params),
    getFaceDescriptors:params => req('post','/faceDescriptors/getFaceDescriptors',params),
    getAllFaceName:params => req('get','/faceDescriptors/getAllFaceName',params),
    //egg api
    login:params  => req('post','/serviceEgg/login',params),
    register:params  => req('post','/serviceEgg/register',params),
    getPermission:params => req('post','/serviceEgg/userPermission',params),
    getPermissionList:params => req('get','/serviceEgg/permissionList',params)
};

export default api
