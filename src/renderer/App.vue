<template>
    <div id="app">
        <h1>content is {{result}}</h1>
        <input v-model="url">
        <a-button type="primary" @click="test()"></a-button>
        <!--
        <router-view></router-view>
        -->
    </div>
</template>

<script>
    export default {
        name: 'coolapk',
        data: function () {
            let result = 1
            let url = 'https://www.baidu.com'
            return {
                result,
                url
            }
        },
        methods: {
            test() {
                this.$http.get(this.url).then(response => {
                    this.result = response.data
                })
            }
        }
    }
</script>

<style>
    /* CSS */
</style>
