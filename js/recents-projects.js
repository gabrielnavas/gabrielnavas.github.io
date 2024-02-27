function createProjectListItem(title, githubUrl, description, tech) {
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

  const techList = document.createElement('ul');
  techList.classList.add('tech-list');

  const techItem = document.createElement('li');
  techItem.classList.add('tech-item');
  techItem.textContent = tech;

  techList.appendChild(techItem);
  link.appendChild(titleDiv);
  link.appendChild(subtitleDiv);
  link.appendChild(techList);
  listItem.appendChild(link);

  projectList.appendChild(listItem);
}
