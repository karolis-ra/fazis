import { breakerPost } from "./breakerPost";
import { cablePost } from "./cablePost";
import { rcdPost } from "./rcdPost";

export const blogPosts = [
  cablePost,
  breakerPost,
  rcdPost,
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
