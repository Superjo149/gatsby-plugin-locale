# gatsby-plugin-locale

Locale support for gatsby.

## How to use

### Install package

`npm install --save gatsby-plugin-locale`

### Add a plugin to your gatsby-config.js

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-locale`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/language`,
      // supported language
      languages: ["en", "fr"],
      // language file path
      defaultLanguage: "en",
      // option to redirect to `/en/` when connecting `/`
      redirect: true,
      // ignore paths for translations.
      ignoredPaths: [`/ignored-path`],
    },
  },
]
```
