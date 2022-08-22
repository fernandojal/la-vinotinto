import { Identify } from 'types/app';
import { TQuestion } from 'types/questions';

export const findAnswer = (questions: TQuestion, idAnswer: Identify) =>
  questions.answers.find(({ id }) => id === idAnswer);

export const getColorSkill = (percentSkill: number) => {
  if (percentSkill <= 20) {
    return 'test';
  } else if (percentSkill <= 40) {
    return 'blue-light';
  } else if (percentSkill <= 60) {
    return 'blue';
  } else if (percentSkill <= 80) {
    return 'blue-dark';
  } else if (percentSkill <= 100) {
    return 'blue-darker';
  }
};
