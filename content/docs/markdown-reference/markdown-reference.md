---
title: Markdown Reference
date: "2021-04-19"
description: "A guide describing the Markdown content supported by this app"
---

This document covers basic [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax that allows creators to write web content 
without needing to worry about maintaining servers or combining [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 
with [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). Markdown is often used on sites as in 
[Github](https://github.github.com/gfm/), forums like [Reddit](https://www.reddit.com/wiki/markdown) and applications such as 
[Stoplight.io](https://meta.stoplight.io/docs/studio/docs/Documentation/03a-stoplight-flavored-markdown.md).  

The [markdownguide](https://www.markdownguide.org/getting-started/) website does a great job at explaining what 
this language is all about:

> #### What is Markdown?
> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. 
> Created by [John Gruber](https://daringfireball.net/projects/markdown/) in 2004, Markdown is now one of the world’s most 
> popular markup languages.
>
> Using Markdown is different than using a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor. In an application like 
> Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. 
> Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate 
> which words and phrases should look different.
>
> #### What is Markdown good for?
> Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents.
>
> It doesn’t take long to learn the Markdown syntax, and once you know how to use it, you can write using Markdown just 
> about everywhere. Most people use Markdown to create content for the web, but Markdown is good for formatting everything 
> from email messages to grocery lists.

You can choose to write Markdown `(.md)` files using a text editor application such as Notepad and use 
[syntax guides](https://www.markdownguide.org/cheat-sheet/) for reference. A great choice would be 
[Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432) or [Sublime Text](https://www.sublimetext.com/).

One option that can really streamline your [Greenlight](https://api-guild.github.io/greenlight/) workflow is 
[Stoplight Studio](https://stoplight.io/studio/). Not only is it a great Markdown editor, it can also work with 
[Git](https://git-scm.com/) repositories directly (*cloning*, *committing* and *pushing*). 
Stoplight Studio simplifies working with Git, making commits feel more like a clicking on a 'save' button. 
You or your team can write content to a new branch, get reviews via pull requests and merge the new content into 
the main branch for publishing - all with the help of a visual editor! This app was actually built to design and 
document APIs so it is a great choice for developers, technical writers and 
[Greenlight](https://api-guild.github.io/greenlight/) bloggers.

Other options listed on the [markdownguide](https://www.markdownguide.org/getting-started/#documents) that you may 
consider include:

> - Mac: [MacDown](https://www.markdownguide.org/tools/macdown/), [iA Writer](https://www.markdownguide.org/tools/ia-writer/), or [Marked](https://marked2app.com/)
> - iOS / Android: [iA Writer](https://www.markdownguide.org/tools/ia-writer/)
> - Windows: [ghostwriter](https://wereturtle.github.io/ghostwriter/) or [Markdown Monster](https://markdownmonster.west-wind.com/)
> - Linux: [ReText](https://github.com/retext-project/retext) or [ghostwriter](https://wereturtle.github.io/ghostwriter/)
> - Web: [Dillinger](https://www.markdownguide.org/tools/dillinger/) or [StackEdit](https://www.markdownguide.org/tools/stackedit/)

---
<br/>

# Reference
Examples of Markdown elements with corresponding syntax

<br/>

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

You can also write code blocks here!

```js
const saltyDuckEgg = "chinese preserved food product"
```

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Sorcerer's Stone    | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |
| 4      | Harry Potter and the Goblet of Fire      | 2005 |
| 5      | Harry Potter and the Order of the Phoenix| 2007 |
| 6      | Harry Potter and the Half-Blood Prince   | 2009 |
| 7      | Harry Potter and the Deathly Harrows I   | 2010 |
| 8      | Harry Potter and the Deathly Harrows II  | 2011 |

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

This is a paragraph.

    This is a paragraph.

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
>       Markdown.generate();

    > ## This is a header.
    > 1. This is the first list item.
    > 2. This is the second list item.
    >
    > Here's some example code:
    >
    >       Markdown.generate();

- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue

```markdown
- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue
```

- `code goes` here in this line
- **bold** goes here

```markdown
- `code goes` here in this line
- **bold** goes here
```

1. Buy flour and salt
2. Mix together with water
3. Bake

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```

1. `code goes` here in this line
1. **bold** goes here

```markdown
1. `code goes` here in this line
1. **bold** goes here
```

Paragraph:

    Code

<!-- -->

    Paragraph:

        Code

---

---

---

---

---

    * * *

    ***

    *****

    - - -

    ---------------------------------------

This is [an example](http://example.com "Example") link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com "Optional Title"

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

This paragraph has some `code` in it.

    This paragraph has some `code` in it.
