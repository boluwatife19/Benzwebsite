import React from "react";
import { useState } from "react";

const faqData = [
    {
        inde: '1.',
        question: '1What are the advanced features of a hybrid luxury car?',
        answer: 'Bibendum enim facilisis gravida neque convallis a cras semper auctor. Erat velit scelerisque in dictum non.'
      },{
        inde: '2.',
        question: '1What are the advanced features of a hybrid luxury car?',
        answer: 'Bibendum enim facilisis gravida neque convallis a cras semper auctor. Erat velit scelerisque in dictum non.'
      },{
        inde: '3.',
        question: '1What are the advanced features of a hybrid luxury car?',
        answer: 'Bibendum enim facilisis gravida neque convallis a cras semper auctor. Erat velit scelerisque in dictum non.'
      },{
        inde: '4.',
        question: '1What are the advanced features of a hybrid luxury car?',
        answer: 'Bibendum enim facilisis gravida neque convallis a cras semper auctor. Erat velit scelerisque in dictum non.'
      },{
        inde: '5.',
        question: '1What are the advanced features of a hybrid luxury car?',
        answer: 'Bibendum enim facilisis gravida neque convallis a cras semper auctor. Erat velit scelerisque in dictum non.'
      },
  ];

export default function Quest(){
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
    return(
        <div className="quest">
        <div className="faq">
        <div className="tophead">
            <h1>FAQ</h1>
            <h3>Mercedez Benz Cars</h3>
            <h2>Queries FAQ?</h2>
        </div>
            <div className='fque'>
                <div className="etext">
                    {faqData.map((item, index) => (
                    <div className="question">
                    {item.inde} <div className="give">
                    <span className="text" onClick={() => toggleExpanded(index)}>{item.question}</span>
                    <span className="answer">{expandedIndex === index && <p>{item.answer}</p>}
                    </span>
                    </div>
                    </div>
                ))}
                </div>
                <div className="image">
            <div className="upper">
            <img className="car" src={process.env.PUBLIC_URL+'/images/benz/mercedes-amg-c-63-s-coupe-45.jpg'}/> <img className="logo" src={process.env.PUBLIC_URL+'/images/bez.png'}/>
            </div>
            <div className="below">
            <img src={process.env.PUBLIC_URL+'/images/benz/2022-Mercedes-AMG-C63-Engine (1).png'}/>
            </div>
        </div>
            </div>
        </div>
    </div>
    );
}