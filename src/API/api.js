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