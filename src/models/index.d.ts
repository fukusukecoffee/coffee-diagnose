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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Answer = LazyLoading extends LazyLoadingDisabled ? EagerAnswer : LazyAnswer

export declare const Answer: (new (init: ModelInit<Answer>) => Answer) & {
  copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly Answers?: (Answer | null)[] | null;
  readonly users?: (UserQuestion | null)[] | null;
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
  readonly users: AsyncCollection<UserQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
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
  readonly Questions?: (UserQuestion | null)[] | null;
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
  readonly Questions: AsyncCollection<UserQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionId?: string | null;
  readonly userId?: string | null;
  readonly question: Question;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionId?: string | null;
  readonly userId?: string | null;
  readonly question: AsyncItem<Question>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserQuestion = LazyLoading extends LazyLoadingDisabled ? EagerUserQuestion : LazyUserQuestion

export declare const UserQuestion: (new (init: ModelInit<UserQuestion>) => UserQuestion) & {
  copyOf(source: UserQuestion, mutator: (draft: MutableModel<UserQuestion>) => MutableModel<UserQuestion> | void): UserQuestion;
}