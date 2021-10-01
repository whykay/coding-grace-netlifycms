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
  id: 42
  short_description: We are delighted to be invited to GDG Dublin and run an introduction
    to Python by making a text-based adventure game workshop. This is aimed at beginners.
    **Places are limited.** [FULL]
  slug: learn-python-making-text-based-adventure-game-gdg-
  title: Learn Python by making a text-based adventure game @ GDG Dublin
id: 67
is_published: true
published: 2015-04-01T17:30:00Z
short_description: "This is a write-up for the Python workshop. :-)\r\n\r\nBig thanks\
  \ to organisers of GDG Dublin and Women Tech Makers for inviting Coding Grace to\
  \ run AngularJS (Serena) and Python (Vicky) workshops. "
slug: coding-grace-women-tech-makers-python-workshop
title: Coding Grace at Women Tech Makers - Python Workshop
---

This is a write-up for the Python workshop. :-)

Big thanks to the organisers of GDG Dublin and Women Tech Makers for inviting Coding Grace to run [AngularJS (Serena)](http://www.codinggrace.com/events/introduction-angularjs-gdg-dublin/43/) and [Python (Vicky)](http://www.codinggrace.com/events/learn-python-making-text-based-adventure-game-gdg-/42/) workshops. A shout out and hugs to the mentors for helping out in both workshops and to everyone who came along and participated in the workshops. By the way, feel free to comment below with questions, feedback, anything I missed out in the post.

After a delayed start to the workshop and introduction...

<iframe src="https://docs.google.com/presentation/d/1H_HSnpzd8mjs-VeOPnc3fAcH8MrqkcCXRoQbZmrhoYw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

We got stuck in making sure people's laptops are set up. For those using Windows, there's a small configuration
needed to get python working via command line.

Details of this can be found in a previous blog post: [http://www.codinggrace.com/news/teaching-beginners-python-coderdojogirlsdcu-2014-11-8/](http://www.codinggrace.com/news/teaching-beginners-python-coderdojogirlsdcu-2014-11-8/)

By the time we had people set up, it was already break time at 19:30 for the scramble for food and some networking.
We were back at 20:15(ish) and got right into the code.

You can find the source (without the special.py for the raffle) at [our bitbucket repository](https://bitbucket.org/codinggrace/python-project-workshop/src/default/workshops/text_based_adventure_game/?at=default), you can also download the zip from [here](https://bitbucket.org/codinggrace/python-project-workshop/downloads).

# Re-usable modules
Never made it to re-usable modules which was meant to cover before I ran the raffle for the fitbit.

* Modify **myfirstscript.py** with the following and save the file:

		from game_01 import say_hello

		say_hello()

* Go to your terminal/cmd and make sure you are not in the Python interpreter, i.e. no ``>>>``.
* Type ``python myfirstscript.py`` to run it from command line and see what happens.

Remember to check out the files ending with **_comments.py**, I've extra information and links to docs.

And while we are on the subject of documentation, check out Python's official docs at [https://docs.python.org/2/](https://docs.python.org/2/).

During the workshop, we encountered ``if "__name__" == "__main__":`` very early on, this makes the Python script (or module) re-usable. This is pretty handy if you want to use the same function in multiple places in different files.

You can also do this via your terminal/cmd. So launch into your Python interpretor by typing ``python`` and you will see ``>>>``. Now type the following:

	>>> from game_01 import say_hello
	>>> say_hello()

You can do the same thing via the Python interpretor, which is pretty cool.

## The special.py script
This is used to pick a random winner.


Here it is:

	import csv
	import random

	def main():
		# Get list of attendees and create a list of names
		# with first name followed by surname
		with open("attendees.csv", "r") as f:
			reader = csv.reader(f)
			
			# skip the first line in the csv file
			reader.next()

			name_list = []
			for row in reader:
				name_list.append("{} {}".format(row[0], row[1]))

		# Pick someone at random from the list
		winner = name_list[random.randint(1, len(name_list))]
		print("\nThe winner of FitBit thanks to GDG Dublin is \n\n\t\t{}\n".format(winner.upper()))


	if __name__ == '__main__':
		main()

You need another file called **attendees.csv**:

	First Name,Last Name
	Naya,The First
	Heather,Meowsalot
	Jackie,Mewadith
	Bob,Mewsli

Make sure they are in the same directory, and in your terminal/cmd, type ``python special.py``.

### Here's what happens:

* Line 1 and 2: Imports two libraries that is bundled with Python but not part of its core libraries like print() or raw_input().
	* csv module is imported so we can access functions to read and manipulate data from a csv file. [See reference in python.org documentation](https://docs.python.org/2/library/csv.html)
	* random module is imported so I can pick a random winner from the list. [See references in python.org documention](https://docs.python.org/2/library/random.html)

* Line 49: Opens the "attendees.csv" file as a read-only file object
* Line 50: Create the csv reader object with the file object we just created
* Line 53: Skip the first line as it only contains "First Name,Last Name"
* Line 55: Created an empty list and assigns it to **name_list**
* Line 56 - 57: For each row of the csv reader object, we add each entry in the row into the list as a string. It's formatted as firstname followed by lastname, and will look like the following in a list: ``[Naya The First, Heather Meowsalot, Jackie Mewadith, Bob Mewsli]``
* Line 60: Using ``randint`` function of random module, we pick a random integer between 1 and the size of the list, and this is the position of ``name_list``, and assign it to the variable ``winner``.
* Line 61: Print the name of the winner.

# Congratulations to winner of fitbit
Congrats to Rachel for winning the fitbit from the random draw of registered workshop attendees, this was after a few goes. :-)
![Winner of fitbit thanks to GDG Dublin and Google Women Tech Maker](http://i.minus.com/iv09jKwIMgSas.png)

# Best programming practices
We never got a chance to cover best programming practices, we did say one though:

* Important of whitespaces and tabs. Always indent with **4 spaces**, not tabs. Mixing the two is bad, and cause needless problems and cleaning up time.

More information on best programming practices for Python is called [PEP-8](https://www.python.org/dev/peps/pep-0008/). Do make sure your editors are set to this. Most programming editors support this.

## Since it's easter... here's something to try...

* Go to your terminal/cmd, and launch your Python interpreter.
* Type ``import this``.

This is what being Pythonic is all about. :-)

[More info on Python.org.](https://www.python.org/dev/peps/pep-0020/)

# Tweets from the evening
A couple of nice tweets from the evening in general for both workshops:

<blockquote class="twitter-tweet" lang="en"><p>Fab evening learning AngularJS <a href="https://twitter.com/GDGDublin">@GDGDublin</a> with <a href="https://twitter.com/CodingGrace">@CodingGrace</a>. Great tutors. Totally encouraging. My head hurts ... in a good way!</p>&mdash; Sarah Barrow (@mssarahbarrow) <a href="https://twitter.com/mssarahbarrow/status/583011689026699264">March 31, 2015</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p>Great workshop tonight with <a href="https://twitter.com/GDGDublin">@GDGDublin</a> <a href="https://twitter.com/CodingGrace">@CodingGrace</a> and <a href="https://twitter.com/whykay">@whykay</a>! Thx a lot for shearing your knowledge. Big hugs for all mentors! <a href="https://twitter.com/hashtag/python?src=hash">#python</a></p>&mdash; Gabby Ziolkowska (@ggabriz) <a href="https://twitter.com/ggabriz/status/583038298001698816">March 31, 2015</a></blockquote>

And it was super nice of them to put us up on the screens:

<blockquote class="twitter-tweet" lang="en"><p>Made the wall of names <a href="https://twitter.com/sarahd0ran">@sarahd0ran</a> <a href="https://twitter.com/whykay">@whykay</a> <a href="https://twitter.com/hashtag/WomenTechmakers?src=hash">#WomenTechmakers</a> <a href="http://t.co/N6maCwFv9v">pic.twitter.com/N6maCwFv9v</a></p>&mdash; Ireland Girl Geeks (@irelandggd) <a href="https://twitter.com/irelandggd/status/582948376574091264">March 31, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# Newsletter out soon
I'll be sending out the monthly newsletter for April soon on what workshops are in the works, what's upcoming and also events of interest around Ireland. So subscribe via [codinggrace.com](http://codinggrace.com). If you want me to include something, email me at vicky@codinggrace.com with its details.

# Upcoming workshop

## Dive into Javascipt @ Zendesk
* When: Saturday, 18th April (11:00 - 18:00)
* Details: [http://www.codinggrace.com/events/dive-javascript/44/](http://www.codinggrace.com/events/dive-javascript/44/)
* Email: contact@codinggrace.com

# Python-related events
## Python Ireland April Meeting @ CHQ
* Meets on the 2nd Wednesday of each month
* When: Wednesday 8th April (18:30 - 21:30)
* Details: [http://python.ie](http://python.ie) / [@pythonireland](https://twitter.com/pythonireland)
* Email: contact@python.ie

## PyLadies Dublin @ Wayra
* Meets on the 3rd Tuesday of each month
* When: Tuesday 21st April (19:30 - 21:00)
* Details: [http://dublin.pyladies.com](http://dublin.pyladies.com) / [@pyladiesdub](https://twitter.com/pyladiesdub)
* Email: dublin@pyladies.com

## PyCon Ireland 2015
* Conference: Sat 10 - Sun 11 October
	* x2 tracks of talks / x2 tracks of workshops (incl. beginners)
* Sprints: Mon 12 - Tue 13 October
* Details: TBA - [http://python.ie](http://python.ie) / [@pythonireland](https://twitter.com/pythonireland)
* Email: contact@python.ie

# Diversity-related Event
## weAREhere unconferece @ Guinness Enterprise Centre
* When: Saturday 25th April (10:00 - 16:00)
* Details: [I've posted a blog post, so check it out for more info and tickets.](http://www.codinggrace.com/news/wearehere-time-unconference-2015-4-2/)
* URL: [https://www.facebook.com/wearehere.ireland](https://www.facebook.com/wearehere.ireland)
