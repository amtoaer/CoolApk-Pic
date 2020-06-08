<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">
        <meta name="referrer" content="no-referrer"/>
        <mu-appbar color="primary">
            <mu-button icon slot="left" @click="open=true">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            <p slot="default" align="center">
                酷图
            </p>
        </mu-appbar>
        <mu-drawer :open.sync="open" :docked="false" :right="false">
            <mu-list>
                <mu-list-item @click="changePath('index')" button>
                    <mu-list-item-action>
                        <mu-icon value="home"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>主页</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'coolapk',
        data: function () {
            return {
                open: false
            }
        },
        methods: {
            changePath(to) {
                this.open = false
                this.$router.push({
                    name: to
                })
            }
        }
    }
</script>
