Give your Enmity app a touch of personality with Customcord!

First add an image you want to be the app icon, name it logo.png, else edit the "logoPath" property in `config.js`.

Then edit the "appName" property in `config.js`.

Finally, if you want to change the version of the app go to https://ipa.aspy.dev/discord and copy the direct link of an ipa file.

It will look something like this: https://ipa.aspy.dev/discord/testflight/Discord_197.0_49832.ipa

You're `config.js` file should look a little something like this

```js
export default {
    logoPath: "logo.png",
    appName: "Enmity",
    version: "https://ipa.aspy.dev/discord/testflight/Discord_197.0_49832.ipa"
}
```

Then, enable GitHub actions and manually trigger the workflow.

It will automatically build in the future.