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
date: 2015-10-04
event:
  id: 55
  short_description: 'R is one of the most widely used programming language in the
    arena of analytics, data mining and data science. It''s open source and cross-platform,
    giving you freedom of when and where you use it. '
  slug: introduction-r
  title: Introduction to R
id: 91
is_published: true
published: 2015-10-04T23:30:00Z
short_description: Intro to R notes, thanks to Rachael McBride.
slug: intro-r-notes-rachael-mcbride
title: Intro to R notes (from Rachael McBride)
---

<style type="text/css">
.main-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}
code {
  color: inherit;
  background-color: rgba(0, 0, 0, 0.04);
}
img { 
  max-width:100%; 
  height: auto; 
}
</style>
<div class="container-fluid main-container">



<div id="header">
<h3>Introduction to R notes.</h3>
<h4 class="author"><em>Rachael McBride</em></h4>
<h4 class="date"><em>30 September 2015</em></h4>
</div>

<div id="TOC">
<ul>
<li><a href="&#35;r---the-basics">R - the basics</a><ul>
<li><a href="&#35;interactive-console">Interactive console</a></li>
<li><a href="&#35;primitive-data-types-and-variables">Primitive data types and variables</a></li>
<li><a href="&#35;variable-names">Variable names</a></li>
<li><a href="&#35;calling-an-built-in-function">Calling an built-in function</a></li>
</ul></li>
<li><a href="&#35;finding-your-way-around-r">Finding your way around R</a></li>
<li><a href="&#35;primary-data-structures-in-r">Primary data structures in R</a><ul>
<li><a href="&#35;the-vector">The vector</a></li>
<li><a href="&#35;the-list">The list</a></li>
<li><a href="&#35;the-dataframe">The dataframe</a></li>
<li><a href="&#35;the-matrix">The matrix</a></li>
</ul></li>
<li><a href="&#35;data-io">Data I/O</a><ul>
<li><a href="&#35;r-objects">R objects</a></li>
<li><a href="&#35;text-files">Text files</a></li>
<li><a href="&#35;reading-from-a-database">Reading from a database:</a></li>
</ul></li>
<li><a href="&#35;control-structures">Control structures</a><ul>
<li><a href="&#35;ifelse">If…else:</a></li>
<li><a href="&#35;ifelse-1">ifelse:</a></li>
<li><a href="&#35;the-switch-function">The switch function:</a></li>
</ul></li>
<li><a href="&#35;loops">Loops</a><ul>
<li><a href="&#35;for-loop">For loop:</a></li>
<li><a href="&#35;while-loop">While loop:</a></li>
</ul></li>
<li><a href="&#35;functions">Functions</a></li>
</ul>
</div>

