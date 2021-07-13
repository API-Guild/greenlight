---
title: Quick Start
date: "2021-04-27"
description: "How to use and deploy Greenlight"
---

![Greenlight](./greenlight-sideways.png)

<br/>

[Greenlight](/) is a starter template for deploying websites 
built for data visualization using the most advanced techniques in modern web development.
This template is a great choice for people who want to setup a data driven blog or website and its 
also a great option for companies looking to build a data portal for an embedded analytics use case.
 
It relies on the <Ext to="https://www.gatsbyjs.com/" color="has-text-gatsby">Gatsby</Ext>
frontend framework to generate static files, thus freeing you from server maintenance and deployment
while giving you multiple hosting options to fit any budget. In most cases you should be able to host
and deploy your [Greenlight](/) site for free.

Follow this guide to go from zero to hero within minutes, and you'll have a running site in no time!

<br/>

## Development Environment

If you are completely new to web development and tools such as [Node.js](https://nodejs.dev/learn), don't sweat it. There is a fantastic tutorial 
available in the <Ext to="https://www.gatsbyjs.com/docs/tutorial/part-0/" color="has-text-gatsby">Gatsby documentation</Ext> 
covering all of the tools you will need to get started. To be proficient using this template you will need a basic understanding of [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/Css/), and [JavaScript](https://www.w3schools.com/js/DEFAULT.asp) - either that or a willingness to learn which beats anything.

At this point, only section [0. Set Up Your Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-0/) 
is required to continue, however feel free to complete this brief tutorial at your own pace as it will certainly come in handy when you
start customizing your own site. 

Before moving on, make sure that you have at least done the following:

- [ ] Read [0. Set Up Your Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-0/) from the tutorial
- [ ] Installed a [Command Line](https://www.gatsbyjs.com/docs/tutorial/part-0/#background-knowledge) application
- [ ] Installed [Node.js](https://www.gatsbyjs.com/docs/tutorial/part-0/#nodejs)
- [ ] Installed [Git](https://www.gatsbyjs.com/docs/tutorial/part-0/#git)
- [ ] Installed [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)
- [ ] Installed [Visual Studio Code](https://code.visualstudio.com/) (or a similar IDE such as [Sublime](https://www.sublimetext.com/) or [Atom](https://atom.io/))
- [ ] Obtained a [Github Account](https://github.com/) (saves your work on the cloud and it can also host your site for free!)
- [ ] **Optional** - obtained a [Gatsby Cloud Account](https://www.gatsbyjs.com/dashboard/signup/) (also provides free hosting and better suited for more complex sites)

<Callout
  title="You can do it!"
  subtitle={<p>If you are new to all of this, keep in mind that everything you will learn here will be useful to you outside of using <strong>Greenlight</strong> to build a website. You may find that you enjoy working with these technologies, leading you down a new and rewarding path.</p>}
/>

## First Steps

1. If you don't already have the [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) installed, 
then you can do so by using this command to install it globally to your machine.

```bash
# npm is bundled with nodejs
# it serves as a 'package manager' that can install programs on your computer
npm install -g gatsby-cli
```

2. Next you will install the [Greenlight](/) starter. Make sure to add your own project name.

```bash
# this uses the gatsby-cli
gatsby new {your-project-name} https://github.com/API-Guild/greenlight
```

3. The template should be ready as soon as you install it. Change directory to your project's folder:

```bash
# navigates the terminal to enter your project's folder
cd {your-project-name}
```

4. Run the site with the `development server` which simulates a live site that previews any changes you may make.

```bash
# npm can also run scripts besides installing packages
npm start
# or
npm run develop
```

5. Open your browser and enter `http://localhost:8000` in the URL bar.

<Callout
  color="success"
  title="Success!"
  subtitle="Congratulations on completing the first step in this journey. Kudos to you if this was the first time you setup a development environment."
/>

## Scripts

The `development server` will serve up a site locally on your computer and it will perform updates as you change any of the files in
your new project.

When you open `http://localhost:8000` you will see this development preview. Take a minute to navigate around and get a feel for the site. 
This is your template and you can change as little or as much as you would like to. 

Take a look at a file called `package.json`. The first section describes the template and its licensing. Feel free to change the name, 
description and license to suit you. Right below that you will find a section called `scripts`. It should look like this:

```json{2,3,4,6,7,9}
"scripts": {
    "start": "npm run develop",
    "develop": "gatsby develop",
    "clean": "gatsby clean",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md,mdx}\"",
    "build": "gatsby build --prefix-paths",
    "serve": "gatsby serve --prefix-paths",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1",
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  },
```

You started the `development server` by typing one of these commands in your terminal:

```bash
npm start
# or
npm run develop
```

The other scripts work in the same way. Here is why and how you would use them:

```bash
# clears the cache, sometimes you may want to start the development server 
# or a build from scratch because you ran into an error
npm run clean

# once you are satisfied with any changes you have made, you can 'build'
# the final static files that can be shared with the internet
npm run build

# you can preview how the static files generated from 'build' will look by running 
# 'serve' this will make them available on http://localhost:9000/{pathPrefix}
# since you have not yet changed the value of pathPrefix, for now it will be
# http://localhost:9000/greenlight
npm run serve

# the 'deploy' command, runs 'build' and then pushes the static files to your
# Github repository so that they may be hosted for free via Github Pages
npm run deploy
```

We will cover customizing your site and deployments in more detail further along this guide.

If you just want to move on to learning how to write a blog post and embed a data visualization
we’ll go over those steps in the next chapter: [Blog Posts](/docs/blog-posts).
