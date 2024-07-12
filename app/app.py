from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/check-redirect', methods=['GET'])
def check_redirect():
    url = request.args.get('url')

    try:
        response = requests.head(url, allow_redirects=False)
        
        if response.status_code >= 300 and response.status_code < 400:
            redirected_url = response.headers['Location']
            return jsonify({'redirected_url': redirected_url}), 200
        else:
            return jsonify({'error': 'No redirect found'}
