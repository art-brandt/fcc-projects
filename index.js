const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

const projectsFixture = fs.readFileSync(path.join(__dirname, "projectsFixture.json"));
const projects = JSON.parse(projectsFixture);

app.use(express.static(path.join(__dirname, "main")));
app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "main", "index.html"));
});

projects.sections.forEach(section => {
  section.projects.forEach(project => {
    if (section.folder !== "front-end-libraries") {
      app.use(`/${project.folder}`, express.static(path.join(__dirname, section.folder, project.folder)));
      app.get(`/${project.folder}`, (req, res) => {
        res.sendfile(path.join(__dirname, section.folder, project.folder, "index.html"));
      });
    } else {
      app.use(`/${project.folder}`,express.static(path.join(__dirname, section.folder, project.folder, "dist")));
      app.get(`/${project.folder}`, (req, res) => {
        res.sendfile(path.join(__dirname, section.folder, project.folder, "index.html"));
      });
    }
  });
});

app.get("/fixture/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`server listen on ${PORT} port`);
});