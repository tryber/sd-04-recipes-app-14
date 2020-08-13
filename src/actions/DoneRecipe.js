export const DONE_FILTER = 'DONE_FILTER';

export const DoneRecipeFilter = (donevalue) => ({
  type: DONE_FILTER,
  donevalue,
});
