module.exports  = {
  devServer:{
      publicPath:'/',
      open :false,
      port:8080,
      contentBase:false,
      hot:true
    },
  module:{
     rules :[
      {
            test: /\.md$/,
            loaders: [
            "./node_modules/babel-loader",
            "./src/markdown2htmlPreview.js"
            ]
     }
    ]
  }
}
