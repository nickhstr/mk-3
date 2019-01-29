export const modules = {
  MyIntro: () => import('./my-intro').then(module => module.register),
};
