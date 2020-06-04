<template>
    <div>
        <a-carousel autoplay>
            <div v-for="item in result['data'][0]['entities']">
                <div>
                    <img v-bind:src="item.pic" width="100%" height="10%"/>
                </div>
            </div>
        </a-carousel>
    </div>
</template>

<script>
    import md5 from 'js-md5'

    const request = require('request')
    export default {
        data: function () {
            let result='1'
            return {
                result
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
            getJson(url) {
                let token = this.getToken()
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
                    url: url,
                }
                request.get(options, (error, response, body) => {
                        if (!error) {
                            this.result= JSON.parse(body)
                        } else {
                            console.log('error!')
                            this.result='error!'
                        }
                    }
                )
            }
        },
        created() {
            this.getJson('https://api.coolapk.com/v6/main/indexV8?page=1')
        }
    }

</script>
