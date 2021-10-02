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
date: 2020-05-27
id: 181
is_published: true
published: 2020-05-27T09:00:00Z
short_description: This might end up being a multi-part post. It's my learning journey
  of fails and little delights (or bigger if I'm successful) on learning about generating
  art via Processing from data obtained from the accelerometer from the Circuit Playground
  Express.
slug: generative-art-processing-and-working-circuit-playground-express
title: Generative art with Processing and working with Circuit Playground Express
---

<p class="lead">This might end up being a multi-part post. It's my learning journey of fails and little delights (or bigger if I'm successful) on learning about generating art via Processing from data obtained from the accelerometer from the Circuit Playground Express.</p>

<dl>
  <dt>Components mentioned in this project</dt>
  <dd>
  	<ul>
  		<li><a href="https://www.raspberrypi.org/products/">Raspberry Pi</a></li>
  		<li><a href="https://www.adafruit.com/product/3333">Adafruit Circuit Playground Express</a> (CPX)</li>
  		<li><a href="https://learn.adafruit.com/adafruit-circuit-playground-tri-color-e-ink-gizmo/">Adafruit Circuit Playground Tri-Color E-ink Gizmo</a></li>
  		<li><a href="https://learn.adafruit.com/adafruit-tft-gizmo">Adafruit Circuit Playgroud TFT Gizmo</a></li>
  		<li><a href="https://www.pi-top.com/products/pi-top-4">pi-top[4]</a></li>
  	</ul>
  </dd>
  <dt>Software references</dt>
  <dd>
  	<ul>
  		<li><a href="https://processing.org/">Processing</a></li>
  		<li><a href="https://py.processing.org/">PyProcessing</a></li>
  		<li><a href="https://circuitpython.org/">Circuit Python</a></li>
  		<li><a href="https://www.arduino.cc/">Arduino</a></li>
  		<li><a href="https://www.realvnc.com/en/connect/download/viewer/">VNC Viewer</a> - Virtual Network computing</li>
  	</ul>
  </dd>
</dl>

<h1>Day 1 <small>PyProcessing, Circuit Python, E-ink Gizmo - lots of experimenting</small></h1>

Ok, what I wanted to do (which made sense in my head) was to create an image with Processing when it detects sensor changes in CPX.

I was thinking of going whole hog with Python as there's a Python library for Processing via <a href="https://py.processing.org">py.processing.org</a> but first off I need to get Processing installed on my Raspberry Pi (model 4 on pi-top[4]). I quickly realised the normally version via Processing site doesn't work, but there's a <a href="https://py.processing.org">pi.processing.org</a> that has a version of Processing specific for it.

Hit download and untarred it and voila, it worked.

Spent some time going through the tutorials with Python on Processing. That was fun... now I want to get cracking on how to get it working with CPX.

I can get Circuit Python to print to the E-ink Gizmo screen with the text <code>Testing</code>. That's a good start. 😊

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49946216191/in/dateposted-public/" title="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo"><img src="https://live.staticflickr.com/65535/49946216191_ff627d187b.jpg" width="500" height="375" alt="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT e-ink" class="img-responsive img-thumbnail"></a>

Was looking at using command line to call it programmatically... not so straight forward because it specifically needs a really old version of Java... and it doesn't support OpenJDK and just ugh...

Anyway, maybe it wouldn't be so bad to play with Processing, it's only Java light, right. I found that it does interact with GPIO on the Raspberry Pi, so that's a positive. 

<div class="panel panel-default">
	<div class="panel-body">
		See:-
		<ul>
			<li><a href="https://learn.adafruit.com/processing-on-the-raspberry-pi-and-pitft/hardware-io">https://learn.adafruit.com/processing-on-the-raspberry-pi-and-pitft/hardware-io</a></li>
			<li>
				<a href="https://processing.org/reference/libraries/io/GPIO.html">https://processing.org/reference/libraries/io/GPIO.html</a>
			</li>
		</ul>
	</div>
</div>

But I want it to work with CPX. I'll be connecting it with a microUSB cable to the Raspberry Pi (which I'm VNC'd into). So playing with GPIO is a moot point.

