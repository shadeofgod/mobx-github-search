const BASE_URL = 'https://api.github.com'

export async function getRepoListBykeywords(q: string) {
  const response = await window.fetch(`${BASE_URL}/search/repositories?q=${encodeURIComponent(q)}`)

  return response.json()
}
