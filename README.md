# MoodMate Tracker 😄

MoodMate Tracker is a simple yet uplifting web app built with **React.js** that helps users reflect on their emotions. By selecting how you're feeling — like *Happy*, *Sad*, *Angry*, or *Upset* — the app identifies your mood and displays a thoughtful, mood-based quote to inspire or comfort you.

---

# Features

- Mood Detection: Choose your current feeling (e.g., “I'm feeling upset”), and the app identifies the mood category (e.g., *Sad*).
- Mood Quotes: Get motivational or comforting quotes based on your current emotion.
- Clean UI: Simple and intuitive interface built using React.
- Deployed on AWS: Hosted as a static site on **Amazon S3**, deployed through **AWS CodePipeline** and **CodeBuild**.

 Live Demo

You can access the live application [here](http://moodmate-react-site.s3-website-us-east-1.amazonaws.com)  

---
# Tech Stack

- Frontend: React.js (with Hooks)
- Styling: Tailwind CSS / CSS Modules (update if different)
- Deployment: AWS S3 (Static Website Hosting)
- CI/CD: AWS CodePipeline + CodeBuild
- Version Control: GitHub

---

-- CI/CD Pipeline Overview

The project uses AWS services to automate deployment:

1. GitHub repo is connected to **AWS CodePipeline**.
2. Code changes trigger the pipeline automatically.
3. AWS CodeBuild installs dependencies, runs tests (if any), and builds the React app.
4. The compiled files are deployed to an S3 bucket configured for static website hosting


