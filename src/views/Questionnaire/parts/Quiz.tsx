//Vendors
import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';

import { QUIZ_JS } from 'mocks/db/questions/quizJS';

//Component
import { ProgressQuiz } from './ProgressQuiz';
import { Result } from './Result';
import { findAnswer } from 'utils/questions';
import { off } from 'process';

//Types

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const { handleSubmit, control, watch, reset } = useForm<{ answer: string }>();
  const answerValue = watch('answer');

  const { title, questions } = QUIZ_JS;

  const totalQuestions = questions.length;
  const isLastQuestion = totalQuestions === currentQuestion;

  const onSubmit = handleSubmit(({ answer }) => {
    const currentAnswer = findAnswer(questions[currentQuestion], answer);

    if (currentAnswer?.isCorrect) {
      setCorrectAnswers([...correctAnswers, answer]);
    }

    setCurrentQuestions(currentQuestion + 1);

    reset();
  });

  return (
    <Box>
      <Typography>{title}</Typography>
      {!isLastQuestion ? (
        <form onSubmit={onSubmit} className="mt-4 py-4 ">
          <Controller
            name="answer"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup value={value} onChange={onChange}>
                {questions[currentQuestion]?.answers.map(({ id, answer }) => (
                  <FormControlLabel
                    value={id}
                    control={<Radio />}
                    label={answer}
                    key={`${answer}-${id}`}
                  />
                ))}
              </RadioGroup>
            )}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            disabled={!answerValue}
          >
            Responder
          </LoadingButton>
        </form>
      ) : (
        <Result
          totalAnswersCorrect={correctAnswers.length}
          totalQuestions={totalQuestions}
        />
      )}

      <ProgressQuiz
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />
    </Box>
  );
};
