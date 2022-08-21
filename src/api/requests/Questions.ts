import { QUESTIONS } from './../endpoints';
import { request } from './../request';

// Obtener preguntas
export const GET_QUESTIONS = async () => {
  return request(QUESTIONS.GET_QUESTIONS, {
    method: 'get',
  });
};
