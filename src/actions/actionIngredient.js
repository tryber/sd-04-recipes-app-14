export const ING_F_SELECTED = 'ING_F_SELECTED';
export const ING_D_SELECTED = 'ING_D_SELECTED';

export const setFoodIngredient = (food) => ({
  type: ING_F_SELECTED,
  food,
});

export const setDrinkIngredient = (drink) => ({
  type: ING_D_SELECTED,
  drink,
});
