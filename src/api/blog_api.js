import req from "../http/http";

export default {
    createBlog:params => req('post','blog/createBlog',params),
    removeBlog:params => req('post','blog/removeBlog',params),
    collectionBlog:params => req('post','blog/collectionBlog',params),
    getBlogList:params => req('post','blog/getBlogList',params),
    getBlogDetail:params => req('post','blog/getBlogDetail',params),

    getBlogCategory:params => req('post','blog/getBlogCategory',params),
}