from flask import Flask, request, jsonify
# import whisper
import os
from sklearn.linear_model import LogisticRegression
import json
import numpy as np

def load_model():
    np.random.seed(42)
    data = np.zeros((1000, 4))
    data[:,0] = np.random.uniform(3, 7, 1000)
    data[:,1] = np.random.choice([1,0], 1000)
    data[:,2] = np.random.choice([1,2,3], 1000)
    data[:,3] = np.random.choice([1,2,3], 1000)
	    
    X = data[:,0:3]
    y = data[:,3]
    
    with open("test.json", "r") as file:
        loaded = json.load(file)

    model = LogisticRegression(**loaded)
        
    with open("model_weights.json", "r") as file:
        weights = json.load(file)
    model.coef_ = np.array(weights["coef_"])
    model.intercept_ = np.array(weights["intercept_"])

    model.fit(X, y)

    return model
model = load_model()
app = Flask(__name__)

@app.route('/modelapi', methods=['POST'])
def predict():
    data = request.get_json()
    print(data)
    X = np.array(data)
    print(X)
    y = model.predict(X)
    return jsonify({"y": y.tolist()})




@app.route('/modelapi', methods=['GET'])
def modelapi():
    return jsonify({'message': 'Hello, World!'})
