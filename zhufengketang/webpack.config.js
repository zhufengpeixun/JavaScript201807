// 最终运行在node环境下；遵循common.js规范；
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry :"./src/index.js",
    output:{
        filename:"build.js"
    },
    module:{
        rules:[{
            test:/\.js$/,use:"babel-loader",exclude:/node_modules/
        },{
            test:/\.less$/,use:["style-loader","css-loader","less-loader"]
        },
            {test:/\.(png|jpg|gif)$/,use:"url-loader"
            },
            {test:/\.css$/,use:["style-loader","css-loader"]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}
