const BASE_URL = "https://avocado-backend.onrender.com";
// const BASE_URL = "http://localhost:3030";

export async function fetchAsync(
  method: "GET" | "POST" | "DELETE" | "PUT",
  url: string,
  body?: string,
) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const accessToken: string = JSON.parse(
    localStorage.getItem("accessToken") as string,
  );
  if (accessToken) {
    headers.Authorization = `Token ${accessToken}`;
    // console.log(headers);
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    mode: "cors",
    headers,
    body,
  });
  if (response.status === 422) {
    // eslint-disable-next-line no-alert
    alert("Введены неверные данные");
  }
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  // console.log(result);

  return result;
}

export function get<T>(url: string): Promise<T> {
  return fetchAsync("GET", url, undefined);
}

export function post<T>(url: string, body: string): Promise<T> {
  return fetchAsync("POST", url, body);
}

export function del(url: string) {
  return fetchAsync("DELETE", url);
}

export function put(url: string, body: string) {
  return fetchAsync("PUT", url, body);
}
