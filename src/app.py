from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import sqlite3
import json
from flask_cors import CORS
import threading


class DBclass:
    def __init__(self, path):
        self.path = path
        self.db = sqlite3.connect(self.path)
        self.cur = self.db.cursor()
    def execute(self, query):
        self.cur.execute(query)
        return self.cur.fetchall()
    def commit(self):
        self.db.commit()
    def close(self):
        self.db.close()


db = DBclass('../playlist.db')

db_thread_local = threading.local()


def get_db():
    if not hasattr(db_thread_local, 'db'):
        db_thread_local.db = DBclass('../playlist.db')
    return db_thread_local.db

app = Flask(__name__)
CORS(app)

@app.route('/app/add', methods=['POST'])
def add():
    data=request.json
    db=get_db()
    check=db.execute("SELECT * FROM playlist WHERE song_id='{}'".format(data['id']))
    print(check)
    result={}
    if len(check)>0:
        result['status']='exist'
        return json.dumps(result)
    db.execute("INSERT INTO playlist (song_id, song_name, song_duration, artist_name, img, album_name) VALUES ('{}','{}','{}','{}','{}','{}')".format(data['id'],data['name'],data['duration'],data['artist'],data['album_image'],data['album']))
    db.commit()
    result['status']='ok'
    return json.dumps(result)

@app.route('/app/delete', methods=['POST'])
def delete1():
    data=request.json
    db=get_db()
    
    # id=str(data['id'])
    check=db.execute("SELECT * FROM playlist WHERE song_id='{}'".format(data['id']))
    if len(check)==0:
        result={'status':'not exist','id':data['id']}
        return check
    db.execute("DELETE FROM playlist WHERE song_id='{}'".format(data['id']))
    db.commit()
    result={'status':'ok'}
    return json.dumps(result)

@app.route('/app/update', methods=['POST'])
def update():
    data=request.json
    db.execute("UPDATE playlist SET name='{}', duration={} WHERE id={}".format(data['name'],data['duration'],data['id']))
    db.commit()
    return 'ok'

@app.route('/app/get', methods=['GET'])
def get():
    db=get_db()
    data = db.execute("SELECT * FROM playlist")
    headers = [i[0] for i in db.cur.description]
    result=[dict(zip(headers, i)) for i in data]
    return json.dumps(result)

@app.route('/app/get/sample', methods=['GET'])
def get_sample():
    data={"name":"test","duration":123}
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)