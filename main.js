const newSocialMedia = {
  instagram: 'dereckkvs',
  twitter: 'spfckkjj',
  youtube: 'maykbrito',
  facebook: 'dereck.vinicius.75',
  github: 'DereckSilva'
}

function changeMediaSocial() {
  for (let i of oldSocialMedia.children) {
    const creatingLinks = i.getAttribute('class')

    i.children[0].href = `https://www.${creatingLinks}.com/${newSocialMedia[creatingLinks]}`
  }
}

changeMediaSocial()

function getLinkGitHubProfile() {
  const url = `https://api.github.com/users/${newSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      firstName.innerText = data.name
      loginUser.href = data.html_url
      nameUser.innerText = data.login
      bioUser.innerText = data.bio
    })
}

getLinkGitHubProfile()
