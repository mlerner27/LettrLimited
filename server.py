from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/prefs')
def prefs():
    return render_template('accountmaster.html')

@app.route('/archive')
def archive():
    return render_template('archivemaster.html')

@app.route('/bio')
def bio():
    return render_template('biomaster.html')

@app.route('/msgs')
def msgs():
    return render_template('chat1master.html')

@app.route('/chat')
def chat():
    return render_template('chatmaster.html')

@app.route('/expanded')
def expanded():
    return render_template('expandedmaster.html')

@app.route('/login')
def login():
    return render_template('loginmaster.html')

@app.route('/map')
def map():
    return render_template('mapmaster.html')

@app.route('/personal')
def personal():
    return render_template('personalinfomaster.html')

@app.route('/swipe')
def swipe():
    return render_template('swipemaster.html')
