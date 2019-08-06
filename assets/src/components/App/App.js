define([
  'text!./template.html',
  'Vuex',
  'libs/ZDClient',
],function(
  template,
  Vuex,
  zdClient,
) {

  return {
    template,
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