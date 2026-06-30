# 🧠 Real-Time Emotion AI Dashboard

A high-performance, multithreaded desktop application that performs real-time face detection and emotion recognition. Built with Python, OpenCV, and DeepFace, this application features a custom Graphical User Interface (GUI), background processing for smooth video framerates, and post-session data analytics.

---

# ✨ Features

## 🔍 Real-Time Analysis

Uses **DeepFace** and **MTCNN** for highly accurate facial cropping and micro-expression analysis.

## ⚡ Multithreaded Architecture

The heavy AI computations are offloaded to a daemon thread, ensuring the camera feed runs at a seamless **30+ FPS** without GUI lag.

## 📊 Interactive Dashboard

Built with **Tkinter**, featuring:

* Live video feed
* Dynamic progress bars
* Real-time emotion probability tracking

Supported emotions:

* Angry
* Disgust
* Fear
* Happy
* Sad
* Surprise
* Neutral

## 📝 Session Logging

Toggleable recording feature that logs timestamped emotional states to a local CSV database.

## 📈 Data Visualization

Integrated **Pandas** and **Matplotlib** tools generate post-session pie charts detailing emotional distribution.

---

# 🛠️ Tech Stack

| Category        | Technologies                            |
| --------------- | --------------------------------------- |
| Language        | Python 3.8+                             |
| Computer Vision | OpenCV (`opencv-python`)                |
| Deep Learning   | DeepFace, TensorFlow/Keras (`tf-keras`) |
| GUI Framework   | Tkinter, Pillow (PIL)                   |
| Data Science    | Pandas, Matplotlib                      |

---

# 📂 Project Structure

```bash
src/
│
├── __init__.py
├── emotion_detector.py    # Core OOP logic & multithreaded AI engine
├── main.py                # Tkinter GUI & main application loop
│
├── requirements.txt       # Project dependencies
├── .gitignore             # Git ignore rules
├── emotion_log.csv        # Generated tracking data (created dynamically)
└── README.md              # Project documentation
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/yourusername/emotion-ai-dashboard.git
cd emotion-ai-dashboard
```

---

## 2️⃣ Install Dependencies

It is recommended to use a virtual environment.

Install the required packages:

```bash
pip install -r requirements.txt
```

---

## 3️⃣ Run the Application

```bash
python main.py
```

> **Note:**
> On the first launch, the application will automatically download the pre-trained weights for the MTCNN and Emotion models. This may take a minute or two depending on your internet connection speed.

---

# 💡 How to Use

### ▶️ Start Recording

Launch the application and click **Start Recording** to begin logging dominant emotions to `emotion_log.csv` at 1-second intervals.

### ⏹️ Stop Recording

Click **Stop Recording** when you finish tracking your session.

### 📊 View Summary

Click **View Summary** to generate a pie chart visualizing your emotional breakdown.

### ❌ Close Dashboard

Click **Close Dashboard** to safely release the camera and terminate all background AI threads.

---

# 📸 Recommended Usage Tips

* Ensure your environment is **well-lit** for better detection accuracy.
* Position your face clearly within the camera frame.
* Avoid excessive background movement for stable analysis.

---

# 🔮 Future Improvements

* Emotion trend graphs over time
* Multi-user face recognition
* Export analytics reports as PDF
* Dark mode UI support
* Cloud-based emotion tracking dashboard

---

# 📄 License

This project is licensed under the MIT License.

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to fork the project and submit a pull request.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
