<template>
<div>
    <Menu mode="horizontal" :theme="theme1" active-name="22" @on-select='tab'>
        <MenuItem name="11" to='/table' target='_blank'>
            <Icon type="android-list"></Icon>
            人物列表
        </MenuItem>
        <MenuItem name="22">
            <Icon type="ios-people"></Icon>
            人物管理
        </MenuItem>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
    
    <router-view></router-view>
</div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        methods:{
            tab(){
                console.log(arguments);
                
            }
        }
    }
</script>
