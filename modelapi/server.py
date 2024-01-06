from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/modelapi', methods=['GET'])
def modelapi():
    return jsonify({'message': 'Hello, World!'})
