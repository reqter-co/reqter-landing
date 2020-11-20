import fetch from "isomorphic-unfetch";
interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
interface HttpRequest extends RequestInit {
  clientid?: string;
}
async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  const body = await response.json();
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  if (body.data) {
    response.parsedBody = body.data;
  } else {
    response.parsedBody = body;
  }

  return response;
}
export async function get<T>(
  path: string,
  args: HttpRequest
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(path, { method: "get", ...args }));
}

export async function post<T>(
  path: string,
  body: any,
  args: HttpRequest
): Promise<HttpResponse<T>> {
  return await http<T>(
    new Request(path, { method: "post", body: JSON.stringify(body), ...args })
  );
}

export async function put<T>(
  path: string,
  body: any,
  args: HttpRequest
): Promise<HttpResponse<T>> {
  return await http<T>(
    new Request(path, { method: "put", body: JSON.stringify(body), ...args })
  );
}
