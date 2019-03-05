define([
  'Vuex',
  'libs/ZDClient',
],function(
  Vuex,
  zdClient
) {

  return {
    template: `
      <h1>{{helloWorld}}</h1>
    `,
    computed: {
      ...Vuex.mapState([
        'helloWorld',
      ]),
    },
    mounted() {
      zdClient.resizeFrame(this.$el.scrollHeight);
    },
    updated() {
      zdClient.resizeFrame(this.$el.scrollHeight);
    }
  };
});