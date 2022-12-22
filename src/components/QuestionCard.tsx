import React from 'react';

// types
import { AnswerObject } from '../App';

//Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
    // câu hỏi
    question: string;
    // câu trả lời
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // câu trả lời của user
    userAnswer: AnswerObject | undefined;
    // số tt câu hỏi
    questionNr: number;
    // tổng số câu hỏi
    totalQuestions: number;
}

// React.FC đây là một function component
const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
<Wrapper>
    <p className='number'>
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question}}/>
    <div>
        {answers.map((answer) => (
            <ButtonWrapper 
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                </button>
            </ButtonWrapper>
        ))}
    </div>
</Wrapper>
)

export default QuestionCard;