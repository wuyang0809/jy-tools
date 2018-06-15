<template>
<div id="app">
    <app-header></app-header>
    <b-container fluid style="height:100%">
        <b-row align-h="start" >
            <b-col md="2" style="border:1px solid #aaa; height:1000px"> 
                <app-aside></app-aside>
            </b-col>  
            <b-col Offset="1" class="pt-4" >  
                <router-view></router-view>    
            </b-col> 
        </b-row>
    </b-container>
</div> 
</template>

<script>
import AppHeader from './components/Header.vue'
import AppAside from './components/Aside.vue'
export default {
    components: {
        AppHeader,
        AppAside
    },
    name: 'App'
}
</script>

<style>

*{
  margin:0px;
  padding:0px;
}
#app,html,body{
height:100%;
}
</style>
