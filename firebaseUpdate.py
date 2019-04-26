import csv
import json
import re
import time

from csv import writer
from datetime import datetime
from pprint import pprint

import pyrebase
import requests

idCounter = 0
headers = ['','','','','']
# creates a json file for firebase from generated csv above
with open('resturantInfo.csv', 'r') as csvresturantInfo:
    with open('resturantInfo.json', 'w') as jsonresturantInfo:
        reader = csv.DictReader(csvresturantInfo, headers)
        head = True
        index = 0
        idCounter = idCounter - 6   # remove repeated resturantes

        jsonresturantInfo.write('[\n')
        for row in reader:
            if head:
                head = False
                continue
            else:
                if index < idCounter:
                    json.dump(row,jsonresturantInfo)
                    jsonresturantInfo.write(',\n')
                    index = index + 1
                elif index == idCounter:
                    json.dump(row,jsonresturantInfo)
                    jsonresturantInfo.write('\n')
                    index = index + 1
                else:
                    break
        jsonresturantInfo.write(']')


print('\nUpdateing Firebase...')
# post scrapes to firebase
config = {
    'apiKey': 'AIzaSyCx9aSj07cOAtI-m7nBluMHXqEvTYyyXkc',
    'authDomain': 'dining-services.firebaseapp.com',
    'databaseURL': 'https://dining-services.firebaseio.com',
    'projectId': 'dining-services',
    'storageBucket': 'dining-services.appspot.com',
    'messagingSenderId': '9791725706'
}

firebase = pyrebase.initialize_app(config)

# Get a reference to the auth service
auth = firebase.auth()

# Log the user in
email = 'mockemailman@gmail.com'
password = 'JASVT1#PD?3@'

user = auth.sign_in_with_email_and_password(email, password)

# Get a reference to the database service
db = firebase.database()

# open json file and get ready to import to firebase
with open ("resturantInfo.json",'r') as data_file:
    data=json.load(data_file)


db.child("").remove()
results = db.child('').set(data, user['idToken'])

print('\nDone!')
