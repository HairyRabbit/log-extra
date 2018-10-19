import path from 'path'
import { DefinePlugin } from 'webpack'

export default [{
  mode: process.env.NODE_ENV,
  node: false,
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('.'),
    filename: 'browser.js',
    library: 'Logger',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new DefinePlugin({
      ['process.env.TARGET']: JSON.stringify('browser')
    })
  ],
  externals: [

  ]
},{
  mode: process.env.NODE_ENV,
  node: false,
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('.'),
    filename: 'index.js',
    library: 'Logger',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new DefinePlugin({
      ['process.env.TARGET']: JSON.stringify('terminal')
    })
  ],
  externals: [
    'chalk'
  ]
},{
  mode: process.env.NODE_ENV,
  entry: path.resolve('src/socket.js'),
  node: false,
  output: {
    path: path.resolve('.'),
    filename: 'socket.js',
    library: 'Logger',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [

  ],
  externals: [
    'chalk',
    'isomorphic-ws',
    './'
  ]
},{
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: path.resolve('src/inject-position-plugin.js'),
  node: false,
  output: {
    path: path.resolve('.'),
    filename: 'inject-position.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [

  ],
  externals: [

  ]
}]
