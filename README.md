# Greenlight

<img src="./docs/images/greenlight_image.png" width=400>

<br>

### guerrilla data for analysts with deadlines.

<br>

> _"Gatsby believed in the green light, the orgiastic future that year by year recedes before us. It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther…. And one fine morning— So we beat on, boats against the current, borne back ceaselessly into the past."_

<br>
<hr>

## What is Greenlight?

The mission of this project is to provide a way for people who want to host their data visualizations at their own domains with little effort and time. To accomplish this, the project is built using Gatsby, which to quote them is _”a modern web framework for blazing fast websites.”_ To find out more about Gatsby you can visit their [GitHub Repo](https://github.com/gatsbyjs/gatsby).

## Table of Contents

1. [Installation](#Installation)

## Installation

1. Install the Gatsby CLI

   ```
   npm install -g gatsby-cli
   ```

2. Install Greenlight Starter

   ```
   gatsby new {your-project-name} https://github.com/API-Guild/greenlight
   ```

3. Start the site in `develop` mode.

   - First `cd your-project-name`.
   - Then run `gatsby develop` in the command line.

4. Open your site in the browser at `http://localhost:8000`

## Usage

After installation you can add your markdown or MDX files to the `/content/blog` directory. It is recommended you create folders within this directory and store any assets, like images, in the folder created for each post you create.

Here is a diagram of the basic file structure of Greenlight.

```
.
|-.cache
|-content/blog/{your-files-here}
|-docs
|-node_modules
|-public
|-src
|-static
|-.gitignore
|-.prettierignore
|-.prettierrc
|-gatsby-browser.js
|-gatsby-config.js
|-gatsby-node.js
|-LICENSE
|-package-lock.json
|-package.json
|-README.md
```
