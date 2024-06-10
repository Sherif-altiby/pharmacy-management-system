from flask import Flask, request

app = Flask(__name__)

@app.route('/backend/add.py', methods=['POST'])
def handle_add_request():
    # Process the request here
    print("Received a POST request to /backend/add.py")
    # Return a response if necessary
    pass

if __name__ == '__main__':
    app.run(debug=True)
