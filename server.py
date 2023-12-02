from flask import Flask, render_template
from flask import Response, request, jsonify

app = Flask(__name__)

Unused = [
    {
        "id": 2,
        "name": "Jennifer",
        "img": "../static/img/swipe-1-image@2x.png",
        "address": "6th Ave & 9th St",
        "neighborhood": "Greenwich Village",
        "apt-type": "3 Bed, 2 Bath",
        "dates": "May 31 - August 15",
        "price": "$2000/month",
        "last_message": "Do you mind dogs?"
    },
]

current_id = 2
swipeListings = [
    {
        "id": 1,
        "name": "Steven",
        "img": "../static/img/swipe-2-image@2x.png",
        "address": "Amsterdam & 74th",
        "neighborhood": "Morningside heights",
        "apt-type": "Studio",
        "dates": "June 1 - August 1",
        "price": "$2000/month",
        "last_message": ""
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
    return render_template('archivemaster.html', data=archiveListingsList)

@app.route('/bio')
def bio():
    return render_template('biomaster.html')

@app.route('/msgs')
def msgs():
    return render_template('chat1master.html')

@app.route('/chat')
def chat():
    return render_template('chatmaster.html', data=saveListingsList)

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

    json_data = request.get_json()
    id = json_data["id"]
    name = json_data["name"]
    img = json_data["img"]
    address = json_data["address"]
    neighborhood = json_data["neighborhood"]
    apt_type = json_data["apt-type"]
    dates = json_data["dates"]
    price = json_data["price"]
    page = json_data["page_on"]

    new_saved_listing = {
        "id": id,
        "img": img,
        "name": name,
        "address": address,
        "neighborhood": neighborhood,
        "apt-type": apt_type,
        "dates": dates,
        "price": price,
        "last_message": "Hey, I'm interested in your listing!"
    }
    saveListingsList.append(new_saved_listing)

    if page == "swipe":
        for i in range(len(swipeListings)):
            if swipeListings[i]['id'] == id:
                del swipeListings[i]
                break
        return jsonify(data = swipeListings)
    elif page == "archive":
        for i in range(len(archiveListingsList)):
            if archiveListingsList[i]['id'] == id:
                del archiveListingsList[i]
                break
        return jsonify(data = archiveListingsList)


@app.route('/archive_listing', methods=['GET', 'POST'])
def archive_listing():
    global data

    json_data = request.get_json()
    id = json_data["id"]
    name = json_data["name"]
    img = json_data["img"]
    address = json_data["address"]
    neighborhood = json_data["neighborhood"]
    apt_type = json_data["apt-type"]
    dates = json_data["dates"]
    price = json_data["price"]

    new_archive_listing = {
        "id": id,
        "name": name,
        "img": img,
        "address": address,
        "neighborhood": neighborhood,
        "apt-type": apt_type,
        "dates": dates,
        "price": price
    }
    archiveListingsList.append(new_archive_listing)

    for i in range(len(swipeListings)):
        if swipeListings[i]['id'] == id:
            del swipeListings[i]
            break

    return jsonify(data = swipeListings)

@app.route('/trash_listing', methods=['GET', 'POST'])
def trash_listing():
    global data

    json_data = request.get_json()
    id = json_data["id"]

    for i in range(len(archiveListingsList)):
        if archiveListingsList[i]['id'] == id:
            del archiveListingsList[i]
            break

    return jsonify(data = archiveListingsList)
