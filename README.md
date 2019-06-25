# Zendesk Apps Boilerplate (Require + Vuejs + ES6)
The scope of this project is a to have a ready to go app boilerplate to start building zendesk apps using:

* RequireJs (as we don't bundle any javascript code, we can't use webpack)

* Vuejs

* ES6 (making sure that IE11 support is not required for the project you are going to work on)

Below I'll describe some customization I've included in the boilerplate and how/when to use them.

## **manifest.json**

### IS_PRODUCTION Parameter

Looking at the `manifest.json` file you may notice the presence of the paramenter
`IS_PRODUCTION`. This hidden parameter will help you when you work `secure` settings.

```json
{
  "name": "IS_PRODUCTION",
  "type": "hidden",
  "default": "true"
}

```

When you work with `secure` settings, you should set in your ajax request the
property `secure` as `true` and refer to your secure paramenter using the following pattern:
`{{setting.your_secure_param_name}}`.

The code for an ajax request in produciton
ENV should look like:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: 'Basic {{setting.your_secure_paramenter}}',
  },
  secure: true,
  ...
})
```

Unfortunately this configuration won't work
while you are still working on a local ENV. This would force you to
keep the following structure while you work on a local ENV and then switch it
before realising the app:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: `Basic ${zdClient.getSetting('your_secure_paramenter')}`,
  },
  secure: false,
  ...
})
```

By adding `IS_PRODUCTION` parameter setting you can forget about changing this
configuration every time you switch between ENVs. Here is the trick:

The default value is `"true"`, while the `config.json` file will override this with `false`.
In `ZDClient.js` I've added a method called `isProduction()` which will return the current value
for `IS_PRODUCTION` paramenter. Then your code will look like:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: `Basic ${zdClient.isProduction() ? '{{setting.your_secure_paramenter}}' : zdClient.getSetting('your_secure_paramenter')}`,
  },
  secure: zdClient.isProduction(),
  ...
})
```
**Note:**
This trick will only work if you run `zat server -c config.json`

## **assets/iframe.html**

## **assets/main.js**

## **assets/src/components/App.js**

## **assets/src/store/store.js**

## **assets/src/libs/ZDClient.js**
