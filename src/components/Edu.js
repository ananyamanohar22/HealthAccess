import React from 'react';
import './Edu.css'; // Import your CSS file for styling

const InformationAndEducation = () => {
  return (
    <div className="information-education-container">
      <h1>Information and Education</h1>
      <p>
        Welcome to our Information and Education page. Here, you can find a wealth of resources to help you better understand your health, make informed decisions, and lead a healthier life.
      </p>

      <h2>Health Topics</h2>
      <ul>
        <li><a href="https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes">Understanding Diabetes</a></li>
        <li><a href="https://dhss.delaware.gov/dph/dpc/eatright.html">Healthy Eating Habits</a></li>
        <li><a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response">Mental Health and Wellness</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1117606/">Managing Chronic Conditions</a></li>
        <li><a href="https://www.nhlbi.nih.gov/health/heart-attack">Managing Heart Attack Conditions</a></li>
        <li><a href="https://www.niddk.nih.gov/health-information/digestive-diseases/food-poisoning/symptoms-causes">Food Poisoning</a></li>
        <li><a href="https://www.cancer.gov/about-cancer/understanding/what-is-cancer">Cancer treatment</a></li>
      </ul>

      <h2>Resource Library</h2>
      <p>
        Explore our collection of articles, videos, and downloadable materials to learn more about various health and wellness topics.
      </p>
      <a href="https://www.nih.gov/research-training/library-resources">Visit Resource Library</a>

      <h2>Healthcare Blog</h2>
      <p>
        Stay up-to-date with the latest healthcare trends and insights by reading articles from our healthcare experts.
      </p>
      <a href="https://thehealthcareblog.com/">Visit Healthcare Blog</a>
    </div>
  );
};

export default InformationAndEducation;