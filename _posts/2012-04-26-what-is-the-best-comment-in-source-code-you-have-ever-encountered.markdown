---
layout: post
title: What is the best comment in source code you have ever encountered?
---

<h1>
<a href="http://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered" rel="nofollow">What is the best comment in source code you have ever encountered?</a>  
</h1>  
<br>
This content was sourced from [Stack Overflow](http://stackoverflow.com). See Copyright notice at the end of this post.  
<br>

---

I am particularly guilty of this, embedding non-constructive comments, code poetry and little jokes into most of my projects (although I usually have enough sense to remove anything directly offensive before releasing the code). Here's one I'm particulary fond of, placed far, far down a poorly-designed 'God Object':

    /**
    * For the brave souls who get this far: You are the chosen ones,
    * the valiant knights of programming who toil away, without rest,
    * fixing our most awful code. To you, true saviors, kings of men,
    * I say this: never gonna give you up, never gonna let you down,
    * never gonna run around and desert you. Never gonna make you cry,
    * never gonna say goodbye. Never gonna tell a lie and hurt you.
    */
    
**I'M SORRY!!!!** I just couldn't help myself.....!

And another, which I'll admit I haven't actually released into the wild, even though I am very tempted to do so in one of my less intuitive classes:

    // 
    // Dear maintainer:
    // 
    // Once you are done trying to 'optimize' this routine,
    // and have realized what a terrible mistake that was,
    // please increment the following counter as a warning
    // to the next guy:
    // 
    // total_hours_wasted_here = 37
    // 

---

    //Code sanitized to protect the foolish.
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Reflection;
    using System.Web.UI;
    
    namespace Mobile.Web.Control
    {
        /// <summary>
        /// Class used to work around Richard being a fucking idiot
        /// </summary>
        /// <remarks>
        /// The point of this is to work around his poor design so that paging will 
        /// work on a mobile control. The main problem is the BindCompany() method, 
        /// which he hoped would be able to do everything. I hope he dies.
        /// </remarks>
        public abstract class RichardIsAFuckingIdiotControl : MobileBaseControl, ICompanyProfileControl
        {
            protected abstract Pager Pager { get; }
    
            public void BindCompany(int companyId) { }
    
            public RichardIsAFuckingIdiotControl()
            {
                MakeSureNobodyAccidentallyGetsBittenByRichardsStupidity();
            }
    
            private void MakeSureNobodyAccidentallyGetsBittenByRichardsStupidity()
            {
                // Make sure nobody is actually using that fucking bindcompany method
                MethodInfo m = this.GetType().GetMethod("BindCompany", BindingFlags.DeclaredOnly | 
                    BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
                if (m != null)
                {
                    throw new RichardIsAFuckingIdiotException("No!! Don't use the fucking BindCompany method!!!");
                }
                // P.S. this method is a joke ... the rest of the class is fucking serious
            }
    
            /// <summary>
            /// This returns true if this control is supposed to be doing anything
            /// at all for this request. Richard thought it was a good idea to load
            /// the entire website during every request and have things turn themselves
            /// off. He also thought bandanas and aviator sunglasses were "fuckin' 
            /// gnarly, dude."
            /// </summary>
            protected bool IsThisTheRightPageImNotSureBecauseRichardIsDumb()
            {
                return Request.QueryString["Section"] == this.MenuItemKey;
            }
    
            protected override void OnLoad(EventArgs e)
            {
                if (IsThisTheRightPageImNotSureBecauseRichardIsDumb())
                {
                    Page.LoadComplete += new EventHandler(Page_LoadComplete);
                    Pager.RowCount = GetRowCountBecauseRichardIsDumb();
                }
                base.OnLoad(e);
            }
    
            protected abstract int GetRowCountBecauseRichardIsDumb();
            protected abstract void BindDataBecauseRichardIsDumb();
    
            void Page_LoadComplete(object sender, EventArgs e)
            {
                BindDataBecauseRichardIsDumb();
            }
    
            // the rest of his reduh-ndant interface members
            public abstract string MenuItemName { get; set; }
            public abstract string MenuItemKey { get; set; }
            public abstract bool IsCapable(CapabilityCheck checker, int companyId);
            public abstract bool ShowInMenu { get; }
            public virtual Control CreateHeaderControl()
            {
                return null;
            }
        }
    }
    
Update: The original author of the code [has outed himself](http://web.archive.org/web/20101128235717/http://mcfunley.com/438/from-the-annals-of-dubious-achievement) so I must give credit where it is due. [Dan McKinley](http://web.archive.org/web/20101128235717/http://mcfunley.com/) left the company I was with shortly after I started, and he talks more about the code, explaining some background and a few more "WTF's" that 'Richard' wrote.

---

    stop(); // Hammertime!

---

    // sometimes I believe compiler ignores all my comments
    
---

    Exception up = new Exception("Something is really wrong.");
    throw up;  //ha ha
    
---

    //When I wrote this, only God and I understood what I was doing
    //Now, God only knows
    
---

    // I dedicate all this code, all my work, to my wife, Darlene, who will 
    // have to support me and our three children and the dog once it gets 
    // released into the public.
    
---

This seems to stop morons from messing my code...  

    // Autogenerated, do not edit. All changes will be undone.
    
---

    // drunk, fix later
Wish I were kidding. And knowing the developer who wrote the code, I think he meant it literally.

---

    // Magic. Do not touch.
    
---

    return 1; # returns 1
    
---

    // I'm sorry.
    
---

    /* This is O(scary), but seems quick enough in practice. */
followed by four nested for-loops

---

    long john; // silver
    
---

    // somedev1 -  6/7/02 Adding temporary tracking of Login screen
    // somedev2 -  5/22/07 Temporary my ass
    
---

It speaks volumes about our profession that when asked about the "best comment", we all answer with the worst comments we can find...

---
Note: At the time of posting, this question was closed on [Stack Overflow](http://stackoverflow), in order to prevent loss of information I have reproduced the content here. If there is any problem from Stack Exchange, Inc. or any of its users please feel free to email at philippeharewood@gmail.com or superping me at (321505) Stack Overflow or (883) Stack Exchange.  
<br>
Copyright: This content sourced from [Stack Exchange,Inc.](http://stackexchange.com) and user contributions of said site are distributed under the creative commons [“Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)” license ](http://creativecommons.org/licenses/by-sa/3.0/). [Attribution is required](http://blog.stackoverflow.com/2009/06/attribution-required/)  

<br>

---
