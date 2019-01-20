fetch("/fixture/projects")
  .then((response) => { return response.json(); })
  .then((data) => {
    let projectList = document.getElementById('projectList');
    data.sections.forEach(section => {
      const sectionList = new Section(section)
      projectList.appendChild(sectionList.sectionDOM);
    });
  });

class Section {
  constructor(section) {
    this.section = section;
    this.projects = section.projects;
    this.projectListOfSection = () => {
      const items = this.projects.map(project => {
        const li = document.createElement('li');
        li.className = "section__item list-group-item";
        const link = document.createElement('a');
        link.href = `./${project.folder}`;
        link.innerHTML = `<h3>${project.name}</h3>`;
        li.appendChild(link);
        return li;
      });
      const ul = document.createElement('ul');
      items.forEach(item => {
        ul.appendChild(item);
      });
      const section = document.createElement('li');
      section.className = "projects__section list-group col-6";
      section.innerHTML = `<h2>${this.section.name}</h2>`;
      section.appendChild(ul);
      return section;
    }
  };

  get sectionDOM() {
    return this.projectListOfSection();
  }
}

