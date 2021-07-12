---
title: Blog Posts
date: "2021-04-23"
description: "How to write blog posts in markdown and embed a visualization"
---

Now that you completed the [Quick Start](/docs/quick-start) section of this guide, we are ready to learn how to add
content to a [Greenlight](/) site with minimal programming requirements. This project is powered by <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext>, allowing content creators to author blog posts using a straightforward syntax built for writing documents as it is simpler than [HTML](https://html.com/). It also means that as a site manager you do not need a database to store all of the text you will be writing, instead you can store the <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext> ( `.md` files) on [Github](https://github.com/) and let this app generate all of the [HTML](https://html.com/) for you when you execute this command:

```bash
npm run build
```

Let's give it a try and write your first blog post - don't worry, you can always remove it later.

<br/>

## Writing a blog post

Notice that your project has the following structure:

```bash {3}
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

1. There are many files and folders in the directory, to make a post you need to use the `/content/blog` directory. ***Please note that Greenlight is setup to only to generate content from Markdown `.md` files using this directory so you must put your files here for them to render properly.***
2. Once you have navigated to the `/content/blog` directory, create a new folder called **'my-first-post'**.
3. Inside that folder, add a file called **'my-first-post.md'** that will be your post.
4. Inside the new file, add a title, description and date for the post using the format below.

```yaml
---
title: Quick Start
date: "2021-04-27"
description: "A quick start guide on using Greenlight starter."
---
```
5. You can now add sample text to the new file. Try using a tool like [loremipsum.io](https://loremipsum.io/) to generate placeholder text if you can't think of anything.

6. Additionally you can add images to this folder and then include them in the blog post using this syntax:
```markdown
<!-- the "./" is a relative path to a file on the same folder -->
![image name](./image.jpg)
```
7. Once you are done creating your first blog post, make sure that the `development server` is running (see the [Scripts](/docs/quick-start/#scripts) for more information).
8. Go to `http://localhost:8000/docs/my-first-post` to find your new blog post.

That's all you need to do to write your first blog post or article.

<br/>

## Markdown Syntax

There is still much more to <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown syntax</Ext> beyond the previous example. You can write tables, lists, headings and all sorts of elements using this language. All of the documentation you are now reading was written with <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext>, just to give you an idea of what you can do with it.

We highly recommend that you checkout this website to [learn more about Markdown](https://www.markdownguide.org/). Additionally, the [Markdown Reference](/docs/markdown-reference) article from the documentation provides examples of this syntax and how it will be rendered on a [Greenlight](/) site.

<br/>

## Tableau Visualizations

You're likely trying out [Greenlight](/) for its <Ext color="has-text-tableau" to="https://www.tableau.com/">Tableau</Ext> embedding capabilities. The <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext> + <Ext color="has-text-tableau" to="https://www.tableau.com/">Tableau</Ext> viz combo that get's transformed into a website is pretty sweet. This works because [Greenlight](/) leverages <Ext color="has-text-mdx" to="https://mdxjs.com/getting-started/">MDX</Ext> to allow users to add <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> components to <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext> files.

[Greenlight](/) was designed to bring the modern web to your finger tips. There is a lot that goes on under the hood without you noticing and you are free keep these details as magical or make them as familiar to you as you want. While it is not necessary for you to become a <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> expert to use this site template, we would definitely encourage you to try the [tutorial](https://reactjs.org/tutorial/tutorial.html) and become familiar with the [documentation](https://reactjs.org/docs/getting-started.html) at your own pace.

We have taken care to make <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> components used while writing blog posts as minimalist as possible by removing much of the complexity. The <Ext color="has-text-tableau" to="https://www.tableau.com/">Tableau</Ext> component is a great example as it only needs three lines of code and a URL, let's have a look:

```js {numberLines}
<Tableau
   viz="https://public.tableau.com/views/Greenlight/GreenlightProfitDashboard"
/>
```

Every <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> component is capitalized and written as a tag with `</>` angle brackets much like [HTML](https://html.com/). It then has a `prop` declaring the URL of the embedded visualization. All of the complexity of using [Tableau's JavaScript API](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm) has been simplified into this straightforward syntax. It even adds a fully styled toolbar right below the viz! You can add multiple `<Tableau/>` components to the same blog post and customize the components even further. To learn more, please refer to the [Tableau Reference](/docs/tableau-reference) for a deep dive.

#### When the component renders it will look like this:

<Tableau
   viz="https://public.tableau.com/views/Greenlight/GreenlightProfitDashboard"
/>

<br/>

## MDX Syntax

<Ext color="has-text-mdx" to="https://mdxjs.com/getting-started/">MDX</Ext> is an extension to <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext> that allows you to add <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> components to your blog posts. To start out, you would only need to learn how to use the components that have been provided to you to author blog posts as part of this site template. Eventually you may want to further this skill by learning more about <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> and how you can add your own components into the mix.

<br/>
<br/>

You can learn more by checking out [Gatsby's article on MDX](https://www.gatsbyjs.com/docs/glossary/mdx/). All of the components that have been built into [Greenlight](/) are described within the [MDX Reference](/docs/mdx-reference) article of the documentation.