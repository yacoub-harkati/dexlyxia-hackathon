from flask import Flask, request, jsonify
# import whisper
import os

app = Flask(__name__)

@app.route('/modelapi', methods=['POST'])
def transcribe_audio():
    # if 'file' not in request.files:
    #     return 'No file part', 400

    # file = request.files['file']
    # if file.filename == '':
    #     return 'No selected file', 400

    # if file:
    #     filepath = f'/tmp/{file.filename}'
    #     file.save(filepath)
    #     model = whisper.load_model("base")
    #     result = model.transcribe(filepath)
    #     os.remove(filepath)
    #     return jsonify({'transcription': result.text})
    return 'Error processing file', 500

@app.route('/modelapi', methods=['GET'])
def modelapi():
    return jsonify({'message': 'Hello, World!'})
