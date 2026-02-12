// lib/graphql.ts
export async function gqlRequest<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHQL_ADMIN_SECRET}`,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}