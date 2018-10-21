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
            test:/\.less$/,use:["less-loader","css-loader","style-loader"]
        },
            {test:/\.(png|jpg|gif)$/,use:["url-loader","file-loader"]
            },
            {test:/\.css$/,use:["css-loader","style-loader"]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}