<p><br> <br> <br></p>
<div id="r---the-basics" class="section level2">
<h2>R - the basics</h2>
<div id="interactive-console" class="section level3">
<h3>Interactive console</h3>
<p>Unlike some languages, R has an interactive console. This allows you to try out your code before you execute it as a script. It is particularly useful for exploratory data analysis i.e. when you first get a data set and are trying to understand its properties and characteristics.</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="dv">10</span> +<span class="st"> </span><span class="dv">5</span></code></pre>
<pre><code>&#35;&#35; [1] 15</code></pre>
<p><br></p>
</div>
<div id="primitive-data-types-and-variables" class="section level3">
<h3>Primitive data types and variables</h3>
<p>Primitive data types are the basic building blocks of a programming language. We will examine numerical, textual and boolean types here. We also introduce variables. A variable is a symbolic name associated with a value, and whose associated value may be changed. <br> <br></p>
<div id="numerical" class="section level4">
<h4>Numerical:</h4>
<pre class="sourceCode r"><code class="sourceCode r">a =<span class="st"> </span><span class="dv">10</span>
b =<span class="st"> </span><span class="fl">5.1</span></code></pre>
<p>Above, the value 10 is known as a <em>int</em> or <em>integer</em>. We have assigned the value 10 to a variable named <code>a</code>. The above decimal 5.1 is known as a <em>float</em>. We have assigned this value to a variable named <code>b</code>. <br> <br> We can now use the variables <code>a</code> and <code>b</code> to perform a number of operations or calculations:</p>
<pre class="sourceCode r"><code class="sourceCode r">a +<span class="st"> </span>b</code></pre>
<pre><code>&#35;&#35; [1] 15.1</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">a *<span class="st"> </span>b</code></pre>
<pre><code>&#35;&#35; [1] 51</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">a /<span class="st"> </span>b</code></pre>
<pre><code>&#35;&#35; [1] 1.960784</code></pre>
<p><br></p>
</div>
<div id="textual" class="section level4">
<h4>Textual:</h4>
<p>Text-based values are store in primitive data types known as strings.</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="st">&quot;learning R&quot;</span></code></pre>
<pre><code>&#35;&#35; [1] &quot;learning R&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">test_string_1 =<span class="st"> &quot;learning R&quot;</span>
test_string_1</code></pre>
<pre><code>&#35;&#35; [1] &quot;learning R&quot;</code></pre>
<p>Here, we have assigned the text “learning R” to the string variable <code>test_string_1</code>. <br> <br></p>
</div>
<div id="boolean" class="section level4">
<h4>Boolean:</h4>
<p>The boolean primitive data type can have one of two values - <code>TRUE</code> or <code>FALSE</code>.</p>
<pre class="sourceCode r"><code class="sourceCode r">test_boolean_1 =<span class="st"> </span><span class="ot">TRUE</span>
test_boolean_2 =<span class="st"> </span>T
test_boolean_3 =<span class="st"> </span><span class="ot">FALSE</span>
test_boolean_4 =<span class="st"> </span>F</code></pre>
<p>For booleans in R, <code>T</code> can be used interchangeably with <code>TRUE</code>, and vice versa for <code>F</code> and <code>FALSE</code>. <br></p>
<pre class="sourceCode r"><code class="sourceCode r">test_boolean_1</code></pre>
<pre><code>&#35;&#35; [1] TRUE</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">test_boolean_2</code></pre>
<pre><code>&#35;&#35; [1] TRUE</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">test_boolean_3</code></pre>
<pre><code>&#35;&#35; [1] FALSE</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">test_boolean_4</code></pre>
<pre><code>&#35;&#35; [1] FALSE</code></pre>
<p><br></p>
</div>
</div>
<div id="variable-names" class="section level3">
<h3>Variable names</h3>
<p>In R, variable names:</p>
<ol style="list-style-type: decimal">
<li><p>Are case sensitive e.g. variable ‘a’ is not the same as variable ‘A’</p></li>
<li><p>Cannot begin with a number e.g. a variable called ‘1a’ is not accepted by R, but a variable called ‘a1’ is. <br> <br></p></li>
</ol>
</div>
<div id="calling-an-built-in-function" class="section level3">
<h3>Calling an built-in function</h3>
<p>Lets try R’s built-in function for calculating the square root of a number</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">sqrt</span>(<span class="dv">9</span>)</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">sqrt</span>(<span class="dv">25</span>)</code></pre>
<pre><code>&#35;&#35; [1] 5</code></pre>
<p><br> We can assign the results of the function to variables that we can use later</p>
<pre class="sourceCode r"><code class="sourceCode r">sqrt_of_9 =<span class="st"> </span><span class="kw">sqrt</span>(<span class="dv">9</span>)
sqrt_of_25 =<span class="st"> </span><span class="kw">sqrt</span>(<span class="dv">25</span>)</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">sqrt_of_9</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">sqrt_of_25</code></pre>
<pre><code>&#35;&#35; [1] 5</code></pre>
<p><br> <br> <br></p>
</div>
</div>
<div id="finding-your-way-around-r" class="section level2">
<h2>Finding your way around R</h2>
<p><br> <strong>Q.</strong> How do I find out more about my current session in R?</p>
<p><strong>A.</strong> Try:</p>
<pre class="sourceCode r"><code class="sourceCode r"> <span class="kw">sessionInfo</span>()</code></pre>
<p>This is useful to know when installing libraries, as not all libraries are available for all version numbers. <br> <br></p>
<p><strong>Q.</strong> How do I see what libraries are already installed?</p>
<p><strong>A.</strong> Try:</p>
<pre class="sourceCode r"><code class="sourceCode r"> <span class="kw">library</span>()</code></pre>
<p><br> <br></p>
<p><strong>Q.</strong> How do I find out more about about a library, a topic etc.?</p>
<p><strong>A.</strong> Use R’s help system. If you know the specific name:</p>
<pre class="sourceCode r"><code class="sourceCode r"> <span class="kw">help</span>(<span class="st">&quot;mean&quot;</span>)</code></pre>
<p>or</p>
<pre class="sourceCode r"><code class="sourceCode r"> ?mean</code></pre>
<p><br> If you have an idea of what you are looking for, but not quite sure what it is called, try:</p>
<pre class="sourceCode r"><code class="sourceCode r"> <span class="kw">help.search</span>(<span class="st">&quot;cluster&quot;</span>)</code></pre>
<p>or</p>
<pre class="sourceCode r"><code class="sourceCode r"> ??clust</code></pre>
<p>This is similar to running a fuzzy matching search.</p>
<p><br> <br> <strong>Q.</strong> Ok, the ‘cluster’ library looks interesting. How do I use it?</p>
<p><strong>A.</strong> Use <code>library()</code> to load the library of interest. For example:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">library</span>(<span class="st">&quot;cluster&quot;</span>) </code></pre>
<p><br> <br> <strong>Q.</strong> I would like to use a package or library that is currently not installed on my computer. How can I install it?</p>
<p><strong>A.</strong> Use <code>install.packages(&quot;name_of_package&quot;, dependencies = T)</code>. See <code>?install.packages</code> for more.</p>
<p><br> <br> <strong>Q.</strong> I want to play around with R more. Are there any test data sets I can use?</p>
<p><strong>A.</strong> R comes with test data sets. See <code>data()</code> for more. For example, to use data on the survival of passengers in the Titanic, <code>data(Titanic)</code> <br> <br> <br></p>
</div>
<div id="primary-data-structures-in-r" class="section level2">
<h2>Primary data structures in R</h2>
<p>The primary data structures are:</p>
<ul>
<li><p>vector</p></li>
<li><p>dataframe</p></li>
<li><p>matrix</p></li>
<li><p>list <br> <br></p></li>
</ul>
<div id="the-vector" class="section level3">
<h3>The vector</h3>
<div id="create-a-vector" class="section level4">
<h4>Create a vector</h4>
<p>Allows you to store a collection of elements.</p>
<pre class="sourceCode r"><code class="sourceCode r">transport =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;car&quot;</span>, <span class="st">&quot;bus&quot;</span>, <span class="st">&quot;plane&quot;</span>)
lotto =<span class="st"> </span><span class="kw">c</span>(<span class="dv">7</span>, <span class="dv">22</span>, <span class="dv">32</span>, <span class="dv">34</span>, <span class="dv">40</span>, <span class="dv">42</span>)</code></pre>
<p><br> <br></p>
</div>
<div id="add-names-to-the-elements-of-the-vector" class="section level4">
<h4>Add names to the elements of the vector</h4>
<p>To add names to an existing vector:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(transport) =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;road&quot;</span>, <span class="st">&quot;bus lane&quot;</span>, <span class="st">&quot;plane&quot;</span>)</code></pre>
<p><br> To check:</p>
<pre class="sourceCode r"><code class="sourceCode r">transport</code></pre>
<pre><code>&#35;&#35;     road bus lane    plane 
&#35;&#35;    &quot;car&quot;    &quot;bus&quot;  &quot;plane&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(transport)</code></pre>
<pre><code>&#35;&#35; [1] &quot;road&quot;     &quot;bus lane&quot; &quot;plane&quot;</code></pre>
<p><br> To add names as you create a vector:</p>
<pre class="sourceCode r"><code class="sourceCode r">ages =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;Ann&quot;</span> =<span class="st"> </span><span class="dv">2</span>, <span class="st">&quot;Barry&quot;</span> =<span class="st"> </span><span class="dv">4</span>, <span class="st">&quot;Bosco&quot;</span> =<span class="st"> </span><span class="dv">7</span>)
ages</code></pre>
<pre><code>&#35;&#35;   Ann Barry Bosco 
&#35;&#35;     2     4     7</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(ages)</code></pre>
<pre><code>&#35;&#35; [1] &quot;Ann&quot;   &quot;Barry&quot; &quot;Bosco&quot;</code></pre>
<p><br> <br></p>
</div>
<div id="get-the-length-of-a-vectoror-other-objects" class="section level4">
<h4>Get the length of a vector(or other objects)</h4>
<p>Use <code>length()</code>. <strong>Note:</strong> This can be used on a number of different objects.</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">length</span>(transport)</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">length</span>(ages)</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<p><br> <br></p>
</div>
<div id="exercise" class="section level4">
<h4>Exercise:</h4>
<p>Peter, Bob and Jill each have a number of jelly babies. Peter has 6, Bob has 8 and Jill has 10. Each person eats 2 of their jelly babies. They then discover another packet of jelly babies behind the couch with 6 jelly babies in it. They decide to share it: Peter gets 4, Bob gets 2 less than Peter and Jill gets 2 less than Bob. Use vectors in R to calculate how much each person has in the end</p>
<ol style="list-style-type: decimal">
<li><p>Create a vector, called ‘start’, that reflect how many each person starts out with.</p></li>
<li><p>Create a vector called ‘eats’, that represents how many jelly babies each person eats. (Hint: Try <code>?rep</code>)</p></li>
<li><p>Create a vector called ‘gets’, that represents how much jelly babies from the new bag each person gets. (Hint: Try <code>?seq</code>)</p></li>
<li><p>Subtract ‘eat’ from ‘start’ and add ‘gets’ <br> <br> <br></p></li>
</ol>
</div>
<div id="access-elements-of-the-vector" class="section level4">
<h4>Access elements of the vector</h4>
<p><strong>By condition:</strong> Access elements by filtering on a particular condition.</p>
<pre class="sourceCode r"><code class="sourceCode r">lotto</code></pre>
<pre><code>&#35;&#35; [1]  7 22 32 34 40 42</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">lotto &gt;<span class="st"> </span><span class="dv">33</span></code></pre>
<pre><code>&#35;&#35; [1] FALSE FALSE FALSE  TRUE  TRUE  TRUE</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">lotto[lotto &gt;<span class="st"> </span><span class="dv">33</span>]</code></pre>
<pre><code>&#35;&#35; [1] 34 40 42</code></pre>
<p><br></p>
<p><strong>By location:</strong> Access elements by location.</p>
<pre class="sourceCode r"><code class="sourceCode r">lotto[<span class="dv">1</span>]</code></pre>
<pre><code>&#35;&#35; [1] 7</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">lotto[<span class="dv">2</span>:<span class="dv">3</span>]</code></pre>
<pre><code>&#35;&#35; [1] 22 32</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">lotto[<span class="dv">3</span>:<span class="kw">length</span>(lotto)]</code></pre>
<pre><code>&#35;&#35; [1] 32 34 40 42</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">lotto[<span class="kw">length</span>(lotto):<span class="dv">4</span>]</code></pre>
<pre><code>&#35;&#35; [1] 42 40 34</code></pre>
<p><br> <br></p>
</div>
<div id="concatenate-vectors" class="section level4">
<h4>Concatenate vectors</h4>
<p>To join two or more vectors together:</p>
<pre class="sourceCode r"><code class="sourceCode r">a =<span class="st"> </span><span class="kw">c</span>(<span class="dv">1</span>, <span class="dv">2</span>, <span class="dv">3</span>, <span class="dv">4</span>)
b =<span class="st"> </span><span class="kw">c</span>(<span class="dv">5</span>, <span class="dv">6</span>, <span class="dv">7</span>, <span class="dv">8</span>)
together =<span class="st"> </span><span class="kw">c</span>(a, b)
together</code></pre>
<pre><code>&#35;&#35; [1] 1 2 3 4 5 6 7 8</code></pre>
<p><br> <br> <br></p>
</div>
</div>
<div id="the-list" class="section level3">
<h3>The list</h3>
<p>A data container that can store different types of data structures at the same time. <br> <br></p>
<div id="create-a-list" class="section level4">
<h4>Create a list</h4>
<pre class="sourceCode r"><code class="sourceCode r">age =<span class="st"> </span><span class="dv">3</span>
allergies =<span class="st"> </span><span class="ot">TRUE</span>
friends =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;Joe&quot;</span>, <span class="st">&quot;Tyler&quot;</span>, <span class="st">&quot;Nina&quot;</span>)
child_1 =<span class="st"> </span><span class="kw">list</span>(<span class="st">&quot;age&quot;</span> =<span class="st"> </span>age, <span class="st">&quot;allergies&quot;</span> =<span class="st"> </span>allergies , <span class="st">&quot;friends&quot;</span> =<span class="st"> </span>friends)
child_2 =<span class="st"> </span><span class="kw">list</span>(<span class="st">&quot;age&quot;</span> =<span class="st"> </span><span class="dv">2</span>, <span class="st">&quot;allergies&quot;</span> =<span class="st"> </span><span class="ot">FALSE</span>, <span class="dt">friends =</span> <span class="st">&quot;James&quot;</span>, <span class="st">&quot;note&quot;</span> =<span class="st"> &quot;Will not eat fish fingers&quot;</span>)</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">child_1</code></pre>
<pre><code>&#35;&#35; $age
&#35;&#35; [1] 3
&#35;&#35; 
&#35;&#35; $allergies
&#35;&#35; [1] TRUE
&#35;&#35; 
&#35;&#35; $friends
&#35;&#35; [1] &quot;Joe&quot;   &quot;Tyler&quot; &quot;Nina&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">child_2</code></pre>
<pre><code>&#35;&#35; $age
&#35;&#35; [1] 2
&#35;&#35; 
&#35;&#35; $allergies
&#35;&#35; [1] FALSE
&#35;&#35; 
&#35;&#35; $friends
&#35;&#35; [1] &quot;James&quot;
&#35;&#35; 
&#35;&#35; $note
&#35;&#35; [1] &quot;Will not eat fish fingers&quot;</code></pre>
<p><br></p>
</div>
<div id="add-to-a-list-i.e.create-a-list-of-lists" class="section level4">
<h4>Add to a list i.e. create a list of lists</h4>
<pre class="sourceCode r"><code class="sourceCode r">children =<span class="st"> </span><span class="kw">list</span>(<span class="st">&quot;Ann&quot;</span> =<span class="st"> </span>child_1, <span class="st">&quot;Tomasz&quot;</span> =<span class="st"> </span>child_2)</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">children</code></pre>
<pre><code>&#35;&#35; $Ann
&#35;&#35; $Ann$age
&#35;&#35; [1] 3
&#35;&#35; 
&#35;&#35; $Ann$allergies
&#35;&#35; [1] TRUE
&#35;&#35; 
&#35;&#35; $Ann$friends
&#35;&#35; [1] &quot;Joe&quot;   &quot;Tyler&quot; &quot;Nina&quot; 
&#35;&#35; 
&#35;&#35; 
&#35;&#35; $Tomasz
&#35;&#35; $Tomasz$age
&#35;&#35; [1] 2
&#35;&#35; 
&#35;&#35; $Tomasz$allergies
&#35;&#35; [1] FALSE
&#35;&#35; 
&#35;&#35; $Tomasz$friends
&#35;&#35; [1] &quot;James&quot;
&#35;&#35; 
&#35;&#35; $Tomasz$note
&#35;&#35; [1] &quot;Will not eat fish fingers&quot;</code></pre>
<p><br></p>
</div>
<div id="accessing-elements-in-a-list" class="section level4">
<h4>Accessing elements in a list</h4>
<p><strong>By name:</strong></p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(child_1)</code></pre>
<pre><code>&#35;&#35; [1] &quot;age&quot;       &quot;allergies&quot; &quot;friends&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">child_1[[<span class="st">&quot;age&quot;</span>]]</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">child_1$age</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(children)</code></pre>
<pre><code>&#35;&#35; [1] &quot;Ann&quot;    &quot;Tomasz&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">children[[<span class="st">&quot;Tomasz&quot;</span>]]</code></pre>
<pre><code>&#35;&#35; $age
&#35;&#35; [1] 2
&#35;&#35; 
&#35;&#35; $allergies
&#35;&#35; [1] FALSE
&#35;&#35; 
&#35;&#35; $friends
&#35;&#35; [1] &quot;James&quot;
&#35;&#35; 
&#35;&#35; $note
&#35;&#35; [1] &quot;Will not eat fish fingers&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">children$<span class="st">&quot;Tomasz&quot;</span></code></pre>
<pre><code>&#35;&#35; $age
&#35;&#35; [1] 2
&#35;&#35; 
&#35;&#35; $allergies
&#35;&#35; [1] FALSE
&#35;&#35; 
&#35;&#35; $friends
&#35;&#35; [1] &quot;James&quot;
&#35;&#35; 
&#35;&#35; $note
&#35;&#35; [1] &quot;Will not eat fish fingers&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">children$Tomasz$note</code></pre>
<pre><code>&#35;&#35; [1] &quot;Will not eat fish fingers&quot;</code></pre>
<p><br> <br> <br></p>
</div>
</div>
<div id="the-dataframe" class="section level3">
<h3>The dataframe</h3>
<p>A ‘table’ of data. <br> <br></p>
<div id="create-a-dataframe" class="section level4">
<h4>Create a dataframe</h4>
<p>Use <code>data.frame()</code></p>
<pre class="sourceCode r"><code class="sourceCode r">dframe =<span class="st"> </span><span class="kw">data.frame</span>(transport, ages)
dframe</code></pre>
<pre><code>&#35;&#35;          transport ages
&#35;&#35; road           car    2
&#35;&#35; bus lane       bus    4
&#35;&#35; plane        plane    7</code></pre>
<p><br></p>
</div>
<div id="explore" class="section level4">
<h4>Explore</h4>
<p>Get summary statistics, row and column names, dimensions and the first 5 rows of the dataframe</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">summary</span>(dframe)</code></pre>
<pre><code>&#35;&#35;  transport      ages      
&#35;&#35;  bus  :1   Min.   :2.000  
&#35;&#35;  car  :1   1st Qu.:3.000  
&#35;&#35;  plane:1   Median :4.000  
&#35;&#35;            Mean   :4.333  
&#35;&#35;            3rd Qu.:5.500  
&#35;&#35;            Max.   :7.000</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">rownames</span>(dframe)</code></pre>
<pre><code>&#35;&#35; [1] &quot;road&quot;     &quot;bus lane&quot; &quot;plane&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">colnames</span>(dframe)</code></pre>
<pre><code>&#35;&#35; [1] &quot;transport&quot; &quot;ages&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">dim</span>(dframe)</code></pre>
<pre><code>&#35;&#35; [1] 3 2</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">head</span>(dframe)</code></pre>
<pre><code>&#35;&#35;          transport ages
&#35;&#35; road           car    2
&#35;&#35; bus lane       bus    4
&#35;&#35; plane        plane    7</code></pre>
<p><br></p>
</div>
<div id="access-particular-entries-in-a-dataframe" class="section level4">
<h4>Access particular entries in a dataframe</h4>
<p>You can access paticular entries in a dataframe by specifying names and or locations of the row(s) and columns of interest. <br></p>
<p><strong>By location:</strong></p>
<pre class="sourceCode r"><code class="sourceCode r">dframe[, <span class="dv">2</span>]     <span class="co">&#35; Access the 2nd column</span></code></pre>
<pre><code>&#35;&#35; [1] 2 4 7</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">dframe[<span class="dv">3</span>, ]     <span class="co">&#35; Access the 3rd row</span></code></pre>
<pre><code>&#35;&#35;       transport ages
&#35;&#35; plane     plane    7</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">dframe[<span class="dv">3</span>, <span class="dv">2</span>]    <span class="co">&#35; Access the value in the third row, end column</span></code></pre>
<pre><code>&#35;&#35; [1] 7</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">dframe[<span class="dv">1</span>:<span class="dv">2</span>,]    <span class="co">&#35; Access the first 2 rows</span></code></pre>
<pre><code>&#35;&#35;          transport ages
&#35;&#35; road           car    2
&#35;&#35; bus lane       bus    4</code></pre>
<p><br></p>
<p><strong>By name:</strong></p>
<pre class="{r}("><code>dframe[,'ages']     &#35; Access the 'ages' column
dframe['plane',]    &#35; Access the 'plane' row</code></pre>
<p><br> <strong>Or a mixture of both:</strong></p>
<pre class="sourceCode r"><code class="sourceCode r">dframe[<span class="dv">2</span>:<span class="dv">3</span>, <span class="st">'ages'</span>]    <span class="co">&#35; Access the 2nd and 3rd values in the 'age' column</span></code></pre>
<pre><code>&#35;&#35; [1] 4 7</code></pre>
<p><strong>Note:</strong> To access values in a data frame, remember <code>[row, column]</code> or ‘RC’ <br> <br></p>
<p>Note that the row returned is in the form of a list</p>
<pre class="sourceCode r"><code class="sourceCode r">result =<span class="st"> </span>dframe[<span class="dv">3</span>,]
result</code></pre>
<pre><code>&#35;&#35;       transport ages
&#35;&#35; plane     plane    7</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">typeof</span>(result)</code></pre>
<pre><code>&#35;&#35; [1] &quot;list&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(result)</code></pre>
<pre><code>&#35;&#35; [1] &quot;transport&quot; &quot;ages&quot;</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">result$ages</code></pre>
<pre><code>&#35;&#35; [1] 7</code></pre>
<p><br></p>
</div>
<div id="add-another-column" class="section level4">
<h4>Add another column</h4>
<p>The data frame <code>dframe</code> contains ages. Lets add the names of the people for these ages.</p>
<pre class="sourceCode r"><code class="sourceCode r">ages</code></pre>
<pre><code>&#35;&#35;   Ann Barry Bosco 
&#35;&#35;     2     4     7</code></pre>
<p><br> Extract the names associated with each age:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">names</span>(ages)</code></pre>
<pre><code>&#35;&#35; [1] &quot;Ann&quot;   &quot;Barry&quot; &quot;Bosco&quot;</code></pre>
<p><br> Add the column to <code>dframe</code> using the <code>cbind()</code>:</p>
<pre class="sourceCode r"><code class="sourceCode r">dframe =<span class="st"> </span><span class="kw">cbind</span>(dframe, <span class="kw">names</span>(ages))
<span class="kw">head</span>(dframe)</code></pre>
<pre><code>&#35;&#35;          transport ages names(ages)
&#35;&#35; road           car    2         Ann
&#35;&#35; bus lane       bus    4       Barry
&#35;&#35; plane        plane    7       Bosco</code></pre>
<p><br></p>
</div>
<div id="re-name-the-columns" class="section level4">
<h4>Re-name the columns</h4>
<p>Use <code>colnames()</code>. Row names can be renamed in a similar fashion using <code>rownames()</code></p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">colnames</span>(dframe) =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;modes of transport&quot;</span>, <span class="st">&quot;ages&quot;</span>, <span class="st">&quot;names&quot;</span>)</code></pre>
<p><br> <br> <br></p>
</div>
</div>
<div id="the-matrix" class="section level3">
<h3>The matrix</h3>
<div id="create-a-matrix" class="section level4">
<h4>Create a matrix</h4>
<pre class="sourceCode r"><code class="sourceCode r">m =<span class="st"> </span><span class="kw">matrix</span>(<span class="dt">data =</span> <span class="kw">seq</span>(<span class="dv">1</span>, <span class="dv">8</span>), <span class="dt">nrow =</span> <span class="dv">2</span>, <span class="dt">ncol =</span> <span class="dv">4</span>, <span class="dt">byrow =</span> T)</code></pre>
<p>See <code>?matrix()</code> for more details. <br> <br></p>
</div>
<div id="give-it-row-names-and-column-names" class="section level4">
<h4>Give it row names and column names</h4>
<p>In two separate steps:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">rownames</span>(m) =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;row1&quot;</span>, <span class="st">&quot;row2&quot;</span>)
<span class="kw">colnames</span>(m) =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;column1&quot;</span>, <span class="st">&quot;column2&quot;</span>, <span class="st">&quot;column3&quot;</span>, <span class="st">&quot;column4&quot;</span>)</code></pre>
<p><br></p>
<p>Or in one single step:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">dimnames</span>(m) =<span class="st"> </span><span class="kw">list</span>(<span class="kw">c</span>(<span class="st">&quot;row1&quot;</span>, <span class="st">&quot;row2&quot;</span>),
                   <span class="kw">c</span>(<span class="st">&quot;column1&quot;</span>, <span class="st">&quot;column2&quot;</span>, <span class="st">&quot;column3&quot;</span>, <span class="st">&quot;column4&quot;</span>))</code></pre>
