export const updateDrawer = (state, opened) => {
  state.drawerState = opened;
  //   console.log(state.drawerState);
};

export const bil = (state, value) => {
  state.bil = value;
};
export const buss = (state, value) => {
  state.buss = value;
};
export const bussTrain = (state, value) => {
  state.bussTrain = value;
};
export const cykel = (state, value) => {
  state.cyekl = value;
};
export const totalCarbon = (state, value) => {
  state.totalCarbon = value;
};
export const totalDistance = (state, value) => {
  state.totalDistance = value;
};
export const totalAnswers = (state, value) => {
  state.totalAnswers = value;
};
