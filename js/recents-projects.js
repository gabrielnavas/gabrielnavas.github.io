function createProjectListItem(title, githubUrl, description, techs) {
  const projectList = document.querySelector('.recents-projects-list');

  const listItem = document.createElement('li');
  listItem.classList.add('recents-projects-list-item');
  listItem.setAttribute('data-tooltip', 'Preview on GitHub');

  const link = document.createElement('a');
  link.href = githubUrl;
  link.target = '_blank';

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.textContent = title;

  const subtitleDiv = document.createElement('div');
  subtitleDiv.classList.add('subtitle');
  subtitleDiv.textContent = description;

  const techList = createTechList(techs)

  link.appendChild(titleDiv);
  link.appendChild(subtitleDiv);
  link.appendChild(techList);
  listItem.appendChild(link);

  projectList.appendChild(listItem);
}

function randomColor() {
  const index = Math.floor(Math.random() * 6);
  const colors = ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow'];
  return colors[index];
}

function createTechList(techs) {
  const techList = document.createElement('ul');
  techList.classList.add('tech-list');

  const techItems = techs.map(tech => {
    const techItem = document.createElement('li');
    techItem.classList.add('tech-item');
    const color = randomColor();
    techItem.classList.add(`${color}`);
    techItem.textContent = tech;
    return techItem;
  });

  for (var techItem of techItems) {
    techList.appendChild(techItem);
  }

  return techList
}
