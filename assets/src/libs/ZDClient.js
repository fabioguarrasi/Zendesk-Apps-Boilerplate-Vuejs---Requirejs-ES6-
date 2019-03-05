define([
  'ZAFClient'
],function(
  ZAFClient
) {
  let CLIENT = null;

  return {
    events: {
      INIT() {
        CLIENT = ZAFClient.init();
      },
      ON_APP_REGISTERED(cb) {
        return CLIENT.on('app.registered', (data) => {
          return cb(data);
        });
      }
    },

    /**
     * It sets the frame height using on the passed value.
     * If no value has been passed, 80 will be set as default heigth.
     * @param {Int} newHeight
     */
    resizeFrame(appHeight) {
      CLIENT.invoke('resize', {width: '100%', height: appHeight +'px'});
    }
  };
});