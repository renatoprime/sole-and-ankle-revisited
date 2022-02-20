// breakpoints in px
const breakpoints = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${breakpoints.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${breakpoints.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${breakpoints.laptop / 16}rem)`,
};