Ok, there's too many moving parts here that don't necessarily talk to each other, let's roll back a little. What comes out of the box with Python that can generate images? It's <a href="https://docs.python.org/3/library/turtle.html">Python Turtle</a>. I kind of ignored it as I was teaching kids about Python with it late last year, but I do notice a lot of people create generative art with Python Turtle.

The next question is how to save the output of Python Turtle. 

<div class="panel panel-default">
	<div class="panel-body">
		Internetz helped here, between:-
		<ul>
			<li>
				<a href="https://www.assertnotmagic.com/2019/02/02/art-math-python/">https://www.assertnotmagic.com/2019/02/02/art-math-python/</a>
			</li>
			<li>
				<a href="https://stackoverflow.com/questions/36826570/how-to-close-the-python-turtle-window-after-it-does-its-code">https://stackoverflow.com/questions/36826570/how-to-close-the-python-turtle-window-after-it-does-its-code</a>
			</li>
		</ul>
	</div>
</div>

I can see that you can generate something simple, save it to an image (note, I had to install pillow to use PIL), and also close the Python Turtle window after it generates the image. 


<div class="panel panel-default">
	<div class="panel-body">
		ℹ️ <a href="https://python-pillow.org/">Python Pillow (for PIL) - Python imaging library</a>
	</div>
</div>

So it's back to Circuit Python after all that. Interesting exercise though.

---

### Ok, back to basics

CPX with E-ink Gizmo -> pi-top[4] with Raspberry Pi Model 4 

<div class="panel panel-default">
	<div class="panel-body">
		Remembering how to access the accelerometer data thanks to the following:
		<ul>
			<li>
				<a href="https://learn.adafruit.com/sensor-plotting-with-mu-and-circuitpython/motion">https://learn.adafruit.com/sensor-plotting-with-mu-and-circuitpython/motion</a>
			</li>
			<li>
				<a href="https://learn.adafruit.com/make-it-shake-rattle-and-roll/more-circuitpython">https://learn.adafruit.com/make-it-shake-rattle-and-roll/more-circuitpython</a>
			</li>
		</ul>
	</div>
</div>

Adafruit Libaries:

* adafruit_display_text
* adafruit_gizmo
* adafruit_il0373.mpy

<div class="panel panel-default">
  <div class="panel-body">
	Found the following error:

	<pre>Group Full RunTimeError for label.py: text was too long</pre>


   ℹ️ <a href="https://github.com/adafruit/Adafruit_CircuitPython_Display_Text/issues/11">https://github.com/adafruit/Adafruit_CircuitPython_Display_Text/issues/11</a>
  </div>
</div>

Also realising waiting 180s is very boring!


<h1>Day 2 <small>Enough with e-ink, let's try TFT Gizmo</small></h1>
Decided to switch to TFT Gizmo - e-ink Gizmo is very slow to work with. It's all ready and set up, and passed the TFT Gizmo test.

So finding out how to talk to TFT Gizmo on CPX with Circuit Python.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49946504047/in/dateposted-public/" title="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo"><img src="https://live.staticflickr.com/65535/49946504047_aebe40ef64.jpg" width="500" height="375" alt="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo" class="img-responsive img-thumbnail"></a>

Modified code so it loads up a bitmap on the TFT Gizmo.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49946505602/in/dateposted-public/" title="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo"><img src="https://live.staticflickr.com/65535/49946505602_581ea49960.jpg" width="375" height="500" alt="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo" class="img-responsive img-thumbnail"></a>

<div class="panel panel-default">
  <div class="panel-body">
     ℹ️ <a href="https://learn.adafruit.com/adafruit-tft-gizmo/tft-gizmo-test">https://learn.adafruit.com/adafruit-tft-gizmo/tft-gizmo-test</a>
  </div>
</div>

## Back to the Processing on the Pi.

Running it via command line (it's warn it's not fully supported on newer versions of Java or OpenJDK).

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://py.processing.org/tutorials/command-line/">https://py.processing.org/tutorials/command-line/</a>
  </div>
</div>

Created the Python script from the Processing sketch sample. Got the processing-py.jar file.

<pre>
	java -jar processing-py.jar [name of my python script]
</pre>

It worked!

I wanted to save the image to the disk - used <code>save()</code>, and that worked.

