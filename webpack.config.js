
module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: 
    {
      rules: 
      [
        //rule
        { 
          test: /\.js$/,
          use: 
          [
            {
              loader: 'babel-loader',
              options: 
              {
                babelrc: true, presets: ['@babel/preset-env']
              }
            }
          ]
        }
      ]
    }
};
