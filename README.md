[![Netlify Status](https://api.netlify.com/api/v1/badges/bdc2ebf9-7d72-4f48-b250-3673b01a4c35/deploy-status)](https://app.netlify.com/sites/davidsvlog/deploys)

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful-userland/gatsby-contentful-starter.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter https://github.com/contentful-userland/gatsby-contentful-starter
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn run setup`.

![Command line dialog of the yarn run setup command](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/setup.jpg 'Command line dialog of the yarn run setup command')

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

`yarn run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.

## Roadmap

- [x] [make the starter completely responsive](https://github.com/contentful-userland/gatsby-contentful-starter/issues/2)
- [ ] [include tags](https://github.com/contentful-userland/gatsby-contentful-starter/issues/3)
- [x] [support traced placeholders](https://github.com/contentful-userland/gatsby-contentful-starter/issues/4)
- [ ] [add i18n](https://github.com/contentful-userland/gatsby-contentful-starter/issues/6)

## Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