Next I want the dialog to close after it ran - used <code>exit()</code>, and that worked also.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49946504417/in/dateposted-public/" title="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo"><img src="https://live.staticflickr.com/65535/49946504417_21bf0c0828.jpg" width="500" height="375" alt="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo" class="img-responsive img-thumbnail"></a>

Next thing now is to pop that image onto the TFT Gizmo.

---

Loaded up the code from the e-ink Gizmo (will be modifying for TFT Gizmo) and its having problem not finding <code>displayio</code> module. Looks like I need to flash it with cpx with displayio (after a bit of troubleshooting).

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://learn.adafruit.com/adafruit-tft-gizmo/circuitpython-displayio-quickstart">https://learn.adafruit.com/adafruit-tft-gizmo/circuitpython-displayio-quickstart</a>
  </div>
</div>

Then it needed also <code>adafruit_pypixelbuf</code> module.

Ok, now I can modify to look for <code>tft</code> calls nows instead of e-ink.

Moments later, I hit a problem... The dreaded memory allocation errors.

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://learn.adafruit.com/adafruit-circuit-playground-express/frequently-asked-questions">https://learn.adafruit.com/adafruit-circuit-playground-express/frequently-asked-questions</a>
  </div>
</div>

I forgot the flash memory for CPX is quite small.

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://learn.adafruit.com/adafruit-circuit-playground-express/overview">https://learn.adafruit.com/adafruit-circuit-playground-express/overview</a>
  </div>
</div>

 I've removed comments and imports not needed. I'm only testing the example and can only display 1 of the 3 parts of the code 

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://learn.adafruit.com/adafruit-tft-gizmo/circuitpython-displayio-quickstart">https://learn.adafruit.com/adafruit-tft-gizmo/circuitpython-displayio-quickstart</a>
  </div>
