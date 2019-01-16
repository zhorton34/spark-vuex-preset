let path = require('path');

export default {
        resolve: {
            modules: [
                path.resolve(__dirname, 'vendor/laravel/spark-aurelius/resources/assets/js'),
                'node_modules'
            ],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@View': path.resolve(__dirname, 'resources/js/views'),
                '@Slot': path.resolve(__dirname, 'resources/js/slots'),
                '@Trait': path.resolve(__dirname, 'resources/js/traits'),
                '@Asset': path.resolve(__dirname, 'resources/js/assets'),
                '@Routes': path.resolve(__dirname, 'resources/js/routes'),
                '@Boot': path.resolve(__dirname, 'resources/js/bootstrap'),
                '@Layout': path.resolve(__dirname, 'resources/js/layouts'),
                '@Section': path.resolve(__dirname, 'resources/js/sections'),
                '@Component': path.resolve(__dirname, 'resources/js/components'),
                '@Broadcast': path.resolve(__dirname, 'resources/js/broadcasters'),
                '@Controller': path.resolve(__dirname, 'resources/js/controllers'),
                '@NovaSpark': path.resolve(__dirname, 'resources/nova.spark/components'),
                '@SparkComponent': path.resolve(__dirname, 'resources/js/spark-components'),
            }
        }
    }