<p><br> <br></p>
</div>
<div id="accessing-particular-values-in-a-matrix" class="section level4">
<h4>Accessing particular values in a matrix</h4>
<p>Similar to accessing particular values in a data frame</p>
<p>Recall, <code>m</code> is:</p>
<pre class="sourceCode r"><code class="sourceCode r">m</code></pre>
<pre><code>&#35;&#35;      column1 column2 column3 column4
&#35;&#35; row1       1       2       3       4
&#35;&#35; row2       5       6       7       8</code></pre>
<p><br> Get the contents of the row named <em>“row1”</em></p>
<pre class="sourceCode r"><code class="sourceCode r">m[<span class="st">&quot;row1&quot;</span>,]</code></pre>
<pre><code>&#35;&#35; column1 column2 column3 column4 
&#35;&#35;       1       2       3       4</code></pre>
<p><br> Get the contents of the column named <em>“column2”</em></p>
<pre class="sourceCode r"><code class="sourceCode r">m[, <span class="st">&quot;column2&quot;</span>]</code></pre>
<pre><code>&#35;&#35; row1 row2 
&#35;&#35;    2    6</code></pre>
<p><br> Get the contents of the cell in row <em>“row1”</em>, column <em>“column2”</em></p>
<pre class="sourceCode r"><code class="sourceCode r">m[<span class="st">&quot;row1&quot;</span>, <span class="st">&quot;column2&quot;</span>]</code></pre>
<pre><code>&#35;&#35; [1] 2</code></pre>
<p><br> Similarly, location can be used. <br></p>
<p>Get the contents of the first column:</p>
<pre class="sourceCode r"><code class="sourceCode r">m[<span class="dv">1</span>,]</code></pre>
<pre><code>&#35;&#35; column1 column2 column3 column4 
&#35;&#35;       1       2       3       4</code></pre>
<p><br> Get the contents of the second column:</p>
<pre class="sourceCode r"><code class="sourceCode r">m[,<span class="dv">2</span>]</code></pre>
<pre><code>&#35;&#35; row1 row2 
&#35;&#35;    2    6</code></pre>
<p><br> Get the contents of the cell in the first row and second column</p>
<pre class="sourceCode r"><code class="sourceCode r">m[<span class="dv">1</span>, <span class="dv">2</span>]</code></pre>
<pre><code>&#35;&#35; [1] 2</code></pre>
<p><br> <br> <br></p>
</div>
</div>
</div>
<div id="data-io" class="section level2">
<h2>Data I/O</h2>
<p>There are many ways to get data in and out of R. <br> <br></p>
<div id="r-objects" class="section level3">
<h3>R objects</h3>
<div id="to-save" class="section level4">
<h4>To save:</h4>
<p>To save one object:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">save</span>(dframe, <span class="dt">file =</span> <span class="st">&quot;dframe_output.RData&quot;</span>)</code></pre>
<p>To save multiple R objects to a single file:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">save</span>(<span class="dt">list =</span> <span class="kw">c</span>(<span class="st">&quot;dframe&quot;</span>, <span class="st">&quot;children&quot;</span>), <span class="dt">file =</span> <span class="st">&quot;dframe_and_children_output.RData&quot;</span>)</code></pre>
<p><br></p>
</div>
<div id="to-load" class="section level4">
<h4>To load:</h4>
<p>First remove traces of existing versions from your R session:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">rm</span>(<span class="dt">list =</span> <span class="kw">c</span>(<span class="st">&quot;dframe&quot;</span>, <span class="st">&quot;children&quot;</span>))       <span class="co">&#35; Remove the existing variables</span>
<span class="kw">ls</span>()                                     <span class="co">&#35; Verify that they have been successfully removed</span></code></pre>
<pre><code>&#35;&#35;  [1] &quot;a&quot;              &quot;age&quot;            &quot;ages&quot;           &quot;allergies&quot;     
&#35;&#35;  [5] &quot;b&quot;              &quot;child_1&quot;        &quot;child_2&quot;        &quot;friends&quot;       
&#35;&#35;  [9] &quot;lotto&quot;          &quot;m&quot;              &quot;result&quot;         &quot;sqrt_of_25&quot;    
&#35;&#35; [13] &quot;sqrt_of_9&quot;      &quot;test_boolean_1&quot; &quot;test_boolean_2&quot; &quot;test_boolean_3&quot;
&#35;&#35; [17] &quot;test_boolean_4&quot; &quot;test_string_1&quot;  &quot;together&quot;       &quot;transport&quot;</code></pre>
<p>Next read in the fresh variables</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">load</span>(<span class="st">&quot;dframe_and_children_output.RData&quot;</span>) <span class="co">&#35; Load the variables back into R</span>
<span class="kw">ls</span>()                                     <span class="co">&#35; Verify that they have been loaded successfully </span></code></pre>
<pre><code>&#35;&#35;  [1] &quot;a&quot;              &quot;age&quot;            &quot;ages&quot;           &quot;allergies&quot;     
&#35;&#35;  [5] &quot;b&quot;              &quot;child_1&quot;        &quot;child_2&quot;        &quot;children&quot;      
&#35;&#35;  [9] &quot;dframe&quot;         &quot;friends&quot;        &quot;lotto&quot;          &quot;m&quot;             
&#35;&#35; [13] &quot;result&quot;         &quot;sqrt_of_25&quot;     &quot;sqrt_of_9&quot;      &quot;test_boolean_1&quot;
&#35;&#35; [17] &quot;test_boolean_2&quot; &quot;test_boolean_3&quot; &quot;test_boolean_4&quot; &quot;test_string_1&quot; 
&#35;&#35; [21] &quot;together&quot;       &quot;transport&quot;</code></pre>
<p><br> <br></p>
</div>
</div>
<div id="text-files" class="section level3">
<h3>Text files</h3>
<p>Vector and data frame contents can be stored and read in from text files. For this, R has a collection of built-in functions for text files of various formats. <br> <br></p>
<div id="writing-contents-to-a-text-file" class="section level4">
<h4>Writing contents to a text file</h4>
<p>The base function is <code>write.table()</code>. Its help file provides a detailed description of the different function arguments available to you. The other data input functions in this help file are variants of <code>write.table()</code> with different default argument values.</p>
<pre class="sourceCode r"><code class="sourceCode r">?<span class="kw">write.table</span>()</code></pre>
<p><br></p>
<p><strong>Tab-delimited files: </strong> <br> To write out to a tab-delimited file with column names and rownames:</p>
<pre class="sourceCode r"><code class="sourceCode r">file_contents =<span class="st"> </span><span class="kw">write.table</span>(<span class="dt">x =</span> dframe,
                           <span class="dt">file =</span> <span class="st">&quot;dframe-tab_delim.txt&quot;</span>,
                           <span class="dt">quote =</span> F,
                           <span class="dt">sep =</span> <span class="st">&quot;</span><span class="ch">\t</span><span class="st">&quot;</span>)</code></pre>
