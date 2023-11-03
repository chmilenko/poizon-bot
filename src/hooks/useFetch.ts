const apiUrl = process.env.REACT_API_BASE;
export const fetchData = (path: string, options?: object) => {
  const url = `${apiUrl}${path}`;
  const headers = new Headers();
  return fetch(url, { headers, ...options });
};
