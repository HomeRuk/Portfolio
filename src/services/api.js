import axios from 'axios'

// Private

// -
// Fetch Github api with given path
// -
export function fetchGitHubAPIWithPath (path) {
  let header = {
    headers: {
      'Authorization': `token fbedabf134e561e8515b0c939d4f7b7b17f749ff`
    }
  }
  let pm = axios.get(`https://api.github.com${path}`, header)
  return pm
}

// Get repo data with scopeName "user/repo"
function fetchRepoInfo (scopeName) {
  return fetchGitHubAPIWithPath(`/repos/${scopeName}`)
}

// -
// Public Export

// -
// Fetch Repository Info with scope (eg 'HomeRuk/Doofon_SeniorProject')
// response would look like
// https://api.github.com/repos/HomeRuk/Doofon_SeniorProject
export function fetchRepository (scopeName) {
  return Promise.all([fetchRepoInfo(scopeName)])
  .then((values) => {
    const [ repo ] = values
    return {
      name: repo.data.name,
      description: repo.data.description,
      // avatar_url: repo.data.organization.avatar_url,
      stargazers_count: repo.data.stargazers_count,
      open_issues_count: repo.data.open_issues_count,
      forks_count: repo.data.forks_count,
      language: repo.data.language,
      subscribers_count: repo.data.subscribers_count
    }
  })
}
