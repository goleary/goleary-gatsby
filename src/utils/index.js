import { timeParse, timeFormat } from "d3-time-format";

export const getUniqueTagsFromPosts = (posts) => {
  return Object.keys(getTagCounts(posts));
};

export const getTagCounts = (data) =>
  data
    .map(({ tags }) => tags)
    .flat()
    .filter((tag) => tag !== null)
    .reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue]: 1 + (accumulator[currentValue] || 0),
      }),
      {}
    );

export const formatDate = (date) =>
  timeFormat("%b %e, %Y")(timeParse("%Y-%m-%d")(date));
