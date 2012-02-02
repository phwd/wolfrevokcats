---
layout: post
title: The Definitive C++ Book Guide and List
---

<h1>
<a href="http://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list" rel="nofollow">The Definitive C++ Book Guide and List</a>  
</h1>  
<br>
This content was sourced from [Stack Overflow](http://stackoverflow.com). See Copyright notice at the end of this post.  
<br>
Original Poster:  
<a href="http://stackoverflow.com/users/14388/grepsedawk" style="text-decoration: none;">
<img src="http://stackoverflow.com/users/flair/14388.png?theme=clean" width="208" height="58" alt="profile for grepsedawk at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for grepsedawk at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
</a>  
<br>  
Most Active Contributor:  
<a href="http://stackoverflow.com/users/140719/sbi" style="text-decoration: none;"><img src="http://stackoverflow.com/users/flair/140719.png?theme=clean" width="208" height="58" alt="profile for sbi at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for sbi at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
</a>  
<br>
## Reference Style - All Levels 
<br>  
 1. [_The C++ Programming Language_](http://www.amazon.com/dp/0201700735/) (Bjarne Stroustrup)  The classic introduction to C++ by its creator. Written to parallel the classic K&R, this indeed reads very much alike it and covers just about everything from the core language to the standard library, to programming paradigms to the language's philosophy. (Thereby making the latest editions break the 1k page barrier.)  [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=620)

 2. [_C++ Standard Library Tutorial and Reference_](http://www.amazon.com/dp/0201379260/) (Nicolai Josuttis)  _The_ introduction and reference for the C++ Standard Library. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=1075)

 3. [_The C++ IO Streams and Locales_](http://www.amazon.com/dp/0201183951) (Angelika Langer and Klaus Kreft)  There's very little to say about this book except that, if you want to know anything about streams and locales, then this is the one place to find definitive answers. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=200)

---

## Beginner
<br>
### Introductory
<p>
If you are new to programming or if you have experience in other languages and are new to C++, these books are highly recommended.  
</p>
<br>
 1. [_C++ Primer_](http://www.amazon.com/dp/0201721481/)† (Stanley Lippman, Josée Lajoie, and Barbara E. Moo)  Coming at 1k pages, this is a very thorough introduction into C++ that covers just about everything in the language in a very accessible format and in great detail. Make sure you have the latest edition! [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=778)

 1. [_Accelerated C++_](http://www.amazon.com/dp/020170353X/) (Andrew Koenig and Barbara Moo)  This basically covers the same ground as the _C++ Primer_, but does so on a fourth of its space. This is largely because it does not attempt to be an introduction to *programming*, but an introduction to *C++* for people who've previously programmed in some other language. It has a steeper learning curve, but, for those who can cope with this, it is a very compact introduction into the language. (Historically, it broke new ground by being the first beginner's book using a modern approach at teaching the language.) [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=1185)

 1. [_Thinking in C++_](http://www.amazon.com/dp/0139798099/) (Bruce Eckel)  Two volumes; second is more about standard library, but still very good

 1. [_Programming: Principles and Practice Using C++_](http://www.amazon.com/dp/0321543726) (Bjarne Stroustrup) An introduction to programming using C++ by the creator of the language. A good read, not only for beginners.
<br>
<sub>
† Not to be confused with <a href="http://www.amazon.com/dp/0672326973">C++ Primer Plus</a> (Stephen Prata) <a href="http://accu.org/index.php?module=bookreviews&func=search&rid=1744">[Review]</a>, a significantly worse book.
</sub>  

<br>
### Best practices
<br>
 1. [_Effective C++_](http://www.amazon.com/dp/0321334876/) (Scott Meyers)  This was written with the aim of being the best second book C++ programmers should read, and it succeeded. Earlier editions were aimed at programmers coming from C, the third edition changes this and targets programmers coming from languages like Java. It presents ~50 easy-to-remember rules of thumb along with their rationale in a very accessible (and enjoyable) style. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=700)

 1. [_Effective STL_](http://www.amazon.com/dp/0201749629/) (Scott Meyers)  This aims to do the same to the part of the standard library coming from the STL what _Effective C++_ did to the language as a whole: It presents rules of thumb along with their rationale. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=67)

---

## Intermediate
<br>
 1. [_More Effective C++_](http://www.amazon.com/dp/020163371X/) (Scott Meyers) Even more rules of thumb than _Effective C++_. Not as important as the ones in the first book, but still good to know.
  
 1. [_Exceptional C++_](http://www.amazon.com/dp/0201615622/) (Herb Sutter)  Presented as a set of puzzles, this has one of the best and thorough discussions of the proper resource management and exception safety in C++ through Resource Acquisition is Initialization (RAII) in addition to in-depth coverage of a variety of other topics including the pimpl idiom, name lookup, good class design, and the C++ memory model. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=209)

 1. [_More Exceptional C++_](http://www.amazon.com/dp/020170434X/) (Herb Sutter)  Covers additional exception safety topics not covered in _Exceptional C++_, in addition to discussion of effective object oriented programming in C++ and correct use of the STL. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=784)

 1. [_Exceptional C++ Style_](http://www.amazon.com/dp/0201760428/) (Herb Sutter)  Discusses generic programming, optimization, and resource management; this book also has an excellent exposition of how to write modular code in C++ by using nonmember functions and the single responsibility principle. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=107)

 1. [_C++ Coding Standards_](http://www.amazon.com/dp/0321113586/) (Herb Sutter and Andrei Alexandrescu) "Coding standards" here doesn't mean "how many spaces should I indent my code?"  This book contains 101 best practices, idioms, and common pitfalls that can help you to write correct, understandable, and efficient C++ code. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=1439)

 1. [_C++ Templates: The Complete Guide_](http://www.amazon.com/dp/0201734842/) (David Vandevoorde and Nicolai M. Josuttis) This is _the_ book about C++ templates.  It covers everything from the very basics to some of the most advanced template metaprogramming and explains every detail of how templates work (both conceptually and at how they are implemented) and discusses many common pitfalls.  Has excellent summaries of the One Definition Rule (ODR) and overload resolution in the appendices. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=506)

---

## Above Intermediate
<br>
 1. [_Modern C++ Design_](http://www.amazon.com/dp/0201704315/) (Andrei Alexandrescu)  A groundbreaking book on advanced generic programming techniques.  Introduces policy-based design, type lists, and fundamental generic programming idioms then explains how many useful design patterns (including small object allocators, functors, factories, visitors, and multimethods) can be implemented efficiently, modularly, and cleanly using generic programming. [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=979)

 1. [_C++ Template Metaprogramming_](http://www.amazon.com/dp/0321227255/) (David Abrahams and Aleksey Gurtovoy)

---
<br>
## Classics / Older
<p>
Note: Some information contained within these books may not be up to date or no longer considered best practice.  
</p>
<br>
 1. [_The Design and Evolution of C++_](http://www.amazon.com/dp/0201543303/) (Bjarne Stroustrup)  If you want to know _why_ the language is the way it is, this book is were you find answers. This covers everything _before the standardization_ of C++.  

 2. [_Ruminations on C++_](http://www.amazon.com/dp/0201423391/) - (Andrew Koenig and Barbara Moo) [Review](http://accu.org/index.php?module=bookreviews&func=search&rid=776)  

 3. [_Advanced C++ Programming Styles and Idioms_](http://www.amazon.com/dp/0201548550/) (James Coplien)  A predecessor of the pattern movement, it describes many C++-specific "idioms". It's certainly a very good book and still worth a read if you can spare the time, but quite old and not up-to-date with current C++. 

 4. [_Large Scale C++ Software Design_](http://www.amazon.com/dp/0201633620) (John Lakos)  Lakos explains techniques to manage very big C++ software projects. Certainly a good read, if it only was up to date. It was written long before C++98, and misses on many features (e.g. namespaces) important for large scale projects. If you need to work in a big C++ software project, you might want to read it, although you need to take more than a grain of salt with it. There's been the rumor that Lakos is writing an up-to-date edition of the book for years. 

 5. [_Inside the C++ Object Model_](http://www.amazon.com/dp/0201834545) (Stanley Lippman)  If you want to know how virtual member functions are commonly implemented and how base objects are commonly laid out in memory in a multi-inheritance scenario, and how all this affects performance, this is where you will find thorough discussions of such topics.

---

Note: At the time of posting, this question was closed on [Stack Overflow](http://stackoverflow), in order to prevent loss of information I have reproduced the content here. If there is any problem from Stack Exchange, Inc. or any of its users please feel free to email at philippeharewood@gmail.com or superping me at (321505) Stack Overflow or (883) Stack Exchange.  
<br>
Copyright: This content sourced from [Stack Exchange,Inc.](http://stackexchange.com) and user contributions of said site are distributed under the creative commons [“Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)” license ](http://creativecommons.org/licenses/by-sa/3.0/). [Attribution is required](http://blog.stackoverflow.com/2009/06/attribution-required/)  

<br>

---
