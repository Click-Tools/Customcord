# Customcord - Personalize Your Enmity App

Enhance your Enmity app with a touch of personality using Customcord!

Customcord allows you to customize various aspects of your Enmity app, including its icon, name, and version. Follow these simple steps to make your Enmity app uniquely yours:

## Setting Up Your Custom Enmity App

### 1. App Icon

Begin by selecting an image that you'd like to use as the app icon. Save this image as "logo.png" in your project directory. If you prefer a different name or location for your icon, you can customize it by editing the "logoPath" property in the `config.js` file.

### 2. App Name

Customize your Enmity app's name to reflect your unique branding. To do this, locate the "appName" property in the `config.js` file and update it with your desired app name.

```js
export default {
    logoPath: "logo.png",
    appName: "Your_Custom_App_Name",
    version: "https://ipa.aspy.dev/discord/testflight/Discord_197.0_49832.ipa"
}
```

### 3. App Version

To specify the version of your app, visit [https://ipa.aspy.dev/discord](https://ipa.aspy.dev/discord) and copy the direct link to the desired IPA file. It should resemble something like this:

```
https://ipa.aspy.dev/discord/testflight/Discord_197.0_49832.ipa
```

Paste this link into the "version" property within your `config.js` file.

## Automate Your Workflow

To streamline the process of building your custom Enmity app, you can enable GitHub Actions and manually trigger the workflow. Once enabled, your app will automatically build in the future, saving you time and effort.

With Customcord, your Enmity app can reflect your unique style and branding. Give it a personalized touch today!
