# Clyde 'Thluffy' Sinclair
# SoftDev
# Oct 2021

from flask import Flask
app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    return "No hablo queso!"  # Q3: Will this appear anywhere? How u know?

app.run()  # Q4: Where have you seen similar construcs in other languages?

'''
Q0: It's similar to Java since you can set a variable to a value.
Q1: The / usually represents the home page of a website
Q2: It will probably print to the console. It will print details about the app.
Q3: It should appear on the page, hello_world() returns it, and then run() picks it up and uses it as text.
Q4: Similar to Java where you would have a name of a function and add .add or .get.

UPON FURTHER INVESTIGATION...

We discovered that it prints to the terminal, NOT the browser console.
(copied from bigbrain.txt)
'''
