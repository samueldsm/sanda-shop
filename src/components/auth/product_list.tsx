import ProductCard from "./product_card";
import { type Post } from "@/types/product";

export function PostLists({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map((post) => {
        const { id, user, content } = post;

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;

        return (
          <ProductCard
            avatarUrl={avatarUrl}
            content={content}
            key={id}
            userFullName={userFullName}
            userName={userName}
          />
        );
      })}
    </>
  );
}
