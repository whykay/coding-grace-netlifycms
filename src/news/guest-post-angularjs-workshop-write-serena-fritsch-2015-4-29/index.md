---

author:
  blurb: ''
  contact_number: ''
  email: ''
  first_name: Serena
  id: 2
  last_name: Fritsch
  slug: serena-fritsch
  url: https://twitter.com/serifritsch
date: 2015-04-29
event:
  id: 43
  short_description: GDG Dublin has invited us to run an introduction to AngularJS.
    Serena Fritsch will be our mentor. Places are limited. [FULL]
  slug: introduction-angularjs-gdg-dublin
  title: Introduction to AngularJS @ GDG Dublin
id: 72
is_published: true
published: 2015-04-29T13:00:00Z
short_description: 'We have a guest post about our AngularJS workshop at GDG Dublin
  and Google''s Women Techmakers event recent from one of our awesome mentors, Serena
  Fritsch. '
slug: guest-post-angularjs-workshop-write-serena-fritsch
title: '[Guest post] AngularJS workshop write-up by Serena Fritsch'
---

This is a write-up for the AngularJS workshop held as part of women tech makers on March 31st in Google.

Big thanks to the organisers of GDG Dublin and Women Tech Makers for inviting Coding Grace to run [AngularJS](http://www.codinggrace.com/events/introduction-angularjs-gdg-dublin/43/) ([Serena](https://www.linkedin.com/in/serenafritsch)) and [Python](http://www.codinggrace.com/events/learn-python-making-text-based-adventure-game-gdg-/42/) ([Vicky](https://twitter.com/whykay)) workshops. A shout out and hugs to the mentors for helping out in both workshops and to everyone who came along and participated in the workshops. By the way, feel free to comment below with questions, feedback, anything I missed out in the post.

We needed a long time making sure that everyone was setup with a running web server. For the people that had Python installed we used pip to install SimpleHTTPServer.

For the others we used the node simple server. 
Due to different configurations, operating systems and permissions it took us almost 45 minutes until everyone was set up.

Rob and Kwasery had a brilliant idea to use the next time prepared JSFiddles ([https://jsfiddle.net/](https://jsfiddle.net/)) that can just be forked by the participants. This circumvents the need to download and install a complete Angular environment.

You can find our slides, the examples and all exercises and solutions here:

We started with basic data binding and how it works in AngularJS. A good comment from the participants was that  some additional illustrations in the slides would clarify how models, views, and controllers are combined.

The first exercise was to add a javascript variable `todo_items` as part of the scope. `todo_items` is a Javascript object, i.e. a collection of key-value pairs. In this example, the two pairs would be:

	Key1: ’title'
	Value1: ‘Build a todo app'

	Key2: ‘done'
	Value2: false

Resulting in the object `var todo_items = {’title’: ‘Build a todo app’, ‘done’: false}`

The value of a Javascript object can be obtained by directly referencing its key. E.g., `todo_items[’title’] will result in ‘Build a todo app'`

The slide “Some useful directives” lead to some confusion due to a mis-arrangement of the examples. Apologies again for that :)

`ng-click`: Allows to specify custom behaviour when an element is clicked
The correct example for this is:

	<button ng-click=“addToDo”> Add </button>

This will call the `addToDo()` method of the controller.

`ng-class`: Conditionally apply a class based on the evaluation of an expression

The correct example for this is:

	<span ng-class=“‘done’: todo.done” > {{todo.title}} </span>

If `{{todo.done}}` evaluates to true, the css class done is applied. In this case for example, the class would add a line-through.

	.done {
	     text-decoration: line-through;
	}  


The last part was of the workshop used a json file to dynamically add items to the todo app using the $http service of Angular.
The important note here is that the url to the json file is `$http.get(‘/todo.json’)` as todo.json is in the top-directory.

Congratulations to the winner of fitbit.

A highly professionally executed draw (:) whoever was there knows…) determined Manuel to be the winner of the fitbit. 

**Congrats again to Manuel.**

A big shoutout to my amazing mentors [Rob](https://twitter.com/robertcampion) and [Kwasery](https://twitter.com/code_epic).
And most importantly a big shoutout to the fantastic participants who were all awesome.