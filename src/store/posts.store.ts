import { Http } from "@/services/Http";
import type { Post, Comment } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

export const usePostsStore = defineStore("posts", () => {
  const posts: Ref<Post[]> = ref([]);

  async function getPosts(
    { start = 0, limit = 10 }: { start?: number; limit?: number }
  ): Promise<void> {
    posts.value = await Http.get<Post[]>(`/posts?_start=${start}&_limit=${limit}`);
  }

  async function getPost(id: string): Promise<{ post: Post; comments: Comment[] }> {
    const post = await Http.get<Post>(`/posts/${id}`);
    const comments = await Http.get<Comment[]>(`/posts/${id}/comments`);

    return { post, comments };
  }

  return { posts, getPosts, getPost };
});
