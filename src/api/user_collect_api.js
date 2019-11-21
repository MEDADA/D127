import req from "../http/http";

export default{
    getUserCollection:params => req('get','users/userCollection',params),
    removeCollection:params => req('post','users/removeCollection',params),
}