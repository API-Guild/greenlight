<p align="center">
  <a href="https://api-guild.github.io/greenlight/">
    <img alt="Gatsby" src="./static/images/greenlight.png" height="45" />
  </a>
</p>
<h1 align="center" style="color: #0DF2C1">
  Greenlight
</h1>
<p align="center">
   guerrilla data for analysts with deadlines.
</p>

<br>

> _"Gatsby believed in the green light, the orgiastic future that year by year recedes before us. It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther…. And one fine morning— So we beat on, boats against the current, borne back ceaselessly into the past."_

<br>

## What is Greenlight?

The mission of this project is to provide a way for people who want to host their data visualizations at their own domains with little effort and time. To accomplish this, the project is built using Gatsby, which to quote them is _”a modern web framework for blazing fast websites.”_ To find out more about Gatsby you can visit their [GitHub Repo](https://github.com/gatsbyjs/gatsby).

## Table of Contents

- [What is Greenlight?](#what-is-greenlight)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [LICENSE](#license)
- [Maintainers](#maintainers)

## Installation

1. Install the Gatsby CLI

   ```bash
   # install the Gatsby CLI from NPM
   npm install -g gatsby-cli
   ```

2. Install Greenlight Starter

   ```bash
   # create a new Gatsby site using the Greenlight starter
   gatsby new {your-project-name} https://github.com/API-Guild/greenlight
   ```

3. Start the site in `develop` mode.
   
   ```bash
   # start the develop server from your new project
   cd {your-project-name}
   gatsby develop
   ```

4. Open your site in the browser at `http://localhost:8000`

## Usage

After installation you can add your markdown or MDX files to the `/content/blog` directory. It is recommended you create folders within this directory and store any assets, like images, in the folder created for each post you create.

Here is a diagram of the basic file structure of Greenlight.

```bash
.
|-.cache
|-content/blog/{your-files-here}
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

## Contributions

We gladly welcome any contributions whether it is fixing bugs, documentation, or adding features. You can request an issue, fork the repo, work on the issue and then submit a pull request.

<br>

## LICENSE

The BSD Zero Clause License (0BSD)

Copyright (c) 2020 Gatsby Inc.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

<br>

## Maintainers

[Stephen Price](https://github.com/stephenlprice) <br>
[Trevor Smith](https://github.com/trevorsmithbanjo)
