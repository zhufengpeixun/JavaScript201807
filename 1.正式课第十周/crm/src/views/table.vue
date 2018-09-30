<template>
    <Table width="800" height="400" border :columns="columns" :data="data4"></Table>
</template>
<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'age',
                        width: 200,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 200
                    },
                    /* {
                        title: '省',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '市',
                        key: 'city',
                        width: 100
                    }, */
                    {
                        title: '地址',
                        key: 'address',
                        width: 300
                    },
                    /* {
                        title: '邮编',
                        key: 'zip',
                        width: 100
                    }, */
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        className:"ddddd",
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style:{
                                        marginRight:'4px'
                                    },
                                    on:{
                                        click: (...arg)=>{
                                            console.log(params);
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on:{
                                        click: (...arg)=>{
                                            console.log(params);
                                            this.remove(params)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    }
                ]
            }
        },
        created(){
            //发送ajax请求  获取table列表
            axios.get('/list').then((data)=>{
                console.log(data);
                this.data4 = data.data.data;
            })
        },
        methods:{
            remove(obj){
                this.data4.splice(obj.index,1);
            }
        }
    }
</script>
