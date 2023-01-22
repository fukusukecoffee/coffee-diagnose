import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answer?: string | null;
  readonly questionID: string;
  readonly users?: (UserAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answer?: string | null;
  readonly questionID: string;
  readonly users: AsyncCollection<UserAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Answer = LazyLoading extends LazyLoadingDisabled ? EagerAnswer : LazyAnswer

export declare const Answer: (new (init: ModelInit<Answer>) => Answer) & {
  copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname?: string | null;
  readonly age?: string | null;
  readonly gender: string;
  readonly Answers?: (UserAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname?: string | null;
  readonly age?: string | null;
  readonly gender: string;
  readonly Answers: AsyncCollection<UserAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly Answers?: (Answer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly Answers: AsyncCollection<Answer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerUserAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answerId?: string | null;
  readonly userId?: string | null;
  readonly answer: Answer;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answerId?: string | null;
  readonly userId?: string | null;
  readonly answer: AsyncItem<Answer>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserAnswer = LazyLoading extends LazyLoadingDisabled ? EagerUserAnswer : LazyUserAnswer

export declare const UserAnswer: (new (init: ModelInit<UserAnswer>) => UserAnswer) & {
  copyOf(source: UserAnswer, mutator: (draft: MutableModel<UserAnswer>) => MutableModel<UserAnswer> | void): UserAnswer;
}