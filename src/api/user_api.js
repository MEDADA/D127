import req from "../http/http";

export default{
    getUserList: params => req('post', '/users/getUserList', params),
    deleteUser:params => req('post','users/deleteUser',params),
    addUser:params => req('post','users/addUser',params),
}