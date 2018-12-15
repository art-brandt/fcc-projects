const gulp = require('gulp');

function test(callback) {
  console.log('done');
  callback();
}

test.displayName = 'test';
test.description = 'test task';

gulp.task('test', test);