from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from inside a Docker container!"

if __name__ == "__main__":
    # It is important to set host='0.0.0.0' so the container 
    # is accessible from outside (your machine).
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)