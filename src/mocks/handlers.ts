import { rest } from 'msw';
import { APP_API_URL, DEFAULT_DELAY } from './config';

export const handlers = [
  rest.get(`${APP_API_URL}/question`, (req, res, ctx) => {
    return res(
      ctx.delay(DEFAULT_DELAY),
      ctx.status(200),
      ctx.json({
        profession: 'Front End',
        name: 'Quiz of Javascript',
        questions: [
          {
            id: '1',
            question:
              'Can you guess what will be the output of the code below?',
            code: 'console.log(typeof NaN)',
            answers: [
              {
                id: '1',
                answer: 'NaN',
              },
              {
                id: '2',
                answer: 'number',
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
              },
            ],
          },
        ],
      })
    );
  }),
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
