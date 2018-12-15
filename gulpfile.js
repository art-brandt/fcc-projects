const gulp = require("gulp");
const {sh} = require('sh-thunk');
const fs = require('fs');
const path = require('path');

const projectsFixture = fs.readFileSync(path.join(__dirname, "projectsFixture.json"));
const fixtures = JSON.parse(projectsFixture);

let prjsForBuild = fixtures.sections.map((section) => {
  let sectionFolder = section.folder
  return section.projects.map(project => { 
    project.path = `./${sectionFolder}/${project.folder}/`;
    project.name = project.folder;
    delete project.folder;
    return project;
  });
}).reduce((accum, val) => {
  return accum.concat(val) 
}, []).filter(obj => {
  return obj.build === true;
}).map(item => {
  delete item.build;
  return item;
}); // { name : string, path: string }

prjsForBuild.forEach(project => {
  gulp.task('build:' + project.name, sh(`cd ${project.path} && npm run build`));
  gulp.task('heroku-postbuild:' + project.name, 
    sh(`cd ${project.path} && npm install && npm run build`
  ));
});

gulp.task('build:all', gulp.series(
    prjsForBuild.map(project => { return 'build:'+ project.name })
));

gulp.task('heroku-postbuild:all', gulp.series(
  prjsForBuild.map(project => { return 'heroku-postbuild:'+ project.name })
));



