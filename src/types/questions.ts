import { Identify } from './app';

export interface TQuestion {
  id: Identify;
  question: string;
  code?: string;
  answers: Answer[];
}

export type Answer = {
  id: Identify;
  answer: string;
};
