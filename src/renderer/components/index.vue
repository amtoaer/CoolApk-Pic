<template>
    <div>
        <mu-paper :z-depth="1">
            <mu-grid-list :cell-height='500'>
                <mu-grid-tile v-for="item in this.tmp" :key="item.entityId">
                    <img :src="item.pic">
                    <span slot="title">{{item.title}}</span>
                    <mu-button slot="action" icon @click="handleClick(item.picArr,item.title)">
                        <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-grid-tile>
            </mu-grid-list>
            <mu-flex justify-content="center">
                <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
            </mu-flex>
        </mu-paper>
    </div>
</template>

<script>
    import md5 from 'js-md5'

    const request = require('request-promise')
    export default {
        data: function () {
            return {
                result: 'init',
                tmp: [],
                current: 1
            }
        },
        methods: {
            getToken() {
                const device_ID = "8513efac-09ea-3709-b214-95b366f1a185"
                // 获取秒级时间戳
                let time = Date.parse(new Date()) / 1000
                let tmp1 = '0x' + time.toString(16)
                let tmp2 = md5(time.toString())
                let tmp3 = 'token://com.coolapk.market/c67ef5943784d09750dcfbb31020f0ab?' + tmp2 + '$' + device_ID + '&com.coolapk.market'
                let tmp4 = md5(btoa(tmp3))
                let token = tmp4 + device_ID + tmp1
                return token
            },
            getJson(page) {
                let token = this.getToken()
                let url = 'https://api.coolapk.com/v6/picture/list?page=' + page
                let options = {
                    headers: {
                        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; MI 8 SE MIUI/9.5.9) (#Build; Xiaomi; MI 8 SE; PKQ1.181121.001; 9) +CoolMarket/9.2.2-1905301",
                        "X-App-Id": "com.coolapk.market",
                        "X-Requested-With": "XMLHttpRequest",
                        "X-Sdk-Int": "28",
                        "X-Sdk-Locale": "zh-CN",
                        "X-Api-Version": "9",
                        "X-App-Version": "9.2.2",
                        "X-App-Code": "1903501",
                        "X-App-Device": "QRTBCOgkUTgsTat9WYphFI7kWbvFWaYByO1YjOCdjOxAjOxEkOFJjODlDI7ATNxMjM5MTOxcjMwAjN0AyOxEjNwgDNxITM2kDMzcTOgsTZzkTZlJ2MwUDNhJ2MyYzM",
                        "Host": "api.coolapk.com",
                        "X-Dark-Mode": "0",
                        "X-App-Token": token,
                    },
                    uri: url,
                    json: true
                }
                return request(options)
            },
            async getPage(page) {
                scrollTo(0, 0)
                this.result = await this.getJson(page)
                this.tmp = []
                for (let item of this.result['data']) {
                    if (item['entities'] !== undefined) {
                        for (let info of item['entities']) {
                            this.tmp.push(info)
                        }
                    }
                }
            },
            handleClick(picArr, title) {
                this.$router.push({
                    name: 'detail',
                    params: {
                        picArr: picArr,
                        title: title
                    }
                })
            }
        },
        watch: {
            current: function (current) {
                this.getPage(current)
            }
        },
        created: function () {
            this.getPage(1)
        }
    }
</script>
