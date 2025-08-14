/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActivateToken = {
  __typename?: 'ActivateToken';
  activatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ActivateTokenCreateInput = {
  activatedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ActivateTokenManyRelationFilter = {
  every?: InputMaybe<ActivateTokenWhereInput>;
  none?: InputMaybe<ActivateTokenWhereInput>;
  some?: InputMaybe<ActivateTokenWhereInput>;
};

export type ActivateTokenOrderByInput = {
  activatedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  token?: InputMaybe<OrderDirection>;
};

export type ActivateTokenRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ActivateTokenWhereUniqueInput>>;
  create?: InputMaybe<Array<ActivateTokenCreateInput>>;
};

export type ActivateTokenRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ActivateTokenWhereUniqueInput>>;
  create?: InputMaybe<Array<ActivateTokenCreateInput>>;
  disconnect?: InputMaybe<Array<ActivateTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivateTokenWhereUniqueInput>>;
};

export type ActivateTokenUpdateArgs = {
  data: ActivateTokenUpdateInput;
  where: ActivateTokenWhereUniqueInput;
};

export type ActivateTokenUpdateInput = {
  activatedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ActivateTokenWhereInput = {
  AND?: InputMaybe<Array<ActivateTokenWhereInput>>;
  NOT?: InputMaybe<Array<ActivateTokenWhereInput>>;
  OR?: InputMaybe<Array<ActivateTokenWhereInput>>;
  activatedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ActivateTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Event>;
  id: Scalars['ID'];
  postalCode?: Maybe<Scalars['Int']>;
  profile?: Maybe<Profile>;
  province?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
};

export type AddressCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  postalCode?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<ProfileRelateToOneForCreateInput>;
  province?: InputMaybe<Scalars['String']>;
  streetName?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
};

export type AddressOrderByInput = {
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  postalCode?: InputMaybe<OrderDirection>;
  province?: InputMaybe<OrderDirection>;
  streetName?: InputMaybe<OrderDirection>;
  town?: InputMaybe<OrderDirection>;
};

export type AddressRelateToOneForCreateInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  create?: InputMaybe<AddressCreateInput>;
};

export type AddressRelateToOneForUpdateInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  create?: InputMaybe<AddressCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type AddressUpdateArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  postalCode?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<ProfileRelateToOneForUpdateInput>;
  province?: InputMaybe<Scalars['String']>;
  streetName?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  postalCode?: InputMaybe<IntFilter>;
  profile?: InputMaybe<ProfileWhereInput>;
  province?: InputMaybe<StringFilter>;
  streetName?: InputMaybe<StringFilter>;
  town?: InputMaybe<StringFilter>;
};

export type AddressWhereUniqueInput = {
  event?: InputMaybe<EventWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']>;
  profile?: InputMaybe<ProfileWhereUniqueInput>;
};

export type AuthenticatedItem = User;

export type Block = {
  __typename?: 'Block';
  blocked?: Maybe<User>;
  blocker?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
};

export type BlockCreateInput = {
  blocked?: InputMaybe<UserRelateToOneForCreateInput>;
  blocker?: InputMaybe<UserRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlockOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type BlockUpdateArgs = {
  data: BlockUpdateInput;
  where: BlockWhereUniqueInput;
};

export type BlockUpdateInput = {
  blocked?: InputMaybe<UserRelateToOneForUpdateInput>;
  blocker?: InputMaybe<UserRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlockWhereInput = {
  AND?: InputMaybe<Array<BlockWhereInput>>;
  NOT?: InputMaybe<Array<BlockWhereInput>>;
  OR?: InputMaybe<Array<BlockWhereInput>>;
  blocked?: InputMaybe<UserWhereInput>;
  blocker?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
};

export type BlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type ChatRequest = {
  __typename?: 'ChatRequest';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  receiver?: Maybe<User>;
  requesterWhatsApp?: Maybe<Scalars['Int']>;
  sender?: Maybe<User>;
  sentAt?: Maybe<Scalars['DateTime']>;
};

export type ChatRequestCreateInput = {
  message?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  receiver?: InputMaybe<UserRelateToOneForCreateInput>;
  requesterWhatsApp?: InputMaybe<Scalars['Int']>;
  sender?: InputMaybe<UserRelateToOneForCreateInput>;
  sentAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChatRequestManyRelationFilter = {
  every?: InputMaybe<ChatRequestWhereInput>;
  none?: InputMaybe<ChatRequestWhereInput>;
  some?: InputMaybe<ChatRequestWhereInput>;
};

export type ChatRequestOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  read?: InputMaybe<OrderDirection>;
  requesterWhatsApp?: InputMaybe<OrderDirection>;
  sentAt?: InputMaybe<OrderDirection>;
};

export type ChatRequestRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ChatRequestWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatRequestCreateInput>>;
};

export type ChatRequestRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ChatRequestWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatRequestCreateInput>>;
  disconnect?: InputMaybe<Array<ChatRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatRequestWhereUniqueInput>>;
};

export type ChatRequestUpdateArgs = {
  data: ChatRequestUpdateInput;
  where: ChatRequestWhereUniqueInput;
};

