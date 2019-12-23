const path = require('path');
module.exports = {
    mode:'production',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "src"),
            '_c': path.resolve(__dirname, "src/components"),
        }
    }
};