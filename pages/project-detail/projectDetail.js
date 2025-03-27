async function getProject(uuid) {
  let foundProject = null;

  const api = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  await fetch(api)
    .then(data => data.json())
    .then(projects => {

      projects.forEach(project => {
        if (project.uuid === uuid.toString()) {
          console.log("encontré: ", project)
          foundProject = project
        }
      });

    })
  return foundProject;
}


getProject(2).then(project => {

  const uuid = project.uuid;
  console.log("Resultado:", uuid);
  c
});