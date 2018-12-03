const gulp = require("gulp");
const shell = require('gulp-shell');
const fs = require('fs');

const projectsFixture = fs.readFileSync(path.join(__dirname, "projectsFixture.json"));
const projects = JSON.parse(projectsFixture);

gulp.task('webpack-build', shell.task(
  `cd ${folder}/${project} && npm install --only=dev && npm install && npm run build`
));

