from flask import Flask, render_template
from flask import Response, request, jsonify

app = Flask(__name__)

data = [
    {
        "id": 1,
        "img": "../static/img/swipe-1-image@2x.png",
        "address": "6th Ave & 9th St",
        "neighborhood": "Greenwich Village",
        "apt-type": "3 Bed, 2 Bath",
        "dates": "May 31 - August 15",
        "price": "$2000/month"
    },
]

current_id = 2
swipeListings = [
    {
        "id": 2,
        "img": "../static/img/swipe-2-image@2x.png",
        "address": "Amsterdam & 74th",
        "neighborhood": "Morningside heights",
        "apt-type": "Studio",
        "dates": "June 1 - August 1",
        "price": "$2000/month"
    },
]

archiveListingsList = []

saveListingsList = []

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
    return render_template('swipemaster.html', data=swipeListings)

@app.route('/save_listing', methods=['GET', 'POST'])
def save_listing():
    global data
    global current_id

    json_data = request.get_json()
    id = json_data["id"]
    img = json_data["img"]
    address = json_data["address"]
    neighborhood = json_data["neighborhood"]
    apt_type = json_data["apt-type"]
    dates = json_data["dates"]
    price = json_data["price"]

    new_saved_listing = {
        "id": id,
        "img": img,
        "address": address,
        "neighborhood": neighborhood,
        "apt-type": apt_type,
        "dates": dates,
        "price": price
    }
    saveListingsList.append(new_saved_listing)

    for i in range(len(swipeListings)):
        if swipeListings[i]['id'] == id:
            del swipeListings[i]
            break

    return jsonify(data = swipeListings)
