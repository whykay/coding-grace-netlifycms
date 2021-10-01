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
id: 10
is_published: true
published: 2014-03-26T00:00:00Z
short_description: "That was a whirlwind of a ride yesterday evening. After being\
  \ bedazzled by \_the newer looking Google building, we arrived just in time to set\
  \ up, wave and say quick hello to Ursula (who was giving the Intro to HTML5 that\
  \ evening) and settled down for a short presentation by Raphael followed by me.\
  \ Then onwards to our workshops."
slug: coding-grace-at-gdgs-google-women-techmakers
title: Coding Grace at GDG's Google Women TechMakers
---

<p>That was a whirlwind of a ride yesterday evening. After being bedazzled by  the newer looking Google building, we arrived just in time to set up, wave and say quick hello to <a href="https://twitter.com/tangentfairy">Ursula</a> (who was giving the Intro to HTML5 that evening) and settled down for a short presentation by Raphael followed by me (<a href="http://about.me/whykay">Vicky</a>) about <a href="http://codinggrace.com">Coding Grace</a>.</p>
<p>Here are the presentation slides. The upcoming events can be found on Slide #5.</p>
<p><iframe frameborder="0" height="569" src="https://docs.google.com/presentation/d/1OKTNhNrNP0lkW8ajR8QR_KVgHRhdNWyHNdYBEZtVwbM/embed?start=false&amp;loop=false&amp;delayms=30000" width="960"></iframe></p>
<p>I proceeded on to the training room, great setup. We had WiFi, power source for each participant, projector that works, mics, and what I like most, the twin LCD tvs overhead in front of me so I can see what others can see via the projector.</p>
<p>There were a couple of beginner programmers, but most were curious about Python. I was glad to have Mick with me to push the class along as I was wary of the beginners and not to bore the programmers.</p>
<p>Some tidbits:</p>
<ul><li>new string formatting that was ported back from 3 to 2, see <a href="http://docs.python.org/2/library/string.html#format-string-syntax">http://docs.python.org/2/library/string.html#format-string-syntax</a></li>
<li>Triple double-quotes are the same as triple single quotes</li>
<li>Recommended Python editor: <a href="http://www.jetbrains.com/pycharm/">PyCharm IDE</a> <br/>(I personally use <a href="http://www.sublimetext.com/">Sublime Text Editor</a> with a terminal)</li>
</ul><p>One of the main questions was to use Python 2 or 3. A re-cap that most major libraries have been ported to Python 3, however, there are lots of third party libraries that haven&#8217;t, but you can generally fork that code (normally on github or bitbucket) and patch it yourself on your own branch. A wee pain, but that&#8217;s if you want to use Python 3.</p>
<p>Here&#8217;s a bit of reading about it, as I said, it&#8217;s an age-old question: <br/><a href="https://wiki.python.org/moin/Python2orPython3">https://wiki.python.org/moin/Python2orPython3</a></p>
<p>And if you want to find out about porting from Python 2 to 3: <br/><a href="http://docs.python.org/3/howto/pyporting.html">http://docs.python.org/3/howto/pyporting.html</a></p>
<p>I do highly suggest use pip and virtualenv. <br/>virtualenv is like sandbox, once you activate the virtual environment, you can install and play with libraries to your hearts content without mangling your system libraries. You can create Python 2 or a Python 3 virtual environments, which is great when trying out new libraries, or when development on projects using various versions of Python.  </p>
<ul><li><a href="http://www.virtualenv.org/en/latest/">http://www.virtualenv.org/en/latest/</a> <br/>(Note: the latest release is virtualenv 1.11.4, be careful with reading the installation, they use <strong>1.X.X</strong>)<br/><br/>Once you have virtualenv installed, you will have pip bundled with it as well.</li>
</ul><h3>What do you use Python for?</h3>
<p>I have used it for small scripts to help me out in mundane tasks to websites to writing web apps.</p>
<p>Easier to show then list more:</p>
<ul><li><a href="https://www.python.org/about/apps/">Applications of Python</a></li>
<li><a href="http://en.wikipedia.org/wiki/List_of_Python_software">List of software written in Python</a> (some might be out of date)</li>
</ul><h3>Testing</h3>
<p>Python has its own built-in unit test framework called <strong>unittest</strong>: <br/><a href="http://docs.python.org/2/library/unittest.html">http://docs.python.org/2/library/unittest.html</a></p>
<p>An alternative and nicer testing tool to use is <strong>pytest</strong>: <br/><a href="http://pytest.org/latest/%C2%A0">http://pytest.org/latest/ </a></p>
<h3>Best Practices</h3>
<ul><li>4 spaces for a tab. Some nice IDEs allow you to set up a tab and convert it to 4 spaces.</li>
<li>When declaring variables, space them out. It&#8217;s more for readability.</li>
<li><a href="http://legacy.python.org/dev/peps/pep-0008/#naming-conventions">Naming conventions can be found in PEP 8 as well</a>, mainly lowercase with underscores.</li>
<li>(Optional) Max characters per line is 80, but to be honest, it&#8217;s down to you and if that makes the code unreadable, don&#8217;t do it.</li>
<li>Readability: <a href="http://legacy.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds">http://legacy.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds</a></li>
</ul><p>But do have a read through <a href="http://legacy.python.org/dev/peps/pep-0008/">PEP 8</a> for best programming style and practices. The bone of contention for me when working on team projects has to be the inconsistencies with spaces for indentation. So make sure everyone on the team agrees what is the best practice to avoid future grievances in code reviews. :-)</p>
<p>I want to thank all those who came along to the workshop, apologies for boring some of ye (still chuckling after pulling up someone&#8217;s variable and printing out &#8220;bored guy&#8221;). It is a chance for people to ask questions, the workshop revolves in interaction between participants and mentors, and it&#8217;s not a conventional training workshop.</p>
<p>I want to thank Raphael for inviting me, and GDG &amp; Google for running and host the event, <a href="https://twitter.com/micktwomey">Mick</a> and <a href="https://twitter.com/tangentfairy">Ursula</a> for running the workshops. It was still enjoyable on my end, and I still learn something new with each experience mentoring as each group is so unique and different.</p>
<p>Us mentors had a couple of pints afterwards and brainstormed on how we can run more fun-filled workshops, and we have tapped an idea that will be announced in the coming weeks.</p>
<p>Coding Grace is always on the look out for volunteer mentors (Python, Ruby/RoR, functional programmers, opendata, game designers/artists/devs, web designers/developers and more).</p>
<p>We are also on the look out for fun ideas to base topics on as well, and we run workshops based on demand.</p>
<h3>How to find out more:</h3>
<ul><li><a href="http://codinggrace.com">codinggrace.com</a></li>
<li>Twitter: <a class="tumblelog" href="http://tmblr.co/mFkBDcpQ__ubf1agZ0rUsuQ">codinggrace</a></li>
</ul><p>Questions? Email: codinggrace@gmail.com</p>