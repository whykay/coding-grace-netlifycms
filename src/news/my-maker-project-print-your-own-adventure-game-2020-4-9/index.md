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
date: 2020-04-09
id: 175
is_published: true
published: 2020-04-09T22:30:00Z
short_description: Print your own adventure game with a thermal printer, Raspberry
  Pi, arcade buttons and CircuitPython. I've been meaning to keep a blog about this
  project. It was meant to be ready for Berlin Makerfaire 2020, but it was cancelled.
  But I'm going to finish the project anyway for that date.
slug: my-maker-project-print-your-own-adventure-game
title: My Maker Project - Print your own adventure game
---

<p class="lead">
I've been meaning to keep a blog about this project. I've been working on it (on and off) since early this year, and it was meant to be ready for <a href="https://en.maker-faire.de/berlin/">Berlin Makerfaire 2020</a>, but it was cancelled. But I'm going to finish the project anyway for that date.
</p>

<dl class="dl-horizontal">
  <dt>What is this project?</dt>
  <dd>Print your own adventure game with a thermal printer, Raspberry Pi, arcade buttons and CircuitPython.</dd>
  <dt>Why am I doing this?</dt>
  <dd>Part of my job as Maker Advocate (<a href="http://dublinmaker.ie">Dublin Maker</a>) to extend my knowledge in this area, always a fan and huge awareness, but always more of a spectator and supporter than active Maker of physical projects. Plus it's fun to try new things.</dd>
</dl>


Well, I can say I am rusty as heck, but I needed the coding to while away the time. My goal was to complete my Maker project that was meant for Berlin Makerfaire in the next couple of weeks, but that has been cancelled due to COVID-19.

So I mustered my energy, blew the dust off the coding side of my brain and pulled out all my electronics bits and latest code from my repo. It was a working prototype on a given sample of a dummy data for the thermal printer to print out your text based adventure game.

So it was shock, horror and no surprise when I went to refactor the code, I was thinking... "What was I doing?!? Omgerd!"

