import { unstable_cache } from 'next/cache';
import { cache } from 'react';

export const getPosts = unstable_cache(
    cache(async function getPosts() {
        const response = await fetch("http://localhost:8080/posts");
        const posts = await response.json();
        return posts;
    }), null, { revalidate: 3600, tags: ["posts"] }
);