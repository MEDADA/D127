import req from '../http/http'
import face_api from './face_api'
import blog_api from './blog_api'
import user_collect_api from './user_collect_api'
import user_api from './user_api'
import file_upload_api from './file_upload_api'
export const api = {
    //egg api
    login:params  => req('post','/serviceEgg/login',params),
    register:params  => req('post','/serviceEgg/register',params),
    getPermission:params => req('post','/serviceEgg/userPermission',params),
    getPermissionList:params => req('get','/serviceEgg/permissionList',params),
};

export default Object.assign(
    api,
    user_api,
    face_api,
    blog_api,
    user_collect_api,
    file_upload_api
)
