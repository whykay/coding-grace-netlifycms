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
id: 177
is_published: true
published: 2020-04-20T16:16:00Z
short_description: 'Everyone has a wee song to sing to while washing your hands for
  20 seconds, since I had Adafruit''s Circuit Playground Express handy, why not create
  a visual countdown. '
slug: quick-maker-project-counting-down-20s-while-you-wash-your-hands-circuit-playground-express
title: Quick Maker Project - Counting down 20s while you wash your hands with Circuit
  Playground Express
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49798326202/in/datetaken-public/" title="20s countdown timer maker project banner"><img src="https://live.staticflickr.com/65535/49798326202_820ba9e9f2_z.jpg" width="640" height="360" alt="20s countdown timer maker project banner"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Everyone has a wee song to sing to while washing your hands for 20 seconds, since I had Adafruit's Circuit Playground Express handy, why not create a visual countdown. 


## 👉 You will need:

* 1 x [Circuit Playground Express](https://learn.adafruit.com/adafruit-circuit-playground-express) (aka CPX)
* 1 x MicroUSB to USB cable (so the CPX can talk to your computer)
* Laptop
* Editor of choice, I chose [Mu Editor](https://codewith.mu/) as it recognises Adafruit components and quick way to change and upload code as well as debugging, etc.
* [CircuitPython for CPX](https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart) installed
* Battery to power the CPX

## 🧐 Why did I choose Adafruit's Circuit Playground Express?
I had one around and I wanted to put something useful on it, plus I want to play a little more with CircuitPython. The CPX has 10 bright LEDS ([Neopixels](https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express/neopixels)) so perfect for the 20 second countdown. 

It also has a "Microphone Audio Sensor" so it can pick up sounds. And there's already code handily written on detecting sound via [Adafruit's Sound example](https://learn.adafruit.com/sensor-plotting-with-mu-and-circuitpython/sound). 

<div class="panel panel-info"> 
	<div class="panel-heading"> 
		<h3 class="panel-title">ℹ️ More info about CPX</h3> 
	</div> 
	<div class="panel-body"> Check out the guided tour of the CPX here: <a href="https://learn.adafruit.com/adafruit-circuit-playground-express/guided-tour">https://learn.adafruit.com/adafruit-circuit-playground-express/guided-tour</a></div> 
</div>

All the elements are there, so let's get started! 💪

# 🤔 What I wanted to do
* Clap hands to initiate the countdown
* Changes colour and flashes a couple of times to let you know it heard your clap, and it gives you time to turn on tap, get soup on your hands
* Each Neopixel comes on for the 1st 10 seconds going clockwise, as it reaches the end, all Neopixels turns off and each one lights up going counter-clockwise.
* When 20 seconds are done, it flashes to turn on all Neopixels to green (one colour) to state that you have comepleted the required time to wash your hands.

# 📸 Some pics

## The CPX I have with and without the case

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49798250597/in/datetaken-public/" title="Adafruit&#x27;s Circuit Playground Express"><img src="https://live.staticflickr.com/65535/49798250597_437a6dde86_z.jpg" width="480" height="640" alt="Adafruit&#x27;s Circuit Playground Express"></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49797940891/in/datetaken-public/" title="Adafruit&#x27;s Circuit Playground Express"><img src="https://live.staticflickr.com/65535/49797940891_cba3713251_z.jpg" width="480" height="640" alt="Adafruit&#x27;s Circuit Playground Express"></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49798250382/in/datetaken-public/" title="Adafruit&#x27;s Circuit Playground Express"><img src="https://live.staticflickr.com/65535/49798250382_106a06de7f_z.jpg" width="480" height="640" alt="Adafruit&#x27;s Circuit Playground Express"></a>

## 🎉 Result

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49798220412/in/datetaken-public/" title="20s countdown for washing your hands with Circuit Playground Express"><img src="https://live.staticflickr.com/65535/49798220412_8b04365068_z.jpg" width="480" height="640" alt="20s countdown for washing your hands with Circuit Playground Express"></a>

📽 Here's a video of it working, my hands were sore from clapping while testing so I tapped it loudly on the casing which registers the sound as well. 😊

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49797364043/in/datetaken-public/" title="20s countdown for washing your hands with Circuit Playground Express"><img src="https://live.staticflickr.com/31337/49797364043_0099834084_z.jpg" width="359" height="640" alt="20s countdown for washing your hands with Circuit Playground Express"></a>

<div class="panel panel-info"> 
	<div class="panel-heading"> 
		<h3 class="panel-title">ℹ️ Source code for project</h3> 
	</div> 
	<div class="panel-body"> Here's the code on github: <a href="https://github.com/whykay/cpx_clap_wash">https://github.com/whykay/cpx_clap_wash</a></div> 
</div>

<iframe src="https://trinket.io/embed/python/9a8e338849?showInstructions=true" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
