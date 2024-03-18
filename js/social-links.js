function createSocialLink(githubUrl, imagePath) {
  const socialLinksContainer = document.querySelector('.right__container');

  const socialLink = document.createElement('div');
  socialLink.classList.add('social_link');

  const link = document.createElement('a');
  link.target = '_blank';
  link.href = githubUrl;

  const img = document.createElement('img');
  img.src = imagePath;

  link.appendChild(img);
  socialLink.appendChild(link);

  socialLinksContainer.appendChild(socialLink);
}