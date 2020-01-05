# Jonas Bröms official website & blog

[![Travis Status](https://travis-ci.org/bromso/jonasbroms-www.svg?branch=master)](https://travis-ci.org/bromso/jonasbroms-www)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5efcaa74-8921-43b1-84d3-a5b28d61476b/deploy-status)](https://app.netlify.com/sites/jonasbroms/deploys)

## Dependencies
You need to have these CLI and dependencies in order to download and install everything without a clitch.

| Logo                                                                  | Name                                    |
|-----------------------------------------------------------------------|-----------------------------------------|
| ![Homebrew Logo](https://brew.sh/assets/img/homebrew-256x256.png)     | [Homebrew](https://brew.sh/)            |
|                                                                       | [NVM](https://github.com/nvm-sh/nvm)    |
| ![NodeJS Logo](https://cdn.svgporn.com/logos/nodejs-icon.svg)         | [NodeJS](https://nodejs.org/)           |
| ![Yarn Logo](https://cdn.svgporn.com/logos/yarn.svg)                  | [Yarn](https://yarnpkg.com/)            |
| ![GatsbyJS Logo](https://cdn.svgporn.com/logos/gatsby.svg)            | [GatsbyJS](https://www.gatsbyjs.org/)   |
| ![Netlify Logo](https://cdn.svgporn.com/logos/netlify.svg)            | [Netlifiy](https://www.netlify.com/)    |
| ![Travis Logo](https://cdn.svgporn.com/logos/travis-ci.svg)           | [Travis-CI](https://travis-ci.org/)                      |
| ![Semantic-Release Logo](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LGsE7zdvzHI5cG-XV6p%2Favatar.png?generation=1531025611396529&alt=media)                                            | [Semantic-Release](https://semantic-release.gitbook.io/) |

## Quick start

### Download
Navigate the a directory on your computer were you are working on sites and run this command:
```shell
git clone https://github.com/bromso/jonasbroms-www.git
```

### Install
Navigate the site’s directory and run this command.
```shell
yarn
```

### Start developing
Navigate the site’s directory and start it up.
```shell
yarn develop
```

### Open the source code and start editing!**

| Name      | Local                            | URL                |
|-----------|----------------------------------|--------------------|
| Website   | http://localhost:8000            | www.jonasbroms.com |
| GraphQL   | http://localhost:8000/___graphql |                    |
|           |                                  |                    |

# Contribution

## Submitting changes

If this is the first time you are contributing to an Open-Source project we would really appreciate if you would read the [Open-Source.guide](https://opensource.guide/) before committing.

Please send a [GitHub Pull Request to Odduse](https://github.com/bromso/jonasbroms-www/pull/new/master) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

## Semantic Versioning (Semver)

For transparency into our release cycle and in striving to maintain backward compatibility, Odduse is maintained under the [Semantic Versioning guidelines](https://semver.org). Sometimes we screw up, but we adhere to those rules whenever possible.

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

```sh
$ git commit -m "A brief summary of the commit
>
> A paragraph describing what changed and its impact."
```

| Type            | Explanation                                                    | Semver (eg. 1.0.0) | Git Message Example                              |
|-----------------|----------------------------------------------------------------|--------------------|--------------------------------------------------|  
| fix             | A bug fix                                                      | x.x.1              | fix: update package.json                         |
| feat            | A new feature                                                  | x.1.x              | feat: add new eslint to package.json             |
| BREAKING CHANGE | A major change                                                 | 1.x.x              | BREAKING CHANGE: upgrade to strapi 3 & gatsby 3  |
| docs            | Documentation improvements                                     |                    | docs: update README.md                           |
| style           | Changes made white-space, formatting, missing semi-colons, etc |                    | style: add styles in breadcrumb component        |
| refactor        | A code change that neither fixes a bug nor adds a feature      |                    | refactor: fixed better intendation in index.html |
| perf            | Performance improvements                                       |                    | perf: add tree-shaking to webpack                |
| test            | Add missing tests                                              |                    | test: add test to .travis.yml                    |
| chore           | Changes the build process                                      |                    | chore: update .travis.yml & netlify.toml         |


See the Releases section of our GitHub project for CHANGELOG for each release version of Odduse projects.

### Editor preferences

Editor preferences are available in the editor config file for easy use in common text editors. Read more and download plugins at [Editorconfig](https://editorconfig.org/).


## Coding conventions

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

**Thanks in advance,**
[Jonas Bröms](https://twitter.com/jonasbroms), founder & Creative Director of Odduse
