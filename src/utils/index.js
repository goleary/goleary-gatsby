import { timeParse, timeFormat } from "d3-time-format";

export const formatDate = (date) =>
  timeFormat("%b %e, %Y")(timeParse("%Y-%m-%d")(date));
