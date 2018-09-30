<template>
<div class="info_box">
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="姓名">
            <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="年龄">
            <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem label="地址">
            <Input v-model="formLeft.input3"></Input>
        </FormItem>
    </Form>
    <Button type="success" long>提交</Button>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>
<style scoped>
    .info_box{
        width: 600px;
        margin: auto
    }
</style>