![](https://media.giphy.com/media/ZdCJ4G17h7lIsrYfLs/source.gif)

The next part of the project was  pretty straight forward, fix up the JSON to be read into the code so printer will work. With this new code, I'm no-where having it connected up with the electronics (I already know it worked from last time I was prototyping).

So to get this JSON file, I want to have a way I can add stories, so into a spreadsheet it goes, I export it to CSV file and this CSV file gets read in by the new CSV to JSON convertor I wrote in Python. Now it's a library I can use for my main project, yippee.

<div class="alert alert-info">
	💡 Found this story/prompt generator handy for what I'm doing as I can't seem to think of anything story to write: <a href="https://www.plot-generator.org.uk/">https://www.plot-generator.org.uk/</a>
</div>

I took it for granted. I spent a whole day wrangling code and ended up going to bed late as I was so close to what I wanted. I was going to try using Pandas instead of the general csv, itertools and groupby. Turns out when I got up the next morning, I was overthinking the problem and refactored (again). Didn't have to use Pandas (now I know a little about it), normal plain Python in-built tools was a-okay. 🙌

Also wrote tests (using [PyTest](https://docs.pytest.org/)) to make sure the data and JSON format is correct, and tested a sample run through of a game. Well, that was easier than expected and it worked. 🙌🙌

This is the project by the way, an early prototype (with [Pi-top 3](https://www.pi-top.com/products/pi-top-3), I have a Raspberry Pi 3 in it) is pictured below...

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753445982/in/datetaken-public/" title="Print your own text based adventure game"><img src="https://live.staticflickr.com/65535/49753445982_19c9a79778_z.jpg" width="640" height="480" alt="Print your own text based adventure game"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>


# Here are some WIP pics and vids from the not so distant past
<div class="alert alert-info">
👉 I'll be putting up pics and vids to my Flickr album: [https://www.flickr.com/photos/whykay/albums/72157713817366118](https://www.flickr.com/photos/whykay/albums/72157713817366118)
</div>

#### My yellow and blue arcade buttons works! 
<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753881597/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/31337/49753881597_8def67da62_n.jpg" width="180" height="320" alt="Print your own adventure game with mini thermal printer"></a>

#### It's alive!!! 
<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753881682/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/31337/49753881682_c61d6b0095_n.jpg" width="180" height="320" alt="Print your own adventure game with mini thermal printer"></a>

#### Successful run of a sample game playthrough
<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753881737/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49753881737_68a71f03b1_n.jpg" width="240" height="320" alt="Print your own adventure game with mini thermal printer"></a>

#### Printing the Dublin Maker logo
Whoops, something went wrong, the image was too big, had to scale down the size and try again. It also made dreadful, distressing noises while printing this! 😱 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753012973/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49753012973_f6caa173fe_n.jpg" width="240" height="320" alt="Print your own adventure game with mini thermal printer"></a>


#### Printing the Dublin Maker logo - take 2 - success! 🎉

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753881892/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/31337/49753881892_3c3843a7d4_n.jpg" width="320" height="180" alt="Print your own adventure game with mini thermal printer"></a>


#### Getting the case for the mini-thermal printer printed on our Prusa 3D printer at home
<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753546056/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/31337/49753546056_d34bcbaa9f_n.jpg" width="320" height="180" alt="Print your own adventure game with mini thermal printer"></a>


# Back to my refactoring...

Anyway, now I have to refactor the main code that does the actual interaction with the hardware. Just have to remember to commit the latest code first! Learnt from last time. 😅

So after connecting up to a [Pi-Top 4](https://www.pi-top.com/products/pi-top-4) (which is a Raspberry Pi 4), checked all the connections. 

* ☑️ Power light going on and off on thermal printer - yay, it's powered!
* ☑️ Thermal printer is connected to ground and TX GPIO
* ☑️ Yellow, Blue and Black buttons all connected to its ground and GPIO pins

Then I tried a bit of code to start talking to the thermal printer via Python REPL. 

❌ Well, that didn't work. It was hanging. It was trying to use <code>/dev/serial0</code>, so I had a look and sure as anything, it's not there, just <code>/dev/serial1</code>. I vaguely remember having this problem before. Did a quick search on <kbd>Where is /dev/serial0 on Raspberry Pi?</kbd> and got the answer.

* <code>sudo raspi-config</code>
* Select option <b>5</b> (Interfacing options) 
* Select option <b>P6</b> (Serial) 

This part is important

* Shell interaction with serial, select <b>NO</b> <a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753488751/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49753488751_af8bd33fc2_z.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a>
* Hardware interaction with serial, select <b>YES</b> <a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49752954168/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49752954168_b4b8d48355_z.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a>

Save the configuration and exit rasp-config.

Reboot the Raspberry Pi.

Now when you check, <code>/dev/serial0</code> is available. <a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753824127/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49753824127_99967a07cf_z.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>


So I ran through setting up the thermal printer via Python REPL and by jammy dodgers it worked. I was able to print out a quick "Maker Advocate". 🎉

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753823817/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49753823817_e9df26e320_z.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49752953408/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49752953408_4214baf68d_z.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a>

This is all set up ready for the next phase: <kbd>Operation get it all to work again</kbd>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49753823587/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49753823587_d96d40d9a5_z.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

It's the small wins that keeps me going. Like a couple of refactors of the aforementioned code for importing CSV and converting to JSON so I can use it for this project.

# Get it all working phase 🛠⚙️
I found that it was working but crapping out sometimes, and after a few goes, I realised it was the content from the JSON file, it had unicode characters that was throwing the thermal printer library off. So I removed these odd characters, mainly converted to apostraphes. This is the reason for not to copy and paste willy nilly. 😭

Now onwards....

It was all going well until I tried to print an image on the thermal printer and it didn't recognise the command <code>printer.image(Image.open("thepic.png"))</code>. I double-checked that I installed PIL (via Pillow) and checked the printer object with the Python REPL. Still no dice... 🤔

Did a quick seach and sure enough, there's another library for the thermal printer: <a href="https://thermalprinter.readthedocs.io/en/latest/index.html">https://thermalprinter.readthedocs.io/en/latest/index.html</a>. And it has the call to print an image, yay! 🙌

Quickly ran <code>pip install thermalprinter</code> and the following:

<pre>
&gt;&gt;&gt; from PIL import Image
&gt;&gt;&gt; from ThermalPrinter import *
&gt;&gt;&gt; printer = ThermalPrinter(port="/dev/serial0")
&gt;&gt;&gt; printer.image(Image.open("thepic.png"))
</pre>

And it worked! 🙌🙌

Now I had to go through the code and update the calls as it's slightly different, but easier and nicer to use. I tried to have the image called at the bottom, but it came out all mangled and lost some of my text. So I put it at the top and it worked a treat. So the image is staying at the top. 😜

Here's the video of a playthrough:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49754696781/in/album-72157713817366118/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/31337/49754696781_37be8b436c_n.jpg" width="640" height="260" alt="Print your own adventure game with mini thermal printer"></a>

And the finished printout from the playthough:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49755036117/in/album-72157713817366118/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49755036117_6b06fbfd61_n.jpg" width="480" height="640" alt="Print your own adventure game with mini thermal printer"></a>


Finally, it's also colour blind-friendly colour buttons:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49755035552/in/datetaken-public/" title="Print your own adventure game with mini thermal printer"><img src="https://live.staticflickr.com/65535/49755035552_4705474951_n.jpg" width="640" height="480" alt="Print your own adventure game with mini thermal printer"></a>


# References
## Hardware
* [Raspberry Pi](https://www.raspberrypi.org/products/) (modals 3 and 4)
* [Pi-top 3](https://www.pi-top.com/products/pi-top-3) and [Pi-top 4](https://www.pi-top.com/products/pi-top-4)
* [Adafruit mini-thermal printer](https://www.adafruit.com/product/597)

## Software
* [Circuit Python and Arduino support for thermal printer](https://learn.adafruit.com/mini-thermal-receipt-printer)
* [Curcuit Python for thermal printer (alternate and works better espec with image handling)](https://thermalprinter.readthedocs.io/en/latest/installation.html)
* [CircuitPython](https://circuitpython.org/)
* [Mu Editor](https://codewith.mu/)
* [Pillow](https://pypi.org/project/Pillow/)
* [PyTest](https://docs.pytest.org/)
* [Python 3](https://www.python.org/downloads/)

## 3D Printing
* [Thingiverse](https://www.thingiverse.com/)
* [Prusa 3D Printers](https://www.prusa3d.com/)

## Where to buy
* [MakerShop.ie](https://makershop.ie/) 🇮🇪
* [Mouser.ie](https://www.mouser.ie/) 🇪🇺
* [Pimoroni](https://shop.pimoroni.com/) 🇬🇧
* [The Pi Hut](https://thepihut.com/) 🇬🇧

## Other
* [Berlin Makerfaire](https://en.maker-faire.de/berlin/)
* [Dublin Maker](http://dublinmaker.ie)
* [Vicky's Maker Project photos and videos on Flickr](https://www.flickr.com/photos/whykay/albums/72157713817366118)
* [Ideas, story and plot generator](https://www.plot-generator.org.uk)