<p><br></p>
<p><strong>Comma-separated files: </strong> To read in a comma-separated file with column names and row names:</p>
<pre class="sourceCode r"><code class="sourceCode r">file_contents =<span class="st"> </span><span class="kw">write.csv</span>(<span class="dt">x =</span> dframe,
                          <span class="dt">file =</span> <span class="st">&quot;dframe-comma_separated.csv&quot;</span>,
                          <span class="dt">quote =</span> F)</code></pre>
<p><br> <br></p>
</div>
<div id="reading-in-contents-from-a-text-file" class="section level4">
<h4>Reading in contents from a text file:</h4>
<p>The base function is <code>read.table()</code>. Its help file provides a detailed description of the different function arguments available to you. The other data input functions in this help file are variants of <code>read.table()</code> with different default argument values. <br></p>
<pre class="sourceCode r"><code class="sourceCode r">?<span class="kw">read.table</span>()</code></pre>
<p><br></p>
<p><strong>Tab-delimited files: </strong> <br> To read in a tab-delimited file with column names and rownames:</p>
<pre class="sourceCode r"><code class="sourceCode r">file_contents =<span class="st"> </span><span class="kw">read.table</span>(<span class="dt">file =</span> <span class="st">&quot;dframe-tab_delim.txt&quot;</span>,
                           <span class="dt">header =</span> T,
                           <span class="dt">sep =</span> <span class="st">&quot;</span><span class="ch">\t</span><span class="st">&quot;</span>)</code></pre>
