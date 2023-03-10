import type { RootState } from "@/store/lib/state";
import type { ActionContext, Module } from "vuex";
import { Http } from "@/services/Http";
import type { Post } from "@/types";

interface PostsState {
  posts: Post[];
}

export const postsModule: Module<PostsState, RootState> = {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    posts: state => state.posts,
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
  },
  actions: {
    async getPosts(
      context: ActionContext<PostsState, RootState>,
      { start = 0, limit = 10 }: { start: number; limit: number }
    ): Promise<Post[]> {
      const posts = await Http.get<Post[]>(
        `/posts?_start=${start}&_limit=${limit}`
      );
      context.commit("setPosts", posts);
      return posts;
    },
    async getPost(
      context: ActionContext<PostsState, RootState>,
      { id }: { id: string }
    ): Promise<{ post: Post; comments: Comment[] }> {
      const post = await Http.get<Post>(`/posts/${id}`);
      const comments = await Http.get<Comment[]>(`/posts/${id}/comments`);

      return { post, comments };
    },
  },
};
