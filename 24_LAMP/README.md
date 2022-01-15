# how-to :: CREATE A DIGITAL OCEAN DROPLET WITH UBUNTU AND APACHE
---
## Overview
Guide to creating an ubuntu 20.04 virtual machine ("droplet") and installing Apache2 web server on it.

### Estimated Time Cost: _

### Prerequisites:

- Use minimum features on the droplet. It should cost $5/month.

1. Set up a droplet and choose Ubuntu as the operating system.
2. Install Apache2 using `sudo apt install apache2`.
3. Check the list of UFW application profiles using `sudo ufw app list`. Allow traffic on port 80 using the Apache profile: `sudo ufw allow in "Apache"`
4. Test that this worked by going to [this](http://159.223.190.60) link. The default Apache page should show up.
5. 
1. Step, with
    ```
    generic code block or terminal command
    ```
   and/or...
    ```javascript
    var foo = "this that JS tho";
    ```
   and/or...
    ```python
    print("this that Python tho")
    ```
   and/or...
1. Step, with [hyperlink](https://xkcd.com)s...


### Resources
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04

---

Accurate as of (last update): 2022-01-14

#### Contributors:  
Michael Borczuk, pd2  

_Note: the two spaces after each name are important! ( <--burn after reading)  _
