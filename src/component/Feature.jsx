import {Rocket, PenTool, Image, Globe, MessageCircle, BarChart, Shield, Search} from "lucide-react";
// import {Card, CardContent} from "@/ components/ui/card";
// import {Button} from "@/ components/ui/button";
import "../Styles/Features.css";

const Feature = () => {
    const features = [
        {
            icon: <PenTool size={32} className="text-blue-500" />,
            title: "AI-Powered Content Creation – Write Anything in Seconds",
            description: `Writing high-quality content takes time, but with our AI, you can generate, optimize, and refine text in just a few clicks!
      
      For Individuals & Freelancers:
      Instantly create blogs, social media posts, and articles
      Write engaging stories, essays, and captions
      Generate creative scripts, poetry, and book summaries
      
      For Businesses & Agencies:
      Craft SEO-optimized blog posts and website content
      Write compelling marketing copies, ads, and email campaigns
      Automate product descriptions and landing page content
      
      Bonus: AI-powered grammar, clarity, and tone adjustments ensure your content is always professional and engaging!`,
        },
        {
            icon: <Image size={32} className="text-green-500" />,
            title: "AI-Generated Images & Visual Content – Create Stunning Graphics",
            description: `No design skills? No problem! Our AI creates professional-quality images, illustrations, and branding visuals instantly.
      
      For Individuals & Content Creators:
      Generate unique artwork and concept designs
      Create eye-catching thumbnails, posters, and banners
      Turn text descriptions into realistic images
      
      For Businesses & Marketers:
      Design logos, infographics, and ad creatives
      Generate product images and promotional graphics
      Create customized social media visuals
      
      Bonus: Get multiple variations of an image to choose from and edit them with AI-powered tools.`,
        },
        {
            icon: <Globe size={32} className="text-orange-500" />,
            title: "AI-Powered Language Processing – Translate, Edit & Rewrite",
            description: `Our AI understands, translates, and enhances text across multiple languages, making communication effortless.
      
      For Individuals & Writers:
      Translate text into 50+ languages
      Paraphrase, summarize, and refine writing style
      Adjust tone from formal to casual (or vice versa)
      
      For Businesses & Global Brands:
      Localize content for international markets
      Generate professional business emails and reports
      Optimize documents for clarity and engagement
      
      Bonus: AI suggests better word choices and structures for maximum impact.`,
        },
        {
            icon: <MessageCircle size={32} className="text-purple-500" />,
            title: "AI Chatbots & Smart Automation – Automate Conversations & Support",
            description: `Enhance customer experience and automate repetitive tasks with intelligent AI chatbots.
      
      For Individuals & Freelancers:
      Create a personal AI assistant for FAQs and inquiries
      Automate replies for social media and messaging apps
      Use AI chatbots to schedule appointments and manage tasks
      
      For Businesses & Service Providers:
      Deploy AI-powered customer support chatbots
      Automate lead generation and follow-ups
      Handle real-time booking and order inquiries
      
      Bonus: AI learns from interactions and improves over time, ensuring better accuracy and engagement.`,
        },
        {
            icon: <BarChart size={32} className="text-red-500" />,
            title: "AI-Powered Data Analysis & Business Intelligence",
            description: `AI can help businesses process data, extract insights, and make data-driven decisions faster than ever.
      
      For Freelancers & Professionals:
      Generate summarized reports from long documents
      Automate data entry and organization
      Get trend predictions based on historical data
      
      For Businesses & Enterprises:
      Analyze customer behavior and market trends
      Identify profitable opportunities and risks
      Generate real-time performance reports
      
      Bonus: AI-powered data visualization makes it easy to interpret complex numbers with charts and graphs.`,
        },
        {
            icon: <Shield size={32} className="text-gray-500" />,
            title: "Security & Fraud Detection – Protect Your Digital Assets",
            description: `Our AI monitors, detects, and prevents cybersecurity threats before they become serious.
      
      For Individuals & Freelancers:
      Get AI-powered spam detection and filtering
      Monitor for suspicious account activity
      Secure personal data with AI-generated strong passwords
      
      For Businesses & Enterprises:
      Identify fraudulent transactions and threats
      Automate cybersecurity monitoring and risk analysis
      Receive real-time alerts for suspicious activity
      
      Bonus: AI continuously learns from new threats, making security stronger over time.`,
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
                <Rocket size={40} className="text-indigo-500" /> Unleash the Power of AI
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                Transform your workflow with AI-driven efficiency, automation, and creativity.
            </p>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {features.map((feature, index) => (
                    <Card key={index} className="p-4 flex flex-col items-center text-center border shadow-lg">
                        {feature.icon}
                        <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </Card>
                ))}
            </div> */}
            {/* <Button className="mt-8 px-6 py-3 text-lg bg-indigo-500 text-white rounded-xl shadow-md">Try AI Now</Button> */}
        </div>
    );
};

export default Feature;

// import React from 'react'

// const Feature = () => {
//   return (
//     <>
//       onst Feature =
//     </>
//   )
// }

// export default Feature
