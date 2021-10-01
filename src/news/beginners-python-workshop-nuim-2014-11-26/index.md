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
  id: 35
  short_description: Vicky Twomey-Lee will be mentoring beginners Python workshop
    with the additional fun of basing it on a text-based-adventure game. This workshop
    is mainly open for NUIM students and staff.
  slug: beginners-python-workshop-nuim
  title: Beginners Python Workshop @ NUIM
id: 60
is_published: true
published: 2014-11-26T22:30:00Z
short_description: A short write-up for the beginners Python workshop at NUIM.
slug: beginners-python-workshop-nuim
title: Beginners Python workshop at NUIM
---

Through thick and thin... well, a driving through a big dense cloud of fog that is, we made it to Maynooth (slightly bit late). Although it wasn't as bad earlier in the day when I was packing the notebooks:

<blockquote class="twitter-tweet" lang="en"><p>What a mess! All for this evening&#39;s <a href="https://twitter.com/hashtag/Python?src=hash">#Python</a> workshop at <a href="https://twitter.com/gomaynooth">@gomaynooth</a> this evening. <a href="https://twitter.com/hashtag/diversity?src=hash">#diversity</a> <a href="http://t.co/Phhe7zi5Fh">pic.twitter.com/Phhe7zi5Fh</a></p>&mdash; Coding Grace (@CodingGrace) <a href="https://twitter.com/CodingGrace/status/537268647182757888">November 25, 2014</a></blockquote>

With sandwiches and hot tea/coffee to welcome us, we are pretty spoilt. So we began the workshop after finding out that nearly everyone has Python on their machine and the workshop content. That made it easier for us, plus we had three mentors to help us out. Thanks, Maria, for bringing more help.

For those curious, here's how to setup Python on Windows.

<script src="https://codinggrace.hackpad.com/1m1XinUIThG.js"></script><noscript><div>View <a href="https://codinggrace.hackpad.com/1m1XinUIThG">Installing Python on Windows</a> on Hackpad.</div></noscript>

You can find out more information on setting the *environment variables* (Windows only) so you can run Python easily via command line [here via another blog post](http://www.codinggrace.com/news/teaching-beginners-python-coderdojogirlsdcu-2014-11-8/).

We have more Mac users than Windows users, which really makes Mick and I very happy indeed.

Everyone was quite attentive with a few questions here and there, and I think overall, most people got something out of the beginners Python workshop.

### Comments

I also showed how to comment out code so Python will ignore it if you run the Python script, just add a "#" in front, e.g.:

    #print("hello")

### Lists - removing items from a list

You create a list of items (all text):

    >>> treasure=["diamonds", "gold", "silver", "sword"]

You can remove the last item by "popping":

	>>> treasure.pop()
	'sword'

You can assign something you pop to a variable, e.g. a_treasure = treasure.pop()

You can check what's left in your treasure list:

	>>> treasure
	['diamonds', 'gold', 'silver']

You can delete the second item from the list altogether:

	>>> del(treasure[1])
	>>> treasure
	['diamonds', 'silver']

Let's re-create the list again:

	>>> treasure=["diamonds", "gold", "silver", "sword"]
	>>> treasure
	['diamonds', 'gold', 'silver', 'sword']

Let's user slicing, and get the first two items and assign it to a variable "treasure2":

	>>> treasure2 = treasure[0:2]
	>>> treasure2
	['diamonds', 'gold']

For those who came along to the workshop, don't be afraid to play around with the code.

## Why command line?

Running it via command line gives you an advantage of seeing where the errors occurred in the Python script you just ran

	$ python game_10.py 
	  File "game_10.py", line 183
	    print("Making an error on purpose)
	                                     ^
	SyntaxError: EOL while scanning string literal

To fix this, you close the double-quotes: `print("Making an error on purpose")`

	$ python game_10.py 
	What's your name? > 

If you try to "double-click" a .py file on Windows, it will execute and exit straight away if there's an error without you knowing what's wrong, or where it's going wrong.

With command line, you can run the Python interpretor, and test Python code snippets to your hearts content. It's what developers use a lot to be certain that code does what it's expected. Plus you can use it as an overkill calculator.

## Finally...
Here are a couple of kind tweets

<blockquote class="twitter-tweet" lang="en"><p>At the <a href="https://twitter.com/CodingGrace">@CodingGrace</a> workshop in <a href="https://twitter.com/DHforasfeasa">@DHforasfeasa</a>. We&#39;re going to make a game using <a href="https://twitter.com/hashtag/Python?src=hash">#Python</a>!</p>&mdash; Emma Clarke (@Clarke__Emma) <a href="https://twitter.com/Clarke__Emma/status/537313863965081600">November 25, 2014</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/CodingGrace">@CodingGrace</a> Awesome Python Workshop tonight! Can&#39;t wait to introduce my young cousins to programming now!</p>&mdash; MyNameIsMizu (@MizuAteMyNoodle) <a href="https://twitter.com/MizuAteMyNoodle/status/537380705740017665">November 25, 2014</a></blockquote>

I really enjoyed my evening in NUIM and I hope everyone enjoyed the workshop. Do share if you added more to the game in the comments below. 

Thanks to everyone who came along, Maria for setting this up, NUIM for looking after us, mentors who helped Mick and myself out. You are all awesome, and I would be delighted to come back again.

Here's what I was doing after I got home and had dinner. :-)

<blockquote class="twitter-tweet" lang="en"><p>Watching <a href="https://twitter.com/hashtag/cooptitude?src=hash">#cooptitude</a> after an evening mentoring <a href="https://twitter.com/CodingGrace">@codinggrace</a> <a href="https://twitter.com/hashtag/Python?src=hash">#Python</a> workshop at <a href="https://twitter.com/gomaynooth">@gomaynooth</a>. <a href="https://twitter.com/hashtag/GeekinOut?src=hash">#GeekinOut</a> <a href="http://t.co/L7GslW5gQl">http://t.co/L7GslW5gQl</a></p>&mdash; whykay (@whykay) <a href="https://twitter.com/whykay/status/537387652140388352">November 25, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


A December newsletter will be coming out early next week giving you heads up on upcoming workshops, what's in the works and all the events I can find that are interesting that are happening around Ireland (but mostly in Dublin). You can sign up to our monthly newsletter by going to [CodingGrace.com](http://codinggrace.com).

Follow us on [@CodingGrace](https://twitter.com/codinggrace) | Like us on [Facebook](https://www.facebook.com/pages/Coding-Grace/501098363273457).

If you have any questions, you can email <a href="mailto:contact@codinggrace.com">contact@codinggrace.com</a>.
