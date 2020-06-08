<template>
    <div>
        <mu-text-field v-model="basePath" label="保存路径" full-width></mu-text-field>
        <mu-button @click="choosePath()" color="primary" full-width>修改</mu-button>
        <mu-grid-list :cell-height='500'>
            <mu-grid-tile v-for="index in this.length" :key="index">
                <img v-bind:src="picArr[index-1]">
                <span slot="title">{{title}}-{{index}}</span>
                <mu-button @click="download(picArr[index-1],title,index)" slot="action" icon>
                    <mu-icon value="cloud_download"></mu-icon>
                </mu-button>
            </mu-grid-tile>
        </mu-grid-list>
        <mu-snackbar color='success' :open.sync="open">
            <mu-icon left value="check_circle"></mu-icon>
            {{message}}
            <mu-button flat slot="action" color="#fff" @click="color.open = false">Close</mu-button>
        </mu-snackbar>
    </div>
</template>

<script>
    const request = require('request')
    const fs = require('fs')
    const path = require('path')
    const os = require('os')
    const {ipcRenderer} = require('electron')
    export default {
        data: function () {
            return {
                picArr: [],
                title: '',
                length: 0,
                open: false,
                basePath: '',
                message: '',
                timer: ''
            }
        },
        methods: {
            choosePath() {
                ipcRenderer.send('openDialog', 'openDirectory')
                ipcRenderer.on('selectedItem', this.getPath)
            },
            getPath(event, path) {
                this.basePath = path
            },
            download(url, title, index) {
                const fileName = title + '-' + index + '.jpeg'
                const fullPath = path.join(this.basePath, fileName)
                let stream = fs.createWriteStream(fullPath)
                request(url).pipe(stream).on('close', () => {
                    this.message = fileName+"保存成功!"
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.open = true
                    this.timer = setTimeout(() => {
                        this.open = false
                    }, 2000)
                })
            }
        },
        created() {
            scrollTo(0, 0)
            this.picArr = this.$route.params.picArr
            this.title = this.$route.params.title
            this.length = this.picArr.length
            this.basePath = os.homedir()
        }
    }
</script>
