import webbrowser
import os
import sys

# Active job application targets for Krishna Chandra Jha
JOBS = [
    {
        "company": "Wellfound MERN Jobs Search",
        "url": "https://wellfound.com/jobs?q=MERN+Developer&location=India",
        "note": "Dear Hiring Team, I am writing to express my strong interest in the MERN Stack Developer role. As a Junior Full Stack Developer at JT Brothers, I specialize in building responsive React interfaces, Node.js/Express REST APIs, and MongoDB schemas. Contact: +91-7323000894 | jhasatya7323@gmail.com"
    },
    {
        "company": "Cutshort MERN & React Jobs Search",
        "url": "https://cutshort.io/jobs?query=MERN+OR+React+OR+Node.js&location=India",
        "note": "Dear Hiring Manager, I am excited to apply for the React / MERN Developer position. With hands-on experience in React.js, React Native, and Tailwind CSS at JT Brothers, I focus on crafting clean, intuitive, and responsive user interfaces."
    },
    {
        "company": "LinkedIn MERN Developer Search",
        "url": "https://www.linkedin.com/jobs/search/?keywords=MERN%20Stack%20Developer&location=India",
        "note": "Junior Full Stack Developer with 6+ months experience at JT Brothers. MCA graduate, 500+ LeetCode problems solved. Expertise in React, Node.js, Express, MongoDB, REST APIs."
    }
]

def main():
    print("=" * 60)
    print("   Job Search Assistant — Quick Application Launcher")
    print("=" * 60)
    print("\nOpening active job portals in your default web browser...\n")
    
    for idx, job in enumerate(JOBS, 1):
        print(f"[{idx}] Opening {job['company']}...")
        webbrowser.open(job['url'])
        print(f"    Suggested Pitch Note:\n    \"{job['note']}\"\n")
    
    print("=" * 60)
    print("All job portals opened! Copy the pitch notes from tailored_applications.md and paste them into your application forms.")
    print("=" * 60)

if __name__ == "__main__":
    main()
