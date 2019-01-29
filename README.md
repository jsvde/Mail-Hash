# Mail-Hash

Chrome Extension that adds a random hash to any [plus addressable](https://www.fastmail.com/help/receive/addressing.html) email address or prepends a custom domain.
Please use it in combination with a password manager.

Freely available to [download here](https://chrome.google.com/webstore/detail/njjpbfibgmkogjbfkafflpodelhchfaf).

# Demo (Youtube)

[![Mail Hash screen capture](https://i.imgur.com/YUUTWbC.png)](https://www.youtube.com/watch?v=pZFtJFBof9w)

# Why?

Email providers that support plus addressing or tagging enable you to append something to your address and still receive it in your normal inbox.
Let's say your email address is **your.name@gmail.com**. You sign up on facebook with the **your.name+facebook@gmail.com**.
All emails from facebook will still reach your inbox. You can simply block any emails to **your.name+facebook@gmail.com** and still receive all emails sent to **your.name@gmail.com**.

Let's say a service get's hacked and your credentials wind up in a database like [have i been pwned?](https://haveibeenpwned.com/)

When you use plus tags such as **facebook** or **twitter** or **servicename** it's pretty easy for an attacker to still determine your email address for another service and try to get in with the leaked passwords.

Mail hash adds a random hash to your mail address!

**your.name@gmail.com** --> **your.name+6as6d7@gmail.com**

**your-domain.com** --> **ZpGM5rrfZ6@your-domain.com**

each time you hit the button.

Your hashed email address becomes part of the key you use to access and login to a service.

Attackers can't easily reuse the credentials for brute force attacks on other services if you use a differnt hash every time.

# Credit

This was inspired by [this tweet](https://twitter.com/levelsio/status/1085785937601212417) by [@levelsio](https://twitter.com/levelsio)
