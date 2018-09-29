const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path:'/table',
                component: (res)=>require(['./views/table.vue'],res)
            }
        ]
    }
];
export default routers;