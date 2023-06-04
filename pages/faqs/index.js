import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";

const data = [
  {
    question: "How do I purchase a course?",
    answer:
      "To purchase a course, browse the available courses on our website, select the one you're interested in, and click on the 'Enroll' button. Follow the prompts to complete the payment process.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. During the checkout process, you will be presented with the available options.",
  },
  {
    question: "Can I get a refund if I'm not satisfied with the course?",
    answer:
      "Yes, we offer a refund policy. If you're not satisfied with the course, you may be eligible for a refund within a specified timeframe. Please review our refund policy for more details.",
  },
  {
    question: "Are the courses self-paced or scheduled?",
    answer:
      "Our courses offer flexibility, and some are self-paced, allowing you to study at your own convenience. Others may have scheduled sessions or deadlines. Course details specify the format and any time constraints.",
  },
  {
    question: "Do I receive a certificate upon course completion?",
    answer:
      "Yes, upon successful completion of a course, you will receive a certificate of completion. The certificate can be downloaded from your account or emailed to you, depending on your preference.",
  },
  {
    question: "Are there any prerequisites for enrolling in a course?",
    answer:
      "Course prerequisites vary. Some courses may have specific requirements, such as prior knowledge or experience. Prerequisites, if any, are mentioned in the course description.",
  },
  {
    question: "Can I access the course materials after completing the course?",
    answer:
      "Yes, you will have access to the course materials even after completing the course. You can refer back to the materials whenever you need them.",
  },
  {
    question:
      "Are there any discounts available for multiple course purchases?",
    answer:
      "We may offer discounts or promotions for multiple course purchases. Keep an eye on our website or subscribe to our newsletter to stay informed about any available discounts.",
  },
  {
    question: "Can I share my course access with others?",
    answer:
      "No, sharing your course access with others is not allowed. Each course purchase grants access to a single user. Sharing accounts may lead to account suspension or termination.",
  },
  {
    question: "What if I have technical issues with accessing the course?",
    answer:
      "If you experience any technical issues with accessing the course, please contact our support team. They will assist you in resolving the problem and ensuring smooth access to the course materials.",
  },
];

const FaqsPage = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <div className="py-10 min-h-screen grid place-items-center">
      <p className="text-md font-semibold">FAQs</p>
      <h2 className="text-4xl font-medium uppercase text-black pb-5">
        Frequantly asked qustions
      </h2>

      <div className="px-[3rem] w-2/3">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            ques={item.question}
            ans={item.answer}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;
