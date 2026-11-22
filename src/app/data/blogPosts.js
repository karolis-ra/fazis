import { electricityAtHomePost } from "./electricityAtHomePost";
import { electricalQuantitiesPost } from "./electricalQuantitiesPost";

export const blogPosts = [electricityAtHomePost, electricalQuantitiesPost];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
