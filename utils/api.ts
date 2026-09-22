const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface QueryOptions {
  method?: HttpMethod;
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
}

export async function query<T = unknown>(
  endpoint: string,
  { method = 'GET', body, params, headers = {} }: QueryOptions = {},
): Promise<T> {
  const url = new URL(`${STRAPI_HOST}/${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const res = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: STRAPI_TOKEN ? `Bearer ${STRAPI_TOKEN}` : '',
      ...headers,
    },
    body: body ? JSON.stringify({ data: body }) : undefined,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.message || `Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}