<p><br></p>
<p><strong>Comma-separated files: </strong> To read in a comma-separated file with column names and row names:</p>
<pre class="sourceCode r"><code class="sourceCode r">file_contents =<span class="st"> </span><span class="kw">read.csv</span>(<span class="dt">file =</span> <span class="st">&quot;dframe-comma_separated.csv&quot;</span>,
                         <span class="dt">row.names =</span> <span class="dv">1</span>)</code></pre>
<p><br> <br></p>
</div>
</div>
<div id="reading-from-a-database" class="section level3">
<h3>Reading from a database:</h3>
<p>R has libraries that allow to a number of databases, allowing you to read data from and write data to a variety of databases. Below is a list of types of databases and R libraries that can be used to connect to them.</p>
<ul>
<li><p><strong>MySQL:</strong> RMySQL</p></li>
<li><p><strong>Microsoft SQL:</strong> RODBC</p></li>
<li><p><strong>PostgreSQL:</strong> RPostgreSQL</p></li>
<li><p><strong>MongoDB:</strong> RMongo, rmongodb</p></li>
</ul>
<p>Please see individual libraries for more.</p>
<p><br> <br> <br></p>
</div>
</div>
<div id="control-structures" class="section level2">
<h2>Control structures</h2>
<p>Control structures allow you to implement different code depending on a given condition of a variable or parameter <br> <br></p>
<div id="ifelse" class="section level3">
<h3>If…else:</h3>
<p>Allows you to execute a piece of code if, and only if, a given condition is met. Otherwise, another piece of code is executed. <br></p>
<p>In other words,</p>
<p>  <em>if (condition 1 is TRUE) {</em></p>
<p>      <em>then execute this piece of code….</em></p>
<p>  <em>} else {</em></p>
<p>      <em>execute this code instead….</em></p>
<p>  <em>}</em></p>
<p><br></p>
<p>For example,</p>
<pre class="sourceCode r"><code class="sourceCode r">current_bank_balance =<span class="st"> </span><span class="dv">10</span>

