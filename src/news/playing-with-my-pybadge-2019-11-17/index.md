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
id: 171
is_published: true
published: 2019-11-17T20:57:00Z
short_description: Got my hands on a PyBadge (finally), here's what I did
slug: playing-with-my-pybadge
title: Playing with my PyBadge
---

Finally got my hands on a [PyBadge](https://learn.adafruit.com/adafruit-pybadge/overview) (thanks, [https://twitter.com/micktwomey](@micktwomey)), been waiting impatiently ever since it was first announced, I think I saw it either via Adafruit's newsletter or their Youtube video (I recommend you subscribe to both).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I’m blinded by the neopixels trying out the demo <a href="https://twitter.com/hashtag/PyBadge?src=hash&amp;ref_src=twsrc%5Etfw">#PyBadge</a> <a href="https://twitter.com/hashtag/CircuitPython?src=hash&amp;ref_src=twsrc%5Etfw">#CircuitPython</a> code. But oh so sparkly &amp; rainbowy. 🥰 <a href="https://twitter.com/hashtag/Python?src=hash&amp;ref_src=twsrc%5Etfw">#Python</a> <a href="https://twitter.com/hashtag/maker?src=hash&amp;ref_src=twsrc%5Etfw">#maker</a> <a href="https://t.co/AUBkovlvgC">pic.twitter.com/AUBkovlvgC</a></p>&mdash; whykay 👩🏻‍💻🐈🏳️‍🌈 (@whykay) <a href="https://twitter.com/whykay/status/1190635455575941121?ref_src=twsrc%5Etfw">November 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">.<a href="https://twitter.com/DublinMaker?ref_src=twsrc%5Etfw">@DublinMaker</a> name tag now. <a href="https://twitter.com/hashtag/CircuitPython?src=hash&amp;ref_src=twsrc%5Etfw">#CircuitPython</a> <a href="https://twitter.com/hashtag/Python?src=hash&amp;ref_src=twsrc%5Etfw">#Python</a> <a href="https://twitter.com/hashtag/PyBadge?src=hash&amp;ref_src=twsrc%5Etfw">#PyBadge</a> <a href="https://twitter.com/hashtag/electronics?src=hash&amp;ref_src=twsrc%5Etfw">#electronics</a> <a href="https://twitter.com/hashtag/newbie?src=hash&amp;ref_src=twsrc%5Etfw">#newbie</a> <a href="https://t.co/h4mu6SSDE0">pic.twitter.com/h4mu6SSDE0</a></p>&mdash; whykay 👩🏻‍💻🐈🏳️‍🌈 (@whykay) <a href="https://twitter.com/whykay/status/1190636983418261515?ref_src=twsrc%5Etfw">November 2, 2019</a></blockquote> 

It was a couple of weeks since my first play around with the PyBadge and I wanted to try out [PyBadger](https://learn.adafruit.com/pybadger-event-badge). So I followed the instructions, it was all grand until I wanted to get the neopixels to light up like the last time I played with it. 

So I looked at the official PyBadge code example again: [https://github.com/adafruit/Adafruit_Learning_System_Guides/tree/master/PyBadge_Conference_Badge](https://github.com/adafruit/Adafruit_Learning_System_Guides/tree/master/PyBadge_Conference_Badge)

Hacked the code a bit and ran it, it says that D8 is already in use (the neopixels). 🤔

Looked up neopixels docs on [https://learn.adafruit.com/adafruit-neopixel-uberguide/python-circuitpython](https://learn.adafruit.com/adafruit-neopixel-uberguide/python-circuitpython) - ok, code seems to be ok, why doesn't it work...

I double-checked **D8** according to the [pinouts](https://learn.adafruit.com/adafruit-pybadge/pinouts) on Adadruit website, that's the neopixels I want to use alright.

Hmmm, ok, so I went to check out the PyBadger docs on [https://circuitpython.readthedocs.io/projects/pybadger/en/latest/api.html](https://circuitpython.readthedocs.io/projects/pybadger/en/latest/api.html) - I noticed that there's a mention of **"pixels" - Sequence like object representing the NeoPixels on the board**. Double-hmm... this might be it. 

The code in the [pybadge source code](https://github.com/adafruit/Adafruit_CircuitPython_PyBadger/blob/master/adafruit_pybadger.py) on github created **pixels** as a list variable, whereas PyBadger, it's already initiated it and it returns as pixels (as stated in the docs, but I had to see for myself)

Anyhoo, in the end, I modified the code in the end and it all worked. 

The docs were a bit all over the place, and if I didn't know how to go digging with my detective hat on, I would have been a little stuck. That's the only thing I can complain about it, lots of docs, but it's a mess. I'm also terrible ending down rabbit holes and forgetting what I was doing in the first place. 😅

### End result

* Press **select** button, the neopixels light up and goes through a rainbow sequence
* Press **down** button, it dims the neopixels
* Press **up** button, it brightens the neopixels
* Press **start** button, it turns off the neopixels (also returns to original splash screen)
* Press **a** button, opens the business card screen (Dublin Maker logo and my emai address)
* Press **b** button, opens the QR code which links to [dublinmaker.ie](http://dublinmaker.ie).

And after years of hoarding lanyards from various conferences, I cobbled two lanyards and made it into one so I can hang my PyBadges.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yay, hoarding FTW! Found a few suitable lanyards (pictured) from my huge stash at home collected over the years attending conferences. Made a new one for my <a href="https://twitter.com/hashtag/PyBadge?src=hash&amp;ref_src=twsrc%5Etfw">#PyBadge</a>. 😊 <a href="https://t.co/m7HPFtVAoy">pic.twitter.com/m7HPFtVAoy</a></p>&mdash; whykay 👩🏻‍💻🐈🏳️‍🌈 (@whykay) <a href="https://twitter.com/whykay/status/1196024102068330498?ref_src=twsrc%5Etfw">November 17, 2019</a></blockquote> 

Now I'm all ready for my talk this coming Friday where I'll be on a closing plenary at the AWS Girls Tech Day in Explorium Sports & Science Centre. 🙌
