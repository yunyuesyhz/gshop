<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {

    mounted(){
        // this.$store.dispatch('getAddress') // 调用 store 的 action
        this.getAddress()
        this.getUserInfo()
    },

    methods:{
        ...mapActions(['getAddress','getUserInfo']) // 映射成方法
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    width 100%
    height 100%
    background #f5f5f5
</style>