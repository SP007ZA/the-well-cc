/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        name\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}": types.AuthenticateUserWithPasswordDocument,
    "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}": types.CreateUserDocument,
    "query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}": types.FindUserByEmailDocument,
    "query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      name\n      email\n      isProfile\n    }\n  }\n}": types.GetUserAuthDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        name\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}"): (typeof documents)["mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        name\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}"): (typeof documents)["query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      name\n      email\n      isProfile\n    }\n  }\n}"): (typeof documents)["query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      name\n      email\n      isProfile\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;