if(current_bank_balance &gt;<span class="st"> </span><span class="dv">0</span>){        
  <span class="kw">print</span>(<span class="kw">paste</span>(<span class="st">&quot;You have E&quot;</span>, current_bank_balance, <span class="st">&quot; in your account&quot;</span>, <span class="dt">sep =</span> <span class="st">&quot;&quot;</span>))    <span class="co">&#35; Execute if current_bank_balance is less than or equal to zero</span>
}else{
  <span class="kw">print</span>(<span class="st">&quot;Oh-oh! You are out of money&quot;</span>) <span class="co">&#35; Otherwise, execute this</span>
}</code></pre>
<pre><code>&#35;&#35; [1] &quot;You have E10 in your account&quot;</code></pre>
<p>Re-run the above, varying the value of <code>current_bank_balance</code> <br> <br></p>
</div>
<div id="ifelse-1" class="section level3">
<h3>ifelse:</h3>
<p><code>ifelse</code> is a more concise version of <code>if...else</code>, but its use may decrease the readability of your code.</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="kw">ifelse</span>(current_bank_balance &gt;<span class="st"> </span><span class="dv">0</span>, 
       <span class="kw">paste</span>(<span class="st">&quot;You have E&quot;</span>, current_bank_balance, <span class="st">&quot; in your account&quot;</span>, <span class="dt">sep =</span> <span class="st">&quot;&quot;</span>),  
       <span class="st">&quot;Oh-oh! You are out of money&quot;</span>)</code></pre>
