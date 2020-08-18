export const BUILD_SEARCH_MEAL_VIEW = 'BUILD_SEARCH_MEAL_VIEW';
export const BUILD_SEARCH_DRINK_VIEW = 'BUILD_SEARCH_DRINK_VIEW';
export const BUILD_SEARCH_ORIGIN_VIEW = 'BUILD_SEARCH_ORIGIN_VIEW';

export function buildSearchMealBtn(isShow) {
  return { type: BUILD_SEARCH_MEAL_VIEW, isShow };
}

export function buildSearchDrinkBtn(isShow) {
  return { type: BUILD_SEARCH_DRINK_VIEW, isShow };
}

export function buildSearchOriginBtn(isShow) {
  return { type: BUILD_SEARCH_ORIGIN_VIEW, isShow };
}
