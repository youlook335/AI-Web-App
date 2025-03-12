import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlus, FaMinus } from "react-icons/fa";

// Define Type for FAQ Item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is AI?",
      answer: "AI (Artificial Intelligence) is a technology that enables computers to solve problems and make decisions similar to human intelligence.",
    },
    {
      question: "Where is AI used?",
      answer: "AI is used in various fields such as healthcare, e-commerce, automation systems, chatbots, and data analysis.",
    },
    {
      question: "Will AI replace human jobs?",
      answer: "AI can automate some traditional jobs, but it also creates new job opportunities and enhances human skills.",
    },
    {
      question: "How do our AI services work?",
      answer: "Our AI services are based on advanced algorithms and machine learning models, providing intelligent and fast solutions to users.",
    },
    {
      question: "What are the benefits of AI?",
      answer: "AI increases efficiency, reduces human errors, automates tasks, and enhances decision-making processes.",
    },
    {
      question: "What are the risks of AI?",
      answer: "AI risks include ethical concerns, data privacy issues, and potential biases in AI decision-making.",
    },
    {
      question: "How can AI improve customer service?",
      answer: "AI-powered chatbots and virtual assistants can provide instant support, personalize customer experiences, and handle large volumes of queries efficiently.",
    },
    {
      question: "Is AI safe?",
      answer: "AI is generally safe when developed responsibly, with ethical guidelines and security measures in place to prevent misuse.",
    },
  ];

  return (
    <section className="faq py-5 bg-light">
      <div className="container" style={{ maxWidth: "1000px" }} data-aos="fade-up">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="fw-bold text-dark">Frequently Asked Questions</h2>
            <p className="text-muted">Common questions about AI and our services</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card mb-4 border-0 shadow-lg rounded-3"
                style={{ overflow: "hidden" }}
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div
                  className="card-header d-flex justify-content-between align-items-center bg-white p-4"
                  onClick={() => toggleAnswer(index)}
                  style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold", color: "#343a40" }}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaMinus className="text-primary" />
                  ) : (
                    <FaPlus className="text-primary" />
                  )}
                </div>
                {openIndex === index && (
                  <div
                    className="card-body bg-light p-4"
                    style={{ fontSize: "16px", color: "#495057" }}
                    data-aos="fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
