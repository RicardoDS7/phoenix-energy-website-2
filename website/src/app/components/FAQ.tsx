// components/FAQ.tsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-gray-200 w-full">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center py-4 font-semibold text-gray-800 hover:text-gray-600 focus:outline-none"
      >
        <span className="text-start">{question}</span>
        <span className="text-gray-500 px-2">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="faq-answer text-gray-600 pb-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What is a carbon credit?",
      answer:
        "A carbon credit is a permit that allows the emission of one ton of carbon dioxide or equivalent greenhouse gases.",
    },
    {
      question: "How do carbon credits help with climate change?",
      answer:
        "Carbon credits reduce the overall amount of greenhouse gases by funding projects like reforestation and renewable energy.",
    },
    // Add more FAQs here
  ];

  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col justify-stretch w-full my-10 p-4 text-left max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            {faqItems.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    </div>

  );
};

export default FAQ;
