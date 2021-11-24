# Softlocked - Eric Guo and Michael Borczuk
# SoftDev
# K19 - Nasa RESTApi Stuff
# 2021-11-23
# time spent: 0.6 hours

from flask import Flask, render_template
import urllib
import json

app = Flask(__name__) 

@app.route("/") 
def hello_world():
    print(__name__)
    f = open("key_nasa.txt") 
    key = f.read()
    response = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=" + key)
    print(response)
    json_stuff = json.loads(response.read()) 
    print(json_stuff)
    return render_template("main.html", pic=json_stuff["url"])

app.run()  

                
