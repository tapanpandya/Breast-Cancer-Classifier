from flask import Flask, render_template, request
from pickle import load
import numpy as np
# print(flask.__version__)

app = Flask(__name__)

# load the model
model = load(open('breast_cancer_model.pkl', 'rb'))
# load the scaler
x_scaler = load(open('scaler.pkl', 'rb'))
# y_scaler = load(open('y_scaler.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=["GET", "POST"])
def predict():
    predicted_price = []
    if request.method == 'POST':
        mean_radius = request.form.get("mean_radius")
        mean_texture = request.form.get("mean_texture")
        mean_perimeter = request.form.get("mean_perimeter")
        mean_area = request.form.get("mean_area")
        mean_smoothness = request.form.get("mean_smoothness")

        data = np.array([[mean_radius, mean_texture, mean_perimeter, mean_area, mean_smoothness]])

        my_data = x_scaler.transform(data)
        print(my_data)
        predicted_price = model.predict(my_data)

        ## Don't require y_scaler as in Classification problem, there is no need to scale the y or target variable.

        # print('After ', my_prediction)
        # predicted_price = y_scaler.inverse_transform(my_prediction)
        print('Final converted price', predicted_price[0])
    return render_template('predict.html', prediction=predicted_price)

if __name__ == '__main__':
    app.run(debug=True)