---
title: Blog Posts
date: "2021-04-23"
description: "How to write blog posts in markdown and embed a visualization"
---

### Making a post

1. There are many files and folders in the directory but to make a post you only need to use the `/content/blog` directory.
   <br />
2. Once you have navigated to the `/content/blog` directory make a new folder called `my-first-post`
   <br />
3. Inside that folder you can make a file that will be your post. You can use either Markdown or MDX files but for this example we will use MDX. _Please note that Greenlight is setup only to render Markdown and MDX files from this directory so you must put your files here for them to render properly._
   <br />
4. Inside your `my-first-post` folder make a file called `my-first-post.mdx`.
   <br />
5. Inside this file you first need to add your title, description and date of the post in the format below.

```yaml {numberLines}
---
title: Quick Start
date: "2021-04-27"
description: "A quick start guide on using Greenlight starter."
---
```

6. For the most part you can write your post using normal Markdown syntax as you would any normal blog post. Where MDX comes into play is bringing in your data visualizations. For this example we are using our Tableau component which comes with Greenlight.

```js {numberLines}
<Tableau
   viz="https://public.tableau.com/views/Greenlight/GreenlightProfitDashboard"
/>
```

Using the `viz={your-url}` you can plug in your own URL's.

#### When it renders it will look like this.

<Tableau
   viz="https://public.tableau.com/views/Greenlight/GreenlightProfitDashboard"
/>

## Conclusion

I hope this quick start guide is able to help you see the ease of which you can have a very fast website to host your data up and running in no time.
