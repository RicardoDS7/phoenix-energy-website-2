// components/FAQ.tsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItemProps[]
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-gray-200 w-full lg:w-[768px]">
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
        <div className="faq-answer text-gray-600 pb-4 w-full lg:w-[768px]">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ faqItems }) => {
  

  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col justify-stretch w-full pt-10 text-left mx-auto">
            {faqItems.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    </div>

  );
};

export default FAQ;
