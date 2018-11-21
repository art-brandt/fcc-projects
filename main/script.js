fetch("/fixture/projects")
  .then((response) => { return response.json(); })
  .then((data) => {
    console.log(data);
  });
