define([
  'Vue',
  'Vuex',
], (
  Vue,
  Vuex,
) => {

  Vue.use(Vuex);

  return new Vuex.Store({
    state: {
      helloWorld: 'Hello World!',
    },
  });
});