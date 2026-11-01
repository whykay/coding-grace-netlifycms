---
title: Python and Electronics Workshop Series Post-Event Write-up
description: "A write-up of our inaugural workshop series hosted by The Digital Hub and part-funded by Dublin City Council"
author: Vicky Twomey-Lee
date: 2026-11-01
published: 2026-11-01
tags:
  - events
---

<!--<h1>Python and Electronics Workshop Series Post-Event Write-up</h1>-->
Coding Grace facilitated and completed our inaugural [Python and Electronics Workshop series](https://codinggrace.com/events/a-taste-of-python-electronics/) which was fulled booked out and took place over five Saturdays in September and October. 

The workshop was
-  hosted by The Digital Hub in their [Learning Studios](https://thedigitalhub.com/explore/workspaces/#thelearningstudio)
- part-funded by [Dublin City Council Community Grant Scheme 2026 - The Informal Adult Education Grant](https://www.dublincity.ie/people-and-communities/community-improvement-initiatives/find-community-grants-and-funding/dublin-city-council-community-grant-scheme-2026)

There was a lot of preparations for a multi-day workshop for coding and hardware. On the lead up to the workshops, I 3D-printed battery holders, testing paper circuits, electronic components on breadboards for content and exercises over the summer.
(Insert pictures)

The content can be found here: [https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop)

Each week contains slides and handouts plus extra information relating to the workshop for that session, example, [Session 4](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop/Session%204%20-%20More%20CircuitPython%20with%20Electronics%20on%20Pico)

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/55625823821/in/dateposted/" title="A Taste of Python and Electronics Workshop Series"><img src="https://live.staticflickr.com/65535/55625823821_b27199cb13_k.jpg" width="1920" height="1080" alt="A Taste of Python and Electronics Workshop Series"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

We packed up our trolley each sunny Saturday morning, set up the room, and were ready and waiting for participants. We explained, demoed and facilitated each session, primarily making sure most of the short 1.5h session is as hands-on as possible. After each session, there’s a shopping list of what was used in the session, and further information for the participants to check out.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/55626028629/in/dateposted-public/" title="A Taste of Python and Electronics Workshop Series"><img src="https://live.staticflickr.com/65535/55626028629_d214c2c33d_k.jpg" width="1920" height="1080" alt="A Taste of Python and Electronics Workshop Series"/></a>

Each week we focussed on a different topic which built on the knowledge of the previous week.

The [first session](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop/Session%201%20-%20Circuits%20with%20Paper%20Circuits) was important we introduced the fundamentals of circuits with paper circuits (copper tape, batteries and LEDs). We covered simple, and parallel circuits and circuit with a switch demonstrating closed and open circuits with and LED.

[Session 2](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop/Session%202%20-%20Circuits%20with%20breadboard%20and%20components) was applying the circuits knowledge with breadboards and electronics by creating simple and parallel circuits with a microcontroller as a power source instead of a battery, and an LED. This was also where we introduced the breadboard and how it functions with the components and how the completed circuit works on a breadboard.

Another exercise included applying the knowledge of how the switch works with addition of a button to a simple circuit. 

This session also introduced 
The variable resistor, a component called a potentiometer, whereby when you twist the knob left or right, the LED dims and brighten
The photoresistor (also know as light-dependent resistor, LDR), which changes resistance depending on the amount of light it received. So the LED will brighten or dim depending on the amount of light the LDR received.

[Session 3](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop/Session%203%20-%20Intro%20to%20Pico) was the introduction of the history of Raspberry Pi Pico and we are using a variant called the Pimoroni Pico Plus 2 by Pimoroni, and a bit of Python. We covered the differences, where to look up its specs and pinouts.
Next was setting up CircuitPython on the Picos by flashing it (in bootloader mode) either manually or via Thonny Code Editor. Once the Picos were setup, the interactive shell (REPL) was introduced  where they can write and run Python commands. We explained what CircuitPython is and how it came about and who’s Adafruit, the organisation behind it and many electronic components and products, in which we are very big fans of because of its accessibility to making and electronics.
The primary goal of getting familiar dealing with Pico and CircuitPython was getting folks to turn on the LED on the Pico board itself with CircuitPython. This was done both through the interactive shell (REPL) and the Thonny code editor.

[Session 4](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop/Session%204%20-%20More%20CircuitPython%20with%20Electronics%20on%20Pico) continues with more hands on interacting with electronics on a breadboard with Pico and CircuitPython. We reminded people how Picos are restarted, and wrote more Python code on the REPL and on Thonny editor. 
From the previous session, the LED can be turned on on the Pico board, the next step was  we turning it off and on multiple times with an introduction of sleep function. This is where functions and tools that came with Python was explained. Instead of limited number of times turning the LED on and off, an improvement can be done by the introduction of a while loop to turn the LED on and off forever.
The next step was to blink the LED on the breadboard, this introduces GPIO pins on the Pico and a resistor in a basic circuit, and what is digital output.

Next was turning on the LED with a press of a button using CircuitPython.
Understanding  how this works, further exercises for those who do include basic traffic lights.

Next we introduced analogue input and the main GPIO pins to note on the Pico (e.g. GPIO26 is also A0 for its analogue pin). Hands-on exercises here include creating a simple circuit with a potentiometer, a resistor and an LED. We pointed out the the values produced by the potentiometer are analogue values and can be converted to voltage values in Python.

Now that they know that digital outputs (LEDs) can be turned on and off, next was showing that LEDs can also be faded with a potentiometer, and this is an example of an analogue output.

The next and final exercise was related to sensors, and this is is done using a photoresistor (LDR), which is analogue and with CircuitPython, these signals are converted to digital signals so the Pico can understand it. 

The [fifth and final session](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/2026-workshop/Session%205%20-%20ALT.CTRL) was introducing people to what ALT.CTRL (short for alternative controller), it’s a concept of making alternative ways to play games, and we have a pair of custom PCB boards with four buttons each. This brings all the the knowledge of what we learnt the past few weeks. HID (human interface device) was introduced, this means that the input devices that connect to the laptop is being treated as a keyboard (or mouse, gamepad).
Flashing the pico, initial set up boot.py 
Learn about setting up HID device on the Pico with the ALT.CTRL custom package
Setting up the package to install the supporting libraries for the ALT.CTRL boards via Thonny editor
Writing CircuitPython to import the functionality so the ALT.CTRL can now play games - in this case, Pico-8 games.
Finally how to remove a custom package from the Pico, with extra steps for MacOS users

As a gesture of appreciation and committment for coming to our sessions each week, we gifted each person a present, a [Pimoroni Qw/ST Pad (I2C Game Controller)](https://shop.pimoroni.com/en-eu/products/qwst-pad?variant=53514400596347), and provided [instructions](https://codeberg.org/codinggrace/python-electronic-workshop-series/src/branch/main/Bonus%20-%20GamePad%20Kit) on how they can get it to work at home.

When we wrapped up, one of the feedback was “when’s part two?” 😆, which was amazing to hear as there’s still interest in extended sessions relating to (Circuit)Python and Electronics with say motors, and other sensors.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/whykay/55626057204/in/dateposted-public/" title="A Taste of Python and Electronics Workshop Series"><img src="https://live.staticflickr.com/65535/55626057204_01191cae68_k.jpg" width="1920" height="1080" alt="A Taste of Python and Electronics Workshop Series"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

👏 A huge thank you to

- Everyone who participated the workshops each week
- The Digital Hub for hosting us in their [Learning Studios](https://thedigitalhub.com/explore/workspaces/#thelearningstudio)
- The [Dublin City Council Community Grant Scheme 2026 - The Informal Adult Education Grant](https://www.dublincity.ie/people-and-communities/community-improvement-initiatives/find-community-grants-and-funding/dublin-city-council-community-grant-scheme-2026) for part-finding the workshop series

Overall, the classes were full of enthusiasm, questions, and we both enjoyed facilitating and sharing our experiences during those sessions.

There were a few things for me to note:

- there's not enough time per session - at least 2 hours per session
- extra instructions about flashing the Pico (e.g. don't need to be in bootloader mode each time)
- people were not a fan of copper tape, so we will update our intro to circuits section (Spoiler alert: it will be how to read schematics)

👀 There has been other interests in the workshops,e.g. a request for 1-day workshops instead of multiple days. Therefore we have will be running another workshop with Clare Education Centre on Saturday November for post-primary teachers (non-teachers welcome as well). 

👉 Note: We need a **minimum of 10** people attending for the workshop to take place. Please share in your network, especially if you know someone who might be interested. 🙏

- **Introduction to Python and Electronics**
- 🗓️ Saturday November 14th, 2026 (09:30 - 15:30)
- 📍 Clare Education Centre
- 🎟️ [https://www.clareed.ie/cpd-courses-2/post-primary-courses/4484-face-to-face-workshop-introduction-to-python-and-electronics.html](https://www.clareed.ie/cpd-courses-2/post-primary-courses/4484-face-to-face-workshop-introduction-to-python-and-electronics.html)


If folks are interested in this or similar workshops, contact us at <a href="mailto:contact@codinggrace.com>contact@codinggrace.com</a>.