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
date: 2014-11-08
event:
  id: 37
  short_description: "Coding Grace is delighted to be running a beginners Python workshop\
    \ at [CoderDojoGirls@DCU](http://coderdojodcu.com/sessions/girls/).\r\n\r\nPlease\
    \ make sure you have Python 2.7.6 on your laptop before coming along."
  slug: coding-grace-coderdojogirlsdcu
  title: Coding Grace at CoderDojoGirls@DCU
id: 58
is_published: true
published: 2014-11-08T17:30:00Z
short_description: We were delighted to teach Python at CoderDojoGirls@DCU, time flew
  and we had a lot of fun. Here's a write-up of our morning. Big thanks to Niambh
  and CoderDojoGirls@DCU for inviting us out to run this workshop.
slug: teaching-beginners-python-coderdojogirlsdcu
title: Teaching Beginners Python at CoderDojoGirls@DCU
---

It was a wet, or so the Irish would say,  a soft morning. <a href="https://twitter.com/micktwomey">Mick</a> and I (<a href="https://twitter.com/whykay">Vicky</a>) arrived at DCU and found the venue. Everyone was setting up. It might be 10AM but there's a buzz in the air.

<blockquote class="twitter-tweet" lang="en"><p>After hectic but great work week how cool that <a href="https://twitter.com/CodingGrace">@CodingGrace</a> is leading the charge <a href="https://twitter.com/coderdojogirls">@coderdojogirls</a> this morning <a href="http://t.co/y0wycw34bZ">pic.twitter.com/y0wycw34bZ</a></p>&mdash; Eithne Harley (@EithneHarley) <a href="https://twitter.com/EithneHarley/status/531026525060341760">November 8, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Here are the two videos of Grace Hopper I mentioned during the introduction about Coding Grace:

