type FAQProps = {
   
    question:string;
    answer:string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    question3: string;
    answer3: string;
  
};

function FAQ({ question, answer, question1, answer1, question2, answer2, question3, answer3 }: FAQProps) {
  return (
    <div className="faq-section">
  <div className="faq-container">

    <h2>Cykons FAQ</h2>

    <div className="faq-item">
      <h3 className="faq-question">{question}</h3>
      <p className="faq-answer">{answer}</p>
    </div>

    <div className="faq-item">
      <h3 className="faq-question">{question1}</h3>
      <p className="faq-answer">{answer1}</p>
    </div>

    <div className="faq-item">
      <h3 className="faq-question">{question2}</h3>
      <p className="faq-answer">{answer2}</p>
    </div>

    <div className="faq-item">
      <h3 className="faq-question">{question3}</h3>
      <p className="faq-answer">{answer3}</p>
    </div>

  </div>
</div>
  );
}
export default FAQ;