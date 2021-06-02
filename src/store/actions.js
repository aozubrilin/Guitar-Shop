export const ActionType = {
  LOAD_DATA: 'LOAD_DATA',
};

export const loadData = (data) => ({
  type: ActionType.LOAD_DATA,
  payload: data,
});
