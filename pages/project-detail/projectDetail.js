window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const uuid = params.get("uuid");

  const defaultUuid = "4";
  const finalUuid = uuid || defaultUuid;

  getProject(finalUuid).then(project => {
    if (!project) {
      alert("Proyecto no encontrado.");
      return;
    }

    document.getElementById("title-project").textContent = project.name;
    document.querySelector(".simplify-description").textContent = project.description;
    document.querySelector(".date").textContent = project.completed_on;
    document.querySelector(".project-img-main").src = project.image;
    document.querySelector(".project-img-main").alt = project.name;

    document.querySelector(".simplify-content").innerHTML = `<p>${project.content}</p>`;
  });
};

async function getProject(uuid) {
  const api = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  try {
    const response = await fetch(api);
    const projects = await response.json();
    return projects.find(project => project.uuid === uuid);
  } catch (error) {
    console.error("Error al obtener el proyecto:", error);
    return null;
  }
}
