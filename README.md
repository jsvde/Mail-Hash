# Mail-Hash

a simple chrome extension that let's you add random hashes to any [plus addressable](https://www.fastmail.com/help/receive/addressing.html) email address such as gmail, Fastmail and [many more](https://en.wikipedia.org/wiki/Comparison_of_webmail_providers#Features). Please use it in combination with a password manager.

Freely available to [download here](https://chrome.google.com/webstore/detail/njjpbfibgmkogjbfkafflpodelhchfaf).

# Why?

Email providers that support plus addressing or tagging enable you to append something to your address and still receive it in your normal inbox.
Let's say your email address is _your.name@gmail.com_. You sign up on facebook with the _your.name+facebook@gmail.com_.
All emails from facebook will still reach your inbox. You can simply block any emails to _your.name+facebook@gmail.com_ and still receive all emails sent to _your.name@gmail.com_.

Let's say a service get's hacked and your credentials wind up in a database like [have i been pwned?](https://haveibeenpwned.com/)

When you use plus tags such as _facebook_ or _twitter_ or _servicename_ it's pretty easy for an attacker to still determine your email address for another service and try to get in with the leaked passwords.

Mail hash adds a random hash to your mail address!

_your.name@gmail.com_ --> _your.name+6as6d7@gmail.com_

_your.name@gmail.com_ --> _your.name+7jsjdl@gmail.com_

_your.name@gmail.com_ --> _your.name+lflfus@gmail.com_

each time you hit the button.

Your hashed email address becomes part of the key you use to access and login to a service.

Attackers can't easily reuse the credentials for brute force attacks on other services if you use a differnt hash every time.

# Credit

This was inspired by [this tweet](https://twitter.com/levelsio/status/1085785937601212417) by [@levelsio](https://twitter.com/levelsio)
