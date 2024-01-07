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
result = model.predict(np.array([
    [3.5, 1, 1],
    [4.5, 0, 2],
    [5.5, 1, 3]
    ]))

print(result)
print(int(result.mean()))