<pre><code>&#35;&#35; [1] &quot;You have E10 in your account&quot;</code></pre>
<p><br> <br></p>
</div>
<div id="the-switch-function" class="section level3">
<h3>The switch function:</h3>
<p><code>if...else</code> is useful when there are two scenarios or cases to consider. If there are more than two scenarios or cases, consider using ‘switch’. <br></p>
<p>In other words,</p>
<p>    <em>switch (input,</em></p>
<p>            <em>“case1” = return_value_for_case1,</em><br />            <em>“case2” = return_value_for_case2,</em><br />            <em>“case3” = return_value_for_case2,</em><br />            <em>…..)</em></p>
<p><br></p>
<p>For example,</p>
<pre class="sourceCode r"><code class="sourceCode r">animal =<span class="st"> &quot;horse&quot;</span>
type =<span class="st"> </span>switch(animal, <span class="st">&quot;horse&quot;</span> =<span class="st"> &quot;mammal&quot;</span>, <span class="st">&quot;snake&quot;</span> =<span class="st"> &quot;reptile&quot;</span>, <span class="st">&quot;trout&quot;</span> =<span class="st"> &quot;fish&quot;</span>)
<span class="kw">print</span>(type)</code></pre>
<pre><code>&#35;&#35; [1] &quot;mammal&quot;</code></pre>
<p>Re-run for an animal type of snake and trout <br> <br></p>
<div id="exercise-1" class="section level4">
<h4>Exercise</h4>
<p>A bank has 3 different account types: current, savings_1 and savings_2 account. Each account has the following characteristics:</p>
<ul>
<li><p><em>Current</em>: current interest rate = 0.05%</p></li>
<li><p><em>Savings_1</em>: current interest rate = 1.2%</p></li>
<li><p><em>Savings_2</em>: current interest rate = 2%</p></li>
</ul>
<p><br> Create a switch statement that will return the correct rate for each bank account type. <br> <br> <br></p>
</div>
</div>
</div>
<div id="loops" class="section level2">
<h2>Loops</h2>
<p>Loops are a way to re-run code until a given condition is met. Two types of loops in R are ‘for’ and ‘while’ <br> <br></p>
<div id="for-loop" class="section level3">
<h3>For loop:</h3>
<p>Repeats a portion of code for each element in a vector <br></p>
<p>In other words,</p>
<p>      <em>for (each_element in a_vector) {</em><br />          <em>execute this code</em><br />      <em>}</em></p>
<p><br> For example,</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="co">&#35; Print out each element of the transport vector</span>
transport =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;car&quot;</span>, <span class="st">&quot;bus&quot;</span>, <span class="st">&quot;plane&quot;</span>)
<span class="kw">names</span>(transport) =<span class="st"> </span><span class="kw">c</span>(<span class="st">&quot;road&quot;</span>, <span class="st">&quot;bus lane&quot;</span>, <span class="st">&quot;plane&quot;</span>)

for(each in transport){
  <span class="kw">print</span>(<span class="st">&quot;====================&quot;</span>)    <span class="co">&#35; Acts as a visual separator</span>
  <span class="kw">print</span>(each)
}</code></pre>
<pre><code>&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] &quot;car&quot;
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] &quot;bus&quot;
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] &quot;plane&quot;</code></pre>
<p><br></p>
<p><code>for</code> loops can also be used to keep track of the index or location of a vector, as in the following example:</p>
<pre class="sourceCode r"><code class="sourceCode r"><span class="co">&#35; Print out each element of the transport vector</span>

