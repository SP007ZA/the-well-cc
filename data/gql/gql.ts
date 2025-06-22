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
    "mutation ActivateUser($userId: ID, $data: UserUpdateInput!) {\n  updateUser(where: {id: $userId}, data: $data) {\n    isEmailVerified\n  }\n}": types.ActivateUserDocument,
    "mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        userName\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}": types.AuthenticateUserWithPasswordDocument,
    "mutation CompleteProfile($where: ProfileWhereUniqueInput!, $data: ProfileUpdateInput!) {\n  updateProfile(where: $where, data: $data) {\n    id\n    user {\n      isProfile\n    }\n  }\n}": types.CompleteProfileDocument,
    "mutation CreateActivateToken($data: ActivateTokenCreateInput!) {\n  createActivateToken(data: $data) {\n    id\n  }\n}": types.CreateActivateTokenDocument,
    "mutation CreateGuestTicketPurchase($data: GuestCreateInput!) {\n  createGuest(data: $data) {\n    id\n    firstName\n    lastName\n    contact\n    ticket {\n      id\n      price\n      qty\n      guest {\n        id\n      }\n      ticketCode\n    }\n  }\n}": types.CreateGuestTicketPurchaseDocument,
    "mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n    profile {\n      id\n      firstName\n    }\n    membership {\n      memberShipType\n    }\n  }\n}": types.UpdateUserDocument,
    "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n  }\n}": types.CreateUserDocument,
    "mutation CreateUserTicket($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n  }\n}": types.CreateUserTicketDocument,
    "mutation DeleteGuests($where: [GuestWhereUniqueInput!]!) {\n  deleteGuests(where: $where) {\n    firstName\n  }\n}": types.DeleteGuestsDocument,
    "mutation DeleteTickets($where: [TicketWhereUniqueInput!]!) {\n  deleteTickets(where: $where) {\n    id\n  }\n}": types.DeleteTicketsDocument,
    "query FindUserByToken($Date: DateTime, $token: String) {\n  users(\n    where: {activateToken: {some: {AND: [{activatedAt: null}, {createdAt: {gt: $Date}}, {token: {equals: $token}}]}}}\n  ) {\n    id\n    activateToken(where: {token: {equals: $token}}) {\n      id\n    }\n  }\n}": types.FindUserByTokenDocument,
    "mutation redeemUserPasswordResetToken($email: String!, $password: String!, $token: String!) {\n  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {\n    code\n    message\n  }\n}": types.RedeemUserPasswordResetTokenDocument,
    "mutation sendUserPasswordResetLink($email: String!) {\n  sendUserPasswordResetLink(email: $email)\n}": types.SendUserPasswordResetLinkDocument,
    "mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        isProfile\n        isMemberForm\n        isEmailVerified\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}": types.Signin_MutationDocument,
    "mutation SignOut {\n  endSession\n}": types.SignOutDocument,
    "mutation UpdateGuestCreateTicket($where: GuestWhereUniqueInput!, $data: GuestUpdateInput!) {\n  updateGuest(where: $where, data: $data) {\n    id\n  }\n}": types.UpdateGuestCreateTicketDocument,
    "mutation UpdateIsReadNotification($where: NotificationWhereUniqueInput!, $data: NotificationUpdateInput!) {\n  updateNotification(where: $where, data: $data) {\n    isRead\n  }\n}": types.UpdateIsReadNotificationDocument,
    "mutation UpdateMembership($where: MembershipWhereUniqueInput!, $data: MembershipUpdateInput!) {\n  updateMembership(where: $where, data: $data) {\n    memberShipType\n    hasPaidSubscription\n    user {\n      email\n      profile {\n        id\n      }\n    }\n  }\n}": types.UpdateMembershipDocument,
    "mutation UpdateTicket($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {\n  updateTicket(where: $where, data: $data) {\n    id\n    isCheckedIn\n  }\n}": types.UpdateTicketDocument,
    "mutation UpdateTicketStatus($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {\n  updateTicket(where: $where, data: $data) {\n    id\n    status\n  }\n}": types.UpdateTicketStatusDocument,
    "mutation UpdateActivateToken($tokenId: ID, $data: ActivateTokenUpdateInput!) {\n  updateActivateToken(where: {id: $tokenId}, data: $data) {\n    id\n  }\n}": types.UpdateActivateTokenDocument,
    "query FindGuestByEmail($where: GuestWhereInput!) {\n  guests(where: $where) {\n    id\n  }\n}": types.FindGuestByEmailDocument,
    "query findTicketBySessionID($where: TicketWhereInput!) {\n  tickets(where: $where) {\n    id\n  }\n}": types.FindTicketBySessionIdDocument,
    "query FindUserByEmail($email: String) {\n  user(where: {email: $email}) {\n    id\n  }\n}": types.FindUserByEmailDocument,
    "query Profile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    user {\n      email\n      membership {\n        id\n        cellNumber\n      }\n    }\n  }\n}": types.ProfileDocument,
    "query GetUserProfilePicture($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      profilePicture {\n        publicUrlTransformed\n      }\n    }\n  }\n}": types.GetUserProfilePictureDocument,
    "query GetActiveEvents($where: EventWhereInput!) {\n  events(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}": types.GetActiveEventsDocument,
    "query GetEvent($where: EventWhereUniqueInput!) {\n  event(where: $where) {\n    id\n    title\n    description\n    price\n    startDate\n    endDate\n    eventThumbnail {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      streetName\n      town\n      city\n      postalCode\n      province\n    }\n  }\n}": types.GetEventDocument,
    "query EventHistories {\n  eventHistories {\n    id\n    display\n    comments {\n      comment\n      id\n      likeCount\n      user {\n        userName\n      }\n    }\n    event {\n      title\n    }\n    galleryImages {\n      id\n      image {\n        publicUrlTransformed\n      }\n      title\n    }\n    youtubeLink {\n      title\n      id\n      url\n      description\n    }\n  }\n}": types.EventHistoriesDocument,
    "query GetMemberProfile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    bio\n    interests\n    profilePicture {\n      publicUrlTransformed\n    }\n    photos {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      city\n      province\n    }\n  }\n}": types.GetMemberProfileDocument,
    "query GetMemberUsers($where: UserWhereInput!) {\n  users(where: $where) {\n    id\n    profile {\n      id\n      firstName\n      lastName\n      bio\n      interests\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n      address {\n        city\n        province\n      }\n    }\n  }\n}": types.GetMemberUsersDocument,
    "query GetUnreadNotificationCount($where: NotificationWhereInput!) {\n  notificationsCount(where: $where)\n}": types.GetUnreadNotificationCountDocument,
    "query GetUnreadNotifications($where: NotificationWhereInput!) {\n  notifications(where: $where) {\n    id\n    type\n    icon\n    title\n    content\n    createdAt\n    actionText\n    actionHref\n  }\n}": types.GetUnreadNotificationsDocument,
    "query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      userName\n      email\n      isProfile\n      isEmailVerified\n    }\n  }\n}": types.GetUserAuthDocument,
    "query GetUserPaymentInput($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      firstName\n      lastName\n    }\n    email\n    membership {\n      cellNumber\n    }\n  }\n}": types.GetUserPaymentInputDocument,
    "query GetUserProfile($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      bio\n      age\n      gender\n      education\n      occupation\n      interests\n      lookingFor\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n}": types.GetUserProfileDocument,
    "query SearchUsersByUserName($where: UserWhereInput!) {\n  users(where: $where, take: 10) {\n    id\n    userName\n  }\n}": types.SearchUsersByUserNameDocument,
    "query VerifyTicket($where: TicketWhereInput!) {\n  tickets(where: $where) {\n    id\n    ticketCode\n    event {\n      title\n      startDate\n      address {\n        streetName\n        town\n        city\n        province\n      }\n    }\n    user {\n      email\n      profile {\n        firstName\n        lastName\n      }\n    }\n    guest {\n      firstName\n      lastName\n      email\n    }\n    isCheckedIn\n  }\n}": types.VerifyTicketDocument,
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
export function graphql(source: "mutation ActivateUser($userId: ID, $data: UserUpdateInput!) {\n  updateUser(where: {id: $userId}, data: $data) {\n    isEmailVerified\n  }\n}"): (typeof documents)["mutation ActivateUser($userId: ID, $data: UserUpdateInput!) {\n  updateUser(where: {id: $userId}, data: $data) {\n    isEmailVerified\n  }\n}"];
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
export function graphql(source: "mutation CreateActivateToken($data: ActivateTokenCreateInput!) {\n  createActivateToken(data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation CreateActivateToken($data: ActivateTokenCreateInput!) {\n  createActivateToken(data: $data) {\n    id\n  }\n}"];
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
export function graphql(source: "mutation CreateUserTicket($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation CreateUserTicket($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteGuests($where: [GuestWhereUniqueInput!]!) {\n  deleteGuests(where: $where) {\n    firstName\n  }\n}"): (typeof documents)["mutation DeleteGuests($where: [GuestWhereUniqueInput!]!) {\n  deleteGuests(where: $where) {\n    firstName\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTickets($where: [TicketWhereUniqueInput!]!) {\n  deleteTickets(where: $where) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteTickets($where: [TicketWhereUniqueInput!]!) {\n  deleteTickets(where: $where) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindUserByToken($Date: DateTime, $token: String) {\n  users(\n    where: {activateToken: {some: {AND: [{activatedAt: null}, {createdAt: {gt: $Date}}, {token: {equals: $token}}]}}}\n  ) {\n    id\n    activateToken(where: {token: {equals: $token}}) {\n      id\n    }\n  }\n}"): (typeof documents)["query FindUserByToken($Date: DateTime, $token: String) {\n  users(\n    where: {activateToken: {some: {AND: [{activatedAt: null}, {createdAt: {gt: $Date}}, {token: {equals: $token}}]}}}\n  ) {\n    id\n    activateToken(where: {token: {equals: $token}}) {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation redeemUserPasswordResetToken($email: String!, $password: String!, $token: String!) {\n  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {\n    code\n    message\n  }\n}"): (typeof documents)["mutation redeemUserPasswordResetToken($email: String!, $password: String!, $token: String!) {\n  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {\n    code\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation sendUserPasswordResetLink($email: String!) {\n  sendUserPasswordResetLink(email: $email)\n}"): (typeof documents)["mutation sendUserPasswordResetLink($email: String!) {\n  sendUserPasswordResetLink(email: $email)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        isProfile\n        isMemberForm\n        isEmailVerified\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}"): (typeof documents)["mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        isProfile\n        isMemberForm\n        isEmailVerified\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SignOut {\n  endSession\n}"): (typeof documents)["mutation SignOut {\n  endSession\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateGuestCreateTicket($where: GuestWhereUniqueInput!, $data: GuestUpdateInput!) {\n  updateGuest(where: $where, data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation UpdateGuestCreateTicket($where: GuestWhereUniqueInput!, $data: GuestUpdateInput!) {\n  updateGuest(where: $where, data: $data) {\n    id\n  }\n}"];
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
export function graphql(source: "mutation UpdateTicket($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {\n  updateTicket(where: $where, data: $data) {\n    id\n    isCheckedIn\n  }\n}"): (typeof documents)["mutation UpdateTicket($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {\n  updateTicket(where: $where, data: $data) {\n    id\n    isCheckedIn\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTicketStatus($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {\n  updateTicket(where: $where, data: $data) {\n    id\n    status\n  }\n}"): (typeof documents)["mutation UpdateTicketStatus($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {\n  updateTicket(where: $where, data: $data) {\n    id\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateActivateToken($tokenId: ID, $data: ActivateTokenUpdateInput!) {\n  updateActivateToken(where: {id: $tokenId}, data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation UpdateActivateToken($tokenId: ID, $data: ActivateTokenUpdateInput!) {\n  updateActivateToken(where: {id: $tokenId}, data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindGuestByEmail($where: GuestWhereInput!) {\n  guests(where: $where) {\n    id\n  }\n}"): (typeof documents)["query FindGuestByEmail($where: GuestWhereInput!) {\n  guests(where: $where) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query findTicketBySessionID($where: TicketWhereInput!) {\n  tickets(where: $where) {\n    id\n  }\n}"): (typeof documents)["query findTicketBySessionID($where: TicketWhereInput!) {\n  tickets(where: $where) {\n    id\n  }\n}"];
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
export function graphql(source: "query EventHistories {\n  eventHistories {\n    id\n    display\n    comments {\n      comment\n      id\n      likeCount\n      user {\n        userName\n      }\n    }\n    event {\n      title\n    }\n    galleryImages {\n      id\n      image {\n        publicUrlTransformed\n      }\n      title\n    }\n    youtubeLink {\n      title\n      id\n      url\n      description\n    }\n  }\n}"): (typeof documents)["query EventHistories {\n  eventHistories {\n    id\n    display\n    comments {\n      comment\n      id\n      likeCount\n      user {\n        userName\n      }\n    }\n    event {\n      title\n    }\n    galleryImages {\n      id\n      image {\n        publicUrlTransformed\n      }\n      title\n    }\n    youtubeLink {\n      title\n      id\n      url\n      description\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMemberProfile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    bio\n    interests\n    profilePicture {\n      publicUrlTransformed\n    }\n    photos {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      city\n      province\n    }\n  }\n}"): (typeof documents)["query GetMemberProfile($where: ProfileWhereUniqueInput!) {\n  profile(where: $where) {\n    id\n    firstName\n    lastName\n    bio\n    interests\n    profilePicture {\n      publicUrlTransformed\n    }\n    photos {\n      image {\n        publicUrlTransformed\n      }\n    }\n    address {\n      city\n      province\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMemberUsers($where: UserWhereInput!) {\n  users(where: $where) {\n    id\n    profile {\n      id\n      firstName\n      lastName\n      bio\n      interests\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n      address {\n        city\n        province\n      }\n    }\n  }\n}"): (typeof documents)["query GetMemberUsers($where: UserWhereInput!) {\n  users(where: $where) {\n    id\n    profile {\n      id\n      firstName\n      lastName\n      bio\n      interests\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n      address {\n        city\n        province\n      }\n    }\n  }\n}"];
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
export function graphql(source: "query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      userName\n      email\n      isProfile\n      isEmailVerified\n    }\n  }\n}"): (typeof documents)["query getUserAuth {\n  authenticatedItem {\n    ... on User {\n      id\n      userName\n      email\n      isProfile\n      isEmailVerified\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserPaymentInput($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      firstName\n      lastName\n    }\n    email\n    membership {\n      cellNumber\n    }\n  }\n}"): (typeof documents)["query GetUserPaymentInput($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      firstName\n      lastName\n    }\n    email\n    membership {\n      cellNumber\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserProfile($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      bio\n      age\n      gender\n      education\n      occupation\n      interests\n      lookingFor\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetUserProfile($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    profile {\n      id\n      bio\n      age\n      gender\n      education\n      occupation\n      interests\n      lookingFor\n      profilePicture {\n        publicUrlTransformed\n      }\n      photos {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchUsersByUserName($where: UserWhereInput!) {\n  users(where: $where, take: 10) {\n    id\n    userName\n  }\n}"): (typeof documents)["query SearchUsersByUserName($where: UserWhereInput!) {\n  users(where: $where, take: 10) {\n    id\n    userName\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VerifyTicket($where: TicketWhereInput!) {\n  tickets(where: $where) {\n    id\n    ticketCode\n    event {\n      title\n      startDate\n      address {\n        streetName\n        town\n        city\n        province\n      }\n    }\n    user {\n      email\n      profile {\n        firstName\n        lastName\n      }\n    }\n    guest {\n      firstName\n      lastName\n      email\n    }\n    isCheckedIn\n  }\n}"): (typeof documents)["query VerifyTicket($where: TicketWhereInput!) {\n  tickets(where: $where) {\n    id\n    ticketCode\n    event {\n      title\n      startDate\n      address {\n        streetName\n        town\n        city\n        province\n      }\n    }\n    user {\n      email\n      profile {\n        firstName\n        lastName\n      }\n    }\n    guest {\n      firstName\n      lastName\n      email\n    }\n    isCheckedIn\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;