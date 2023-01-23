// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Questionare, Answer, User, UserAnswer } = initSchema(schema);

export {
  Questionare,
  Answer,
  User,
  UserAnswer
};