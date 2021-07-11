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
7. Once you are done creating your first blog post, make sure that the `development server` is running (see the [Quick Start](/docs/quick-start/#scripts) for more information).
8. Go to `http://localhost:8000/docs/my-first-post` to find your new blog post.

That's all you need to do to write your first blog post or article. There is still much to learn regarding <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown syntax</Ext>, for a deep dive into this subject please review the [Markdown Reference](/docs/markdown-reference) chapter of the documentation.

<br/>

## Tableau Visualizations

You're likely trying out [Greenlight](/) for its <Ext color="has-text-tableau" to="https://www.tableau.com/">Tableau</Ext> embedding capabilities. The <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext> + <Ext color="has-text-tableau" to="https://www.tableau.com/">Tableau</Ext> viz combo that get's transformed into a website is pretty sweet. Under the hood this works because [Greenlight](/) leverages <Ext color="has-text-mdx" to="https://mdxjs.com/getting-started/">MDX</Ext> to allow users to add <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> components to <Ext color="has-text-md" to="https://www.markdownguide.org/">Markdown</Ext> files.

[Greenlight](/) was designed to bring the modern web to your finger tips. There is a lot that goes on without you noticing and you are free keep those details as magical or make them as familiar to you as you are comfortable with. While it is not necessary for you to become a <Ext color="has-text-react" to="https://reactjs.org/">React</Ext> expert to use this site template, we would definitely encourage you to try the [tutorial](https://reactjs.org/tutorial/tutorial.html) and become familiar with the [documentation](https://reactjs.org/docs/getting-started.html) at your own pace.

We have taken care to make components that you would frequently use while writing blog posts as minimalist as possible, removing much of the complexity. The <Ext color="has-text-tableau" to="https://www.tableau.com/">Tableau</Ext> component is a great example as it only needs three lines of code and a URL, let's have a look:

```js {numberLines}
<Tableau
   viz="https://public.tableau.com/views/Greenlight/GreenlightProfitDashboard"
/>
```

#### When the component renders it will look like this:

<Tableau
   viz="https://public.tableau.com/views/Greenlight/GreenlightProfitDashboard"
/>

## Conclusion

I hope this quick start guide is able to help you see the ease of which you can have a very fast website to host your data up and running in no time.
