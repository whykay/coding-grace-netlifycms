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
event:
  id: 60
  short_description: Want to get crafty? This workshop will show you how to make LEDs
    light up and sow them onto anything you want. A mixture of coding fun with electronics
    and did you know there's such a thing as electronic threads!? Sounds awesome,
    right?
  slug: wearable-electronics
  title: Wearable Electronics Workshop
id: 98
is_published: true
published: 2016-01-26T01:04:00Z
short_description: What a fun-filled Saturday, a big thanks to Dogpatch Labs for hosting.
  We shared the day with Code for Ireland. It was a day of dramatic blue smoke, shocks,
  being poked by needles, lessons on what not to do when playing with electronics,
  and that was one person!
slug: sparkling-fun-our-first-wearables-workshops-dogpatch-labs
title: Sparkling fun at our first wearables workshops at Dogpatch Labs
---

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whykay/23914263189/in/album-72157662613487399/" title="Wearables Workshop Jan 2015"><img src="https://farm2.staticflickr.com/1489/23914263189_6ea0d2bbd4.jpg" width="500" height="188" alt="Wearables Workshop Jan 2015"></a>

What a funfilled Saturday, a big thanks to [Dogpatch Labs](http://dogpatchlabs.com/) for hosting. For people who are curious, we used [Seven Wonders](http://sevenwonders.ie/) for our tea/coffee and mixed sambo/wrap platters (they were super yummy). A huge shout out to [Margaret](http://www.timui.org/) and [Mick](https://twitter.com/micktwomey). [Cheryl](https://twiter.com/chebegeek) couldn't join us due to being sick, wishing her to get well soon.

We shared the day with [Code for Ireland](http://codeforireland.com/) who were having a [hackathon](https://ti.to/code-for-ireland/november-2015-meetup) on [Coder Dojo](https://coderdojo.com/)'s [Zen community platform](https://github.com/coderdojo/community-platform).

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whykay/24506389872/in/album-72157662613487399/" title="Untitled"><img src="https://farm2.staticflickr.com/1618/24506389872_35c13ab708.jpg" width="500" height="375" alt="Untitled"></a>

It was a day of dramatic blue smoke, shocks, being poked by needles, lessons on what not to do when playing with electronics, and that was one person! :-D


## Materials
* [Flora RGB Smart NeoPixel version 2 - Pack of 4](https://www.adafruit.com/products/1260)
* [FLORA - Wearable electronic platform: Arduino-compatible - v2](https://www.adafruit.com/products/659)
* [2 x 2032 Coin Cell Battery Holder - 6V output with On/Off switch](https://www.adafruit.com/products/783)
* USB cable
* 2 x 2032 Coin Cel Batteries
* Conductive thread & needles

Extras: Crocodile clips for testing, and your fabrics/materials of choice.

## Setup, the first few steps before we started into our own little creations:

1. Installation: Install this first from Arduino - [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)

1. Then you need to install the support for Flora - [https://learn.adafruit.com/adafruit-arduino-ide-setup/arduino-1-dot-6-x-ide](https://learn.adafruit.com/adafruit-arduino-ide-setup/arduino-1-dot-6-x-ide)

1. Let's get the onboard LED to blink on the Flora - [https://learn.adafruit.com/getting-started-with-flora/blink-onboard-led](https://learn.adafruit.com/getting-started-with-flora/blink-onboard-led)

	<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whykay/24506399252/in/album-72157662613487399/" title="Untitled"><img src="https://farm2.staticflickr.com/1521/24506399252_afb58283b4.jpg" width="500" height="500" alt="Untitled"></a>

1. Now to get Neopixel's LEDs to light up, we need to install its library first before we can test it - [https://learn.adafruit.com/getting-started-with-flora/blink-onboard-neopixel](https://learn.adafruit.com/getting-started-with-flora/blink-onboard-neopixel)

	- Here's more info about [powering neopixels](https://learn.adafruit.com/adafruit-neopixel-uberguide/power).

# Notes from the day

There was a question about what an unsigned bit is, and [@micktwomey](https://twitter.com/micktwomey) explained via whiteboard.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whykay/24532514601/in/album-72157662613487399/" title="Untitled"><img src="https://farm2.staticflickr.com/1688/24532514601_8db066109d.jpg" width="375" height="500" alt="Untitled"></a>

Before the sowing starts, it's best to test with crocodile clips (although it takes a wee bit of mastering), here's an illustration of what some of us did via [https://learn.adafruit.com/flora-rgb-smart-pixels/hook-up-alligator-clips](https://learn.adafruit.com/flora-rgb-smart-pixels/hook-up-alligator-clips)

<hr>

<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> **TIP: Pre-planning - Draw a circuit and plan what you are connecting before you stitch anything.**

<hr>

So I decided to hook up 2 LEDs with the Flora, with some guidance from Mick as it's different from NeoPixels LED.

It was all going well... then disaster struck... well, that was a bit of an exaggeration, but for someone who doesn't sow, having to take out all the stitches and redo it all again is painstakingly slow for me.

But I finally sowed the thread connecting the right bits to each other:

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whykay/23986616824/in/album-72157662613487399/" title="Behind the scenes"><img src="https://farm2.staticflickr.com/1537/23986616824_cfb180b5b0.jpg" width="500" height="375" alt="Behind the scenes"></a>

I found this [handy guide on connecting a Flora to an LED](https://learn.sparkfun.com/tutorials/ldk-experiment-1-lighting-up-a-basic-circuit?_ga=1.77315414.253590958.1453554238). [Here's another good article with some nice tips](https://www.sparkfun.com/tutorials/312) (I didn't have a sowing hoop, might get one as it makes things easier to sow). 

Here's what I ended up with (after taking out all the stitches as I had one of the LEDs the wrong way round... grr), good attempt and both eyes light up, I ended up making one eye stay on and the other blink.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whykay/23986622004/in/album-72157662613487399/" title="Untitled"><img src="https://farm2.staticflickr.com/1713/23986622004_02552b680c.jpg" width="500" height="500" alt="Untitled"></a>

BTW, you are probably wondering why there is a pin through the poor panda's head, the LED on the right eye wasn't properly lined up, so it was a way to forcibly line it up to see what it looks like, it's a prototype after all. :-)

# Where to buy?
* [Adafruit](http://adafruit.com)
* [mouser.ie](http://www.mouser.ie)
* [Pimoroni](https://shop.pimoroni.com/)

<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

# Upcoming Events/Workshops
## Coding Grace workshops

**Data Visualization Workshop @ The Vaults, Dogpatch Labs**

* Sat, Feb 6 (11:00 - 16:00)
* Details and tickets: [codinggrace.com](http://www.codinggrace.com/events/data-visualisation-python/61/)

Coming Soon: R, Animation, Unity3D, Python, Make a Game in F#...

## Female-friendly events

**Dublin Diversity Call for Proposal Workshop @ Zendesk**

* Sat Jan 30 (13:00 - 16:00)
* [ti.to/scotlandjs/dublin-diversity-cfp-workshop](https://ti.to/scotlandjs/dublin-diversity-cfp-workshop)

**PyLadies Dublin: Robot Test Framework & Workshop @ AOL**

* Tue Feb 16 (18:30 - 21:00)
* [dublin.pyladies.com](http://dublin.pyladies.com)

**Django Girls Dublin @ RTÉ (Ballsbridge)**

* Sat April 23 
* Applications and details: [djangogirls.org/dublin](https://djangogirls.org/dublin/)
* Looking for mentors - Contact <a href="mailto:dublin@djangogirls.org">dublin@djangogirls.org</a>

**Ireland Girl Geek Dinner**

* Feb
* [meetup.com/Ireland-Girl-Geek-Dinners](http://meetup.com/Ireland-Girl-Geek-Dinners)

**Women Who Code Dublin**

* Feb & Mar
* [meetup.com/Women-Who-Code-Dublin](http://meetup.com/Women-Who-Code-Dublin)

# Final words
As it wasn't a full class, we have packs left over, which would be enough for another small wearables workshop.

I am planning another one in the very near future, if you are interested, please subscribe to our monthly newsletter (via [CodingGrace.com](http://codinggrace.com) or follow [@CodingGrace](https://twitter.com/codinggrace) for latest updates.

Any enquiries: <a href="mailto:contact@codinggrace.com">contact@codinggrace.com</a>

