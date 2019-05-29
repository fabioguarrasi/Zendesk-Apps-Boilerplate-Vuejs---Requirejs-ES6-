define([
  'ZAFClient'
],function(
  ZAFClient
) {

  let CLIENT = null;
  let APP_SETTINGS = null;

  return {
    events: {
      INIT() {
        CLIENT = ZAFClient.init();
      },
      ON_APP_REGISTERED(cb) {
        return CLIENT.on('app.registered', (data) => {
          APP_SETTINGS = data.metadata.settings;
          return cb(data);
        });
      }
    },

    /**
     * It returns a specified setting the entire settings object.
     * @param {String || null} property
     * @returns String
     */
    getAppSettings(property) {
      return APP_SETTINGS[property] !== undefined
        ? APP_SETTINGS[property]
        : APP_SETTINGS;
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