</div>

 📍 In case I need to reduce size of my jpg image: [https://stackoverflow.com/questions/59483536/why-does-pil-pillow-image-save-reduce-file-size](https://stackoverflow.com/questions/59483536/why-does-pil-pillow-image-save-reduce-file-size)

Ok, I just want to bare minimum load an image I generated earlier with Processing, it's a JPG. It gave an error saying it doesn't not support the file format, so I converted it to BMP with PIL. 

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://www.daniweb.com/programming/software-development/threads/253957/converting-an-image-file-png-to-a-bitmap-file">https://www.daniweb.com/programming/software-development/threads/253957/converting-an-image-file-png-to-a-bitmap-file</a>
  </div>
</div>

And tried to load it again, and it worked. 


NOTE: READ THE TOP "GREEN BANNER" ABOUT MEM CONSTRAINTS ON [https://learn.adafruit.com/adafruit-tft-gizmo/circuitpython-displayio-quickstart](https://learn.adafruit.com/adafruit-tft-gizmo/circuitpython-displayio-quickstart) 😅 (Thanks to Mick for finding this [https://github.com/adafruit/Adafruit_CircuitPython_ST7789/issues/9](https://github.com/adafruit/Adafruit_CircuitPython_ST7789/issues/9))

---

### 🍷 BREAK 🍷

---

<div class="panel panel-default">
  <div class="panel-body">
	References
	<ul>
		<li>
			<a href="https://learn.adafruit.com/processing-on-the-raspberry-pi-and-pitft/hardware-io">https://learn.adafruit.com/processing-on-the-raspberry-pi-and-pitft/hardware-io</a>
		</li>
		<li>
			<a href="https://processing.org/tutorials/electronics/">https://processing.org/tutorials/electronics/</a>
		</li>
	</ul>
  </div>
</div>

<h1>Day 3 <small>Getting and saving accelerometer data</small></h1>
Ok, today's task is to get value of accelerometer and save to filesystem on CPX. So I tried, and it bounced back 

<samp>OSError: [Errno 30] Read-only filesystem</samp> 

...hmm, ok-aay. 

After a bit of searching I found the solution to write to the filesystem with CircuitPython from an Adafruit article. 🙌

<div class="panel panel-default">
  <div class="panel-body">
    <ul>
    	<li>
    		<a href="https://learn.adafruit.com/cpu-temperature-logging-with-circuit-python/writing-to-the-filesystem">https://learn.adafruit.com/cpu-temperature-logging-with-circuit-python/writing-to-the-filesystem</a>
    	</li>
    	<li>
    		<a href="http://21stdigitalhome.blogspot.com/2018/03/circuitpython-program-for-writing.html">http://21stdigitalhome.blogspot.com/2018/03/circuitpython-program-for-writing.html</a>
    	</li>
    </ul>
  </div>
</div>

So I created the boot.py, restarted CPX, and yip, the csv was created when the programme started to run.

And as expected from reading the article, when I modified the code, it didn't let me save it.

Workaround is rename boot.py via the Python REPL because you can't edit boot.py. And that worked, I made a quick edit on the code (output 3 readings instead of 10) and saved it!

Renamed the boot file back to boot.py, and hit the reset button on CPX.

Checked the CSV file and it has 3 readings saved to it! Amazing!

Was showing Mick and suggested an alternative as this way may damage the filesystem, and it is pretty hacky. We tried to look at ways to transmit the data over USB serial... bar bringing a wire from one of the pins. Plus we tried switching off the terminal window which replaces the bitmap image on the TFT if we don't use a while loop, again, no easy way to not have the terminal replace the bitmap image. 

🧐 I think we have hit the limit of what Circuit Python can do. So onwards to Arduio and see what fun things I can do with that.

<h1>Day 4 <small>Arduino time</small></h1>
Moved development onto my Mac from Raspbery Pi.

Step 1: Downloaded Arduino on my Mac. 

Step 2: ...

Step 3: Profit! 😆

Note that the last time I used this was a number of years ago when I ran a wearable workshop and I was more or less following someone's lead.

Followed instructions from installing libraries right up to testing TFT Gizmo sample code.

<div class="panel panel-default">
  <div class="panel-body">
  	ℹ️ <a href="https://learn.adafruit.com/adafruit-tft-gizmo/arduino-libraries-test">https://learn.adafruit.com/adafruit-tft-gizmo/arduino-libraries-test</a>
  </div>
</div>

Tried to run example code, it failed saying it can't find <code>SP1</code> library.

At the moment in time, Mick was just passing by and seeing how I got on, and he had more experience in Arduino. He asked if I installed everything. He thinks the board is missing, and suggested to look up setup for CPX for Arduino. 

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://learn.adafruit.com/adafruit-circuit-playground-express/set-up-arduino-ide">https://learn.adafruit.com/adafruit-circuit-playground-express/set-up-arduino-ide</a>
  </div>
</div>

Followed the instructions and ran the blink example. Still didn't work.

The board was still not found, checked the port and changed it, and the blink code works!

Tried the TFT Gizmo example and it didn't work. Re-checked libraries from docs several times, restarted CPX, and even commented out calls to functions to see what works and printing text to serial. Nothing written out to TFT. I do notice the TFT backlight coming on.

Dropped the TFT Gizmo UF2 onto CPX and the test does work.

---

### ☕️ BREAK ☕️

---

Still figuring out why the TFT library not working. 

I also wanted to find out how to call the accelerometer via Arduino.

Mick popped up again to see how I was getting on, from his experience of using Arduino, he was asking if maybe when CPX was connecting was not ready yet, so looked up info about Serial on Arduino docs and found:

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial">https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial</a>
  </div>
</div>

Added the while loop from the following snippet:

<pre>
void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB
  }
}

void loop() {
  //proceed normally
}
</pre>

And the calls in setup() seem to work now. So that's a good sign. Well, the printing to serial. I still haven't got the TFT libraries to work.

I was ignoring this part of the code:

<pre>
// OPTION 1 (recommended) is to use the HARDWARE SPI pins, which are unique
// to each board and not reassignable.
Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);
 
// OPTION 2 lets you interface the display using ANY TWO or THREE PINS,
// tradeoff being that performance is not as fast as hardware SPI above.
//#define TFT_MOSI 29  // Data out
//#define TFT_SCLK 30  // Clock out
//Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST);
</pre>

