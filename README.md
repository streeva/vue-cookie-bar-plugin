# Vue-Cookie-Bar-Plugin

[![Unit tests](https://github.com/streeva/vue-cookie-bar-plugin/actions/workflows/TestPlugin.yml/badge.svg)](https://github.com/streeva/vue-cookie-bar-plugin/actions/workflows/TestPlugin.yml) ![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg "Vue 2 Compatible")

## Usage

#### Install

`npm i -S @streeva/vue-cookie-bar-plugin`

#### Quickstart

Add to your app main js or ts file:

```js
import CookieBar from '@streeva/vue-cookie-bar-plugin'

Vue.use(CookieBar, {
  havenOptions: {
    domains: ['.example.com'],
    services: [
      {
        name: 'google-tag-manager',
        purposes: ['analytics'],
        type: 'google-tag-manager',
        inject: true,
        options: {
          id: 'GTM-T4P1234',
        },
      },
    ],
  },
})
```

Then place the following in a single main Vue file such as `App.vue`:

```html
<CookieBar>
  <template v-slot:title>🍪 Can we use optional cookies?</template>
  <template v-slot:text>
    These cookies help us keep our website safe and give you a better
    experience. We won’t turn them on unless you accept. Want to know more
    or adjust your preferences? Here's our
    <a href="https://www.example.co.uk/legal/cookies/">cookie policy</a>
  </template>
</CookieBar>
```

### Haven

#### The global $haven object

The plugin uses and exposes [Haven](https://chiiya.github.io/haven/) as `$haven`. A list of options to inject into `havenOptions` when initialising the plugin can be found [here](https://chiiya.github.io/haven/getting-started.html#usage).

#### Updating cookie preferences

__Note:__ The plugin was _only_ intended to show the cookie notification (and capture the preferences), but it can also display cookie preferences that allow updates to cookie consent (such as on a cookies policy page) where consent can be updated.

You can add this functionality easily by adding `<div id="cookie-preferences"></div>` anywhere on a page or in a component. See [here](https://chiiya.github.io/haven/cookie-preferences.html#options) for a list of available options.

---

## Development

This is the dev environment for the plugin and includes a single page with the cookie bar and cookie preferences.

The plugin is packaged up whenever there is a release published. It is then published to NPM under streeva org.

### Install modules

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies a library for production

This command is run when a push to master occurs, note that if the push hasn't changed the version property in package.json then nothing will be pushed the GitHub package repository.

```
npm run build-library
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Testing the plugin within another project

If you want to test or edit this project from within another project without uploading and downloading to NPM each time then [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) provides a useful way to be able to symlink straight to this project. E.g.

```
cd ~/src/ui                        # go into the dir of your main project
npm link ../vue-cookie-bar-plugin  # link the dir of your dependency
```

The symlink can be seen or deleted by visiting `/lib/node_modules`. See the [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) docs for more info.

### Example workflow for altering and testing the plugin in donor UI
Change to cookie plugin directory:
- `cd ~/src/vue-cookie-bar-plugin`
- Make your alterations
- `npm run build-library`

Change to UI directory:
- `cd ~/src/ui`
- `rm -rf node_modules`
- `npm i`
- `npm link ../vue-cookie-bar-plugin`
- `npm run dev`