const { VueLoaderPlugin } = require("vue-loader")

module.exports = function (wallaby) {

  return {
    files: [
      // loading chai globally
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'src/**/*.js', load: false },
      { pattern: 'src/**/*.vue', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.js', load: false }
    ],

    // compilers: {
    //   '**/*.js': wallaby.compilers.babel()
    // },

    postprocessor: wallaby.postprocessors.webpack({
      resolve: {
        extensions: [".js", ".vue"]
      },
      plugins: [new VueLoaderPlugin()],
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: "vue-loader"
          }
        ]
      }
    }),

    setup: function () {
      window.expect = chai.expect;
      window.__moduleBundler.loadTests();
    },

    trace: true,
  };
};
