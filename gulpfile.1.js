const gulp = require("gulp");
const {sh} = require('sh-thunk');
const fs = require('fs');
const path = require('path');

const projectsFixture = fs.readFileSync(path.join(__dirname, "projectsFixture.json"));
const fixtures = JSON.parse(projectsFixture);

let prjForBuild = fixtures.sections.map((item) => {
  let folder = item.folder
  return item.projects.map(project => { 
    project.section = folder;
    return project 
  });
}).reduce((accum, val) => { 
  return accum.concat(val) 
}, []).filter(obj => { 
  return obj.build === true 
}); // { name : string, folder : string, build: boolen, section: string }

console.log(buildingForProjects);

function bildProjects(folder, section) {
 gulp.task(`webpack-build:${folder}`, sh(`cd ${section}`));
}

gulp.task('webpack-build'), bildProjects(prjForBuild[1].folder, prjForBuild[1].section);