<code>Option 2</code> was recommended for Circuit Playground Classic, so I let it as is. Mick was also looking into it on his laptop and found that using Option 2 works (after we confirmed that our board is CPX). So I used the code from Option 2 and, it works. I don't mind if it's a little slower, I'm just pulling accelerometer data and displaying a generated image as the accelerometer numbers change. Let's pin generating image and displaying it on TFT for now.

So the tft library works at set up. Let's try, say, print X value from the accelerometer in the loop. It failed because of course you can't print a float as text. You have to convert it. And I found many answers following but less so on what library to include including the library to include:

<pre>dtostrf(FLOAT,WIDTH, PRECISION,BUFFER);</pre>

After a couple of false leads (no surprisingly), this was the library to include for <code>dtostrf</code> to work: 

<pre>&lt;avr/dtostrf.h&gt;</pre>

And that worked. So I called it a night.

<h1>Day 5 <small>CPX, Gizmo TFT</small></h1>
Hmm, running Circuit Playground library stops me using the tft library. Had a sounding out with Mick and came to same conclusion to bypass Circuit Python, he said they wrapped it around code for the accelerometer anyway.

So went looking at the Circuit Playground source code on github:

* [https://github.com/adafruit/Adafruit_CircuitPlayground/blob/master/Adafruit_CircuitPlayground.cpp](https://github.com/adafruit/Adafruit_CircuitPlayground/blob/master/Adafruit_CircuitPlayground.cpp)
* [https://github.com/adafruit/Adafruit_CircuitPlayground/blob/master/Adafruit_Circuit_Playground.h](https://github.com/adafruit/Adafruit_CircuitPlayground/blob/master/Adafruit_Circuit_Playground.h)

I noticed in the header file it included <code>Adafruit_CPlay_LIS3DH.h</code>, so I commented looked for examples that use LIS3DH libraries, and thankfully there were a few out there, so I added

<pre>
#include &lt;Adafruit_LIS3DH.h&gt;
#include &lt;Adafruit_Sensor.h&gt;
</pre>

plus the following declarations 

<pre>
// Used for software SPI
#define LIS3DH_CLK 13
#define LIS3DH_MISO 12
#define LIS3DH_MOSI 11
// Used for hardware & software SPI
#define LIS3DH_CS 10

// software SPI 
//Adafruit_LIS3DH lis = Adafruit_LIS3DH(LIS3DH_CS, LIS3DH_MOSI, LIS3DH_MISO, LIS3DH_CLK);
// hardware SPI 
//Adafruit_LIS3DH lis = Adafruit_LIS3DH(LIS3DH_CS);
// I2C 
Adafruit_LIS3DH lis = Adafruit_LIS3DH(&Wire1);
</pre>

Not sure if the additional code worked for LIS3DH, so I found the following snippet to check if it was found or not:

<pre>
if (! lis.begin(0x19)) {   // change this to 0x19 from 0x18 for alternative 	i2c address
	Serial.println("Couldnt start");
	while (1) yield();
}
Serial.println("LIS3DH found!");
</pre>

And that's where I got stuck... no matter what iterations of commenting out and in I did, or change the i2C address, it came back with

<samp>"Couldnt start"</samp>

😫 This was head-wrecking for most of the day. 

### Later that evening

Still having problems getting to connect with the accelerometer. I needed another pair of eyes... well, in truth, I wasn't going to turn in for bed (t was getting really late) as I was being stubborn on trying to figure this out. So Mick took a look as well, and spotted the CPP file I had open in the "begin" function to see how they declared it. Now this was staring in my face the whole time

<pre>lis = Adafruit_CPlay_LIS3DH(&Wire1);</pre>

Why didn't I try putting <code>&Wire1</code> as an argument?! 😳

Added the argument, saved and compiled. Hit that upload button, held breath when no errors appeared and.... IT WORKED! 

#### Sample Output from Accelerometer
<pre>
X:  608  	Y:  5344  	Z:  -15376
Screen should be blue now!
X:  592  	Y:  5296  	Z:  -15584
Screen should be blue now!
X:  752  	Y:  5248  	Z:  -15456
Screen should be blue now!
X:  512  	Y:  5184  	Z:  -15424
Screen should be blue now!
X:  608  	Y:  5200  	Z:  -15488
</pre>

💤 Bedtime! #KThxBai

<h1>Day 6 <small>This blog post, processing</small></h1>
Ok, before I dropped off to sleep, I found the following article which is pretty much what I need to connect arduino to processing and have them sending data between them.

<div class="panel panel-default">
  <div class="panel-body">
    ℹ️ <a href="https://learn.sparkfun.com/tutorials/connecting-arduino-to-processing/all">https://learn.sparkfun.com/tutorials/connecting-arduino-to-processing/all</a>
  </div>
</div>

* board -> processing : data from accelerometer
* processing -> board : bitmap image generated from accelerometer data

So that's today's goal, at least get processing picking up data from accelerator.

### Before that happens, a little side-track
I wanted to see if I can get the accelerometer data in m/s instead of the raw data, and print it to the TFT.

Here's the bit of code that retrieves the data in m/s^2

<pre>lis.getEvent(&event);</pre>

I set the background of TFT to be black (<code>ST77XX_BLACK</code>).

Now when I write to the TFT, the text just writes on top of each other makine a mess after awhile. Did a little search on refreshing text on TFT, and all I needed to do was print the text with its text colour **plus** the background colour (in this case is black).

<pre>tft.setTextColor(color, ST77XX_BLACK);</pre>

Saved, compiled and uploaded the code and that did the trick.

Also played around setting the text size, if you are curious, this is what I used:

<pre>tft.setTextSize(3);</pre>

<div class="panel panel-default">
  <div class="panel-body">
  	<ul>
  		<li>
  			Clearing existing text - <a href="https://github.com/adafruit/Adafruit-GFX-Library/issues/16">https://github.com/adafruit/Adafruit-GFX-Library/issues/16</a>
  		</li>
  		<li>
  			<a href="https://github.com/adafruit/Adafruit-GFX-Library/blob/master/Adafruit_GFX.h">https://github.com/adafruit/Adafruit-GFX-Library/blob/master/Adafruit_GFX.h</a>
  		</li>
  	</ul>
  </div>
</div>


### Now I have my data in m/s, let's get processing talking to it
I'm going to initially send over the X value.

Created my processing code and got this exception

<pre>
RuntimeException: Error opening serial port /dev/cu.usbmodem14101: Port busy
</pre>

---

### 🥪 BREAK 🥪

---

Over lunch I asked Mick that I couldn't connect to the serial port via Processing. He mentioned if I closed my Arduino IDE. 😳

Yep, very **DOH!** moment there.

So after lunch I closed Arduino IDE, modified the code on Processing a little and lo and behold... it worked!

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49945752138/in/dateposted-public/" title="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo"><img src="https://live.staticflickr.com/65535/49945752138_d869e8933d.jpg" width="375" height="500" alt="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo" class="img-responsive img-thumbnail"></a>

Ok, I can read text, I want to read values now.

---

Before I do that, I'm ditching my PyProcessing code from before and changing to pure Processing now.

So do the same thing (easily replicated from the official tutorial docs drawing the grayscale image), and I wanted to <code>save()</code> the image as bitmap and <code>exit()</code> the programme, which was all fine.

Now I was looking at drawing simple shapes and lines, and have it randomised (colours between 0 and 255) and the X/Y co-ordinates in-between 240x240.

After a bit of reading through shapes and PShapes, I stuck with primative shapes, I wanted lines and various sized ellipses in various colours generated before the time lapses and gets saved to a bitmap file.

Here's a sample of the generated bitmap from Processing.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/49946504302/in/dateposted-public/" title="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo"><img src="https://live.staticflickr.com/65535/49946504302_681767de06_m.jpg" width="240" height="240" alt="Vicky&#x27;s new Maker project - generative art &amp; Adafruit Circuit Playground &amp; TFT Gizmo" class="img-responsive img-thumbnail"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<div class="panel panel-default">
	<div class="panel-body">
		<ul>
			<li>
				Coordinate System and Shapes: <a href="https://processing.org/tutorials/drawing/">https://processing.org/tutorials/drawing/</a>
			</li>
			<li>
				PShapes: <a href="https://processing.org/tutorials/pshape/">https://processing.org/tutorials/pshape/</a>
			</li>
		</ul>
	</div>
</div>

