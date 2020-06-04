<template>
    <div id="app">
        <meta name="referrer" content="no-referrer"/>
        <a-layout>
            <a-layout-sider>
                <a-menu
                        :default-selected-keys="['1']"
                        :default-open-keys="['sub1']"
                        mode="inline"
                        theme="dark"
                >
                    <a-menu-item key="1">
                        <a-icon type="mail"/>
                        Navigation One
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="calendar"/>
                        Navigation Two
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer>Footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>

    export default {
        name: 'coolapk'
    }
</script>

<style>
    /* CSS */
</style>