for(index in <span class="dv">1</span>:<span class="kw">length</span>(transport)){
  <span class="kw">print</span>(<span class="st">&quot;====================&quot;</span>)    <span class="co">&#35; Acts as a visual separator</span>
  <span class="kw">print</span>(<span class="kw">paste</span>(<span class="st">&quot;Element &quot;</span>, index, <span class="st">&quot;: &quot;</span>, transport[index], <span class="dt">sep =</span> <span class="st">&quot;&quot;</span>))
}</code></pre>
<pre><code>&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] &quot;Element 1: car&quot;
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] &quot;Element 2: bus&quot;
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] &quot;Element 3: plane&quot;</code></pre>
<p><br> <br></p>
</div>
<div id="while-loop" class="section level3">
<h3>While loop:</h3>
<p>Continues to execute a portion of code as along as a given condition is met. When the condition is no longer met, the loop is exited.</p>
<p>In other words,</p>
<p>      <em>while (condition is met) {</em><br />           <em>execute this code</em><br />     <em>}</em></p>
<p><br> As example,</p>
<pre class="sourceCode r"><code class="sourceCode r">count =<span class="st"> </span><span class="dv">0</span>

while(count &lt;<span class="st"> </span><span class="dv">10</span>){
  <span class="kw">print</span>(<span class="st">&quot;====================&quot;</span>)    <span class="co">&#35; Acts as a visual separator</span>
  <span class="kw">print</span>(count)                     <span class="co">&#35; Print the current value of count</span>
  count =<span class="st"> </span>count +<span class="st"> </span><span class="dv">2</span>                <span class="co">&#35; Increment count by 2</span>
 }</code></pre>
<pre><code>&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] 0
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] 2
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] 4
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] 6
&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] 8</code></pre>
<p><br></p>
<p>Another example:</p>
<pre class="sourceCode r"><code class="sourceCode r">remainder =<span class="st"> </span><span class="ot">TRUE</span>      <span class="co">&#35; Initialise the starting condition</span>
count =<span class="st"> </span><span class="dv">0</span>             <span class="co">&#35; Initialise a counter</span>

while(remainder){
  <span class="kw">print</span>(<span class="st">&quot;====================&quot;</span>)    <span class="co">&#35; Acts as a visual separator</span>
  <span class="kw">print</span>(count)                     <span class="co">&#35; Print the current value of count</span>
  count =<span class="st"> </span>count +<span class="st"> </span><span class="dv">1</span>
  if(count %%<span class="st"> </span><span class="dv">6</span>){
    remainder =<span class="st"> </span><span class="ot">FALSE</span>
    <span class="kw">print</span>(<span class="st">&quot;No remainder.Exiting loop...&quot;</span>)
  }
}</code></pre>
<pre><code>&#35;&#35; [1] &quot;====================&quot;
&#35;&#35; [1] 0
&#35;&#35; [1] &quot;No remainder.Exiting loop...&quot;</code></pre>
<p><br> <br> <br></p>
</div>
</div>
<div id="functions" class="section level2">
<h2>Functions</h2>
<p>Functions allow you to re-use code. Functions are useful in situations where your code will perform the same operations repeatedly during the execution of your code. <br> <br> Functions can take inputs and return outputs <br> An example of a function without specified inputs or outputs:</p>
<pre class="sourceCode r"><code class="sourceCode r">if_finished =<span class="st"> </span>function(){        <span class="co">&#35; No specified inputs</span>
  <span class="kw">print</span>(<span class="st">&quot;Complete!&quot;</span>)             <span class="co">&#35; No specified outputs. Rather a message is printed to a console</span>
}

<span class="kw">if_finished</span>()</code></pre>
<pre><code>&#35;&#35; [1] &quot;Complete!&quot;</code></pre>
<p>An example of a function with a specified input and output:</p>
<pre class="sourceCode r"><code class="sourceCode r">get_squared_root =<span class="st"> </span>function(value)
{
  <span class="co">&#35; Return the square root of given value</span>
  result =<span class="st"> </span>value^<span class="fl">0.5</span>
  <span class="kw">return</span>(result)
}
answer =<span class="st"> </span><span class="kw">get_squared_root</span>(<span class="dv">9</span>) <span class="co">&#35; input is 9. Function output captured by 'answer'</span>
answer</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<p><br> <strong>Note:</strong> If there is no <code>return()</code> at the end of the function, the last value of the function is returned instead. <br> This allows us to re-write <code>get_squared_root()</code> more succinctly:</p>
<pre class="sourceCode r"><code class="sourceCode r">get_squared_root =<span class="st"> </span>function(value)
{
  <span class="co">&#35; Return the square root of given value</span>
  value^<span class="fl">0.5</span>
}
answer =<span class="st"> </span><span class="kw">get_squared_root</span>(<span class="dv">9</span>) <span class="co">&#35; input is 9. Function output captured by 'answer'</span>
answer</code></pre>
<pre><code>&#35;&#35; [1] 3</code></pre>
<p><br></p>
<p>Returning multiple results from a function: Combine multiple results into one variable such as a vector or list and return that one variable</p>
<pre class="sourceCode r"><code class="sourceCode r">get_squared_root_and_squared_values =<span class="st"> </span>function(value)
{
  <span class="co">&#35; Return the square root and squared value of given value</span>
  squared_root =<span class="st"> </span>value^<span class="fl">0.5</span>
  squared =<span class="st"> </span>value*value
  <span class="kw">return</span>(<span class="kw">c</span>(<span class="st">&quot;sqrt&quot;</span> =<span class="st"> </span>squared_root, <span class="st">&quot;squared&quot;</span> =<span class="st"> </span>squared))
}
answer =<span class="st"> </span><span class="kw">get_squared_root_and_squared_values</span>(<span class="dv">9</span>) <span class="co">&#35; input is 9. Function output captured by 'answer'</span>
answer</code></pre>
<pre><code>&#35;&#35;    sqrt squared 
&#35;&#35;       3      81</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">answer[<span class="st">&quot;sqrt&quot;</span>]</code></pre>
<pre><code>&#35;&#35; sqrt 
&#35;&#35;    3</code></pre>
<pre class="sourceCode r"><code class="sourceCode r">answer[<span class="st">&quot;squared&quot;</span>]</code></pre>
<pre><code>&#35;&#35; squared 
&#35;&#35;      81</code></pre>
<p><br> <br> <br> End of Session 1</p>
</div>


</div>

<script>

// add bootstrap table styles to pandoc tables
$(document).ready(function () {
  $('tr.header').parent('thead').parent('table').addClass('table table-condensed');
});

</script>

<!-- dynamically load mathjax for compatibility with self-contained -->
<script>
  (function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    document.getElementsByTagName("head")[0].appendChild(script);
  })();
</script>