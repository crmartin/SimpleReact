module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: { // pick names for components, tell webpack where to find
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // loader name as in package json
        query: { // instructions for handling files
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, // regex to match any jsx files
        exclude: /(node_modules|bower_components)/ // specify what not to parse
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
