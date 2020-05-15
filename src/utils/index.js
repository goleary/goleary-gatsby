import { timeParse, timeFormat } from "d3-time-format";

export const getUniqueTagsFromPosts = (posts) => [
  ...new Set(
    posts
      .map(({ tags }) => tags)
      .flat()
      .filter((tag) => tag !== null)
  ),
];

export const formatDate = (date) => timeFormat("%b %e, %Y")(timeParse("%Y-%m-%d")(date));
