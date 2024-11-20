import { revalidatePath, revalidateTag } from "next/cache";


export const revalidate = 3600 // invalidate every hour

export default async function PostsPage() {
    const response = await fetch("http://localhost:8080/posts", {
        next: {
            // revalidate: 3600,
            tags: ["posts"]
        }
    });
    const posts = await response.json();

    async function addNewPost() {
        "use server"
        const response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Test content',
                views: 500
            })
        });

        if (response.ok) {
            // revalidatePath("/posts");
            revalidateTag("posts")
        }
    }

    return (
        <>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
            <form action={addNewPost}>
                <button type="submit">ADD POST</button>
            </form>
        </>
    );
}