export type ChatRequestUpdateInput = {
  message?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  receiver?: InputMaybe<UserRelateToOneForUpdateInput>;
  requesterWhatsApp?: InputMaybe<Scalars['Int']>;
  sender?: InputMaybe<UserRelateToOneForUpdateInput>;
  sentAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChatRequestWhereInput = {
  AND?: InputMaybe<Array<ChatRequestWhereInput>>;
  NOT?: InputMaybe<Array<ChatRequestWhereInput>>;
  OR?: InputMaybe<Array<ChatRequestWhereInput>>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  read?: InputMaybe<BooleanFilter>;
  receiver?: InputMaybe<UserWhereInput>;
  requesterWhatsApp?: InputMaybe<IntNullableFilter>;
  sender?: InputMaybe<UserWhereInput>;
  sentAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ChatRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ChurchInfomation = {
  __typename?: 'ChurchInfomation';
  churchContactNumber?: Maybe<Scalars['Int']>;
  churchNameAndAddress?: Maybe<Scalars['String']>;
  correspondencePreference?: Maybe<Scalars['String']>;
  dateOfSalvation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  member?: Maybe<Membership>;
  pastorsName?: Maybe<Scalars['String']>;
};

export type ChurchInfomationCreateInput = {
  churchContactNumber?: InputMaybe<Scalars['Int']>;
  churchNameAndAddress?: InputMaybe<Scalars['String']>;
  correspondencePreference?: InputMaybe<Scalars['String']>;
  dateOfSalvation?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MembershipRelateToOneForCreateInput>;
  pastorsName?: InputMaybe<Scalars['String']>;
};

export type ChurchInfomationOrderByInput = {
  churchContactNumber?: InputMaybe<OrderDirection>;
  churchNameAndAddress?: InputMaybe<OrderDirection>;
  correspondencePreference?: InputMaybe<OrderDirection>;
  dateOfSalvation?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  pastorsName?: InputMaybe<OrderDirection>;
};

export type ChurchInfomationRelateToOneForCreateInput = {
  connect?: InputMaybe<ChurchInfomationWhereUniqueInput>;
  create?: InputMaybe<ChurchInfomationCreateInput>;
};

export type ChurchInfomationRelateToOneForUpdateInput = {
  connect?: InputMaybe<ChurchInfomationWhereUniqueInput>;
  create?: InputMaybe<ChurchInfomationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ChurchInfomationUpdateArgs = {
  data: ChurchInfomationUpdateInput;
  where: ChurchInfomationWhereUniqueInput;
};

export type ChurchInfomationUpdateInput = {
  churchContactNumber?: InputMaybe<Scalars['Int']>;
  churchNameAndAddress?: InputMaybe<Scalars['String']>;
  correspondencePreference?: InputMaybe<Scalars['String']>;
  dateOfSalvation?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MembershipRelateToOneForUpdateInput>;
  pastorsName?: InputMaybe<Scalars['String']>;
};

export type ChurchInfomationWhereInput = {
  AND?: InputMaybe<Array<ChurchInfomationWhereInput>>;
  NOT?: InputMaybe<Array<ChurchInfomationWhereInput>>;
  OR?: InputMaybe<Array<ChurchInfomationWhereInput>>;
  churchContactNumber?: InputMaybe<IntNullableFilter>;
  churchNameAndAddress?: InputMaybe<StringFilter>;
  correspondencePreference?: InputMaybe<StringFilter>;
  dateOfSalvation?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  member?: InputMaybe<MembershipWhereInput>;
  pastorsName?: InputMaybe<StringFilter>;
};

export type ChurchInfomationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<MembershipWhereUniqueInput>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']>;
  aspect_ratio?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  color_space?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  default_image?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  density?: InputMaybe<Scalars['String']>;
  dpr?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  fetch_format?: InputMaybe<Scalars['String']>;
  flags?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  opacity?: InputMaybe<Scalars['String']>;
  overlay?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  transformation?: InputMaybe<Scalars['String']>;
  underlay?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['String']>;
  y?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  eventHistory?: Maybe<EventHistory>;
  id: Scalars['ID'];
  likeCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type CommentCreateInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventHistory?: InputMaybe<EventHistoryRelateToOneForCreateInput>;
  likeCount?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CommentManyRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  likeCount?: InputMaybe<OrderDirection>;
};

export type CommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventHistory?: InputMaybe<EventHistoryRelateToOneForUpdateInput>;
  likeCount?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  eventHistory?: InputMaybe<EventHistoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  likeCount?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Event = {
  __typename?: 'Event';
  address?: Maybe<Address>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventThumbnail?: Maybe<EventThubmnail>;
  history?: Maybe<EventHistory>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['DateTime']>;
  tickets?: Maybe<Array<Ticket>>;
  ticketsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type EventTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>;
  orderBy?: Array<TicketOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TicketWhereInput;
};


export type EventTicketsCountArgs = {
  where?: TicketWhereInput;
};

export type EventCreateInput = {
  address?: InputMaybe<AddressRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventThumbnail?: InputMaybe<EventThubmnailRelateToOneForCreateInput>;
  history?: InputMaybe<EventHistoryRelateToOneForCreateInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  maxAttendees?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  tickets?: InputMaybe<TicketRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventHistory = {
  __typename?: 'EventHistory';
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  display?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Event>;
  galleryImages?: Maybe<Array<GalleryImage>>;
  galleryImagesCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  youtubeLink?: Maybe<Array<YouTubeLink>>;
  youtubeLinkCount?: Maybe<Scalars['Int']>;
};


export type EventHistoryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type EventHistoryCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type EventHistoryGalleryImagesArgs = {
  cursor?: InputMaybe<GalleryImageWhereUniqueInput>;
  orderBy?: Array<GalleryImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: GalleryImageWhereInput;
};


export type EventHistoryGalleryImagesCountArgs = {
  where?: GalleryImageWhereInput;
};


export type EventHistoryYoutubeLinkArgs = {
  cursor?: InputMaybe<YouTubeLinkWhereUniqueInput>;
  orderBy?: Array<YouTubeLinkOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: YouTubeLinkWhereInput;
};


export type EventHistoryYoutubeLinkCountArgs = {
  where?: YouTubeLinkWhereInput;
};

export type EventHistoryCreateInput = {
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  display?: InputMaybe<Scalars['Boolean']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  galleryImages?: InputMaybe<GalleryImageRelateToManyForCreateInput>;
  youtubeLink?: InputMaybe<YouTubeLinkRelateToManyForCreateInput>;
};

export type EventHistoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  display?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type EventHistoryRelateToOneForCreateInput = {
  connect?: InputMaybe<EventHistoryWhereUniqueInput>;
  create?: InputMaybe<EventHistoryCreateInput>;
};

export type EventHistoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventHistoryWhereUniqueInput>;
  create?: InputMaybe<EventHistoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type EventHistoryUpdateArgs = {
  data: EventHistoryUpdateInput;
  where: EventHistoryWhereUniqueInput;
};

export type EventHistoryUpdateInput = {
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  display?: InputMaybe<Scalars['Boolean']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  galleryImages?: InputMaybe<GalleryImageRelateToManyForUpdateInput>;
  youtubeLink?: InputMaybe<YouTubeLinkRelateToManyForUpdateInput>;
};

export type EventHistoryWhereInput = {
  AND?: InputMaybe<Array<EventHistoryWhereInput>>;
  NOT?: InputMaybe<Array<EventHistoryWhereInput>>;
  OR?: InputMaybe<Array<EventHistoryWhereInput>>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  display?: InputMaybe<BooleanFilter>;
  event?: InputMaybe<EventWhereInput>;
  galleryImages?: InputMaybe<GalleryImageManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  youtubeLink?: InputMaybe<YouTubeLinkManyRelationFilter>;
};

export type EventHistoryWhereUniqueInput = {
  event?: InputMaybe<EventWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EventOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  isPublished?: InputMaybe<OrderDirection>;
  maxAttendees?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type EventThubmnail = {
  __typename?: 'EventThubmnail';
  eventThubnail?: Maybe<Event>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
};

export type EventThubmnailCreateInput = {
  eventThubnail?: InputMaybe<EventRelateToOneForCreateInput>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type EventThubmnailOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type EventThubmnailRelateToOneForCreateInput = {
  connect?: InputMaybe<EventThubmnailWhereUniqueInput>;
  create?: InputMaybe<EventThubmnailCreateInput>;
};

export type EventThubmnailRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventThubmnailWhereUniqueInput>;
  create?: InputMaybe<EventThubmnailCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type EventThubmnailUpdateArgs = {
  data: EventThubmnailUpdateInput;
  where: EventThubmnailWhereUniqueInput;
};

export type EventThubmnailUpdateInput = {
  eventThubnail?: InputMaybe<EventRelateToOneForUpdateInput>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type EventThubmnailWhereInput = {
  AND?: InputMaybe<Array<EventThubmnailWhereInput>>;
  NOT?: InputMaybe<Array<EventThubmnailWhereInput>>;
  OR?: InputMaybe<Array<EventThubmnailWhereInput>>;
  eventThubnail?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
};

export type EventThubmnailWhereUniqueInput = {
  eventThubnail?: InputMaybe<EventWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  address?: InputMaybe<AddressRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventThumbnail?: InputMaybe<EventThubmnailRelateToOneForUpdateInput>;
  history?: InputMaybe<EventHistoryRelateToOneForUpdateInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  maxAttendees?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  tickets?: InputMaybe<TicketRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  address?: InputMaybe<AddressWhereInput>;
  description?: InputMaybe<StringFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  eventThumbnail?: InputMaybe<EventThubmnailWhereInput>;
  history?: InputMaybe<EventHistoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  maxAttendees?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  tickets?: InputMaybe<TicketManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type EventWhereUniqueInput = {
  address?: InputMaybe<AddressWhereUniqueInput>;
  eventThumbnail?: InputMaybe<EventThubmnailWhereUniqueInput>;
  history?: InputMaybe<EventHistoryWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  eventGallery?: Maybe<EventHistory>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  title?: Maybe<Scalars['String']>;
};

export type GalleryImageCreateInput = {
  eventGallery?: InputMaybe<EventHistoryRelateToOneForCreateInput>;
  image?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GalleryImageManyRelationFilter = {
  every?: InputMaybe<GalleryImageWhereInput>;
  none?: InputMaybe<GalleryImageWhereInput>;
  some?: InputMaybe<GalleryImageWhereInput>;
};

export type GalleryImageOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type GalleryImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GalleryImageWhereUniqueInput>>;
  create?: InputMaybe<Array<GalleryImageCreateInput>>;
};

export type GalleryImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GalleryImageWhereUniqueInput>>;
  create?: InputMaybe<Array<GalleryImageCreateInput>>;
  disconnect?: InputMaybe<Array<GalleryImageWhereUniqueInput>>;
  set?: InputMaybe<Array<GalleryImageWhereUniqueInput>>;
};

export type GalleryImageUpdateArgs = {
  data: GalleryImageUpdateInput;
  where: GalleryImageWhereUniqueInput;
};

export type GalleryImageUpdateInput = {
  eventGallery?: InputMaybe<EventHistoryRelateToOneForUpdateInput>;
  image?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GalleryImageWhereInput = {
  AND?: InputMaybe<Array<GalleryImageWhereInput>>;
  NOT?: InputMaybe<Array<GalleryImageWhereInput>>;
  OR?: InputMaybe<Array<GalleryImageWhereInput>>;
  eventGallery?: InputMaybe<EventHistoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type GalleryImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Guest = {
  __typename?: 'Guest';
  contact?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  ticket?: Maybe<Array<Ticket>>;
  ticketCount?: Maybe<Scalars['Int']>;
};


export type GuestTicketArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>;
  orderBy?: Array<TicketOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TicketWhereInput;
};


export type GuestTicketCountArgs = {
  where?: TicketWhereInput;
};

export type GuestCreateInput = {
  contact?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<TicketRelateToManyForCreateInput>;
};

export type GuestOrderByInput = {
  contact?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
};

export type GuestRelateToOneForCreateInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  create?: InputMaybe<GuestCreateInput>;
};

export type GuestRelateToOneForUpdateInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  create?: InputMaybe<GuestCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type GuestUpdateArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};

export type GuestUpdateInput = {
  contact?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<TicketRelateToManyForUpdateInput>;
};

export type GuestWhereInput = {
  AND?: InputMaybe<Array<GuestWhereInput>>;
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  OR?: InputMaybe<Array<GuestWhereInput>>;
  contact?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  ticket?: InputMaybe<TicketManyRelationFilter>;
};

export type GuestWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String'];
  createManyMutationName: Scalars['String'];
  createMutationName: Scalars['String'];
  deleteManyMutationName: Scalars['String'];
  deleteMutationName: Scalars['String'];
  itemQueryName: Scalars['String'];
  listOrderName: Scalars['String'];
  listQueryCountName: Scalars['String'];
  listQueryName: Scalars['String'];
  outputTypeName: Scalars['String'];
  relateToManyForCreateInputName: Scalars['String'];
  relateToManyForUpdateInputName: Scalars['String'];
  relateToOneForCreateInputName: Scalars['String'];
  relateToOneForUpdateInputName: Scalars['String'];
  updateInputName: Scalars['String'];
  updateManyInputName: Scalars['String'];
  updateManyMutationName: Scalars['String'];
  updateMutationName: Scalars['String'];
  whereInputName: Scalars['String'];
  whereUniqueInputName: Scalars['String'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSearchFields: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Match = {
  __typename?: 'Match';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isMutual?: Maybe<Scalars['Boolean']>;
  participants?: Maybe<Array<Profile>>;
  participantsCount?: Maybe<Scalars['Int']>;
};


export type MatchParticipantsArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  orderBy?: Array<ProfileOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProfileWhereInput;
};


export type MatchParticipantsCountArgs = {
  where?: ProfileWhereInput;
};

export type MatchCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isMutual?: InputMaybe<Scalars['Boolean']>;
  participants?: InputMaybe<ProfileRelateToManyForCreateInput>;
};

export type MatchManyRelationFilter = {
  every?: InputMaybe<MatchWhereInput>;
  none?: InputMaybe<MatchWhereInput>;
  some?: InputMaybe<MatchWhereInput>;
};

export type MatchOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isMutual?: InputMaybe<OrderDirection>;
};

export type MatchRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MatchWhereUniqueInput>>;
  create?: InputMaybe<Array<MatchCreateInput>>;
};

export type MatchRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MatchWhereUniqueInput>>;
  create?: InputMaybe<Array<MatchCreateInput>>;
  disconnect?: InputMaybe<Array<MatchWhereUniqueInput>>;
  set?: InputMaybe<Array<MatchWhereUniqueInput>>;
};

export type MatchUpdateArgs = {
  data: MatchUpdateInput;
  where: MatchWhereUniqueInput;
};

export type MatchUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isMutual?: InputMaybe<Scalars['Boolean']>;
  participants?: InputMaybe<ProfileRelateToManyForUpdateInput>;
};

export type MatchWhereInput = {
  AND?: InputMaybe<Array<MatchWhereInput>>;
  NOT?: InputMaybe<Array<MatchWhereInput>>;
  OR?: InputMaybe<Array<MatchWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isMutual?: InputMaybe<BooleanFilter>;
  participants?: InputMaybe<ProfileManyRelationFilter>;
};

export type MatchWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Membership = {
  __typename?: 'Membership';
  cellNumber?: Maybe<Scalars['Int']>;
  church?: Maybe<ChurchInfomation>;
  constitutionAgreement?: Maybe<Scalars['Boolean']>;
  correspondencePreference?: Maybe<Scalars['String']>;
  hasPaidSubscription?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idNumber?: Maybe<Scalars['Float']>;
  kids?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  memberShipType?: Maybe<Scalars['String']>;
  nextOfKin?: Maybe<NextOfKin>;
  race?: Maybe<Scalars['String']>;
  signature?: Maybe<Signature>;
  user?: Maybe<User>;
  wouldYouDateOutSideOfYourRace?: Maybe<Scalars['Boolean']>;
};

export type MembershipCreateInput = {
  cellNumber?: InputMaybe<Scalars['Int']>;
  church?: InputMaybe<ChurchInfomationRelateToOneForCreateInput>;
  constitutionAgreement?: InputMaybe<Scalars['Boolean']>;
  correspondencePreference?: InputMaybe<Scalars['String']>;
  hasPaidSubscription?: InputMaybe<Scalars['Boolean']>;
  idNumber?: InputMaybe<Scalars['Float']>;
  kids?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  memberShipType?: InputMaybe<Scalars['String']>;
  nextOfKin?: InputMaybe<NextOfKinRelateToOneForCreateInput>;
  race?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<SignatureRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  wouldYouDateOutSideOfYourRace?: InputMaybe<Scalars['Boolean']>;
};

export type MembershipOrderByInput = {
  cellNumber?: InputMaybe<OrderDirection>;
  constitutionAgreement?: InputMaybe<OrderDirection>;
  correspondencePreference?: InputMaybe<OrderDirection>;
  hasPaidSubscription?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  idNumber?: InputMaybe<OrderDirection>;
  kids?: InputMaybe<OrderDirection>;
  maritalStatus?: InputMaybe<OrderDirection>;
  memberShipType?: InputMaybe<OrderDirection>;
  race?: InputMaybe<OrderDirection>;
  wouldYouDateOutSideOfYourRace?: InputMaybe<OrderDirection>;
};

export type MembershipRelateToOneForCreateInput = {
  connect?: InputMaybe<MembershipWhereUniqueInput>;
  create?: InputMaybe<MembershipCreateInput>;
};