* [Grace Hopper explaining what a Nanosecond is](https://www.youtube.com/watch?v=JEpsKnWZrJ8)
* [Grace Hopper on the Letterman Show](https://www.youtube.com/watch?v=1-vcErOPofQ)

Once we settled down, and was introduced by Niambh, we got started setting folks machines up, it was mostly Windows and we do have a few Macs.

One of the few things we had to do was make sure everyone had Python on their laptops, [Sublime Text Editor](http://www.sublimetext.com/2) installed and [the workshop content](https://bitbucket.org/codinggrace/python-project-workshop/downloads/python-project-workshop-dragon.zip) copied over and unzipped.

## See if Python works
### Mac OSX and Linux
For Mac and Linux users, Python is on by default. 
To check if it works

* ⌘ + Space
* Type "terminal" and hit ⏎
* The following should appear

	![Mac OSX terminal](http://i.imgur.com/mzQZalr.png)

* Type `python` and the following should appear, if you see `>>>` then it is working, this is called the Python interpretor. Only Python code works here.

	![Opening the Python interpretor on Mac OSX terminal](http://i.imgur.com/RYGYqLw.png)

* To exit the Python interpretor, type `exit()` and hit ⏎. This should bring you back to command line. Typing Python code doesn't work here.

	![Exiting out of Python interpretor and back to Command Line](http://i.imgur.com/z8qXig0.png)


### Windows

For those on Windows, this is what we did to set the environment settings, this makes life a lot easier when we start using <a href="http://en.wikipedia.org/wiki/Cmd.exe">CMD</a>:

* Click on Windows button.
* Right-click on the *Computer*, and click on *Properties*
* Click on *Advanced system settings* (refer to the image below)
* Click on the *Environment Variables...* button (refer to the image below)
* Under "Systems variables", scroll down to find *Path*, click on it to highlight it. (refer to image below)
* Click on *Edit...* button (refer to image below)
* Hit the right arrow key on your keyboard to make sure you are at the end of the text.
* Type the following `;c:\python27`
* Click "OK" to close dialogs.

	<a data-pin-do="embedPin" href="http://www.pinterest.com/pin/331436853801743541/"></a>
	<!-- Please call pinit.js only once per page -->
	<script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script>

To find out if it's set up properly, we need to open Command Prompt.

* Click on Windows button.
* Type `cmd` in the search and hit ⏎.
* ![Command Prompt](http://i.imgur.com/GUy8F9c.png)
* Type `python`, you should see `>>>` appear with details of the version of Python it's running.

## A couple of things to do after installing Sublime Text editor.

![Sublime Text Editor settings for Python before using it](http://i.imgur.com/GizN1Re.png)

Before we start using Sublime Text Editor, make sure you have the following set so Python-related code gets highlighted (easy to look at at, and makes it nice to use), and that we have the indentation set properly. The latter is important as part of the best programming practices in Python (see [PEP8](http://legacy.python.org/dev/peps/pep-0008/)).

* Make sure that the file is set to `Python`, if you open a completely new file, it's default is `Plain Text`. See image above.
* Make sure that `Tab Size:4` and also that `Indent Using Spaces` is checked. See image above.

## On with the show...

There were 3 command line commands that was useful to know when navigating in the CMD (Windows)/Terminal (MacOSX/Linux).

* `pwd`
	* Present working directory: where you are in the file system right at this moment.
* `ls` (on Windows, it's `dir`)
	* List what is in the current directory you are in, e.g. files and other directories.
* `cd`
	* Change directory: Go to a directory with this command. Say you are in "My documents" and you have a directory called "Projects", you will type `cd Projects`.
	* NOTE: If you ever get lost navigating your way around the file system, just type `cd` and hit ⏎. It will return you to your home directory.

## Tips
* Have your Windows Explorer / Finder (MacOSX) open alongside and you will see where you are and what directory you are going into.
* For Mac users, you can drag the icon of an app to your Terminal to get the full path to that file. Just delete the name of the file and you have the full path. 

	![Drag and drop to get full path to a given file](http://i.imgur.com/zi3iXbR.png)

If you want to learn more about CLI (Command Line Interface), see [Coding Grace's CLI workshop slides](https://docs.google.com/presentation/d/1yQzAtLDkqBmos8MgVoGk6hn8aZpE_E1TUhDsR3nggVU/pub?start=false&loop=false&delayms=60000)

NOTE: One thing I didn't mention why command line is useful to learn, when you run a Python script, if there are any errors, you can see it right away in the CMD/Terminal. On Windows, if you run by double-clicking on the Python script, if there's an error, it will just close without a way for you to see what went wrong.

## game_01.py

<script src="https://bitbucket.org/codinggrace/python-project-workshop/src/6df2aa9a4aab9abded129256b7f61a8d0145314d/workshops/text_based_adventure_game/game_01.py?embed=t"></script>

This shows where Python starts executing the code, in this case, on line 5 as if encounters `if __name__ == '__main__'`. Otherwise it will execute everything from line 1 onwards.

This script also contains a function, starts with `def` followed by the name of your function followed by `:`.

On the next line, it's 4 spaces (tab but make sure your editor has set "Indent to 4 spaces"), and your code.

To run this script via command line:

* Open CMD (Windows) /Terminal (MacOSX/Linux).
* It is important that you are in the same directory as your the Python script you are going to run. Use `pwd`, `ls` (and `cd`) to get to the directory where game_01.py is located.
* Type: `python game_01.py`.
* It should print "hello" if it works.

## game_02.py

<script src="https://bitbucket.org/codinggrace/python-project-workshop/src/6df2aa9a4aab9abded129256b7f61a8d0145314d/workshops/text_based_adventure_game/game_02.py?embed=t"></script>

Here, I am introducing some interactiveness and the beginnings of a game. It will ask for your name and it will print it out.

Grand so far, now for some editing of game_02.py.

Change 

`print(raw_input("What's your name? > "))` 

to 

`player_name =  raw_input("What's your name? >")`

Now we have a variable (a way for the computer to store information like strings and numbers).

`player_name` is a variable and when you type your name and hit ⏎, whatever you types will be stored in `player_name`.

If you run the game_02.py, it seems that nothing is happening, but it has stored your name after you entered it, but that's all it's doing. To see what `player_name` stored, we will print it out.

On the next line in game_02.py, type:

`print("Your name is {}".format(player_name.upper()))`

This looks funny, but what it is doing is telling Python that when it sees anything between and opening and closing `"`, it is a string. 

And in that string, if it sees `{}`, then it is replaced with something such as a string from a variable called player_name in this case.

---

For those on Python 2.6.x, we encountered an error when running game_02.py.

`ValueError: zero length field name in format.`

If you come across errors:

* See if there's any typos.
* Don't be afraid to do a web search on it (we all do it).

Regarding the *zero length field name* error, we realised it was the version of Python encountering `{}` in string formatting. In 2.7 (onwards), using `{}` is fine. If using Python 2.6.x, substitute `{}` with `{0}` and it should work now.

---

But sadly time flew fast and the workshop has to come to an end. It was a wonderful morning, so much enthusiasm and fun.

Big thanks to Niambh and CoderDojoGirls@DCU for inviting Mick and myself as Coding Grace.

# Questions/Feedback
If you have any questions, you can email me at <a href"mailto:vicky@codinggrace.com">vicky@codinggrace.com</a>. You can also leave a comment below. :-)

Our website for more information of upcoming events is [codinggrace.com](http://www.codinggrace.com/).

Other places to find us: [Mailing list](https://groups.google.com/forum/#!forum/coding-grace) | [@CodingGrace](https://twitter.com/codinggrace) | [FaceBook](https://www.facebook.com/pages/Coding-Grace/501098363273457)
# References
* Learn Python by making a text-based adventure game workshop content (zip file) - [https://bitbucket.org/codinggrace/python-project-workshop/downloads/python-project-workshop-dragon.zip](https://bitbucket.org/codinggrace/python-project-workshop/downloads/python-project-workshop-dragon.zip)
	* Other content from Coding Grace workshops - [https://bitbucket.org/codinggrace](https://bitbucket.org/codinggrace)
* Useful resources - [http://www.codinggrace.com/resources/](http://www.codinggrace.com/resources/)