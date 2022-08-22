//Vendors
import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';

import { QUIZ_JS } from 'mocks/db/questions/quizJS';

//Component
import { ProgressQuiz } from './ProgressQuiz';

//Types

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestions] = useState<number>(0);
  const { handleSubmit, control } = useForm<{ quiz: string }>();

  const { title, questions } = QUIZ_JS;

  const isLastQuestion = questions.length === currentQuestion;

  const onSubmit = handleSubmit(({ quiz }) => {
    setCurrentQuestions(currentQuestion + 1);
    console.log({ quiz });
  });

  console.log(currentQuestion, questions.length);

  return (
    <Box>
      <Typography>{title}</Typography>
      {!isLastQuestion ? (
        <form onSubmit={onSubmit} className="mt-4 py-4 ">
          <Controller
            name="quiz"
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
          <LoadingButton type="submit" variant="contained">
            Responder
          </LoadingButton>
        </form>
      ) : (
        <Typography>fin quiz</Typography>
      )}

      {/* <ProgressQuiz /> */}
    </Box>
  );
};
