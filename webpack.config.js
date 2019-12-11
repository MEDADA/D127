module.exports = {
    mode:'production',
    alias:{
        '~':resolve(__dirname,'src'),
        'component':path.resolve(__dirname,'../component'),
        'http':path.resolve(__dirname,'../http'),
    }
};