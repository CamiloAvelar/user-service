const { src, parallel } = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');


function runlint() {
  return src(["*.js", "**/*.js", "!node_modules/**", "!gulpfile.js"])
  .pipe(eslint({ configFile: '.eslintrc.js'}))
  .pipe(eslint.format());
};

function babelnode(done) {
  return nodemon({
    script: 'app.js'
  , exec: './node_modules/.bin/babel-node'
  , watch: './'
  , tasks: ['runlint'] // compile synchronously onChange
  , done: done
  })
};

exports.runlint = runlint;
exports.default = parallel(babelnode, runlint);