import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Feature = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4">🚀 Unleash the Power of AI</h1>
        <p className="lead">What Our AI Can Do for You</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>✍️ AI-Powered Content Creation</h3>
          <p>
            Writing high-quality content takes time, but with our AI, you can
            generate, optimize, and refine text in just a few clicks!
          </p>
          <ul>
            <li>Instantly create blogs, social media posts, and articles</li>
            <li>Generate creative scripts, poetry, and book summaries</li>
            <li>Write compelling marketing copies and email campaigns</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>🎨 AI-Generated Images & Visual Content</h3>
          <p>
            No design skills? No problem! Our AI creates professional-quality
            images, illustrations, and branding visuals instantly.
          </p>
          <ul>
            <li>Generate unique artwork and concept designs</li>
            <li>Create eye-catching thumbnails, posters, and banners</li>
            <li>Design logos, infographics, and ad creatives</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>🗣️ AI-Powered Language Processing</h3>
          <p>
            Our AI understands, translates, and enhances text across multiple
            languages, making communication effortless.
          </p>
          <ul>
            <li>Translate text into 50+ languages</li>
            <li>Paraphrase, summarize, and refine writing style</li>
            <li>Adjust tone from formal to casual (or vice versa)</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>🤖 AI Chatbots & Smart Automation</h3>
          <p>
            Enhance customer experience and automate repetitive tasks with
            intelligent AI chatbots.
          </p>
          <ul>
            <li>Deploy AI-powered customer support chatbots</li>
            <li>Automate lead generation and follow-ups</li>
            <li>Handle real-time booking and order inquiries</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2>🎯 Get Started Today!</h2>
        <p>
          With AI by your side, the possibilities are endless. Our technology is
          designed to help individuals and businesses save time, increase
          efficiency, and unlock new creative potential.
        </p>
        <button className="btn btn-primary btn-lg">Try Now</button>
      </div>
    </div>
  );
};

export default Feature;