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
date: 2014-04-30
event:
  id: 3
  short_description: "Want to learn Python? This workshop are for people with no programming\
    \ experience. This workshop will cover the fundamentals of Python while making\
    \ a text-based adventure game.\r\n\r\nPlease make sure you have Python 2.7.6 on\
    \ your laptop."
  slug: make-text-based-game-python
  title: Make a text-based game in Python
id: 26
is_published: true
published: 2014-04-30T00:00:00Z
short_description: 'Write-up of the making a text-based game with Python workshop. '
slug: coding-grace-text-based-game-with-python
title: Coding Grace Text-Based Game with Python
---


After a wee delay in starting the workshop, we got going. At least it was an excuse to get folks make them selves a cuppa and take a biccie or two.

<blockquote class="twitter-tweet" lang="en-gb"><p><a href="https://twitter.com/CodingGrace">@CodingGrace</a> workshop starting and will make a game tonight! How exciting! <a href="http://t.co/IZw9bpyYZ9">pic.twitter.com/IZw9bpyYZ9</a></p>&mdash; Sung-Yueh Perng (@syperng) <a href="https://twitter.com/syperng/statuses/460836207401132032">April 28, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

There were a few things to set up which I forgot to ask people to install, a text editor. PyCharm IDE and Sublime Text Editor are my recommended editors to use. PyCharm IDE is handy as it has the terminal and Python interpreter all in one place. Personally I just use Sublime Text Editor and a seperate terminal.

<blockquote class="twitter-tweet" lang="en-gb"><p><a href="https://twitter.com/CodingGrace">@CodingGrace</a> workshop is getting magical for me now watching the computer asking me a question <a href="http://t.co/dzoJK9PUG0">pic.twitter.com/dzoJK9PUG0</a></p>&mdash; Sung-Yueh Perng (@syperng) <a href="https://twitter.com/syperng/statuses/460846038761623553">April 28, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Once we got going, I started to show how to get user input via command line. 
Showing some examples of strings, and got folks comfortable in using basic command line, and the Python interpreter.

**Reference:** [Coding Grace Basic Command Line Workshop](https://docs.google.com/presentation/d/1yQzAtLDkqBmos8MgVoGk6hn8aZpE_E1TUhDsR3nggVU/pub?start=false&loop=false&delayms=3000#slide=id.p)

<blockquote class="twitter-tweet" lang="en-gb"><p>Now preparing to enter a game at <a href="https://twitter.com/CodingGrace">@CodingGrace</a> workshop!! <a href="http://t.co/oMe2HNvZb9">pic.twitter.com/oMe2HNvZb9</a></p>&mdash; Sung-Yueh Perng (@syperng) <a href="https://twitter.com/syperng/statuses/460853436805050368">April 28, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
Once people know how to create a Python file, run it, I pretty much walked through by typing a few lines of code and running it. Mick and Ursula were fantastic, they went around helping people. I've introduced strings (touching a little on string manipulation), printing out text, escaping characters, new string formatting, numbers, if statements (various ways of comparing text input), calling other functions from a function, exiting the program, lists (accessing its elements), for loops, while loops (caution using this), booleans (people were starting to get tired here), and finally returning something after calling a function.

And in the process of learning Python, this is the simple story I wanted to base the game on:

* You are in a room and you have a red and blue door to choose from.
    - Red door leads to the Painful Truth of Reality Room where you will encouter Cthulhu. You have two options, flee for your life or eat your own head. (This is [Cthulhu](http://en.wikipedia.org/wiki/Cthulhu).)
        + flee: go back out to the room with two doors
        + die
    - Blue door leads to the Blissful Ignorance of Illusion room where you encounter a wooden treasure chest and a sleeping guard in front of a door.
        + wooden treasure chest, option to open or leave it;
            - If you open it, you will take treasure, pick up the shiney sword and drop your crappy one in the chest, and head towards the guard in front of the door.

            - If you leave it, you will check out the guard in front of the door. 
        + check out the guard in front of the door

        As you walk towards the guard, you clumsily walk into a wooden cask knocking the mug off with and it crashed to the ground, waking the guard.

        Pending on following outcomes, you either get out alive or be killed by the guard.
     
        * You run and the guard hasn't moved, but stupidly looks the other way; you are still alive.
        * You run and the guard has moved, the guard kills you.
        * You go for the door and the guard hasn't moved, the guard kills you.
        * You go for the door and the guard has moved, freedom, and you win the game, alive and well.

## Here's a sample run through of the game when I run the game:



    batou:text_based_adventure_game whykay$ python 10_game.py
    What's your name? > vicky
    Your name is RAINBOW UNICORN, is that correct? [Y|N] > y
    You are fun, RAINBOW UNICORN! Let's begin our adventure!
    You enter a room, and you see a red door to your left and a blue door to your right.
    Do you pick the red door or blue door? > red
    There you see the great evil Cthulhu.
    He, it, whatever stares at you and you go insane.
    Do you flee for your life or eat your head?
    > flee
    You enter a room, and you see a red door to your left and a blue door to your right.
    Do you pick the red door or blue door? > blue
    You see a room with a wooden treasure chest on the left, and a sleeping guard on the right in front of the door
    What do you do? > left
    Oooh, treasure!
    Open it? Press '1'
    Leave it alone. Press '2'
    > 1
    Let's see what's in here... /grins
    The chest creaks open, and the guard is still sleeping. That's one heavy sleeper!
    You find some
    diamonds
    gold
    silver
    sword
    What do you want to do?
    Take all 4 treasure, press '1'
    Leave it, press '2'
    > 1
        Woohoo! Bounty and a shiney new sword. /drops your crappy sword in the empty treasure chest.
        You just received [diamonds, gold, silver, sword]
    You approach the guard, he's still sleeping.
    Suddenly you knocked a wooden cask with a mug on it... CRASSH!

    Oi, what you doing 'ere?
    [run | door] > run
    Guard jumps up and looks the other way, missing you entirely.
    [run | door] > door
    You just slipped through the door before the guard realised it.
    You are now outside, home free! Huzzah!

    The end

    Thanks for playing, RAINBOW UNICORN


You can find all the steps to the final game here: [Python Project Workshop - Make text-based game in Python](http://bit.ly/1hdiZ0c) 

There are follow-on suggested activities for tweaking the game to do more stuff.

## Questions/Suggestions
Feel free to join in our Coding Grace mailing list: [https://groups.google.com/forum/#!forum/coding-grace](https://groups.google.com/forum/#!forum/coding-grace)

# Finally
Thanks to [Adverts.ie](http://adverts.ie) for hosting our event.

A big thank you to the mentors, [Mick](https://twitter.com/micktwomey) and [Ursula](https://twitter.com/tangentfairy).

And a final big thank you to all who came along and participated in the workshop.

# Resources
* [PEP 8Best programming practices, and style guide](http://legacy.python.org/dev/peps/pep-0008/)
* [Coding Grace Resource page](http://www.codinggrace.com/resources)
