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
    "mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        userName\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}": types.AuthenticateUserWithPasswordDocument,
    "mutation CompleteProfile($where: ProfileWhereUniqueInput!, $data: ProfileUpdateInput!) {\n  updateProfile(where: $where, data: $data) {\n    id\n    user {\n      isProfile\n    }\n  }\n}": types.CompleteProfileDocument,
    "mutation CreateGuestTicketPurchase($data: GuestCreateInput!) {\n  createGuest(data: $data) {\n    id\n    firstName\n    lastName\n    contact\n    ticket {\n      id\n      price\n      qty\n      guest {\n        id\n      }\n      ticketCode\n    }\n  }\n}": types.CreateGuestTicketPurchaseDocument,
    "mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n    profile {\n      id\n      firstName\n    }\n    membership {\n      memberShipType\n    }\n  }\n}": types.UpdateUserDocument,
    "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}": types.CreateUserDocument,
    "mutation DeleteGuests($where: [GuestWhereUniqueInput!]!) {\n  deleteGuests(where: $where) {\n    firstName\n  }\n}": types.DeleteGuestsDocument,
    "mutation UpdateIsReadNotification($where: NotificationWhereUniqueInput!, $data: NotificationUpdateInput!) {\n  updateNotification(where: $where, data: $data) {\n    isRead\n  }\n}": types.UpdateIsReadNotificationDocument,
    "mutation UpdateMembership($where: MembershipWhereUniqueInput!, $data: MembershipUpdateInput!) {\n  updateMembership(where: $where, data: $data) {\n    memberShipType\n    hasPaidSubscription\n    user {\n      email\n      profile {\n        id\n      }\n    }\n  }\n}": types.UpdateMembershipDocument,
    "query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}": types.FindUserByEmailDocument,
    "query Profile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    user {\n      email\n      membership {\n        id\n        cellNumber\n      }\n    }\n  }\n}": types.ProfileDocument,
    "query GetUserProfilePicture($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      profilePicture {\n        publicUrlTransformed\n      }\n    }\n  }\n}": types.GetUserProfilePictureDocument,
    "query GetActiveEvents($where: EventWhereInput!) {\n  events(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}": types.GetActiveEventsDocument,
    "query GetEvent($where: EventWhereUniqueInput!) {\n  event(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}": types.GetEventDocument,
    "query GetUnreadNotificationCount($where: NotificationWhereInput!) {\n  notificationsCount(where: $where)\n}": types.GetUnreadNotificationCountDocument,
    "query GetUnreadNotifications($where: NotificationWhereInput!) {\n  notifications(where: $where) {\n    id\n    type\n    icon\n    title\n    content\n    createdAt\n    actionText\n    actionHref\n  }\n}": types.GetUnreadNotificationsDocument,
    "query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      userName\n      email\n      isProfile\n    }\n  }\n}": types.GetUserAuthDocument,
    "query GetUserPaymentInput($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      firstName\n      lastName\n    }\n    email\n    membership {\n      cellNumber\n    }\n  }\n}": types.GetUserPaymentInputDocument,
    "query GetUserProfile($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      bio\n      age\n      gender\n      education\n      occupation\n      interests\n      lookingFor\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n}": types.GetUserProfileDocument,
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
export function graphql(source: "mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        userName\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}"): (typeof documents)["mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        userName\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CompleteProfile($where: ProfileWhereUniqueInput!, $data: ProfileUpdateInput!) {\n  updateProfile(where: $where, data: $data) {\n    id\n    user {\n      isProfile\n    }\n  }\n}"): (typeof documents)["mutation CompleteProfile($where: ProfileWhereUniqueInput!, $data: ProfileUpdateInput!) {\n  updateProfile(where: $where, data: $data) {\n    id\n    user {\n      isProfile\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateGuestTicketPurchase($data: GuestCreateInput!) {\n  createGuest(data: $data) {\n    id\n    firstName\n    lastName\n    contact\n    ticket {\n      id\n      price\n      qty\n      guest {\n        id\n      }\n      ticketCode\n    }\n  }\n}"): (typeof documents)["mutation CreateGuestTicketPurchase($data: GuestCreateInput!) {\n  createGuest(data: $data) {\n    id\n    firstName\n    lastName\n    contact\n    ticket {\n      id\n      price\n      qty\n      guest {\n        id\n      }\n      ticketCode\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n    profile {\n      id\n      firstName\n    }\n    membership {\n      memberShipType\n    }\n  }\n}"): (typeof documents)["mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n    profile {\n      id\n      firstName\n    }\n    membership {\n      memberShipType\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteGuests($where: [GuestWhereUniqueInput!]!) {\n  deleteGuests(where: $where) {\n    firstName\n  }\n}"): (typeof documents)["mutation DeleteGuests($where: [GuestWhereUniqueInput!]!) {\n  deleteGuests(where: $where) {\n    firstName\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateIsReadNotification($where: NotificationWhereUniqueInput!, $data: NotificationUpdateInput!) {\n  updateNotification(where: $where, data: $data) {\n    isRead\n  }\n}"): (typeof documents)["mutation UpdateIsReadNotification($where: NotificationWhereUniqueInput!, $data: NotificationUpdateInput!) {\n  updateNotification(where: $where, data: $data) {\n    isRead\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateMembership($where: MembershipWhereUniqueInput!, $data: MembershipUpdateInput!) {\n  updateMembership(where: $where, data: $data) {\n    memberShipType\n    hasPaidSubscription\n    user {\n      email\n      profile {\n        id\n      }\n    }\n  }\n}"): (typeof documents)["mutation UpdateMembership($where: MembershipWhereUniqueInput!, $data: MembershipUpdateInput!) {\n  updateMembership(where: $where, data: $data) {\n    memberShipType\n    hasPaidSubscription\n    user {\n      email\n      profile {\n        id\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}"): (typeof documents)["query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Profile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    user {\n      email\n      membership {\n        id\n        cellNumber\n      }\n    }\n  }\n}"): (typeof documents)["query Profile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    user {\n      email\n      membership {\n        id\n        cellNumber\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserProfilePicture($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      profilePicture {\n        publicUrlTransformed\n      }\n    }\n  }\n}"): (typeof documents)["query GetUserProfilePicture($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      profilePicture {\n        publicUrlTransformed\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetActiveEvents($where: EventWhereInput!) {\n  events(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}"): (typeof documents)["query GetActiveEvents($where: EventWhereInput!) {\n  events(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetEvent($where: EventWhereUniqueInput!) {\n  event(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}"): (typeof documents)["query GetEvent($where: EventWhereUniqueInput!) {\n  event(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUnreadNotificationCount($where: NotificationWhereInput!) {\n  notificationsCount(where: $where)\n}"): (typeof documents)["query GetUnreadNotificationCount($where: NotificationWhereInput!) {\n  notificationsCount(where: $where)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUnreadNotifications($where: NotificationWhereInput!) {\n  notifications(where: $where) {\n    id\n    type\n    icon\n    title\n    content\n    createdAt\n    actionText\n    actionHref\n  }\n}"): (typeof documents)["query GetUnreadNotifications($where: NotificationWhereInput!) {\n  notifications(where: $where) {\n    id\n    type\n    icon\n    title\n    content\n    createdAt\n    actionText\n    actionHref\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      userName\n      email\n      isProfile\n    }\n  }\n}"): (typeof documents)["query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      userName\n      email\n      isProfile\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserPaymentInput($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      firstName\n      lastName\n    }\n    email\n    membership {\n      cellNumber\n    }\n  }\n}"): (typeof documents)["query GetUserPaymentInput($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      firstName\n      lastName\n    }\n    email\n    membership {\n      cellNumber\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserProfile($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      bio\n      age\n      gender\n      education\n      occupation\n      interests\n      lookingFor\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetUserProfile($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      bio\n      age\n      gender\n      education\n      occupation\n      interests\n      lookingFor\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;