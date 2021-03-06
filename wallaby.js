module.exports = function (wallaby) {

  return {
    files: [
      // loading chai globally
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.js', load: false }
    ],

    // compilers: {
    //   '**/*.js': wallaby.compilers.babel()
    // },

    postprocessor: wallaby.postprocessors.webpack({}),

    setup: function () {
      window.expect = chai.expect;
      window.__moduleBundler.loadTests();
    }
  };
};
