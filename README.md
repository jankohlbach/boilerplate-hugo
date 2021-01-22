# Boilerplate for a Hugo site with Netlify CMS as backend


## Good to know

* this project is initially build to use with GitLab and GitLab Pages, thus the .gitlab-ci.yml

* you probably should be able to use it with GitHub just as well, you need to adjust the deployment of course to GitHub Actions and the config file for netlify-cms

* the boilerplate is using the `@use-syntax` of scss which is the recommended way of doing things, however, hugo was using deprecated libsass (not supporting `@use`) and is changing right now to dartsass\
embedded dartsass though is still in beta and expected to release stable in Q1 2021, so to get this to work right now you need to install a dartsass binary and add it to your $PATH variable (more info on this [here](https://gohugo.io/hugo-pipes/scss-sass/#options)) - or don't rely on the `@use-syntax` yet


## Prerequisites

what you need to have installed to run this:

* [hugo](https://gohugo.io/getting-started/installing/)

* [npm](https://nodejs.org/en/)


## Steps to get this working

* clone repository:

   `git clone https://gitlab.com/jan-kohlbach/boilerplates/hugo.git`

* install dependencies:

   `npm i`

* start hugo server:

   `hugo server -D`

* open the site in the browser:

   `localhost:1313`


### Netlify CMS

* start proxy server to enable the local development backend without a remote repository connected:

   `npx netlify-cms-proxy-server`

* start parcel to bundle the backend located in `/netlify-cms`

   `npm run backend-dev`

* to later build the backend production code, following command should be run:

   `npm run backend-build`

* open the backend in the browser:

   `localhost:1313/admin`


## How to work with this

... coming soon
