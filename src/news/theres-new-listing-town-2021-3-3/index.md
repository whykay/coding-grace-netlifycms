---

author:
  blurb: Pythonista, but normally found organising various tech events, and now heavily
    involved in diversity initiatives like Coding Grace, PyLadies Dublin, and Women
    in Technology and Science (WITS Ireland).
  contact_number: +353 86 150 2003
  email: vicky@codinggrace.com
  first_name: Vicky
  id: 1
  last_name: Twomey-Lee
  slug: vicky-twomey-lee
  url: http://about.me/whykay
  user:
    email: whykay@gmail.com
    first_name: Vicky
    id: 1
    last_name: Twomey-Lee
    username: whykay
date: 2021-03-03
id: 190
is_published: true
published: 2021-03-03T23:42:00Z
short_description: For many years I have been curating list of diversity in tech groups
  and its events as well as general tech events around Ireland and Northern Ireland.
  I finally did it, I made a wee site to help me keep going with the curation but
  without all the hand-coding for every change.
slug: theres-new-listing-town
title: "There's a new listing in town \U0001F606"
---

For many years I have been curating list of diversity in tech groups and its events as well as general tech events around Ireland and Northern Ireland. I finally did it, I made a wee site to help me keep going with the curation but without all the hand-coding for every change.

As you can see in the past number of posts, I've been diligently keeping an updates list of virtual events, it's all hand-coded. I thought I would have made something to do all this, but time flew by and it was just easier (or so I thought) to just move code around for every teeny update (moving past events to bottom of the page, then re-create a new listings page for the new month and rinse and repeat!)