export type MembershipRelateToOneForUpdateInput = {
  connect?: InputMaybe<MembershipWhereUniqueInput>;
  create?: InputMaybe<MembershipCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MembershipUpdateArgs = {
  data: MembershipUpdateInput;
  where: MembershipWhereUniqueInput;
};

export type MembershipUpdateInput = {
  cellNumber?: InputMaybe<Scalars['Int']>;
  church?: InputMaybe<ChurchInfomationRelateToOneForUpdateInput>;
  constitutionAgreement?: InputMaybe<Scalars['Boolean']>;
  correspondencePreference?: InputMaybe<Scalars['String']>;
  hasPaidSubscription?: InputMaybe<Scalars['Boolean']>;
  idNumber?: InputMaybe<Scalars['Float']>;
  kids?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  memberShipType?: InputMaybe<Scalars['String']>;
  nextOfKin?: InputMaybe<NextOfKinRelateToOneForUpdateInput>;
  race?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<SignatureRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  wouldYouDateOutSideOfYourRace?: InputMaybe<Scalars['Boolean']>;
};

export type MembershipWhereInput = {
  AND?: InputMaybe<Array<MembershipWhereInput>>;
  NOT?: InputMaybe<Array<MembershipWhereInput>>;
  OR?: InputMaybe<Array<MembershipWhereInput>>;
  cellNumber?: InputMaybe<IntNullableFilter>;
  church?: InputMaybe<ChurchInfomationWhereInput>;
  constitutionAgreement?: InputMaybe<BooleanFilter>;
  correspondencePreference?: InputMaybe<StringNullableFilter>;
  hasPaidSubscription?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  idNumber?: InputMaybe<FloatNullableFilter>;
  kids?: InputMaybe<StringNullableFilter>;
  maritalStatus?: InputMaybe<StringNullableFilter>;
  memberShipType?: InputMaybe<StringNullableFilter>;
  nextOfKin?: InputMaybe<NextOfKinWhereInput>;
  race?: InputMaybe<StringNullableFilter>;
  signature?: InputMaybe<SignatureWhereInput>;
  user?: InputMaybe<UserWhereInput>;
  wouldYouDateOutSideOfYourRace?: InputMaybe<BooleanFilter>;
};

export type MembershipWhereUniqueInput = {
  church?: InputMaybe<ChurchInfomationWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']>;
  nextOfKin?: InputMaybe<NextOfKinWhereUniqueInput>;
  signature?: InputMaybe<SignatureWhereUniqueInput>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createActivateToken?: Maybe<ActivateToken>;
  createActivateTokens?: Maybe<Array<Maybe<ActivateToken>>>;
  createAddress?: Maybe<Address>;
  createAddresses?: Maybe<Array<Maybe<Address>>>;
  createBlock?: Maybe<Block>;
  createBlocks?: Maybe<Array<Maybe<Block>>>;
  createChatRequest?: Maybe<ChatRequest>;
  createChatRequests?: Maybe<Array<Maybe<ChatRequest>>>;
  createChurchInfomation?: Maybe<ChurchInfomation>;
  createChurchInfomations?: Maybe<Array<Maybe<ChurchInfomation>>>;
  createComment?: Maybe<Comment>;
  createComments?: Maybe<Array<Maybe<Comment>>>;
  createEvent?: Maybe<Event>;
  createEventHistories?: Maybe<Array<Maybe<EventHistory>>>;
  createEventHistory?: Maybe<EventHistory>;
  createEventThubmnail?: Maybe<EventThubmnail>;
  createEventThubmnails?: Maybe<Array<Maybe<EventThubmnail>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createGalleryImage?: Maybe<GalleryImage>;
  createGalleryImages?: Maybe<Array<Maybe<GalleryImage>>>;
  createGuest?: Maybe<Guest>;
  createGuests?: Maybe<Array<Maybe<Guest>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createMatch?: Maybe<Match>;
  createMatches?: Maybe<Array<Maybe<Match>>>;
  createMembership?: Maybe<Membership>;
  createMemberships?: Maybe<Array<Maybe<Membership>>>;
  createNextOfKin?: Maybe<NextOfKin>;
  createNextOfKins?: Maybe<Array<Maybe<NextOfKin>>>;
  createNotification?: Maybe<Notification>;
  createNotifications?: Maybe<Array<Maybe<Notification>>>;
  createProfile?: Maybe<Profile>;
  createProfilePhoto?: Maybe<ProfilePhoto>;
  createProfilePhotos?: Maybe<Array<Maybe<ProfilePhoto>>>;
  createProfiles?: Maybe<Array<Maybe<Profile>>>;
  createReport?: Maybe<Report>;
  createReportConcern?: Maybe<ReportConcern>;
  createReportConcerns?: Maybe<Array<Maybe<ReportConcern>>>;
  createReports?: Maybe<Array<Maybe<Report>>>;
  createSignature?: Maybe<Signature>;
  createSignatures?: Maybe<Array<Maybe<Signature>>>;
  createTicket?: Maybe<Ticket>;
  createTickets?: Maybe<Array<Maybe<Ticket>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createYouTubeLink?: Maybe<YouTubeLink>;
  createYouTubeLinks?: Maybe<Array<Maybe<YouTubeLink>>>;
  deleteActivateToken?: Maybe<ActivateToken>;
  deleteActivateTokens?: Maybe<Array<Maybe<ActivateToken>>>;
  deleteAddress?: Maybe<Address>;
  deleteAddresses?: Maybe<Array<Maybe<Address>>>;
  deleteBlock?: Maybe<Block>;
  deleteBlocks?: Maybe<Array<Maybe<Block>>>;
  deleteChatRequest?: Maybe<ChatRequest>;
  deleteChatRequests?: Maybe<Array<Maybe<ChatRequest>>>;
  deleteChurchInfomation?: Maybe<ChurchInfomation>;
  deleteChurchInfomations?: Maybe<Array<Maybe<ChurchInfomation>>>;
  deleteComment?: Maybe<Comment>;
  deleteComments?: Maybe<Array<Maybe<Comment>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventHistories?: Maybe<Array<Maybe<EventHistory>>>;
  deleteEventHistory?: Maybe<EventHistory>;
  deleteEventThubmnail?: Maybe<EventThubmnail>;
  deleteEventThubmnails?: Maybe<Array<Maybe<EventThubmnail>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteGalleryImage?: Maybe<GalleryImage>;
  deleteGalleryImages?: Maybe<Array<Maybe<GalleryImage>>>;
  deleteGuest?: Maybe<Guest>;
  deleteGuests?: Maybe<Array<Maybe<Guest>>>;
  deleteMatch?: Maybe<Match>;
  deleteMatches?: Maybe<Array<Maybe<Match>>>;
  deleteMembership?: Maybe<Membership>;
  deleteMemberships?: Maybe<Array<Maybe<Membership>>>;
  deleteNextOfKin?: Maybe<NextOfKin>;
  deleteNextOfKins?: Maybe<Array<Maybe<NextOfKin>>>;
  deleteNotification?: Maybe<Notification>;
  deleteNotifications?: Maybe<Array<Maybe<Notification>>>;
  deleteProfile?: Maybe<Profile>;
  deleteProfilePhoto?: Maybe<ProfilePhoto>;
  deleteProfilePhotos?: Maybe<Array<Maybe<ProfilePhoto>>>;
  deleteProfiles?: Maybe<Array<Maybe<Profile>>>;
  deleteReport?: Maybe<Report>;
  deleteReportConcern?: Maybe<ReportConcern>;
  deleteReportConcerns?: Maybe<Array<Maybe<ReportConcern>>>;
  deleteReports?: Maybe<Array<Maybe<Report>>>;
  deleteSignature?: Maybe<Signature>;
  deleteSignatures?: Maybe<Array<Maybe<Signature>>>;
  deleteTicket?: Maybe<Ticket>;
  deleteTickets?: Maybe<Array<Maybe<Ticket>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteYouTubeLink?: Maybe<YouTubeLink>;
  deleteYouTubeLinks?: Maybe<Array<Maybe<YouTubeLink>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateActivateToken?: Maybe<ActivateToken>;
  updateActivateTokens?: Maybe<Array<Maybe<ActivateToken>>>;
  updateAddress?: Maybe<Address>;
  updateAddresses?: Maybe<Array<Maybe<Address>>>;
  updateBlock?: Maybe<Block>;
  updateBlocks?: Maybe<Array<Maybe<Block>>>;
  updateChatRequest?: Maybe<ChatRequest>;
  updateChatRequests?: Maybe<Array<Maybe<ChatRequest>>>;
  updateChurchInfomation?: Maybe<ChurchInfomation>;
  updateChurchInfomations?: Maybe<Array<Maybe<ChurchInfomation>>>;
  updateComment?: Maybe<Comment>;
  updateComments?: Maybe<Array<Maybe<Comment>>>;
  updateEvent?: Maybe<Event>;
  updateEventHistories?: Maybe<Array<Maybe<EventHistory>>>;
  updateEventHistory?: Maybe<EventHistory>;
  updateEventThubmnail?: Maybe<EventThubmnail>;
  updateEventThubmnails?: Maybe<Array<Maybe<EventThubmnail>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateGalleryImage?: Maybe<GalleryImage>;
  updateGalleryImages?: Maybe<Array<Maybe<GalleryImage>>>;
  updateGuest?: Maybe<Guest>;
  updateGuests?: Maybe<Array<Maybe<Guest>>>;
  updateMatch?: Maybe<Match>;
  updateMatches?: Maybe<Array<Maybe<Match>>>;
  updateMembership?: Maybe<Membership>;
  updateMemberships?: Maybe<Array<Maybe<Membership>>>;
  updateNextOfKin?: Maybe<NextOfKin>;
  updateNextOfKins?: Maybe<Array<Maybe<NextOfKin>>>;
  updateNotification?: Maybe<Notification>;
  updateNotifications?: Maybe<Array<Maybe<Notification>>>;
  updateProfile?: Maybe<Profile>;
  updateProfilePhoto?: Maybe<ProfilePhoto>;
  updateProfilePhotos?: Maybe<Array<Maybe<ProfilePhoto>>>;
  updateProfiles?: Maybe<Array<Maybe<Profile>>>;
  updateReport?: Maybe<Report>;
  updateReportConcern?: Maybe<ReportConcern>;
  updateReportConcerns?: Maybe<Array<Maybe<ReportConcern>>>;
  updateReports?: Maybe<Array<Maybe<Report>>>;
  updateSignature?: Maybe<Signature>;
  updateSignatures?: Maybe<Array<Maybe<Signature>>>;
  updateTicket?: Maybe<Ticket>;
  updateTickets?: Maybe<Array<Maybe<Ticket>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateYouTubeLink?: Maybe<YouTubeLink>;
  updateYouTubeLinks?: Maybe<Array<Maybe<YouTubeLink>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateActivateTokenArgs = {
  data: ActivateTokenCreateInput;
};


export type MutationCreateActivateTokensArgs = {
  data: Array<ActivateTokenCreateInput>;
};


export type MutationCreateAddressArgs = {
  data: AddressCreateInput;
};


export type MutationCreateAddressesArgs = {
  data: Array<AddressCreateInput>;
};


export type MutationCreateBlockArgs = {
  data: BlockCreateInput;
};


export type MutationCreateBlocksArgs = {
  data: Array<BlockCreateInput>;
};


export type MutationCreateChatRequestArgs = {
  data: ChatRequestCreateInput;
};


export type MutationCreateChatRequestsArgs = {
  data: Array<ChatRequestCreateInput>;
};


export type MutationCreateChurchInfomationArgs = {
  data: ChurchInfomationCreateInput;
};


export type MutationCreateChurchInfomationsArgs = {
  data: Array<ChurchInfomationCreateInput>;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateCommentsArgs = {
  data: Array<CommentCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventHistoriesArgs = {
  data: Array<EventHistoryCreateInput>;
};


export type MutationCreateEventHistoryArgs = {
  data: EventHistoryCreateInput;
};


export type MutationCreateEventThubmnailArgs = {
  data: EventThubmnailCreateInput;
};


export type MutationCreateEventThubmnailsArgs = {
  data: Array<EventThubmnailCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateGalleryImageArgs = {
  data: GalleryImageCreateInput;
};


export type MutationCreateGalleryImagesArgs = {
  data: Array<GalleryImageCreateInput>;
};


export type MutationCreateGuestArgs = {
  data: GuestCreateInput;
};


export type MutationCreateGuestsArgs = {
  data: Array<GuestCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateMatchArgs = {
  data: MatchCreateInput;
};


export type MutationCreateMatchesArgs = {
  data: Array<MatchCreateInput>;
};


export type MutationCreateMembershipArgs = {
  data: MembershipCreateInput;
};


export type MutationCreateMembershipsArgs = {
  data: Array<MembershipCreateInput>;
};


export type MutationCreateNextOfKinArgs = {
  data: NextOfKinCreateInput;
};


export type MutationCreateNextOfKinsArgs = {
  data: Array<NextOfKinCreateInput>;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateNotificationsArgs = {
  data: Array<NotificationCreateInput>;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateProfilePhotoArgs = {
  data: ProfilePhotoCreateInput;
};


export type MutationCreateProfilePhotosArgs = {
  data: Array<ProfilePhotoCreateInput>;
};


export type MutationCreateProfilesArgs = {
  data: Array<ProfileCreateInput>;
};


export type MutationCreateReportArgs = {
  data: ReportCreateInput;
};


export type MutationCreateReportConcernArgs = {
  data: ReportConcernCreateInput;
};


export type MutationCreateReportConcernsArgs = {
  data: Array<ReportConcernCreateInput>;
};


export type MutationCreateReportsArgs = {
  data: Array<ReportCreateInput>;
};


export type MutationCreateSignatureArgs = {
  data: SignatureCreateInput;
};


export type MutationCreateSignaturesArgs = {
  data: Array<SignatureCreateInput>;
};


export type MutationCreateTicketArgs = {
  data: TicketCreateInput;
};


export type MutationCreateTicketsArgs = {
  data: Array<TicketCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateYouTubeLinkArgs = {
  data: YouTubeLinkCreateInput;
};


export type MutationCreateYouTubeLinksArgs = {
  data: Array<YouTubeLinkCreateInput>;
};


export type MutationDeleteActivateTokenArgs = {
  where: ActivateTokenWhereUniqueInput;
};


export type MutationDeleteActivateTokensArgs = {
  where: Array<ActivateTokenWhereUniqueInput>;
};


export type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationDeleteAddressesArgs = {
  where: Array<AddressWhereUniqueInput>;
};


export type MutationDeleteBlockArgs = {
  where: BlockWhereUniqueInput;
};


export type MutationDeleteBlocksArgs = {
  where: Array<BlockWhereUniqueInput>;
};


export type MutationDeleteChatRequestArgs = {
  where: ChatRequestWhereUniqueInput;
};


export type MutationDeleteChatRequestsArgs = {
  where: Array<ChatRequestWhereUniqueInput>;
};


export type MutationDeleteChurchInfomationArgs = {
  where: ChurchInfomationWhereUniqueInput;
};


export type MutationDeleteChurchInfomationsArgs = {
  where: Array<ChurchInfomationWhereUniqueInput>;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteCommentsArgs = {
  where: Array<CommentWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventHistoriesArgs = {
  where: Array<EventHistoryWhereUniqueInput>;
};


export type MutationDeleteEventHistoryArgs = {
  where: EventHistoryWhereUniqueInput;
};


export type MutationDeleteEventThubmnailArgs = {
  where: EventThubmnailWhereUniqueInput;
};


export type MutationDeleteEventThubmnailsArgs = {
  where: Array<EventThubmnailWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteGalleryImageArgs = {
  where: GalleryImageWhereUniqueInput;
};


export type MutationDeleteGalleryImagesArgs = {
  where: Array<GalleryImageWhereUniqueInput>;
};


export type MutationDeleteGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationDeleteGuestsArgs = {
  where: Array<GuestWhereUniqueInput>;
};


export type MutationDeleteMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type MutationDeleteMatchesArgs = {
  where: Array<MatchWhereUniqueInput>;
};


export type MutationDeleteMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type MutationDeleteMembershipsArgs = {
  where: Array<MembershipWhereUniqueInput>;
};


export type MutationDeleteNextOfKinArgs = {
  where: NextOfKinWhereUniqueInput;
};


export type MutationDeleteNextOfKinsArgs = {
  where: Array<NextOfKinWhereUniqueInput>;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteNotificationsArgs = {
  where: Array<NotificationWhereUniqueInput>;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteProfilePhotoArgs = {
  where: ProfilePhotoWhereUniqueInput;
};


export type MutationDeleteProfilePhotosArgs = {
  where: Array<ProfilePhotoWhereUniqueInput>;
};


export type MutationDeleteProfilesArgs = {
  where: Array<ProfileWhereUniqueInput>;
};


export type MutationDeleteReportArgs = {
  where: ReportWhereUniqueInput;
};


export type MutationDeleteReportConcernArgs = {
  where: ReportConcernWhereUniqueInput;
};


export type MutationDeleteReportConcernsArgs = {
  where: Array<ReportConcernWhereUniqueInput>;
};


export type MutationDeleteReportsArgs = {
  where: Array<ReportWhereUniqueInput>;
};


export type MutationDeleteSignatureArgs = {
  where: SignatureWhereUniqueInput;
};


export type MutationDeleteSignaturesArgs = {
  where: Array<SignatureWhereUniqueInput>;
};


export type MutationDeleteTicketArgs = {
  where: TicketWhereUniqueInput;
};


export type MutationDeleteTicketsArgs = {
  where: Array<TicketWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteYouTubeLinkArgs = {
  where: YouTubeLinkWhereUniqueInput;
};


export type MutationDeleteYouTubeLinksArgs = {
  where: Array<YouTubeLinkWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateActivateTokenArgs = {
  data: ActivateTokenUpdateInput;
  where: ActivateTokenWhereUniqueInput;
};


export type MutationUpdateActivateTokensArgs = {
  data: Array<ActivateTokenUpdateArgs>;
};


export type MutationUpdateAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationUpdateAddressesArgs = {
  data: Array<AddressUpdateArgs>;
};


export type MutationUpdateBlockArgs = {
  data: BlockUpdateInput;
  where: BlockWhereUniqueInput;
};


export type MutationUpdateBlocksArgs = {
  data: Array<BlockUpdateArgs>;
};


export type MutationUpdateChatRequestArgs = {
  data: ChatRequestUpdateInput;
  where: ChatRequestWhereUniqueInput;
};


export type MutationUpdateChatRequestsArgs = {
  data: Array<ChatRequestUpdateArgs>;
};


export type MutationUpdateChurchInfomationArgs = {
  data: ChurchInfomationUpdateInput;
  where: ChurchInfomationWhereUniqueInput;
};


export type MutationUpdateChurchInfomationsArgs = {
  data: Array<ChurchInfomationUpdateArgs>;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentsArgs = {
  data: Array<CommentUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventHistoriesArgs = {
  data: Array<EventHistoryUpdateArgs>;
};


export type MutationUpdateEventHistoryArgs = {
  data: EventHistoryUpdateInput;
  where: EventHistoryWhereUniqueInput;
};


export type MutationUpdateEventThubmnailArgs = {
  data: EventThubmnailUpdateInput;
  where: EventThubmnailWhereUniqueInput;
};


export type MutationUpdateEventThubmnailsArgs = {
  data: Array<EventThubmnailUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateGalleryImageArgs = {
  data: GalleryImageUpdateInput;
  where: GalleryImageWhereUniqueInput;
};


export type MutationUpdateGalleryImagesArgs = {
  data: Array<GalleryImageUpdateArgs>;
};


export type MutationUpdateGuestArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpdateGuestsArgs = {
  data: Array<GuestUpdateArgs>;
};


export type MutationUpdateMatchArgs = {
  data: MatchUpdateInput;
  where: MatchWhereUniqueInput;
};


export type MutationUpdateMatchesArgs = {
  data: Array<MatchUpdateArgs>;
};


export type MutationUpdateMembershipArgs = {
  data: MembershipUpdateInput;
  where: MembershipWhereUniqueInput;
};


export type MutationUpdateMembershipsArgs = {
  data: Array<MembershipUpdateArgs>;
};


export type MutationUpdateNextOfKinArgs = {
  data: NextOfKinUpdateInput;
  where: NextOfKinWhereUniqueInput;
};


export type MutationUpdateNextOfKinsArgs = {
  data: Array<NextOfKinUpdateArgs>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateNotificationsArgs = {
  data: Array<NotificationUpdateArgs>;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateProfilePhotoArgs = {
  data: ProfilePhotoUpdateInput;
  where: ProfilePhotoWhereUniqueInput;
};


export type MutationUpdateProfilePhotosArgs = {
  data: Array<ProfilePhotoUpdateArgs>;
};


export type MutationUpdateProfilesArgs = {
  data: Array<ProfileUpdateArgs>;
};


export type MutationUpdateReportArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};


export type MutationUpdateReportConcernArgs = {
  data: ReportConcernUpdateInput;
  where: ReportConcernWhereUniqueInput;
};


export type MutationUpdateReportConcernsArgs = {
  data: Array<ReportConcernUpdateArgs>;
};


export type MutationUpdateReportsArgs = {
  data: Array<ReportUpdateArgs>;
};


export type MutationUpdateSignatureArgs = {
  data: SignatureUpdateInput;
  where: SignatureWhereUniqueInput;
};


export type MutationUpdateSignaturesArgs = {
  data: Array<SignatureUpdateArgs>;
};


export type MutationUpdateTicketArgs = {
  data: TicketUpdateInput;
  where: TicketWhereUniqueInput;
};


export type MutationUpdateTicketsArgs = {
  data: Array<TicketUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateYouTubeLinkArgs = {
  data: YouTubeLinkUpdateInput;
  where: YouTubeLinkWhereUniqueInput;
};


export type MutationUpdateYouTubeLinksArgs = {
  data: Array<YouTubeLinkUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NextOfKin = {
  __typename?: 'NextOfKin';
  cellNumber?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  member?: Maybe<Membership>;
  name?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
};

export type NextOfKinCreateInput = {
  cellNumber?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MembershipRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<Scalars['String']>;
};

export type NextOfKinOrderByInput = {
  cellNumber?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  relationship?: InputMaybe<OrderDirection>;
};

export type NextOfKinRelateToOneForCreateInput = {
  connect?: InputMaybe<NextOfKinWhereUniqueInput>;
  create?: InputMaybe<NextOfKinCreateInput>;
};

export type NextOfKinRelateToOneForUpdateInput = {
  connect?: InputMaybe<NextOfKinWhereUniqueInput>;
  create?: InputMaybe<NextOfKinCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type NextOfKinUpdateArgs = {
  data: NextOfKinUpdateInput;
  where: NextOfKinWhereUniqueInput;
};

export type NextOfKinUpdateInput = {
  cellNumber?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MembershipRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<Scalars['String']>;
};

export type NextOfKinWhereInput = {
  AND?: InputMaybe<Array<NextOfKinWhereInput>>;
  NOT?: InputMaybe<Array<NextOfKinWhereInput>>;
  OR?: InputMaybe<Array<NextOfKinWhereInput>>;
  cellNumber?: InputMaybe<FloatNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  member?: InputMaybe<MembershipWhereInput>;
  name?: InputMaybe<StringFilter>;
  relationship?: InputMaybe<StringFilter>;
};

export type NextOfKinWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<MembershipWhereUniqueInput>;
};

export type Notification = {
  __typename?: 'Notification';
  actionHref?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRead?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type NotificationCreateInput = {
  actionHref?: InputMaybe<Scalars['String']>;
  actionText?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  icon?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type NotificationManyRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByInput = {
  actionHref?: InputMaybe<OrderDirection>;
  actionText?: InputMaybe<OrderDirection>;
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  icon?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isRead?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type NotificationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
};

export type NotificationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationUpdateArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateInput = {
  actionHref?: InputMaybe<Scalars['String']>;
  actionText?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  icon?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  actionHref?: InputMaybe<StringFilter>;
  actionText?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isRead?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Profile = {
  __typename?: 'Profile';
  address?: Maybe<Address>;
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  education?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interests?: Maybe<Scalars['String']>;
  isDirectory?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  lookingFor?: Maybe<Scalars['String']>;
  matches?: Maybe<Array<Match>>;
  matchesCount?: Maybe<Scalars['Int']>;
  occupation?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<ProfilePhoto>>;
  photosCount?: Maybe<Scalars['Int']>;
  profilePicture?: Maybe<CloudinaryImage_File>;
  publishProfile?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};


export type ProfileMatchesArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  orderBy?: Array<MatchOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MatchWhereInput;
};


export type ProfileMatchesCountArgs = {
  where?: MatchWhereInput;
};


export type ProfilePhotosArgs = {
  cursor?: InputMaybe<ProfilePhotoWhereUniqueInput>;
  orderBy?: Array<ProfilePhotoOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProfilePhotoWhereInput;
};


export type ProfilePhotosCountArgs = {
  where?: ProfilePhotoWhereInput;
};

export type ProfileCreateInput = {
  address?: InputMaybe<AddressRelateToOneForCreateInput>;
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  education?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  interests?: InputMaybe<Scalars['String']>;
  isDirectory?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lookingFor?: InputMaybe<Scalars['String']>;
  matches?: InputMaybe<MatchRelateToManyForCreateInput>;
  occupation?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<ProfilePhotoRelateToManyForCreateInput>;
  profilePicture?: InputMaybe<Scalars['Upload']>;
  publishProfile?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ProfileManyRelationFilter = {
  every?: InputMaybe<ProfileWhereInput>;
  none?: InputMaybe<ProfileWhereInput>;
  some?: InputMaybe<ProfileWhereInput>;
};

export type ProfileOrderByInput = {
  age?: InputMaybe<OrderDirection>;
  bio?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  education?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  gender?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  interests?: InputMaybe<OrderDirection>;
  isDirectory?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  lookingFor?: InputMaybe<OrderDirection>;
  occupation?: InputMaybe<OrderDirection>;
  publishProfile?: InputMaybe<OrderDirection>;
};

export type ProfilePhoto = {
  __typename?: 'ProfilePhoto';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  profile?: Maybe<Profile>;
};

export type ProfilePhotoCreateInput = {
  image?: InputMaybe<Scalars['Upload']>;
  profile?: InputMaybe<ProfileRelateToOneForCreateInput>;
};

export type ProfilePhotoManyRelationFilter = {
  every?: InputMaybe<ProfilePhotoWhereInput>;
  none?: InputMaybe<ProfilePhotoWhereInput>;
  some?: InputMaybe<ProfilePhotoWhereInput>;
};

export type ProfilePhotoOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type ProfilePhotoRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProfilePhotoWhereUniqueInput>>;
  create?: InputMaybe<Array<ProfilePhotoCreateInput>>;
};

export type ProfilePhotoRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProfilePhotoWhereUniqueInput>>;
  create?: InputMaybe<Array<ProfilePhotoCreateInput>>;
  disconnect?: InputMaybe<Array<ProfilePhotoWhereUniqueInput>>;
  set?: InputMaybe<Array<ProfilePhotoWhereUniqueInput>>;
};

export type ProfilePhotoUpdateArgs = {
  data: ProfilePhotoUpdateInput;
  where: ProfilePhotoWhereUniqueInput;
};

export type ProfilePhotoUpdateInput = {
  image?: InputMaybe<Scalars['Upload']>;
  profile?: InputMaybe<ProfileRelateToOneForUpdateInput>;
};

export type ProfilePhotoWhereInput = {
  AND?: InputMaybe<Array<ProfilePhotoWhereInput>>;
  NOT?: InputMaybe<Array<ProfilePhotoWhereInput>>;
  OR?: InputMaybe<Array<ProfilePhotoWhereInput>>;
  id?: InputMaybe<IdFilter>;
  profile?: InputMaybe<ProfileWhereInput>;
};

export type ProfilePhotoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProfileRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  create?: InputMaybe<Array<ProfileCreateInput>>;
};

export type ProfileRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  create?: InputMaybe<Array<ProfileCreateInput>>;
  disconnect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  set?: InputMaybe<Array<ProfileWhereUniqueInput>>;
};

export type ProfileRelateToOneForCreateInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  create?: InputMaybe<ProfileCreateInput>;
};

export type ProfileRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  create?: InputMaybe<ProfileCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProfileUpdateArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileUpdateInput = {
  address?: InputMaybe<AddressRelateToOneForUpdateInput>;
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  education?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  interests?: InputMaybe<Scalars['String']>;
  isDirectory?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lookingFor?: InputMaybe<Scalars['String']>;
  matches?: InputMaybe<MatchRelateToManyForUpdateInput>;
  occupation?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<ProfilePhotoRelateToManyForUpdateInput>;
  profilePicture?: InputMaybe<Scalars['Upload']>;
  publishProfile?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  address?: InputMaybe<AddressWhereInput>;
  age?: InputMaybe<IntNullableFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  education?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  interests?: InputMaybe<StringFilter>;
  isDirectory?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  lookingFor?: InputMaybe<StringNullableFilter>;
  matches?: InputMaybe<MatchManyRelationFilter>;
  occupation?: InputMaybe<StringFilter>;
  photos?: InputMaybe<ProfilePhotoManyRelationFilter>;
  publishProfile?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ProfileWhereUniqueInput = {
  address?: InputMaybe<AddressWhereUniqueInput>;
  id?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type Query = {
  __typename?: 'Query';
  activateToken?: Maybe<ActivateToken>;
  activateTokens?: Maybe<Array<ActivateToken>>;
  activateTokensCount?: Maybe<Scalars['Int']>;
  address?: Maybe<Address>;
  addresses?: Maybe<Array<Address>>;
  addressesCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  block?: Maybe<Block>;
  blocks?: Maybe<Array<Block>>;
  blocksCount?: Maybe<Scalars['Int']>;
  chatRequest?: Maybe<ChatRequest>;
  chatRequests?: Maybe<Array<ChatRequest>>;
  chatRequestsCount?: Maybe<Scalars['Int']>;
  churchInfomation?: Maybe<ChurchInfomation>;
  churchInfomations?: Maybe<Array<ChurchInfomation>>;
  churchInfomationsCount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  event?: Maybe<Event>;
  eventHistories?: Maybe<Array<EventHistory>>;
  eventHistoriesCount?: Maybe<Scalars['Int']>;
  eventHistory?: Maybe<EventHistory>;
  eventThubmnail?: Maybe<EventThubmnail>;
  eventThubmnails?: Maybe<Array<EventThubmnail>>;
  eventThubmnailsCount?: Maybe<Scalars['Int']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  galleryImage?: Maybe<GalleryImage>;
  galleryImages?: Maybe<Array<GalleryImage>>;
  galleryImagesCount?: Maybe<Scalars['Int']>;
  guest?: Maybe<Guest>;
  guests?: Maybe<Array<Guest>>;
  guestsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  match?: Maybe<Match>;
  matches?: Maybe<Array<Match>>;
  matchesCount?: Maybe<Scalars['Int']>;
  membership?: Maybe<Membership>;
  memberships?: Maybe<Array<Membership>>;
  membershipsCount?: Maybe<Scalars['Int']>;
  nextOfKin?: Maybe<NextOfKin>;
  nextOfKins?: Maybe<Array<NextOfKin>>;
  nextOfKinsCount?: Maybe<Scalars['Int']>;
  notification?: Maybe<Notification>;
  notifications?: Maybe<Array<Notification>>;
  notificationsCount?: Maybe<Scalars['Int']>;
  profile?: Maybe<Profile>;
  profilePhoto?: Maybe<ProfilePhoto>;
  profilePhotos?: Maybe<Array<ProfilePhoto>>;
  profilePhotosCount?: Maybe<Scalars['Int']>;
  profiles?: Maybe<Array<Profile>>;
  profilesCount?: Maybe<Scalars['Int']>;
  report?: Maybe<Report>;
  reportConcern?: Maybe<ReportConcern>;
  reportConcerns?: Maybe<Array<ReportConcern>>;
  reportConcernsCount?: Maybe<Scalars['Int']>;
  reports?: Maybe<Array<Report>>;
  reportsCount?: Maybe<Scalars['Int']>;
  signature?: Maybe<Signature>;
  signatures?: Maybe<Array<Signature>>;
  signaturesCount?: Maybe<Scalars['Int']>;
  ticket?: Maybe<Ticket>;
  tickets?: Maybe<Array<Ticket>>;
  ticketsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  youTubeLink?: Maybe<YouTubeLink>;
  youTubeLinks?: Maybe<Array<YouTubeLink>>;
  youTubeLinksCount?: Maybe<Scalars['Int']>;
};


export type QueryActivateTokenArgs = {
  where: ActivateTokenWhereUniqueInput;
};


export type QueryActivateTokensArgs = {
  cursor?: InputMaybe<ActivateTokenWhereUniqueInput>;
  orderBy?: Array<ActivateTokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ActivateTokenWhereInput;
};


export type QueryActivateTokensCountArgs = {
  where?: ActivateTokenWhereInput;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  orderBy?: Array<AddressOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AddressWhereInput;
};


export type QueryAddressesCountArgs = {
  where?: AddressWhereInput;
};


export type QueryBlockArgs = {
  where: BlockWhereUniqueInput;
};


export type QueryBlocksArgs = {
  cursor?: InputMaybe<BlockWhereUniqueInput>;
  orderBy?: Array<BlockOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BlockWhereInput;
};


export type QueryBlocksCountArgs = {
  where?: BlockWhereInput;
};


export type QueryChatRequestArgs = {
  where: ChatRequestWhereUniqueInput;
};


export type QueryChatRequestsArgs = {
  cursor?: InputMaybe<ChatRequestWhereUniqueInput>;
  orderBy?: Array<ChatRequestOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ChatRequestWhereInput;
};


export type QueryChatRequestsCountArgs = {
  where?: ChatRequestWhereInput;
};


export type QueryChurchInfomationArgs = {
  where: ChurchInfomationWhereUniqueInput;
};


export type QueryChurchInfomationsArgs = {
  cursor?: InputMaybe<ChurchInfomationWhereUniqueInput>;
  orderBy?: Array<ChurchInfomationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ChurchInfomationWhereInput;
};


export type QueryChurchInfomationsCountArgs = {
  where?: ChurchInfomationWhereInput;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type QueryCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventHistoriesArgs = {
  cursor?: InputMaybe<EventHistoryWhereUniqueInput>;
  orderBy?: Array<EventHistoryOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventHistoryWhereInput;
};


export type QueryEventHistoriesCountArgs = {
  where?: EventHistoryWhereInput;
};


export type QueryEventHistoryArgs = {
  where: EventHistoryWhereUniqueInput;
};


export type QueryEventThubmnailArgs = {
  where: EventThubmnailWhereUniqueInput;
};


export type QueryEventThubmnailsArgs = {
  cursor?: InputMaybe<EventThubmnailWhereUniqueInput>;
  orderBy?: Array<EventThubmnailOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventThubmnailWhereInput;
};


export type QueryEventThubmnailsCountArgs = {
  where?: EventThubmnailWhereInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryGalleryImageArgs = {
  where: GalleryImageWhereUniqueInput;
};


export type QueryGalleryImagesArgs = {
  cursor?: InputMaybe<GalleryImageWhereUniqueInput>;
  orderBy?: Array<GalleryImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: GalleryImageWhereInput;
};


export type QueryGalleryImagesCountArgs = {
  where?: GalleryImageWhereInput;
};


export type QueryGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type QueryGuestsArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  orderBy?: Array<GuestOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: GuestWhereInput;
};


export type QueryGuestsCountArgs = {
  where?: GuestWhereInput;
};


export type QueryMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type QueryMatchesArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  orderBy?: Array<MatchOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MatchWhereInput;
};


export type QueryMatchesCountArgs = {
  where?: MatchWhereInput;
};


export type QueryMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type QueryMembershipsArgs = {
  cursor?: InputMaybe<MembershipWhereUniqueInput>;
  orderBy?: Array<MembershipOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MembershipWhereInput;
};


export type QueryMembershipsCountArgs = {
  where?: MembershipWhereInput;
};


export type QueryNextOfKinArgs = {
  where: NextOfKinWhereUniqueInput;
};


export type QueryNextOfKinsArgs = {
  cursor?: InputMaybe<NextOfKinWhereUniqueInput>;
  orderBy?: Array<NextOfKinOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NextOfKinWhereInput;
};


export type QueryNextOfKinsCountArgs = {
  where?: NextOfKinWhereInput;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: Array<NotificationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NotificationWhereInput;
};


export type QueryNotificationsCountArgs = {
  where?: NotificationWhereInput;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilePhotoArgs = {
  where: ProfilePhotoWhereUniqueInput;
};


export type QueryProfilePhotosArgs = {
  cursor?: InputMaybe<ProfilePhotoWhereUniqueInput>;
  orderBy?: Array<ProfilePhotoOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProfilePhotoWhereInput;
};


export type QueryProfilePhotosCountArgs = {
  where?: ProfilePhotoWhereInput;
};


export type QueryProfilesArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  orderBy?: Array<ProfileOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProfileWhereInput;
};


export type QueryProfilesCountArgs = {
  where?: ProfileWhereInput;
};


export type QueryReportArgs = {
  where: ReportWhereUniqueInput;
};


export type QueryReportConcernArgs = {
  where: ReportConcernWhereUniqueInput;
};


export type QueryReportConcernsArgs = {
  cursor?: InputMaybe<ReportConcernWhereUniqueInput>;
  orderBy?: Array<ReportConcernOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ReportConcernWhereInput;
};


export type QueryReportConcernsCountArgs = {
  where?: ReportConcernWhereInput;
};


export type QueryReportsArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  orderBy?: Array<ReportOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ReportWhereInput;
};


export type QueryReportsCountArgs = {
  where?: ReportWhereInput;
};


export type QuerySignatureArgs = {
  where: SignatureWhereUniqueInput;
};


export type QuerySignaturesArgs = {
  cursor?: InputMaybe<SignatureWhereUniqueInput>;
  orderBy?: Array<SignatureOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SignatureWhereInput;
};


export type QuerySignaturesCountArgs = {
  where?: SignatureWhereInput;
};


export type QueryTicketArgs = {
  where: TicketWhereUniqueInput;
};


export type QueryTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>;
  orderBy?: Array<TicketOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TicketWhereInput;
};


export type QueryTicketsCountArgs = {
  where?: TicketWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type QueryYouTubeLinkArgs = {
  where: YouTubeLinkWhereUniqueInput;
};


export type QueryYouTubeLinksArgs = {
  cursor?: InputMaybe<YouTubeLinkWhereUniqueInput>;
  orderBy?: Array<YouTubeLinkOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: YouTubeLinkWhereInput;
};


export type QueryYouTubeLinksCountArgs = {
  where?: YouTubeLinkWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type Report = {
  __typename?: 'Report';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  reportedBy?: Maybe<User>;
  reportedUser?: Maybe<User>;
};

export type ReportConcern = {
  __typename?: 'ReportConcern';
  details?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  reportedUser?: Maybe<User>;
  user?: Maybe<User>;
};

export type ReportConcernCreateInput = {
  details?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reportedUser?: InputMaybe<UserRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ReportConcernOrderByInput = {
  details?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  reason?: InputMaybe<OrderDirection>;
};

export type ReportConcernRelateToOneForCreateInput = {
  connect?: InputMaybe<ReportConcernWhereUniqueInput>;
  create?: InputMaybe<ReportConcernCreateInput>;
};

export type ReportConcernRelateToOneForUpdateInput = {
  connect?: InputMaybe<ReportConcernWhereUniqueInput>;
  create?: InputMaybe<ReportConcernCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ReportConcernUpdateArgs = {
  data: ReportConcernUpdateInput;
  where: ReportConcernWhereUniqueInput;
};

export type ReportConcernUpdateInput = {
  details?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reportedUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ReportConcernWhereInput = {
  AND?: InputMaybe<Array<ReportConcernWhereInput>>;
  NOT?: InputMaybe<Array<ReportConcernWhereInput>>;
  OR?: InputMaybe<Array<ReportConcernWhereInput>>;
  details?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  reason?: InputMaybe<StringNullableFilter>;
  reportedUser?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type ReportConcernWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type ReportCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reportedBy?: InputMaybe<UserRelateToOneForCreateInput>;
  reportedUser?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ReportOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  reason?: InputMaybe<OrderDirection>;
};

export type ReportUpdateArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reportedBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  reportedUser?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  reason?: InputMaybe<StringNullableFilter>;
  reportedBy?: InputMaybe<UserWhereInput>;
  reportedUser?: InputMaybe<UserWhereInput>;
};

export type ReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Signature = {
  __typename?: 'Signature';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  member?: Maybe<Membership>;
};

export type SignatureCreateInput = {
  image?: InputMaybe<Scalars['Upload']>;
  member?: InputMaybe<MembershipRelateToOneForCreateInput>;
};

export type SignatureOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type SignatureRelateToOneForCreateInput = {
  connect?: InputMaybe<SignatureWhereUniqueInput>;
  create?: InputMaybe<SignatureCreateInput>;
};

export type SignatureRelateToOneForUpdateInput = {
  connect?: InputMaybe<SignatureWhereUniqueInput>;
  create?: InputMaybe<SignatureCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SignatureUpdateArgs = {
  data: SignatureUpdateInput;
  where: SignatureWhereUniqueInput;
};

export type SignatureUpdateInput = {
  image?: InputMaybe<Scalars['Upload']>;
  member?: InputMaybe<MembershipRelateToOneForUpdateInput>;
};

export type SignatureWhereInput = {
  AND?: InputMaybe<Array<SignatureWhereInput>>;
  NOT?: InputMaybe<Array<SignatureWhereInput>>;
  OR?: InputMaybe<Array<SignatureWhereInput>>;
  id?: InputMaybe<IdFilter>;
  member?: InputMaybe<MembershipWhereInput>;
};

export type SignatureWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<MembershipWhereUniqueInput>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  event?: Maybe<Event>;
  guest?: Maybe<Guest>;
  id: Scalars['ID'];
  isCheckedIn?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  purchasedAt?: Maybe<Scalars['DateTime']>;
  qty?: Maybe<Scalars['Int']>;
  sessionID?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  ticketCode?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type TicketCreateInput = {
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  guest?: InputMaybe<GuestRelateToOneForCreateInput>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  purchasedAt?: InputMaybe<Scalars['DateTime']>;
  qty?: InputMaybe<Scalars['Int']>;
  sessionID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  ticketCode?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type TicketManyRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  isCheckedIn?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  purchasedAt?: InputMaybe<OrderDirection>;
  qty?: InputMaybe<OrderDirection>;
  sessionID?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  ticketCode?: InputMaybe<OrderDirection>;
};

export type TicketRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  create?: InputMaybe<Array<TicketCreateInput>>;
};

export type TicketRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  create?: InputMaybe<Array<TicketCreateInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
};

export type TicketUpdateArgs = {
  data: TicketUpdateInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateInput = {
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  guest?: InputMaybe<GuestRelateToOneForUpdateInput>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  purchasedAt?: InputMaybe<Scalars['DateTime']>;
  qty?: InputMaybe<Scalars['Int']>;
  sessionID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  ticketCode?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>;
  NOT?: InputMaybe<Array<TicketWhereInput>>;
  OR?: InputMaybe<Array<TicketWhereInput>>;
  event?: InputMaybe<EventWhereInput>;
  guest?: InputMaybe<GuestWhereInput>;
  id?: InputMaybe<IdFilter>;
  isCheckedIn?: InputMaybe<BooleanFilter>;
  price?: InputMaybe<IntNullableFilter>;
  purchasedAt?: InputMaybe<DateTimeNullableFilter>;
  qty?: InputMaybe<IntNullableFilter>;
  sessionID?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  ticketCode?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type TicketWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  activateToken?: Maybe<Array<ActivateToken>>;
  activateTokenCount?: Maybe<Scalars['Int']>;
  chatRequestReceived?: Maybe<Array<ChatRequest>>;
  chatRequestReceivedCount?: Maybe<Scalars['Int']>;
  chatRequestSent?: Maybe<Array<ChatRequest>>;
  chatRequestSentCount?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isMemberForm?: Maybe<Scalars['Boolean']>;
  isProfile?: Maybe<Scalars['Boolean']>;
  membership?: Maybe<Membership>;
  notification?: Maybe<Array<Notification>>;
  notificationCount?: Maybe<Scalars['Int']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
  passwordResetToken?: Maybe<PasswordState>;
  profile?: Maybe<Profile>;
  reportConcern?: Maybe<ReportConcern>;
  tickets?: Maybe<Array<Ticket>>;
  ticketsCount?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};


export type UserActivateTokenArgs = {
  cursor?: InputMaybe<ActivateTokenWhereUniqueInput>;
  orderBy?: Array<ActivateTokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ActivateTokenWhereInput;
};


export type UserActivateTokenCountArgs = {
  where?: ActivateTokenWhereInput;
};


export type UserChatRequestReceivedArgs = {
  cursor?: InputMaybe<ChatRequestWhereUniqueInput>;
  orderBy?: Array<ChatRequestOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ChatRequestWhereInput;
};


export type UserChatRequestReceivedCountArgs = {
  where?: ChatRequestWhereInput;
};


export type UserChatRequestSentArgs = {
  cursor?: InputMaybe<ChatRequestWhereUniqueInput>;
  orderBy?: Array<ChatRequestOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ChatRequestWhereInput;
};


export type UserChatRequestSentCountArgs = {
  where?: ChatRequestWhereInput;
};


export type UserCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type UserCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type UserNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: Array<NotificationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NotificationWhereInput;
};


export type UserNotificationCountArgs = {
  where?: NotificationWhereInput;
};


export type UserTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>;
  orderBy?: Array<TicketOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TicketWhereInput;
};


export type UserTicketsCountArgs = {
  where?: TicketWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  activateToken?: InputMaybe<ActivateTokenRelateToManyForCreateInput>;
  chatRequestReceived?: InputMaybe<ChatRequestRelateToManyForCreateInput>;
  chatRequestSent?: InputMaybe<ChatRequestRelateToManyForCreateInput>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  isMemberForm?: InputMaybe<Scalars['Boolean']>;
  isProfile?: InputMaybe<Scalars['Boolean']>;
  membership?: InputMaybe<MembershipRelateToOneForCreateInput>;
  notification?: InputMaybe<NotificationRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileRelateToOneForCreateInput>;
  reportConcern?: InputMaybe<ReportConcernRelateToOneForCreateInput>;
  tickets?: InputMaybe<TicketRelateToManyForCreateInput>;
  userName?: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  isEmailVerified?: InputMaybe<OrderDirection>;
  isMemberForm?: InputMaybe<OrderDirection>;
  isProfile?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  userName?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  activateToken?: InputMaybe<ActivateTokenRelateToManyForUpdateInput>;
  chatRequestReceived?: InputMaybe<ChatRequestRelateToManyForUpdateInput>;
  chatRequestSent?: InputMaybe<ChatRequestRelateToManyForUpdateInput>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  isMemberForm?: InputMaybe<Scalars['Boolean']>;
  isProfile?: InputMaybe<Scalars['Boolean']>;
  membership?: InputMaybe<MembershipRelateToOneForUpdateInput>;
  notification?: InputMaybe<NotificationRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileRelateToOneForUpdateInput>;
  reportConcern?: InputMaybe<ReportConcernRelateToOneForUpdateInput>;
  tickets?: InputMaybe<TicketRelateToManyForUpdateInput>;
  userName?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  activateToken?: InputMaybe<ActivateTokenManyRelationFilter>;
  chatRequestReceived?: InputMaybe<ChatRequestManyRelationFilter>;
  chatRequestSent?: InputMaybe<ChatRequestManyRelationFilter>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  isEmailVerified?: InputMaybe<BooleanFilter>;
  isMemberForm?: InputMaybe<BooleanFilter>;
  isProfile?: InputMaybe<BooleanFilter>;
  membership?: InputMaybe<MembershipWhereInput>;
  notification?: InputMaybe<NotificationManyRelationFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  profile?: InputMaybe<ProfileWhereInput>;
  reportConcern?: InputMaybe<ReportConcernWhereInput>;
  tickets?: InputMaybe<TicketManyRelationFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  membership?: InputMaybe<MembershipWhereUniqueInput>;
  profile?: InputMaybe<ProfileWhereUniqueInput>;
  reportConcern?: InputMaybe<ReportConcernWhereUniqueInput>;
  userName?: InputMaybe<Scalars['String']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type YouTubeLink = {
  __typename?: 'YouTubeLink';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventHistory?: Maybe<EventHistory>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type YouTubeLinkCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  eventHistory?: InputMaybe<EventHistoryRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type YouTubeLinkManyRelationFilter = {
  every?: InputMaybe<YouTubeLinkWhereInput>;
  none?: InputMaybe<YouTubeLinkWhereInput>;
  some?: InputMaybe<YouTubeLinkWhereInput>;
};

export type YouTubeLinkOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type YouTubeLinkRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<YouTubeLinkWhereUniqueInput>>;
  create?: InputMaybe<Array<YouTubeLinkCreateInput>>;
};

export type YouTubeLinkRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<YouTubeLinkWhereUniqueInput>>;
  create?: InputMaybe<Array<YouTubeLinkCreateInput>>;
  disconnect?: InputMaybe<Array<YouTubeLinkWhereUniqueInput>>;
  set?: InputMaybe<Array<YouTubeLinkWhereUniqueInput>>;
};

export type YouTubeLinkUpdateArgs = {
  data: YouTubeLinkUpdateInput;
  where: YouTubeLinkWhereUniqueInput;
};

export type YouTubeLinkUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  eventHistory?: InputMaybe<EventHistoryRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type YouTubeLinkWhereInput = {
  AND?: InputMaybe<Array<YouTubeLinkWhereInput>>;
  NOT?: InputMaybe<Array<YouTubeLinkWhereInput>>;
  OR?: InputMaybe<Array<YouTubeLinkWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventHistory?: InputMaybe<EventHistoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type YouTubeLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ActivateUserMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']>;
  data: UserUpdateInput;
}>;


export type ActivateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', isEmailVerified?: boolean | null } | null };

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', item: { __typename?: 'User', id: string, email?: string | null, userName?: string | null } } | null };

export type CompleteProfileMutationVariables = Exact<{
  where: ProfileWhereUniqueInput;
  data: ProfileUpdateInput;
}>;


export type CompleteProfileMutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'Profile', id: string, user?: { __typename?: 'User', isProfile?: boolean | null } | null } | null };

export type CreateActivateTokenMutationVariables = Exact<{
  data: ActivateTokenCreateInput;
}>;


export type CreateActivateTokenMutation = { __typename?: 'Mutation', createActivateToken?: { __typename?: 'ActivateToken', id: string } | null };

export type CreateChatRequestMutationVariables = Exact<{
  data: ChatRequestCreateInput;
}>;


export type CreateChatRequestMutation = { __typename?: 'Mutation', createChatRequest?: { __typename?: 'ChatRequest', id: string, message?: string | null, requesterWhatsApp?: number | null, read?: boolean | null, sender?: { __typename?: 'User', id: string } | null, receiver?: { __typename?: 'User', id: string } | null } | null };

export type CreateGuestTicketPurchaseMutationVariables = Exact<{
  data: GuestCreateInput;
}>;


export type CreateGuestTicketPurchaseMutation = { __typename?: 'Mutation', createGuest?: { __typename?: 'Guest', id: string, firstName?: string | null, lastName?: string | null, contact?: number | null, ticket?: Array<{ __typename?: 'Ticket', id: string, price?: number | null, qty?: number | null, ticketCode?: string | null, guest?: { __typename?: 'Guest', id: string } | null }> | null } | null };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, profile?: { __typename?: 'Profile', id: string, firstName?: string | null } | null, membership?: { __typename?: 'Membership', memberShipType?: string | null } | null } | null };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string } | null };

export type CreateUserTicketMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type CreateUserTicketMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type DeleteGuestsMutationVariables = Exact<{
  where: Array<GuestWhereUniqueInput> | GuestWhereUniqueInput;
}>;


export type DeleteGuestsMutation = { __typename?: 'Mutation', deleteGuests?: Array<{ __typename?: 'Guest', firstName?: string | null } | null> | null };

export type DeleteTicketsMutationVariables = Exact<{
  where: Array<TicketWhereUniqueInput> | TicketWhereUniqueInput;
}>;


export type DeleteTicketsMutation = { __typename?: 'Mutation', deleteTickets?: Array<{ __typename?: 'Ticket', id: string } | null> | null };

export type FindUserByTokenQueryVariables = Exact<{
  Date?: InputMaybe<Scalars['DateTime']>;
  token?: InputMaybe<Scalars['String']>;
}>;


export type FindUserByTokenQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, activateToken?: Array<{ __typename?: 'ActivateToken', id: string }> | null }> | null };

export type RedeemUserPasswordResetTokenMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type RedeemUserPasswordResetTokenMutation = { __typename?: 'Mutation', redeemUserPasswordResetToken?: { __typename?: 'RedeemUserPasswordResetTokenResult', code: PasswordResetRedemptionErrorCode, message: string } | null };

export type SendUserPasswordResetLinkMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendUserPasswordResetLinkMutation = { __typename?: 'Mutation', sendUserPasswordResetLink: boolean };

export type Signin_MutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type Signin_MutationMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', item: { __typename?: 'User', id: string, email?: string | null, isProfile?: boolean | null, isMemberForm?: boolean | null, isEmailVerified?: boolean | null } } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', endSession: boolean };

export type UpdateGuestCreateTicketMutationVariables = Exact<{
  where: GuestWhereUniqueInput;
  data: GuestUpdateInput;
}>;


export type UpdateGuestCreateTicketMutation = { __typename?: 'Mutation', updateGuest?: { __typename?: 'Guest', id: string } | null };

export type UpdateIsReadNotificationMutationVariables = Exact<{
  where: NotificationWhereUniqueInput;
  data: NotificationUpdateInput;
}>;


export type UpdateIsReadNotificationMutation = { __typename?: 'Mutation', updateNotification?: { __typename?: 'Notification', isRead?: boolean | null } | null };

export type UpdateMembershipMutationVariables = Exact<{
  where: MembershipWhereUniqueInput;
  data: MembershipUpdateInput;
}>;


export type UpdateMembershipMutation = { __typename?: 'Mutation', updateMembership?: { __typename?: 'Membership', memberShipType?: string | null, hasPaidSubscription?: boolean | null, user?: { __typename?: 'User', id: string, email?: string | null, profile?: { __typename?: 'Profile', id: string } | null } | null } | null };

export type UpdateTicketMutationVariables = Exact<{
  where: TicketWhereUniqueInput;
  data: TicketUpdateInput;
}>;


export type UpdateTicketMutation = { __typename?: 'Mutation', updateTicket?: { __typename?: 'Ticket', id: string, isCheckedIn?: boolean | null } | null };

export type UpdateTicketStatusMutationVariables = Exact<{
  where: TicketWhereUniqueInput;
  data: TicketUpdateInput;
}>;


export type UpdateTicketStatusMutation = { __typename?: 'Mutation', updateTicket?: { __typename?: 'Ticket', id: string, status?: string | null } | null };

export type UpdateActivateTokenMutationVariables = Exact<{
  tokenId?: InputMaybe<Scalars['ID']>;
  data: ActivateTokenUpdateInput;
}>;


export type UpdateActivateTokenMutation = { __typename?: 'Mutation', updateActivateToken?: { __typename?: 'ActivateToken', id: string } | null };

export type UpdateUserIsProfileMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserIsProfileMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', isProfile?: boolean | null } | null };

export type UpdateUserMembershipMutationVariables = Exact<{
  where: MembershipWhereUniqueInput;
  data: MembershipUpdateInput;
}>;


export type UpdateUserMembershipMutation = { __typename?: 'Mutation', updateMembership?: { __typename?: 'Membership', memberShipType?: string | null } | null };

export type FindGuestByEmailQueryVariables = Exact<{
  where: GuestWhereInput;
}>;


export type FindGuestByEmailQuery = { __typename?: 'Query', guests?: Array<{ __typename?: 'Guest', id: string }> | null };

export type FindTicketBySessionIdQueryVariables = Exact<{
  where: TicketWhereInput;
}>;


export type FindTicketBySessionIdQuery = { __typename?: 'Query', tickets?: Array<{ __typename?: 'Ticket', id: string }> | null };

export type FindUserByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type FindUserByEmailQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string } | null };

export type FindUsernameOrEmailQueryVariables = Exact<{
  where: UserWhereInput;
}>;


export type FindUsernameOrEmailQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', userName?: string | null, email?: string | null }> | null };

export type FindUserProfileIdQueryVariables = Exact<{
  where: ProfileWhereInput;
}>;


export type FindUserProfileIdQuery = { __typename?: 'Query', profiles?: Array<{ __typename?: 'Profile', id: string }> | null };

export type ProfileQueryVariables = Exact<{
  where: ProfileWhereUniqueInput;
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: string, firstName?: string | null, lastName?: string | null, user?: { __typename?: 'User', id: string, email?: string | null, membership?: { __typename?: 'Membership', id: string, cellNumber?: number | null } | null } | null } | null };

export type GetUserProfilePictureQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserProfilePictureQuery = { __typename?: 'Query', user?: { __typename?: 'User', profile?: { __typename?: 'Profile', id: string, profilePicture?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null };

export type GetActiveEventsQueryVariables = Exact<{
  where: EventWhereInput;
}>;


export type GetActiveEventsQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, title?: string | null, description?: string | null, price?: number | null, startDate?: any | null, endDate?: any | null, eventThumbnail?: { __typename?: 'EventThubmnail', image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, address?: { __typename?: 'Address', streetName?: string | null, town?: string | null, city?: string | null, postalCode?: number | null, province?: string | null } | null }> | null };

export type GetEventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type GetEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, title?: string | null, description?: string | null, price?: number | null, startDate?: any | null, endDate?: any | null, eventThumbnail?: { __typename?: 'EventThubmnail', image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, address?: { __typename?: 'Address', streetName?: string | null, town?: string | null, city?: string | null, postalCode?: number | null, province?: string | null } | null } | null };

export type EventHistoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type EventHistoriesQuery = { __typename?: 'Query', eventHistories?: Array<{ __typename?: 'EventHistory', id: string, display?: boolean | null, comments?: Array<{ __typename?: 'Comment', comment?: string | null, id: string, likeCount?: number | null, user?: { __typename?: 'User', userName?: string | null } | null }> | null, event?: { __typename?: 'Event', title?: string | null } | null, galleryImages?: Array<{ __typename?: 'GalleryImage', id: string, title?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null }> | null, youtubeLink?: Array<{ __typename?: 'YouTubeLink', title?: string | null, id: string, url?: string | null, description?: string | null }> | null }> | null };

export type GetGalleryImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGalleryImagesQuery = { __typename?: 'Query', galleryImages?: Array<{ __typename?: 'GalleryImage', id: string, title?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null }> | null };

export type GetMemberProfileQueryVariables = Exact<{
  where: ProfileWhereUniqueInput;
}>;


export type GetMemberProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: string, firstName?: string | null, lastName?: string | null, bio?: string | null, interests?: string | null, user?: { __typename?: 'User', id: string } | null, profilePicture?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null, photos?: Array<{ __typename?: 'ProfilePhoto', image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null }> | null, address?: { __typename?: 'Address', city?: string | null, province?: string | null } | null } | null };

export type GetMemberUsersQueryVariables = Exact<{
  where: UserWhereInput;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetMemberUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, profile?: { __typename?: 'Profile', id: string, firstName?: string | null, lastName?: string | null, bio?: string | null, interests?: string | null, profilePicture?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null, photos?: Array<{ __typename?: 'ProfilePhoto', image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null }> | null, address?: { __typename?: 'Address', city?: string | null, province?: string | null } | null } | null, membership?: { __typename?: 'Membership', memberShipType?: string | null } | null }> | null };

export type GetUnreadNotificationCountQueryVariables = Exact<{
  where: NotificationWhereInput;
}>;


export type GetUnreadNotificationCountQuery = { __typename?: 'Query', notificationsCount?: number | null };

export type GetUnreadNotificationsQueryVariables = Exact<{
  where: NotificationWhereInput;
}>;


export type GetUnreadNotificationsQuery = { __typename?: 'Query', notifications?: Array<{ __typename?: 'Notification', id: string, type?: string | null, icon?: string | null, title?: string | null, content?: string | null, createdAt?: any | null, actionText?: string | null, actionHref?: string | null }> | null };

export type GetUserAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAuthQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, userName?: string | null, email?: string | null, isProfile?: boolean | null, isEmailVerified?: boolean | null, isMemberForm?: boolean | null } | null };

export type GetUserMembershipTypeQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserMembershipTypeQuery = { __typename?: 'Query', user?: { __typename?: 'User', profile?: { __typename?: 'Profile', id: string } | null, membership?: { __typename?: 'Membership', memberShipType?: string | null } | null } | null };

export type GetUserPaymentInputQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserPaymentInputQuery = { __typename?: 'Query', user?: { __typename?: 'User', email?: string | null, profile?: { __typename?: 'Profile', firstName?: string | null, lastName?: string | null } | null, membership?: { __typename?: 'Membership', cellNumber?: number | null } | null } | null };

export type GetUserProfileQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserProfileQuery = { __typename?: 'Query', user?: { __typename?: 'User', profile?: { __typename?: 'Profile', id: string, bio?: string | null, age?: number | null, gender?: string | null, education?: string | null, occupation?: string | null, interests?: string | null, lookingFor?: string | null, profilePicture?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null, photos?: Array<{ __typename?: 'ProfilePhoto', image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null }> | null } | null } | null };

export type MyChatRequestsQueryVariables = Exact<{
  where: ChatRequestWhereInput;
}>;


export type MyChatRequestsQuery = { __typename?: 'Query', chatRequests?: Array<{ __typename?: 'ChatRequest', id: string, read?: boolean | null, requesterWhatsApp?: number | null, sender?: { __typename?: 'User', id: string } | null, receiver?: { __typename?: 'User', id: string } | null }> | null };

export type SearchUsersByUserNameQueryVariables = Exact<{
  where: UserWhereInput;
}>;


export type SearchUsersByUserNameQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, userName?: string | null }> | null };

export type UsersCountQueryVariables = Exact<{
  where: UserWhereInput;
}>;


export type UsersCountQuery = { __typename?: 'Query', usersCount?: number | null };

export type VerifyTicketQueryVariables = Exact<{
  where: TicketWhereInput;
}>;


export type VerifyTicketQuery = { __typename?: 'Query', tickets?: Array<{ __typename?: 'Ticket', id: string, ticketCode?: string | null, isCheckedIn?: boolean | null, event?: { __typename?: 'Event', title?: string | null, startDate?: any | null, address?: { __typename?: 'Address', streetName?: string | null, town?: string | null, city?: string | null, province?: string | null } | null } | null, user?: { __typename?: 'User', email?: string | null, profile?: { __typename?: 'Profile', firstName?: string | null, lastName?: string | null } | null } | null, guest?: { __typename?: 'Guest', firstName?: string | null, lastName?: string | null, email?: string | null } | null }> | null };


export const ActivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}}]}}]}}]} as unknown as DocumentNode<ActivateUserMutation, ActivateUserMutationVariables>;
export const AuthenticateUserWithPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateUserWithPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>;
export const CompleteProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProfile"}}]}}]}}]}}]} as unknown as DocumentNode<CompleteProfileMutation, CompleteProfileMutationVariables>;
export const CreateActivateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateActivateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActivateTokenCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createActivateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateActivateTokenMutation, CreateActivateTokenMutationVariables>;
export const CreateChatRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createChatRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatRequestCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChatRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"requesterWhatsApp"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChatRequestMutation, CreateChatRequestMutationVariables>;
export const CreateGuestTicketPurchaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGuestTicketPurchase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuestCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGuest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"ticket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"guest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ticketCode"}}]}}]}}]}}]} as unknown as DocumentNode<CreateGuestTicketPurchaseMutation, CreateGuestTicketPurchaseMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberShipType"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreateUserTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserTicketMutation, CreateUserTicketMutationVariables>;
export const DeleteGuestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGuests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuestWhereUniqueInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteGuests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]} as unknown as DocumentNode<DeleteGuestsMutation, DeleteGuestsMutationVariables>;
export const DeleteTicketsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTickets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketWhereUniqueInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTickets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTicketsMutation, DeleteTicketsMutationVariables>;
export const FindUserByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"Date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"activateToken"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"AND"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"activatedAt"},"value":{"kind":"NullValue"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"Date"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}}]}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"activateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FindUserByTokenQuery, FindUserByTokenQueryVariables>;
export const RedeemUserPasswordResetTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"redeemUserPasswordResetToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redeemUserPasswordResetToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RedeemUserPasswordResetTokenMutation, RedeemUserPasswordResetTokenMutationVariables>;
export const SendUserPasswordResetLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendUserPasswordResetLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendUserPasswordResetLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SendUserPasswordResetLinkMutation, SendUserPasswordResetLinkMutationVariables>;
export const Signin_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SIGNIN_MUTATION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isProfile"}},{"kind":"Field","name":{"kind":"Name","value":"isMemberForm"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<Signin_MutationMutation, Signin_MutationMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const UpdateGuestCreateTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGuestCreateTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuestWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuestUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGuest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateGuestCreateTicketMutation, UpdateGuestCreateTicketMutationVariables>;
export const UpdateIsReadNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateIsReadNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isRead"}}]}}]}}]} as unknown as DocumentNode<UpdateIsReadNotificationMutation, UpdateIsReadNotificationMutationVariables>;
export const UpdateMembershipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMembership"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MembershipWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MembershipUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMembership"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberShipType"}},{"kind":"Field","name":{"kind":"Name","value":"hasPaidSubscription"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMembershipMutation, UpdateMembershipMutationVariables>;
export const UpdateTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isCheckedIn"}}]}}]}}]} as unknown as DocumentNode<UpdateTicketMutation, UpdateTicketMutationVariables>;
export const UpdateTicketStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTicketStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateTicketStatusMutation, UpdateTicketStatusMutationVariables>;
export const UpdateActivateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateActivateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActivateTokenUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateActivateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateActivateTokenMutation, UpdateActivateTokenMutationVariables>;
export const UpdateUserIsProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserIsProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProfile"}}]}}]}}]} as unknown as DocumentNode<UpdateUserIsProfileMutation, UpdateUserIsProfileMutationVariables>;
export const UpdateUserMembershipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserMembership"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MembershipWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MembershipUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMembership"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberShipType"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>;
export const FindGuestByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindGuestByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuestWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FindGuestByEmailQuery, FindGuestByEmailQueryVariables>;
export const FindTicketBySessionIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findTicketBySessionID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tickets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FindTicketBySessionIdQuery, FindTicketBySessionIdQueryVariables>;
export const FindUserByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FindUserByEmailQuery, FindUserByEmailQueryVariables>;
export const FindUsernameOrEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUsernameOrEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<FindUsernameOrEmailQuery, FindUsernameOrEmailQueryVariables>;
export const FindUserProfileIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findUserProfileId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FindUserProfileIdQuery, FindUserProfileIdQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cellNumber"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const GetUserProfilePictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfilePicture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfilePictureQuery, GetUserProfilePictureQueryVariables>;
export const GetActiveEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"eventThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetName"}},{"kind":"Field","name":{"kind":"Name","value":"town"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveEventsQuery, GetActiveEventsQueryVariables>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"eventThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetName"}},{"kind":"Field","name":{"kind":"Name","value":"town"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const EventHistoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventHistories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventHistories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtubeLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<EventHistoriesQuery, EventHistoriesQueryVariables>;
export const GetGalleryImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGalleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetGalleryImagesQuery, GetGalleryImagesQueryVariables>;
export const GetMemberProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemberProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}}]}}]}}]}}]} as unknown as DocumentNode<GetMemberProfileQuery, GetMemberProfileQueryVariables>;
export const GetMemberUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemberUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberShipType"}}]}}]}}]}}]} as unknown as DocumentNode<GetMemberUsersQuery, GetMemberUsersQueryVariables>;
export const GetUnreadNotificationCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnreadNotificationCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationsCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}]}]}}]} as unknown as DocumentNode<GetUnreadNotificationCountQuery, GetUnreadNotificationCountQueryVariables>;
export const GetUnreadNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnreadNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"actionText"}},{"kind":"Field","name":{"kind":"Name","value":"actionHref"}}]}}]}}]} as unknown as DocumentNode<GetUnreadNotificationsQuery, GetUnreadNotificationsQueryVariables>;
export const GetUserAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isProfile"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isMemberForm"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserAuthQuery, GetUserAuthQueryVariables>;
export const GetUserMembershipTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserMembershipType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberShipType"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserMembershipTypeQuery, GetUserMembershipTypeQueryVariables>;
export const GetUserPaymentInputDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserPaymentInput"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellNumber"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserPaymentInputQuery, GetUserPaymentInputQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"occupation"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"lookingFor"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrlTransformed"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const MyChatRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyChatRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatRequestWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requesterWhatsApp"}}]}}]}}]} as unknown as DocumentNode<MyChatRequestsQuery, MyChatRequestsQueryVariables>;
export const SearchUsersByUserNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchUsersByUserName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<SearchUsersByUserNameQuery, SearchUsersByUserNameQueryVariables>;
export const UsersCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}]}]}}]} as unknown as DocumentNode<UsersCountQuery, UsersCountQueryVariables>;
export const VerifyTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tickets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ticketCode"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetName"}},{"kind":"Field","name":{"kind":"Name","value":"town"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"guest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isCheckedIn"}}]}}]}}]} as unknown as DocumentNode<VerifyTicketQuery, VerifyTicketQueryVariables>;