// Fetches data from the backend API

export async function fetchAllRecipes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`);
  return res.json();
}

export async function fetchSingleRecipe(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`);
  return res.json();
}

export async function updateRecipe(id: number, data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function createRecipe(data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteRecipe(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return res.json();
}

export async function fetchAllBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
  return res.json();
}

export async function fetchSingleBlog(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`);
  return res.json();
}

export async function createBlog(data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateBlog(id: number, data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteBlog(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return res.json();
}