![](https://media.giphy.com/media/10SqrGYtLNcNWw/giphy.gif)

There must be a better way than this and I get to get my time back and be more productive in other areas. I won't be posting listings like the way I did before.

If you don't want to read the post below... here's the linkies to the 2 things that I hope would be useful for folks (besides myself) and you can contribute to:

* [Irish and N. Irish Tech Events Listings](https://irish-diversity-in-tech.netlify.app/events) (incl Diversity in Tech Events and Conferences)
* [Diversity in Tech Groups around Ireland and N. Ireland](https://irish-diversity-in-tech.netlify.app/diversity/)

And if you want to go ahead and read the post, enjoy! Any questions, drop me an email at vicky@codinggrace.com.

# So here's an x-post from my DEV post
*(Original post: [https://dev.to/whykay/diversity-in-tech-groups-page-created-with-11ty-cms-531l](https://dev.to/whykay/diversity-in-tech-groups-page-created-with-11ty-cms-531l))*



I wanted to create a new site that gets updated without me hand-coding and changing it each time. [I even have posted a series of these updates here](https://dev.to/whykay/series/7565).

![](https://media.giphy.com/media/xTeV7HRJvzPPjSoe5i/giphy.gif)

This has been on my bucket list for years! Time flies... but what good opportunity the last couple of months to get a wee bit of coding in (each night). It's not quite 100th Day challenge, but it was nice and at my own pace (and now I remember how addictive it can be just wanting to finish this one little bit of code).

So I wanted to try out a statically generated site framework (back to the good old days but we now have shinier tools).

[I've been playing on and off with TailwindCSS](https://dev.to/whykay/series/7570) (didn't have to do much with this, but it was still useful for small design tweaks). And I've heard about [11ty](https://www.11ty.dev/) and [netlify](https://www.netlify.com/). I've never used Nunjucks before, and its templates looks similar to Jinja, which I like. 👍

I've made my choice, 11ty CMS and deploy with netlify. 

![](https://media.giphy.com/media/1BhFhyCicimdNNr1AJ/giphy.gif)

Simples. 😆

Here's the finished page deployed and it gets rebuilt each night to pick up any changes: https://irish-diversity-in-tech.netlify.app/diversity/

And do you know what, I might as well bring in tech events as well, since I curate the Irish and Northern Irish tech events listings by hand for my monthly Coding Grace newsletters and the blog I (try to) keep updated daily. Note, I don't update this anymore since I created https://irish-diversity-in-tech.netlify.app/events/. 😎

By doing this for both, I've saved myself a bucket load of time (I hope). For years I spent many hours updating and curating in multiple places. I keep telling myself, I'll write a site to save time, it's only a couple of hours project. Well, I did say time flies and yes, I was procrastinating. I'm not the only one. 😜

![](https://media.giphy.com/media/jkPTSxuolA5jy/giphy.gif)

# So let's start from the beginning
1. Site that I can easily update in 1 place
2. Saves me time (copy and paste to newsletter, the listings update automatically)
3. Community can contribute via PRs on github
4. Saves me time to be only one updating it (*getting the hint 😉)
5. Transparency (see **3**)

### Please note 
![](https://media.giphy.com/media/4H7raUu552z7AllNso/giphy.gif)

This post is not about creating the page from start to finish tutorial, it's more documenting what I want to do, and issues I hit across with some solutions I found along the way. I kept notes as I went along while coding using [Bear.app](https://bear.app/).

# TIL moments
![](https://media.giphy.com/media/pO4UHglOY2vII/giphy.gif)
## Diversity in Tech Group Listings
### Date formatting
> Hmm, the dates are appearing in form of
> **Fri Sep 11 2020 01:00:00 GMT+0100 (Irish Standard Time)**

But I want them to be **2020-09-11**...

Found this simpler explanation of filters after a bit of searching:

* [Down the Rabbithole: Custom filters for Nunjucks templates in Eleventy](https://eszter.space/11ty-njk-filters/)
* Other ref: https://www.npmjs.com/package/dayjs
* [11ty Rocks: Create Your First Basic 11ty Website](https://11ty.rocks/posts/create-your-first-basic-11ty-website/)

### Sorting in Nunjucks
{% raw %}
{% for group in groups | sort(attribute=‘name’)%}
{% endraw %}

* [Stackoverflow:How can I sort by date with Nunjucks?
](https://stackoverflow.com/questions/30448107/how-can-i-sort-by-date-with-nunjucks)

### Moar lists stuff in Nunjucks
Was wondering if there’s anything new appending an item to a list, found this: 

* [Appending to a list #240](https://github.com/mozilla/nunjucks/issues/240)

Works fine.

This created a list of only active groups

{% raw %}
{% set up_groups = [] %}
{% for group in diversityGroups.groups %}
  {% if group.status == “active” or group.status == “new” %}
    {% set up_groups = (up_groups.push(group), up_groups) %}
  {% endif %}
{% endfor %}
{% endraw %}

## On to my tech events listings
### Moar customising date and time in 11ty
Modifying the date and time the way I wanted in my .eleventy.js filter:

* [Luxon manual: Table of Tokens](https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens)
* [Let’s Learn Eleventy! Boost your Jamstack skills with 11ty](https://www.netlify.com/blog/2020/04/09/lets-learn-eleventy-boost-your-jamstack-skills-with-11ty/)
* [Can't iterate over a global data subfolder #304](https://github.com/11ty/eleventy/issues/304)
* [Collections for directory indexes #502](https://github.com/11ty/eleventy/issues/502)
* [How to use different content dates for pages generated from data through pagination? #1249](https://github.com/11ty/eleventy/issues/1249)

Tis going great so far. So on Sun Jan 31st,  I wanted to see if I can:

* create page to list events for that month and year
* create a listings page (test one) to list current month’s events
* create list of links to archived month listings  

No way to break out of a for loop (I had to check if I missed it in the docs):

* [Stackoverflow: Breaking Nunjucks Loop](https://stackoverflow.com/questions/33965491/breaking-nunjucks-loop)

Also I should have grokked this handy default 11ty supplied data page: 

* [Eleventy Supplied Data | Eleventy, a simpler static site generator.](https://www.11ty.dev/docs/data-eleventy-supplied/)

Found the following to create helper functions and loaded from `_data`. Totes amazing save and what I was looking for.

* [Dynamic footer copyright date in Eleventy - Quick Tip - Piccalilli](https://piccalil.li/quick-tip/dynamic-footer-copyright-date-in-eleventy)

My next step is to refactor code so:

* I can reuse the code in the month templates
* replace the content in `events/index.html` with code from `test.html`

![](https://media.giphy.com/media/1HKaikaFqDt7i/giphy.gif)

At this point, I got most of what I want done with the tech event listings

* main events page lists several upcoming events
* diversity in tech events
* rest of the sections like recurring events, conferences, etc. that were taken from Coding Grace events listings page, e.g. here's [an example post](https://codinggrace.com/news/jan-2021-irish-virtual-tech-events-listings-2021-1-6/) I based it on.
* event month listings (general and diversity in tech events)

# Data needs refreshing on my static site

![](https://media.giphy.com/media/xt2lXMGu4hjIejthWQ/giphy.gif)

I need to build and redeploy each night so the content is refreshed.

So I'm going to use [GitHub actions](https://github.com/features/actions) as suggested by [Mick](https://twitter.com/micktwomey):-

* [GitHub Actions Documentation - GitHub Docs](https://docs.github.com/en/actions)
* [Scheduling builds and deploys with Netlify - #9 by futuregerald - Features - Netlify Community](https://community.netlify.com/t/scheduling-builds-and-deploys-with-netlify/2563/9)
* [Schedule your Netlify build with GitHub Actions — Eric Jinks](https://ericjinks.com/blog/2019/netlify-scheduled-build/) 

And as someone who reads about a lot of cool tech stuff and adding it on the list of things to check out and try later (or keep that tab open in my browser 😅), GitHub actions was one of them... I didn't have any idea what to use GitHub actions for... and this wee project came along and my static site needs to be rebuilt and redeployed on a regular basis. Probably the most popular action to try out as it's the simplest. 

![](https://media.giphy.com/media/Y07ArMKOAHJhimZdFn/giphy.gif)

BUT, I got it to work. I was sitting there counting down the seconds to see if the site gets rebuilt - and when it worked and again the following day (after setting it at weird time o'clock), I was happy enough to soft launch it to a few friends. 🎉

---

![](https://media.giphy.com/media/OcoBimtHQyQ0w/giphy.gif)

###### Question for the audience (who's read this far down, thank you), what do you use GitHub actions for?

---


# Where is ma page...?
![](https://media.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif)

404 page needs to be implemented

* [Eleventy - QUICK TIP  006—ADDING A 404 NOT FOUND PAGE TO YOUR STATIC SITE](https://v0-7-1.11ty.dev/docs/quicktips/not-found/)

And TA-DAA! It's done (mostly). Besides that, it was great being able to code a wee bit each night. 

![](https://media.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.gif)

Folks can contribute, so I did up a quick CONTRIBUTE.md page based on suggestions from github:

* https://github.com/whykay/diversity-in-tech-ireland/blob/master/CONTRIBUTING.md

![](https://media.giphy.com/media/aSZSj0mT8f6tW/giphy.gif)

There's still a few things I want to do like some of the following:-

* Template for requests to add/update groups, events if people don't want to do PR.
* Write a bit of logic to show **new** label or not for an event.
* I know there's more, but I can't think of them right now. 😉

But yeah, I'm very happy with 11ty CMS and netlify doing all the hard work deploying it for me. And it's all FREE! 🙌

![](https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif)

