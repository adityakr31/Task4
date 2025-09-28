# Task 4: CI-CD Pipeline for React Application

This repository demonstrates the setup and configuration of a Continuous Integration and Continuous Deployment (CICD) pipeline for a React application deployed to an AWS S3 bucket.

## Table of Contents

- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [How the Task Is Made](#how-the-task-is-made)
- [Screenshots](#screenshots)

## Project Structure
The project is structured as follows:

- `build/`: The output folder containing the React application files.
- `codebuild/`: AWS CodeBuild configuration file.
  - `.codebuild.yaml`
- `README.md`: This README file.
   
## Key Features
- Automates the build and deployment of an React application to an S3 bucket.
- Uses AWS CodePipeline for setting up a CICD pipeline.
- Demonstrates integration with AWS CodeBuild for building the React app.
- Enables a static website hosted on an S3 bucket.

## Technologies Used
- React: Frontend framework
- AWS S3: Object storage service for hosting the website
- AWS CodePipeline: CICD service for automating the deployment process
- AWS CodeBuild: Service for building the React application
- Git: Version control system
- Node.js: JavaScript runtime for React development


## Requirements

Before setting up the CI-CD pipeline, ensure you have the following:

- An AWS account with appropriate permissions.
- The React application codebase.
- AWS CLI configured with the necessary credentials.
- Git installed on your local machine.


## How the Task Is Made

Follow the AWS documentation and the screenshots provided in the "Screenshots" section to set up the CICD pipeline.
The CICD pipeline automates the following steps:
- Create an S3 bucket to host the React application.
- Build the React application using npm run build.
- Upload the application files to the S3 bucket.
- Configure the bucket for static website hosting.
- Set up an AWS CodePipeline with source, build, and deploy stages.
    
## Screenshots
### Here are some screenshots that illustrate the workflow of setting up the CICD pipeline:

### Creating an S3 Bucket
![App Screenshot](https://drive.google.com/uc?id=18Vt-JN_ipXasbRkrLwAaFyJxWru8Z1XY)

### Uploading build App Files to S3
![App Screenshot](https://drive.google.com/uc?id=1_mGD7EGjVBFtzzNgimT7wiERsyUV77-z)

### Configuring Static Website Hosting through Bucket Policy
![App Screenshot](https://drive.google.com/uc?id=12sJbrEL45WzPwSiAApLZvmVgZ5-sbJaI)

![App Screenshot](https://drive.google.com/uc?id=1lvpVbSC7OxlMcMTV-ntd53MYS4peLVGD)

### Acceesing the frontend through Bucket Website Endpoint
![App Screenshot](https://drive.google.com/uc?id=1tykwlds0S-CPtdRYu2Y9FAn22ZpYqUg7)

### AWS CodePipeline Stages
![App Screenshot](https://drive.google.com/uc?id=1e7mGTyPcbzeobc2ygKUNSmpgXes56pwD)

### Step 1: Choose Pipeline settings
![App Screenshot](https://drive.google.com/uc?id=1r0ZpAU1Up-ko8B_Rz4XdSq_vlRIDo46e)

### Step 2, 3: Add Source stage, Add Build Stage
![App Screenshot](https://drive.google.com/uc?id=12LoncWmHrqTdVhuDt2CkPMxuPxGORXGh)

![App Screenshot](https://drive.google.com/uc?id=1OL8v-JXKP4BvqXoPQlpleBgh0pcV22lZ)

### Step 4: Add Deploy Stage
![App Screenshot](https://drive.google.com/uc?id=1XQVFzhWIyVyF5GICD-E9jhTUU2WamHKy)

### Step 5: Review
![App Screenshot](https://drive.google.com/uc?id=1QMBdlDn41zB3DlKpv4wcpfp2mq4tiGb_)

![App Screenshot](https://drive.google.com/uc?id=1e9ZHMk3DMOBmQdJozFO-WAMDw3Cge1m-)
