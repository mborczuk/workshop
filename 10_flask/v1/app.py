# Clyde 'Thluffy' Sinclair
# SoftDev
# Oct 2021

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

'''
In this version, there is no print statement to the terminal console, so it won't print anything. However, everything else including the return statement, stays the same.
'''
