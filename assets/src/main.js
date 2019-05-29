require.config({
  paths: {
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    'Vue': 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min',
    'Vuex': 'https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min',
    'ZAFClient': 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk',
  },
  shim: {
    'ZAFClient': {exports: 'ZAFClient'}
  },
  baseUrl: 'src'
});

require([
  'components/App/App',
  'store/store',
  'Vue',
  'libs/ZDClient',
], (
  App,
  store,
  Vue,
  zdClient,
) => {

  let vm = null;
  zdClient.events['INIT']();
  zdClient.events['ON_APP_REGISTERED'](initVueApp);

  function initVueApp(data) {
    vm = new Vue({
      el: '#app',
      store: store,
      render: (h) => { return h(App) },
    });
  }
});