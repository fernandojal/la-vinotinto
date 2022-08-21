import jwt from 'jsonwebtoken';

export const createToken = (item: {}) => jwt.sign(item, '');

export const decodeToken = (token: string) => jwt.decode(token);
