export const QUIZ_JS = {
  profession: 'Front End',
  title: 'Quiz of Javascript',
  questions: [
    {
      id: '1',
      question: 'Can you guess what will be the output of the code below?',
      code: 'console.log(typeof NaN)',
      answers: [
        {
          id: '1',
          answer: 'NaN',
        },
        {
          id: '2',
          answer: 'number',
          isCorrect: true,
        },
        {
          id: '3',
          answer: 'null',
        },
        {
          id: '4',
          answer: 'undefined',
        },
      ],
    },
    {
      id: '2',
      question: 'Do you know what will be the output of this code?',
      answers: [
        {
          id: '1',
          answer: 'HelloTwitter\nworld',
          isCorrect: true,
        },
        {
          id: '2',
          answer: 'HelloTwitter <br> world',
        },
        {
          id: '3',
          answer: 'HelloTwitter world',
        },
      ],
    },
    {
      id: '3',
      question: 'Do you know what will be the output of this code?',
      code: 'console.log(0.1 + 0.2 == 0.3)',
      answers: [
        {
          id: '1',
          answer: 'true',
        },
        {
          id: '2',
          answer: 'false',
          isCorrect: true,
        },
      ],
    },
  ],
};

export const GRAPH_T = {
  wings: [
    {
      nameWings: 'Design UI',
    },
    {
      nameWings: 'Front End',
      skills: [
        {
          skillName: 'Javascript',
          percent: 80,
        },
        {
          skillName: 'CSS',
          percent: 100,
        },
      ],
    },
    {
      nameWings: 'Back End',
    },
  ],
};
