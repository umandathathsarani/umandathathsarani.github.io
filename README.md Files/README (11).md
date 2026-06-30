# 🧠 MNIST Handwritten Digit Recognizer

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00.svg?logo=tensorflow)
![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-F37626.svg?logo=jupyter)
![License](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)

A complete, end-to-end deep learning computer vision pipeline designed to recognize and classify handwritten digits (0-9). This project demonstrates the practical application of Convolutional Neural Networks (CNNs) built and trained from scratch using TensorFlow and Keras.

---

## 🚀 Key Features

* **Robust Model Training:** Features a fully configured CNN trained on the 70,000-image MNIST dataset, consistently achieving **>97% accuracy** on unseen test data.
* **Custom Inference Engine:** Includes a dedicated testing suite (`predict.ipynb`) to preprocess, format, and predict custom, hand-drawn images provided by the user.
* **Advanced Data Extraction:** Custom scripts to unpack the hidden `.npz` MNIST data arrays, visualize the matrices, and export all 70,000 samples into categorized, human-readable `.png` directories.
* **Interactive Documentation:** Built using Jupyter Notebooks with step-by-step, human-readable explanations detailing the mathematics, logic, and code behind the AI's decision-making process.

---

## 📁 Project Architecture

```text
📦 mnist-digit-recognizer
 ┣ 📜 train.ipynb               # Core script: loads data, builds CNN, trains, and saves the model
 ┣ 📜 predict.ipynb             # Inference script: formats and tests custom user-drawn images
 ┣ 📜 explore_mnist.ipynb       # Visualization tool to sample and study the training dataset
 ┣ 📜 download_all_mnist.ipynb  # Extraction tool to download 70k images into sorted folders
 ┣ 📜 requirements.txt          # Python dependencies and library versions
 ┣ 📜 README.md                 # Project documentation
 ┗ 📜 LICENSE.md                # Copyright and usage restrictions
 ```

---

## 🛠️ Installation & Setup

To run this project locally, clone the repository and set up an isolated virtual environment to prevent package conflicts.

**1. Clone the repository:**
```bash
git clone [https://github.com/umandathathsarani/mnist-digit-recognizer.git](https://github.com/umandathathsarani/mnist-digit-recognizer.git)
cd mnist-digit-recognizer
```

**2. Create and activate a virtual environment:**
```bash
# On Windows
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# On macOS/Linux
python3 -m venv .venv
source .venv/bin/activate
```
**3. Install required dependencies:**
```bash
pip install -r requirements.txt
```

---

## 💡 How to Use
For the best experience, run the notebooks in the following order:

1. Train the Brain: Open train.ipynb and run all cells. This will download the dataset, train the CNN, and generate the mnist_model.keras file required for predictions.

2. Test Your Handwriting: Draw a digit (0-9) in MS Paint or a similar tool, save it as my_digit.png in the root folder, and run predict.ipynb to see the AI's prediction.

3. Explore the Data: Use explore_mnist.ipynb or download_all_mnist.ipynb to physically extract and visualize the raw training images.

---

## 👤 Author

Mummullage Binuri Umanda Thathsarani B.Sc. (Hons) in Information Technology (Specializing in Artificial Intelligence) Sri Lanka Institute of Information Technology (SLIIT)

---

## ⚖️ License

All Rights Reserved. See the LICENSE.md file for full details. No permission is granted to copy, distribute, modify, merge, publish, or sell copies of this software in any form without explicit prior written consent from the copyright holder.

---
