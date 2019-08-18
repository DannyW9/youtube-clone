class Request{

  get(searchTerm){
    const url = new URL('https://www.googleapis.com/youtube/v3/search?'),
      params = {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDJ0rX4LcGGQK3etBW6RkVsZlHU9NXYOyo',
        q: searchTerm}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url)
    .then((res) => res.json());
  }
}

export default Request
