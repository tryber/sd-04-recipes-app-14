export const CAROUSEL_INDEX = 'CAROUSEL_INDEX';

export const actionCarousel = (indexInitial, indexLast) => ({
  type: CAROUSEL_INDEX,
  indexInitial,
  indexLast,
});
