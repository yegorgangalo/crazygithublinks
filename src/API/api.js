import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

export function getOwner (owner) {
    return axios.get(`users/${owner}`);
}

export function getOwnerRepo(owner, repo) {
    return axios.get(`repos/${owner}/${repo}`);
}

export function getContributors(owner, repo) {
    return axios.get(`repos/${owner}/${repo}/contributors`);
}

export function getShortURL(longURL) {
    return axios.get(`https://tinyurl.com/api-create.php?url=${longURL}`)
}

export function checkTinyURL(tinyHash) {
    return axios.get(`https://tinyurl.com/${tinyHash}`)
}

export function starRepo(owner, repo, token) {
  return axios.put(`user/starred/${owner}/${repo}`, {}, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${token}`
    }
  })
}

export function checkIsStarredRepo(owner, repo, token) {
  return axios.get(`user/starred/${owner}/${repo}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${token}`
    }
  })
}

