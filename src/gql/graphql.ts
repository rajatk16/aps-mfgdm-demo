/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO-8601 encoded UTC date string. */
  DateTime: { input: any; output: any; }
  /** Custom scalar which represents the list of user’s email address. */
  EmailAddress: { input: any; output: any; }
  /** Custom scalar which represents custom property values. */
  PropertyValue: { input: any; output: any; }
  /** Scalar which represents URL. */
  Url: { input: any; output: any; }
};

/** Input object for activating a hub member. */
export type ActivateHubMemberInput = {
  /** Email address associated with the Autodesk Account for the hub member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload for activating a hub member operation. */
export type ActivateHubMemberPayload = {
  __typename?: 'ActivateHubMemberPayload';
  /** Object representing the hub. */
  hub?: Maybe<Hub>;
  /** Details of the updated hub member. */
  member?: Maybe<HubMember>;
};

/** Input object for adding an EventListener. */
export type AddEventListenerInput = {
  /** The PubNub channel id used to receive the event notifications. */
  channelId: Scalars['String']['input'];
  /** The type of event to listen for. Note that a '*' notation is accepted to listen to multiple event types, (for example: 'autodesk.data.mfgdm:component.reservation.*-1.0.0'). */
  eventType: Scalars['String']['input'];
  /** An ISO-8601 encoded UTC date string indicating when the listener should stop receiving events. */
  expiration: Scalars['DateTime']['input'];
  /** ID of the target that the EventListener applies to (for example, a Component). */
  targetId: Scalars['ID']['input'];
};

/** Return payload for adding an EventListener. */
export type AddEventListenerPayload = {
  __typename?: 'AddEventListenerPayload';
  credentials?: Maybe<PubNubCredentials>;
  /** The PropertyReservation that was added. */
  eventListener: EventListener;
};

/** Input object for adding members to Folder-Level project member. */
export type AddFolderLevelProjectMembersInput = {
  /** Email addresses of members. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** Role of the members to be added in the Folder-Level project */
  memberRole: FolderRoleEnum;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on add FolderLevel project members operation. */
export type AddFolderLevelProjectMembersPayload = {
  __typename?: 'AddFolderLevelProjectMembersPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Input object for adding members to folder. */
export type AddFolderMembersInput = {
  /** Email addresses of members. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** ID of the folder. */
  folderId: Scalars['ID']['input'];
  /** Role of the members to be placed in the folder. */
  memberRole: FolderRoleEnum;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on add folder members operation. */
export type AddFolderMembersPayload = {
  __typename?: 'AddFolderMembersPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for adding members to group. */
export type AddGroupMembersInput = {
  /** Email addresses of members to be added. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** ID of the group. */
  groupId: Scalars['ID']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload for add members to group operation. */
export type AddGroupMembersPayload = {
  __typename?: 'AddGroupMembersPayload';
  /** Object representing the group. */
  group?: Maybe<Group>;
};

/** Input object for adding member groups to a folder. */
export type AddGroupsToFolderInput = {
  /** ID of the folder. */
  folderId: Scalars['ID']['input'];
  /** List of IDs of the member groups to be added to the folder. */
  groupIds: Array<Scalars['ID']['input']>;
  /** Role of the member groups in folder. */
  groupRole: FolderRoleEnum;
  /** ID of the Folder-Level project. */
  projectId: Scalars['ID']['input'];
};

/** Input object for adding member groups to a Folder-Level project. */
export type AddGroupsToFolderLevelProjectInput = {
  /** List of IDs of the member groups to be added to the Folder-Level project. */
  groupIds: Array<Scalars['ID']['input']>;
  /** Role of the member groups in Folder-Level project. */
  groupRole: FolderRoleEnum;
  /** ID of the Folder-Level project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on add groups to Folder-Level project operation. */
export type AddGroupsToFolderLevelProjectPayload = {
  __typename?: 'AddGroupsToFolderLevelProjectPayload';
  /** Object representing the Folder-Level project. */
  project?: Maybe<Project>;
};

/** Return payload on add groups to folder operation. */
export type AddGroupsToFolderPayload = {
  __typename?: 'AddGroupsToFolderPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for adding members to hub. */
export type AddHubMembersInput = {
  /** Email addresses of members. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload on add hub members operation. */
export type AddHubMembersPayload = {
  __typename?: 'AddHubMembersPayload';
  /** ID of the hub. */
  hub?: Maybe<Hub>;
};

/** Input object for adding members to a legacy project. */
export type AddLegacyProjectMembersInput = {
  /** Email addresses of members. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
  /** Role of the invited members. */
  role: ProjectMemberRoleEnum;
};

/** Return payload on add legacy project members operation. */
export type AddLegacyProjectMembersPayload = {
  __typename?: 'AddLegacyProjectMembersPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Input object for adding a PropertyReservation. */
export type AddPropertyReservationInput = {
  /** Time at which the reservation will expire. */
  expiration?: InputMaybe<Scalars['DateTime']['input']>;
  /** The kind of PropertyReservation. */
  kind: PropertyReservationKindEnum;
  /** The ID of the PropertyDefinition that contains the Property, if applicable. */
  propertyDefinitionId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the property. */
  propertyName: Scalars['String']['input'];
  /** An identifier for the session, to be used to maintain the PropertyReservation across different interactions. */
  sessionId: Scalars['ID']['input'];
  /** ID of the target that the property applies to (for example, a Component or a Drawing). */
  targetId: Scalars['ID']['input'];
  /** Optional value for the PropertyReservation, representing the value that would be set on the property. */
  value?: InputMaybe<Scalars['PropertyValue']['input']>;
};

/** Return payload for adding a PropertyReservation. */
export type AddPropertyReservationPayload = {
  __typename?: 'AddPropertyReservationPayload';
  /** The PropertyReservation that was added. */
  reservation: PropertyReservation;
};

/** Object representing an application. */
export type Application = {
  __typename?: 'Application';
  /** ID of the application. */
  id: Scalars['ID']['output'];
  /** Name of the application. */
  name: Scalars['String']['output'];
  /** Email ID of the application owner. */
  owner: Scalars['String']['output'];
  /** List of property definition collections associated with the application. */
  propertyDefinitionCollections: PropertyDefinitionCollections;
};


/** Object representing an application. */
export type ApplicationPropertyDefinitionCollectionsArgs = {
  filter?: InputMaybe<PropertyDefinitionCollectionFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Input for archiving a project in a hub. */
export type ArchiveProjectInput = {
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload for archiving a project operation. */
export type ArchiveProjectPayload = {
  __typename?: 'ArchiveProjectPayload';
  /** An object representing the project that was updated. */
  project?: Maybe<Project>;
};

/** Input for archiving a property definition. */
export type ArchivePropertyDefinitionInput = {
  /** The ID of a property definition. */
  propertyDefinitionId: Scalars['ID']['input'];
};

/** Response of ``archive`` property definition operation. */
export type ArchivePropertyDefinitionPayload = {
  __typename?: 'ArchivePropertyDefinitionPayload';
  /** Archived property definition object. */
  propertyDefinition: PropertyDefinition;
};

/** Input object for assign partNumber. */
export type AssignPartNumberInput = {
  /** componentId of the document */
  componentId: Scalars['ID']['input'];
  /** The partNumber that needs to be assigned */
  partNumber: Scalars['String']['input'];
};

/** Return payload for assign partNumber. */
export type AssignPartNumberPayload = {
  __typename?: 'AssignPartNumberPayload';
  /** The updated component */
  component: Component;
};

/** An object representing a bill of materials for a product. */
export type Bom = {
  __typename?: 'BOM';
  /** An enum value indicating the state of the BOM, such as WORKING or RELEASED. */
  bomComposition?: Maybe<BomCompositionEnum>;
  /** The top-level item in the BOM, typically representing the final product or major assembly. */
  rootBOMItem?: Maybe<BomItemResult>;
  /** A URL that provides a direct link to access the BOM in Fusion Team. */
  shareLink?: Maybe<Scalars['Url']['output']>;
};

/** An enum value indicating the state of the BOM. */
export enum BomCompositionEnum {
  /** BOM for the most recently released version of this design. This can vary, depending on referenced components and other factors. Available only to Fusion Manage Extension subscribers. */
  Released = 'RELEASED',
  /** BOM for the design you are currently working on and have saved. */
  Working = 'WORKING'
}

/** An object representing an item in the bill of materials in the context of a given parent item. It can be a part, an assembly, a sub-assembly or an end product which is the very top-level with no parent above it. */
export type BomItem = {
  __typename?: 'BOMItem';
  /** The date and time used for traversing the BOM. */
  baselineTime?: Maybe<Scalars['DateTime']['output']>;
  /** Contains an array of immediate child BOMItem objects, representing sub-assemblies or parts required to create this BOM item. */
  children: BomItems;
  /** The version of the component which is associated to this BOM item. */
  componentVersion?: Maybe<ComponentVersion>;
  /**
   * Indicates whether this Bill of Materials (BOM) item has child items.
   * - ``true``: The BOM item has one or more child items.
   * - ``false``: The BOM item does not have any child items and represents a leaf in the BOM structure.
   */
  hasChildren?: Maybe<Scalars['Boolean']['output']>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /**
   * ``true`` : This item is external component in an assembly.
   * ``false`` : This item is not external component in an assembly.
   */
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  /** The parent item, used to establish and navigate the hierarchy within the BOM. */
  parentItem?: Maybe<BomItemResult>;
  /** Represents the number of this item required to manufacture a single unit of the parent item. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** An object representing an item in the bill of materials (BOM). It can be a part, an assembly, a sub-assembly or an end product which is the very top-level with no parent above it. */
export type BomItemAtTime = {
  __typename?: 'BOMItemAtTime';
  /** Contains a flat list of all BOM relations for this BOM item for a specific depth (default is 1, first level BOM relations) */
  allBOMRelations: BomRelations;
  /**
   * Retrieves Base Properties present on BOM item.
   * Pagination is currently not supported, the API will return all available base properties without pagination.
   */
  baseProperties?: Maybe<Properties>;
  /**
   * Retrieves custom properties present on a BOM item.
   * Pagination is currently not supported, the API will return all available custom properties without pagination.
   */
  customProperties?: Maybe<Properties>;
  /** Description */
  description: Scalars['String']['output'];
  /**
   * Indicates whether this Bill of Materials (BOM) item has child items.
   * ``true``: The BOM item has one or more child items.
   * ``false``: The BOM item does not have any child items and represents a leaf in the BOM structure.
   */
  hasChildren?: Maybe<Scalars['Boolean']['output']>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /** Part number */
  partNumber: Scalars['String']['output'];
  /** The date and time used for traversing the BOM item */
  timestamp: Scalars['DateTime']['output'];
};


/** An object representing an item in the bill of materials (BOM). It can be a part, an assembly, a sub-assembly or an end product which is the very top-level with no parent above it. */
export type BomItemAtTimeAllBomRelationsArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};


/** An object representing an item in the bill of materials (BOM). It can be a part, an assembly, a sub-assembly or an end product which is the very top-level with no parent above it. */
export type BomItemAtTimeBasePropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** An object representing an item in the bill of materials (BOM). It can be a part, an assembly, a sub-assembly or an end product which is the very top-level with no parent above it. */
export type BomItemAtTimeCustomPropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** An object representing an error that occurs when a user does not have permission to access a specific level in the bill of materials. */
export type BomItemPermissionError = {
  __typename?: 'BOMItemPermissionError';
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An object representing one level in the bill of materials in the context of a given parent item. Can either contain a BOM item or an error message if the user does not have permission to access the BOM item. */
export type BomItemResult = BomItem | BomItemPermissionError;

/** Object representing list of BOM items. */
export type BomItems = {
  __typename?: 'BOMItems';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination: Pagination;
  /** An array of BOM items. */
  results: Array<Maybe<BomItemResult>>;
};

/** Object representing a BOM relation between parent and child BOM item */
export type BomRelation = {
  __typename?: 'BOMRelation';
  /** Object which represents the BOM item */
  bomItem: BomItemAtTime;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /** The parent item, used to establish and navigate the hierarchy within the BOM. */
  parentBOMItem?: Maybe<BomItemAtTime>;
  /** Represents the number of this item required to manufacture a single unit of the parent item. */
  quantity: Scalars['Int']['output'];
  /** Timestamp of this BOM relation */
  timestamp: Scalars['DateTime']['output'];
};

/** Object that contains an array of BOM relations */
export type BomRelations = {
  __typename?: 'BOMRelations';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination: Pagination;
  /** An array of BOM relations */
  results: Array<Maybe<BomRelation>>;
};

/**
 * Represents a basic item that does not contain components or drawings.
 *
 * A basic item is a container that stores data, information, settings, or commands used with a computer program.
 */
export type BasicItem = Item & {
  __typename?: 'BasicItem';
  /** An object representing the user who created this item. */
  createdBy?: Maybe<User>;
  /** Indicates when this item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** The ID that uniquely identifies the item. */
  id: Scalars['ID']['output'];
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this folder was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The folder that contains this item. */
  parentFolder?: Maybe<Folder>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** The most recent version of the item. */
  tipVersion?: Maybe<BasicItemVersion>;
  /**
   * An array containing objects that represent all versions of the item.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  versions?: Maybe<BasicItemVersions>;
};


/**
 * Represents a basic item that does not contain components or drawings.
 *
 * A basic item is a container that stores data, information, settings, or commands used with a computer program.
 */
export type BasicItemVersionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents a version of a basic item that does not contain components or drawings. */
export type BasicItemVersion = ItemVersion & {
  __typename?: 'BasicItemVersion';
  /** An object representing the user who created this version of the item. */
  createdBy?: Maybe<User>;
  /** Indicates when this version of the item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this version of the item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /** The main item resource that this is a version of. */
  item: BasicItem;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The mime type of the item. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** An object representing the project that contains this version of the item. */
  project?: Maybe<Project>;
  /** Version indicator of this item. */
  versionNumber?: Maybe<Scalars['Int']['output']>;
};

/** Contains a list of basic item versions returned in response to a query. */
export type BasicItemVersions = ItemVersions & {
  __typename?: 'BasicItemVersions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing versions of a basic item. */
  results: Array<Maybe<BasicItemVersion>>;
};

/** A generic bounding box. */
export type BoundingBox3D = {
  __typename?: 'BoundingBox3D';
  /** The z-direction of the box. */
  height?: Maybe<Property>;
  /** The x-direction of the box. */
  length?: Maybe<Property>;
  /** The y-direction of the box. */
  width?: Maybe<Property>;
};

/** Represents Component Ids in a bulk format for one document */
export type BulkComponentId = {
  __typename?: 'BulkComponentId';
  /** List of objects representing alternative component identifiers. */
  alternativeIdentifiers: Array<Maybe<ComponentAlternativeIdentifiers>>;
  /** The ID of the item associated with this document. */
  itemId: Scalars['ID']['output'];
  /** wipLineageUrn of the document. */
  wipLineageUrn: Scalars['ID']['output'];
};

/** Input object for getting component ids of Fusion document in bulk. */
export type BulkComponentIdInput = {
  /**
   * Array of f3dComponentIds to return as a result of a query.
   *
   * Can also just be empty [] meaning only root component is requested or
   * ["*"] meaning all the componentIds for that lineage are requested
   */
  f3dComponentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** wipLineageUrn of the document. */
  wipLineageUrn?: InputMaybe<Scalars['ID']['input']>;
};

/** Represents pagination and result of list of component Ids request. */
export type BulkComponentIds = {
  __typename?: 'BulkComponentIds';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** List of objects representing component Ids. */
  results: Array<Maybe<BulkComponentId>>;
};

/** Input object for changing folder member role. */
export type ChangeFolderLevelProjectMemberRoleInput = {
  /** Email address of member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** Role of the member to be modified in the folder. */
  memberRole: FolderRoleEnum;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on changing folder member role operation. */
export type ChangeFolderLevelProjectMemberRolePayload = {
  __typename?: 'ChangeFolderLevelProjectMemberRolePayload';
  /** Object representing the folder. */
  project?: Maybe<Project>;
};

/** Input object for changing folder member role. */
export type ChangeFolderMemberRoleInput = {
  /** Email address of member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the folder. If member role needed to be changed from sub-folders of Folder-Level project. */
  folderId: Scalars['ID']['input'];
  /** Role of the member to be modified in the folder. */
  memberRole: FolderRoleEnum;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on changing folder member role operation. */
export type ChangeFolderMemberRolePayload = {
  __typename?: 'ChangeFolderMemberRolePayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for changing the role of groups in a folder. */
export type ChangeGroupsRoleInFolderInput = {
  /** ID of the folder. */
  folderId: Scalars['ID']['input'];
  /** List of IDs of the member groups to be updated in the folder. */
  groupIds: Array<Scalars['ID']['input']>;
  /** Role of the member group in the folder. */
  groupRole: FolderRoleEnum;
  /** ID of the Folder-Level project. */
  projectId: Scalars['ID']['input'];
};

/** Input object for changing the role of groups in a Folder-Level project. */
export type ChangeGroupsRoleInFolderLevelProjectInput = {
  /** List of IDs of the member groups to be updated in the Folder-Level project. */
  groupIds: Array<Scalars['ID']['input']>;
  /** Role of the member group in the Folder-Level project. */
  groupRole: FolderRoleEnum;
  /** ID of the Folder-Level project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload for change groups' role in Folder-Level project operation. */
export type ChangeGroupsRoleInFolderLevelProjectPayload = {
  __typename?: 'ChangeGroupsRoleInFolderLevelProjectPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Return payload for change groups' role in folder operation. */
export type ChangeGroupsRoleInFolderPayload = {
  __typename?: 'ChangeGroupsRoleInFolderPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for updating a member's role in the hub. */
export type ChangeHubMemberRoleInput = {
  /** Email address associated with the Autodesk Account of the hub member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
  /** Role of the member in the hub. */
  role: HubMemberRoleEnum;
};

/** Return payload on update hub member role operation. */
export type ChangeHubMemberRolePayload = {
  __typename?: 'ChangeHubMemberRolePayload';
  /** Details of the updated hub member. */
  member?: Maybe<HubMember>;
};

/** Input object for updating a member's role in the legacy project. */
export type ChangeLegacyProjectMemberRoleInput = {
  /** Email address associated with the Autodesk account of the project member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
  /** Role of the member to be set in the project. */
  role: ProjectMemberRoleEnum;
};

/** Return payload on change legacy project member role operation. */
export type ChangeLegacyProjectMemberRolePayload = {
  __typename?: 'ChangeLegacyProjectMemberRolePayload';
  /** Details of the updated project member. */
  member?: Maybe<ProjectMember>;
};

/** Input object for changing a legacy project type. */
export type ChangeLegacyProjectTypeInput = {
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
  /** Project type to be updated. */
  projectType: LegacyProjectTypesEnum;
};

/** Return payload on update legacy project type operation. */
export type ChangeLegacyProjectTypePayload = {
  __typename?: 'ChangeLegacyProjectTypePayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/**
 * Represents a component.
 *
 * A component is an independent part of an assembly that acts as a single unit. For example, a lug-nut is an independent part (component) of a wheel assembly.
 *
 * A component serves as a container for a variety of design objects, including bodies, sketches, and construction geometry. See the blog post `Autodesk Fusion Bodies vs. Components <https://www.autodesk.com/products/fusion-360/blog/5-things-you-should-know-about-components-and-bodies/>`_ for more information on components.
 */
export type Component = {
  __typename?: 'Component';
  /**
   * Retrieves Base Properties present on Component.
   * Pagination is currently not supported, the API will return all available base properties without pagination.
   */
  baseProperties?: Maybe<Properties>;
  /** Indicates who created the component. */
  createdBy?: Maybe<User>;
  /**
   * Retrieves properties present on a component.
   * Pagination is currently not supported, the API will return all available custom properties without pagination.
   */
  customProperties?: Maybe<Properties>;
  /** The ID that uniquely identifies the component. */
  id: Scalars['ID']['output'];
  /** Boolean to indicate whether component is primary in its assigned part number group. */
  isPartNumberGroupPrimary?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Every Fusion assembly contains a single, default component that is referred to as the root component.
   *
   * ``true`` : This component is the root component in an assembly.
   *
   * ``false`` : This component is not the root component in an assembly.
   */
  isRoot?: Maybe<Scalars['Boolean']['output']>;
  /** Fusion Manage extension fields. */
  manage?: Maybe<ManageProperties>;
  /** A human-readable name to identify the component. */
  name?: Maybe<Scalars['String']['output']>;
  /** A short description of the component at tip. */
  partDescription?: Maybe<Scalars['String']['output']>;
  /** The part number of the component at tip. */
  partNumber?: Maybe<Scalars['String']['output']>;
  /** The most recent version of the component. */
  tipVersion?: Maybe<ComponentVersion>;
};


/**
 * Represents a component.
 *
 * A component is an independent part of an assembly that acts as a single unit. For example, a lug-nut is an independent part (component) of a wheel assembly.
 *
 * A component serves as a container for a variety of design objects, including bodies, sketches, and construction geometry. See the blog post `Autodesk Fusion Bodies vs. Components <https://www.autodesk.com/products/fusion-360/blog/5-things-you-should-know-about-components-and-bodies/>`_ for more information on components.
 */
export type ComponentBasePropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a component.
 *
 * A component is an independent part of an assembly that acts as a single unit. For example, a lug-nut is an independent part (component) of a wheel assembly.
 *
 * A component serves as a container for a variety of design objects, including bodies, sketches, and construction geometry. See the blog post `Autodesk Fusion Bodies vs. Components <https://www.autodesk.com/products/fusion-360/blog/5-things-you-should-know-about-components-and-bodies/>`_ for more information on components.
 */
export type ComponentCustomPropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents alternative identifiers of a Component, such as f3dComponentId and componentId pair */
export type ComponentAlternativeIdentifiers = {
  __typename?: 'ComponentAlternativeIdentifiers';
  /** The ID that uniquely identifies the component. */
  componentId: Scalars['ID']['output'];
  /** A persistent ID assigned by the application creating the model to uniquely identify the component. */
  f3dComponentId: Scalars['ID']['output'];
  /** Identifies if component is a root component for given document */
  isRoot: Scalars['Boolean']['output'];
};

/** Specifies how to filter Components. */
export type ComponentSearchInput = {
  /** RSQL filter to be used for advanced filtering. */
  advancedFilter?: InputMaybe<FilterInput>;
  /** Filters components which are created by a user. */
  createdBy?: InputMaybe<UserSearchInput>;
  /** Filters component based on the DesignItem IDs. */
  designItem?: InputMaybe<DesignItemSearchInput>;
  /** Filters components based on the DesignItemVersion IDs. */
  designItemVersion?: InputMaybe<DesignItemVersionSearchInput>;
  /** Filters components based on the parent folder. */
  folder?: InputMaybe<FolderSearchInput>;
  /** IDs of components to be filtered */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Used to filter root and non-root Components. */
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filters components which are modified by a user. */
  lastModifiedBy?: InputMaybe<UserSearchInput>;
  /** Used for filtering components based on their modification date. */
  lastModifiedOn?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filters components based on their manage properties. */
  manage?: InputMaybe<ManagePropertySearchInput>;
  /** Used for filtering components based on their name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Filters components based on the project. */
  project?: InputMaybe<ProjectSearchInput>;
};

/** Represents a version of a component. */
export type ComponentVersion = {
  __typename?: 'ComponentVersion';
  /** All Occurrences that are children of this ComponentVersion regardless of depth. */
  allOccurrences?: Maybe<Occurrences>;
  /** An object representing the alternative identifiers of this version of the component. */
  alternativeIdentifiers?: Maybe<ComponentVersionAlternativeIdentifiers>;
  /**
   * Retrieves Base Properties present on a ComponentVersion.
   * Pagination is currently not supported, the API will return all available base properties without pagination.
   */
  baseProperties?: Maybe<Properties>;
  /** Component related to this version. */
  component?: Maybe<Component>;
  /** Represents configuration row corresponding to this configuration member. */
  configurationRow?: Maybe<ConfigurationRow>;
  /** The version of the configured design that contains this configuration member. */
  configuredDesignItemVersion?: Maybe<ConfiguredDesignItemVersion>;
  /** Indicates who created this version of the component. */
  createdBy?: Maybe<User>;
  /**
   * Retrieves properties present on a ComponentVersion.
   * Pagination is currently not supported, the API will return all available custom properties without pagination.
   */
  customProperties?: Maybe<Properties>;
  /** List of derivatives including STEP, STL, and OBJ. */
  derivatives?: Maybe<Array<Maybe<Derivative>>>;
  /** The version of the Design Item that contains this version of the component. */
  designItemVersion?: Maybe<DesignItemVersion>;
  /** An object representing versions of 2D drawings of this component. */
  drawingVersions: DrawingVersions;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /**
   * A Configuration is a single variant within a Configured Design.
   * Go to `Configurations overview https://help.autodesk.com/view/fusion360/ENU/?guid=CFG-OVERVIEW` to learn more about Configurations.
   *
   * ``true`` : This component is a configuration member.
   *
   * ``false`` : This component is not a configuration member.
   */
  isConfiguration?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Milestones are used to identify that the design’s stage of development is important.
   *
   * ``true`` : This version is a milestone.
   *
   * ``false`` : This version is not a milestone.
   */
  isMilestone?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Every Fusion assembly contains a single, default component that is referred to as the root component.
   *
   * ``true`` : This component is the root component in an assembly.
   *
   * ``false`` : This component is not the root component in an assembly.
   */
  isRoot?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates who most recently modified this version of the component. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the component was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** Fusion Manage extension fields. */
  manage?: Maybe<ManagePropertiesOnVersion>;
  /** The name or names of the types of materials that make up this version of the component. */
  materialName?: Maybe<Scalars['String']['output']>;
  /** Milestone information */
  milestoneInformation?: Maybe<MilestoneInformation>;
  /** A human-readable name to identify the component. */
  name?: Maybe<Scalars['String']['output']>;
  /** Occurrences that are immediate children of this ComponentVersion. */
  occurrences: Occurrences;
  /** A short description of this version of the component. */
  partDescription?: Maybe<Scalars['String']['output']>;
  /** The part number assigned to this version of the component. */
  partNumber?: Maybe<Scalars['String']['output']>;
  /** Retrieves the physical properties (Mass, Volume, Density, Area and BoundingBox) of a ComponentVersion. */
  physicalProperties?: Maybe<PhysicalProperties>;
  /** An object representing a thumbnail of this version of the component. */
  thumbnail?: Maybe<Thumbnail>;
  /** The parent ComponentVersion objects that reference this ComponentVersion. This is the same as the 'Where Used' column when viewing an Item in Fusion Manage. */
  whereUsed: ComponentVersions;
};


/** Represents a version of a component. */
export type ComponentVersionAllOccurrencesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a version of a component. */
export type ComponentVersionBasePropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a version of a component. */
export type ComponentVersionCustomPropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a version of a component. */
export type ComponentVersionDerivativesArgs = {
  derivativeInput: DerivativeInput;
};


/** Represents a version of a component. */
export type ComponentVersionDrawingVersionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a version of a component. */
export type ComponentVersionOccurrencesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a version of a component. */
export type ComponentVersionWhereUsedArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Input object to filter tip component versions by alternate identifiers such as f3dComponentId. */
export type ComponentVersionAlternativeIdentifierSearchInput = {
  /** Used for filtering tip component versions by f3dComponentId. */
  f3dComponentId: Array<Scalars['String']['input']>;
};

/** An object representing the alternative identifiers of this version of the component. */
export type ComponentVersionAlternativeIdentifiers = {
  __typename?: 'ComponentVersionAlternativeIdentifiers';
  /**
   * A persistent ID assigned by the application creating the model to uniquely identify the component.
   *
   * For example, for Fusion 360 models, ``f3dComponentId`` contains the ID that Fusion 360 uses to identify a component. This ID is created with the component and does not change. This ID can be useful when you need to match up components referenced by the Manufacturing Data Model with the same components referenced by their native APIs (the Fusion 360 API in this case).
   */
  f3dComponentId?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter tip component versions. */
export type ComponentVersionSearchInput = {
  /** RSQL filter to be used for advanced filtering. */
  advancedFilter?: InputMaybe<FilterInput>;
  /** Used to filter tip component versions based on their alternate identifiers such as f3dComponentId. */
  alternativeIdentifiers?: InputMaybe<ComponentVersionAlternativeIdentifierSearchInput>;
  /** Filters component versions which are created by a user. */
  createdBy?: InputMaybe<UserSearchInput>;
  /** Filters tip component versions based on the DesignItem IDs. */
  designItem?: InputMaybe<DesignItemSearchInput>;
  /** Filters tip component versions based on the DesignItemVersion IDs. */
  designItemVersion?: InputMaybe<DesignItemVersionSearchInput>;
  /** Filters tip component versions based on the parent folder. */
  folder?: InputMaybe<FolderSearchInput>;
  /** IDs of tip component versions to be filtered. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Used to filter root and non-root tip component versions. */
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filters component versions which are modified by a user. */
  lastModifiedBy?: InputMaybe<UserSearchInput>;
  /** Used to filter tip component versions based on their modification date. */
  lastModifiedOn?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filters tip component versions based on their manage properties. */
  manage?: InputMaybe<ManagePropertySearchInput>;
  /** Used to filter tip component versions based on materialName */
  materialName?: InputMaybe<Scalars['String']['input']>;
  /** Used to filter tip component versions based on their name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Used to filter tip component versions based on their partDescription. */
  partDescription?: InputMaybe<Scalars['String']['input']>;
  /** Used to filter tip component versions based on their partNumber. */
  partNumber?: InputMaybe<Scalars['String']['input']>;
  /** Filters tip component versions based on the project. */
  project?: InputMaybe<ProjectSearchInput>;
};

/** Contains a list of component versions returned in response to a query. */
export type ComponentVersions = {
  __typename?: 'ComponentVersions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing versions of a component. */
  results: Array<Maybe<ComponentVersion>>;
};

/** Contains a list of components returned in response to a query. */
export type Components = {
  __typename?: 'Components';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing components. */
  results: Array<Maybe<Component>>;
};

/** An object representing the configuration row. */
export type ConfigurationRow = {
  __typename?: 'ConfigurationRow';
  /** A system-generated ID that uniquely identifies this configuration row in the table. */
  id: Scalars['ID']['output'];
  /** The name of this configuration row. */
  name: Scalars['String']['output'];
  /** An object representing the most updated version of configuration member for this configuration row. */
  rootConfigurationMember?: Maybe<ComponentVersion>;
};

/** An object representing the configuration table. */
export type ConfigurationTable = {
  __typename?: 'ConfigurationTable';
  /** An object representing the item that contains this configuration table. */
  configuredDesignItemVersion: ConfiguredDesignItemVersion;
  /** ID that uniquely identifies this configuration table in the design. */
  id: Scalars['ID']['output'];
  /** The name of this configuration table. */
  name: Scalars['String']['output'];
  /** An array of rows within this configuration table. */
  rows: Array<Maybe<ConfigurationRow>>;
};

/** Represents an item that contains configurations. */
export type ConfiguredDesignItem = Item & {
  __typename?: 'ConfiguredDesignItem';
  /** An object representing the user who created this item. */
  createdBy?: Maybe<User>;
  /** Indicates when this item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** Fusion Team URL of the ConfiguredDesignItem. */
  fusionWebUrl?: Maybe<Scalars['Url']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies the item. */
  id: Scalars['ID']['output'];
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The folder that contains this item. */
  parentFolder?: Maybe<Folder>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** An object representing the configuration table of most recent version of this item. */
  tipConfigurationTable: ConfigurationTable;
  /** The most recent version of the item. */
  tipVersion?: Maybe<ConfiguredDesignItemVersion>;
  /**
   * An array containing objects that represent all versions of the item.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  versions?: Maybe<ConfiguredDesignItemVersions>;
};


/** Represents an item that contains configurations. */
export type ConfiguredDesignItemVersionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents a version of an item that contains configurations. */
export type ConfiguredDesignItemVersion = ItemVersion & {
  __typename?: 'ConfiguredDesignItemVersion';
  /** An object representing the configuration table of this item. */
  configurationTable: ConfigurationTable;
  /** An object representing the user who created this version of the item. */
  createdBy?: Maybe<User>;
  /** Indicates when this version of the item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /** An object representing the main item that this is a version of. */
  item: ConfiguredDesignItem;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The mime type of the item. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** Version number of this item. */
  versionNumber?: Maybe<Scalars['Int']['output']>;
};

/** Contains a list of objects, where each object represents a version of a design item. */
export type ConfiguredDesignItemVersions = ItemVersions & {
  __typename?: 'ConfiguredDesignItemVersions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** Represents a version of an item that contains a product design. */
  results: Array<Maybe<ConfiguredDesignItemVersion>>;
};

/** Input object for copying a folder. */
export type CopyFolderInput = {
  /** ID of the destination folder. If not provided, then folder will be copied into the project. */
  destinationFolderId?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the project where the folder has to be copied. */
  destinationProjectId: Scalars['ID']['input'];
  /** ID of the folder to be copied. */
  sourceFolderId: Scalars['ID']['input'];
};

/** Return payload on copy folder operation. */
export type CopyFolderPayload = {
  __typename?: 'CopyFolderPayload';
  /** Object representing the copied folder. */
  folder?: Maybe<Folder>;
};

/** Input object for creating a design from a file. */
export type CreateDesignFromFileInput = {
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
  /** Name of the new file. If not provided, then name of the source file will be used to create new file. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the source file. */
  sourceItemId: Scalars['ID']['input'];
};

/** Return payload for creating a design from a file operation. */
export type CreateDesignFromFilePayload = {
  __typename?: 'CreateDesignFromFilePayload';
  /** Export job ID for creating a design from a file. */
  exportId: Scalars['ID']['output'];
};

/** Input object for creating a folder. */
export type CreateFolderInput = {
  /** Name of the folder. */
  name: Scalars['String']['input'];
  /** ID of the parent folder. If not provided, then folder will be created inside the project. */
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Input for creating a Folder-Level project. */
export type CreateFolderLevelProjectInput = {
  /** The ID that uniquely identifies the hub. */
  hubId: Scalars['ID']['input'];
  /** The ID that uniquely identifies the project. */
  name: Scalars['String']['input'];
};

/** Return payload on create Folder-Level project operation. */
export type CreateFolderLevelProjectPayload = {
  __typename?: 'CreateFolderLevelProjectPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Return payload for create folder operation. */
export type CreateFolderPayload = {
  __typename?: 'CreateFolderPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for creating a group of members. */
export type CreateGroupInput = {
  /** Email addresses of members to be added. */
  emailAddresses?: InputMaybe<Array<Scalars['EmailAddress']['input']>>;
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
  /** Name of the group to be created. */
  name: Scalars['String']['input'];
};

/** Return payload on create group operation. */
export type CreateGroupPayload = {
  __typename?: 'CreateGroupPayload';
  /** Object representing the group. */
  group?: Maybe<Group>;
};

/** Input for creating a legacy project. */
export type CreateLegacyProjectInput = {
  /** The ID that uniquely identifies the hub. */
  hubId: Scalars['ID']['input'];
  /** The ID that uniquely identifies the project. */
  name: Scalars['String']['input'];
  /** The type of the project. */
  type: LegacyProjectTypesEnum;
};

/** Return payload on create legacy project operation. */
export type CreateLegacyProjectPayload = {
  __typename?: 'CreateLegacyProjectPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Input for creating property definition collection. */
export type CreatePropertyDefinitionCollectionInput = {
  /** The description of the property definition collection. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the property definition collection. */
  name: Scalars['String']['input'];
};

/** Return payload on property definition collection creation. */
export type CreatePropertyDefinitionCollectionPayload = {
  __typename?: 'CreatePropertyDefinitionCollectionPayload';
  /** Object representing the property definition collection. */
  propertyDefinitionCollection: PropertyDefinitionCollection;
};

/** Input for creating a property definition. */
export type CreatePropertyDefinitionInput = {
  /** A short description of a property definition. */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Indicates if this property should appear in any software that displays properties using this API.
   *
   * This is a hint for the developer, and does not have an effect unless the developer has written code to expressly read and react to this field.
   */
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Indicates if this property should be read-only in any software that updates properties using this API.
   *
   * This is a hint for the developer, and does not have an effect unless the developer has written code to expressly read and react to this field.
   */
  isReadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name for uniquely identifying a property definition. */
  name: Scalars['String']['input'];
  /** Behavior of a property. */
  propertyBehavior: PropertyBehaviorEnum;
  /** The ID of a property definition collection. */
  propertyDefinitionCollectionId: Scalars['ID']['input'];
  /** Specifies expected behavior for the property on document data management operation like 'copy' in Autodesk authoring apps. Setting it to 'true' will copy the property along to the new document on such operations. */
  shouldCopy?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Specification of property definition.
   *
   * It represents the data type of a property definition.
   *
   * The supported data types include STRING, INTEGER, BOOLEAN, FLOAT, DISTANCE, DENSITY, MASS, VOLUME, AREA.
   */
  specification: Scalars['String']['input'];
};

/** Response of ``create`` property definition operation. */
export type CreatePropertyDefinitionPayload = {
  __typename?: 'CreatePropertyDefinitionPayload';
  /** Created property definition object. */
  propertyDefinition?: Maybe<PropertyDefinition>;
};

/** Input required for creating property definitions. */
export type CreatePropertyDefinitionsInput = {
  /** The ID of property definition collection. */
  propertyDefinitionCollectionId: Scalars['ID']['input'];
  /** List of property definitions to be created. */
  propertyDefinitionsInput: Array<PropertyDefinitionInput>;
};

/** Response of ``create`` property definitions operation. */
export type CreatePropertyDefinitionsPayload = {
  __typename?: 'CreatePropertyDefinitionsPayload';
  /** An array of created property definition objects. */
  propertyDefinitions: Array<PropertyDefinition>;
};

/** Input object for deactivating a hub member. */
export type DeactivateHubMemberInput = {
  /** Email address associated with the Autodesk Account of the hub member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload for deactivating a hub member operation. */
export type DeactivateHubMemberPayload = {
  __typename?: 'DeactivateHubMemberPayload';
  /** Object representing the hub. */
  hub?: Maybe<Hub>;
  /** Details of the updated hub member. */
  member?: Maybe<HubMember>;
};

/** Input object for deleting a folder. */
export type DeleteFolderInput = {
  /** ID of the folder to be deleted. */
  folderId: Scalars['ID']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload for delete folder operation. */
export type DeleteFolderPayload = {
  __typename?: 'DeleteFolderPayload';
  /** ID of the deleted folder. */
  folderId?: Maybe<Scalars['ID']['output']>;
};

/** Result of Derivative Service after Job gets processed for individual OutputFormatEnum. */
export type Derivative = {
  __typename?: 'Derivative';
  /** Time after which signed url will not usable. */
  expires?: Maybe<Scalars['String']['output']>;
  /** The ID that uniquely identifies the derivative. */
  id: Scalars['ID']['output'];
  /** The format of the generated derivatives. The supported format types include STEP, STL, and OBJ. */
  outputFormat: OutputFormatResponseEnum;
  /** The generated encoded URL. */
  signedUrl?: Maybe<Scalars['String']['output']>;
  /** Indicates the status of the derivative generation process. */
  status: DerivativeStatusEnum;
};

/** Inputs to control Derivative Service api execution. */
export type DerivativeInput = {
  /** Default: False; If True, trigger the creation of derivatives for any formats that don't exist in this array. */
  generate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default: []; If empty, return all AVAILABLE (already created) representations. */
  outputFormat?: InputMaybe<Array<InputMaybe<OutputFormatEnum>>>;
};

/** The Derivative availability states. */
export enum DerivativeStatusEnum {
  /** Derivative generation status is complete. */
  Complete = 'COMPLETE',
  /** Derivative generation failed. */
  Failed = 'FAILED',
  /** Derivative generation in progress. */
  InProgress = 'IN_PROGRESS',
  /** Derivative generation is not present. */
  NotGenerated = 'NOT_GENERATED',
  /** Derivative generation is pending. */
  Pending = 'PENDING',
  /** Derivative generation is successful. */
  Success = 'SUCCESS',
  /** Derivative generation process timed out. */
  Timeout = 'TIMEOUT'
}

/** Represents an item that contains a product design. */
export type DesignItem = Item & {
  __typename?: 'DesignItem';
  /** An object representing the user who created this item. */
  createdBy?: Maybe<User>;
  /** Indicates when this item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** Fusion Team URL of the DesignItem. */
  fusionWebUrl?: Maybe<Scalars['Url']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies the item. */
  id: Scalars['ID']['output'];
  /**
   * A Configuration is a single variant within a Configured Design.
   * Go to `Configurations overview https://help.autodesk.com/view/fusion360/ENU/?guid=CFG-OVERVIEW` to learn more about Configurations.
   *
   * ``true`` : This design item is a configuration member.
   *
   * ``false`` : This design item is not a configuration member.
   */
  isConfiguration?: Maybe<Scalars['Boolean']['output']>;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The folder that contains this item. */
  parentFolder?: Maybe<Folder>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** An object representing the top-level component of the design. */
  rootComponent?: Maybe<Component>;
  /** An object representing the thumbnail of most recent version of this item. */
  thumbnail?: Maybe<Thumbnail>;
  /** An object representing the most recent version of the top-level component of the design. */
  tipRootComponentVersion?: Maybe<ComponentVersion>;
  /** The most recent version of the item. */
  tipVersion?: Maybe<DesignItemVersion>;
  /**
   * An array containing objects that represent all versions of the item.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  versions?: Maybe<DesignItemVersions>;
};


/** Represents an item that contains a product design. */
export type DesignItemVersionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Input object to filter components and tip component versions by design item IDs. */
export type DesignItemSearchInput = {
  /** IDs of DesignItems that belongs to the same hub. */
  ids: Array<Scalars['ID']['input']>;
};

/** Represents a version of an item that contains a product design. */
export type DesignItemVersion = ItemVersion & {
  __typename?: 'DesignItemVersion';
  /** An object representing the user who created this version of the item. */
  createdBy?: Maybe<User>;
  /** Indicates when this version of the item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** Represents versions of an item, each containing 2D projected views of a design version. */
  drawingItemVersions?: Maybe<DrawingItemVersions>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /**
   * A Configuration is a single variant within a Configured Design.
   * Go to `Configurations overview https://help.autodesk.com/view/fusion360/ENU/?guid=CFG-OVERVIEW` to learn more about Configurations.
   *
   * ``true`` : This design item is a configuration member.
   *
   * ``false`` : This design item is not a configuration member.
   */
  isConfiguration?: Maybe<Scalars['Boolean']['output']>;
  /** An object representing the main item that this is a version of. */
  item: DesignItem;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The mime type of the item. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** An object representing the most recent version of the top-level component of the design. */
  rootComponentVersion: ComponentVersion;
  /** An object representing the thumbnail of this item. */
  thumbnail?: Maybe<Thumbnail>;
  /** Version number of this item. */
  versionNumber?: Maybe<Scalars['Int']['output']>;
};


/** Represents a version of an item that contains a product design. */
export type DesignItemVersionDrawingItemVersionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Input object to filter tip component versions by DesignItemVersion IDs. */
export type DesignItemVersionSearchInput = {
  /** IDs of DesignItemVersions that belongs to the same hub. */
  ids: Array<Scalars['ID']['input']>;
};

/** Contains a list of objects, where each object represents a version of a design item. */
export type DesignItemVersions = ItemVersions & {
  __typename?: 'DesignItemVersions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing versions of an item. */
  results: Array<Maybe<DesignItemVersion>>;
};

/** Represents a 2D drawing that contains projected views of a design. */
export type Drawing = {
  __typename?: 'Drawing';
  /**
   * Retrieves Base Properties of the Drawing.
   * Pagination is currently not supported, the API will return all available base properties without pagination.
   */
  baseProperties?: Maybe<Properties>;
  /** Indicates who created the drawing. */
  createdBy?: Maybe<User>;
  /**
   * Retrieves properties of the Drawing.
   * Pagination is currently not supported, the API will return all available custom properties without pagination.
   */
  customProperties?: Maybe<Properties>;
  /** A system-generated ID that uniquely identifies the drawing. */
  id: Scalars['ID']['output'];
  /** Fusion Manage extension fields. */
  manage?: Maybe<ManageProperties>;
  /** A human-readable name to identify the drawing. */
  name?: Maybe<Scalars['String']['output']>;
  /** The most recent version of the drawing. */
  tipVersion?: Maybe<DrawingVersion>;
};


/** Represents a 2D drawing that contains projected views of a design. */
export type DrawingBasePropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a 2D drawing that contains projected views of a design. */
export type DrawingCustomPropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents an item that contains 2D projected views of a product design. */
export type DrawingItem = Item & {
  __typename?: 'DrawingItem';
  /** An object representing the user who created this item. */
  createdBy?: Maybe<User>;
  /** Indicates when this item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** An object representing a 2D drawing that contains projected views of a design. */
  drawing: Drawing;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** Fusion Team URL of the DrawingItem. */
  fusionWebUrl?: Maybe<Scalars['Url']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies the item. */
  id: Scalars['ID']['output'];
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The folder that contains this item. */
  parentFolder?: Maybe<Folder>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** An object representing the thumbnail of most recent version of this item. */
  thumbnail?: Maybe<Thumbnail>;
  /** An object representing the most recent version of the drawing in the item. */
  tipDrawingVersion?: Maybe<DrawingVersion>;
  /** The most recent version of the item. */
  tipVersion?: Maybe<DrawingItemVersion>;
  /**
   * An array containing objects that represent all versions of the item.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  versions?: Maybe<DrawingItemVersions>;
};


/** Represents an item that contains 2D projected views of a product design. */
export type DrawingItemVersionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents a version of an item that contains 2D projected views of a product design. */
export type DrawingItemVersion = ItemVersion & {
  __typename?: 'DrawingItemVersion';
  /** An object representing the user who created this version of the item. */
  createdBy?: Maybe<User>;
  /** Indicates when this version of the item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** An object representing the version of the design item from which this drawing was created. */
  designItemVersion?: Maybe<DesignItemVersion>;
  /** What is the root product drawing? */
  drawingVersion?: Maybe<DrawingVersion>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /** An object representing a version of a 2D drawing that contains projected views of a version of a component. */
  item: DrawingItem;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The mime type of the item. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
  /** An object representing the thumbnail of this item. */
  thumbnail?: Maybe<Thumbnail>;
  /** Version number of this item. */
  versionNumber?: Maybe<Scalars['Int']['output']>;
};

/** Contains a list of objects, where each object represents a version of a drawing item that contains 2D projections of a component. */
export type DrawingItemVersions = ItemVersions & {
  __typename?: 'DrawingItemVersions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** Contains a list of objects, where each object represents a version of a drawing item that contains 2D projections of a component. */
  results: Array<Maybe<DrawingItemVersion>>;
};

/** Represents a version of a 2D drawing that contains projected views of a version of a component. */
export type DrawingVersion = {
  __typename?: 'DrawingVersion';
  /**
   * Retrieves Base Properties of the DrawingVersion.
   * Pagination is currently not supported, the API will return all available base properties without pagination.
   */
  baseProperties?: Maybe<Properties>;
  /** An object representing the component that is the subject of this drawing. */
  componentVersion?: Maybe<ComponentVersion>;
  /** Indicates who created this version of the drawing. */
  createdBy?: Maybe<User>;
  /**
   * Retrieves properties of the DrawingVersion.
   * Pagination is currently not supported, the API will return all available custom properties without pagination.
   */
  customProperties?: Maybe<Properties>;
  /** An object representing the drawing that this object is a version of. */
  drawing?: Maybe<Drawing>;
  /** An object representing the version of the drawing item that contains the drawing. */
  drawingItemVersion?: Maybe<DrawingItemVersion>;
  /** The ID that uniquely identifies the drawing. */
  id: Scalars['ID']['output'];
  /**
   * Milestones are used to identify that the design’s stage of development is important.
   *
   * ``true`` : This version of the design is a milestone.
   *
   * ``false`` : This version is not a milestone.
   */
  isMilestone?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates by whom this version of the drawing was most recently modified. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the drawing was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** Fusion Manage extension fields. */
  manage?: Maybe<ManagePropertiesOnVersion>;
  /** A human-readable name to identify the drawing. */
  name?: Maybe<Scalars['String']['output']>;
  /** An object representing a thumbnail of the component. */
  thumbnail?: Maybe<Thumbnail>;
};


/** Represents a version of a 2D drawing that contains projected views of a version of a component. */
export type DrawingVersionBasePropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** Represents a version of a 2D drawing that contains projected views of a version of a component. */
export type DrawingVersionCustomPropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Contains a list of object representing versions of drawings, typically returned in response to a query. */
export type DrawingVersions = {
  __typename?: 'DrawingVersions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing versions of drawings. */
  results?: Maybe<Array<DrawingVersion>>;
};

/** A data object that represents an EventListener. */
export type EventListener = {
  __typename?: 'EventListener';
  /** The PubNub channel id used to receive the event notifications. */
  channelId: Scalars['String']['output'];
  /** The type of event to listen for. Note that a '*' notation is accepted to listen to multiple event types, (for example: 'autodesk.data.mfgdm:component.reservation.*-1.0.0'). */
  eventType: Scalars['String']['output'];
  /** An ISO-8601 encoded UTC date string indicating when the listener should stop receiving events. */
  expiration: Scalars['DateTime']['output'];
  /** ID assigned to the EventListener. */
  id: Scalars['ID']['output'];
  /** ID of the target that the EventListener applies to (for example, a Component). */
  targetId: Scalars['ID']['output'];
};

/** Input object for getting the export status of a file. */
export type ExportStatusOfFileInput = {
  /** Export job ID for creating a design from a file. */
  exportId: Scalars['ID']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload for getting the export status of a file. */
export type ExportStatusOfFilePayload = {
  __typename?: 'ExportStatusOfFilePayload';
  /** The version of the Design Item for the file. This will be available when export is complete. */
  designItemVersion?: Maybe<DesignItemVersion>;
  /** Progress in percentage for creating a design from a file operation. */
  progress?: Maybe<Scalars['String']['output']>;
  /** An enum value indicating the status of creating a design from a file operation. */
  status?: Maybe<FileExportStatusEnum>;
};

/** An enum value indicating the File export status. */
export enum FileExportStatusEnum {
  /** Design creation failed. */
  Failed = 'FAILED',
  /** Design creation in progress. */
  InProgress = 'IN_PROGRESS',
  /** Design creation is successful. */
  Success = 'SUCCESS'
}

/** Specifies filter for Search Queries. */
export type FilterInput = {
  /** Query filter in RSQL format. */
  query: Scalars['String']['input'];
};

/**
 * Represents a folder.
 *
 * A folder is a location for storing files, data, and other folders (sub-folders).
 */
export type Folder = {
  __typename?: 'Folder';
  /** An object representing the user who created this folder. */
  createdBy?: Maybe<User>;
  /** Indicates when this folder was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Contains a list of folders that meet the specified filter criteria. You specify the filter criteria as an input to this field. Expand to see the inputs for this field.
   * @param {FolderFilterInput=} filter - Specifies how to filter on folders.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  folders?: Maybe<Folders>;
  /** Fusion Team URL of the folder. */
  fusionWebUrl?: Maybe<Scalars['Url']['output']>;
  /** An object representing the groups in this folder. */
  groups?: Maybe<Groups>;
  /** An object representing the hub that contains this folder. */
  hub?: Maybe<Hub>;
  /** The ID that uniquely identifies the folder. */
  id: Scalars['ID']['output'];
  /**
   * Contains a list of items that meet the specified filter criteria. You specify the filter criteria as an input to this field. Expand to see the inputs for this field.
   * @param {ItemFilterInput=} filter - Specifies how to filter the content of a folder.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  items?: Maybe<Items>;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this folder was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** An object representing the members in this folder. */
  members?: Maybe<FolderMembers>;
  /** A human-readable name to identify this folder. */
  name?: Maybe<Scalars['String']['output']>;
  /** Indicates the number items (folders and files) contained in this folder. */
  objectCount?: Maybe<Scalars['Int']['output']>;
  /** The folder that contains this folder. */
  parentFolder?: Maybe<Folder>;
  /** An object representing the project that contains this folder. */
  project?: Maybe<Project>;
};


/**
 * Represents a folder.
 *
 * A folder is a location for storing files, data, and other folders (sub-folders).
 */
export type FolderFoldersArgs = {
  filter?: InputMaybe<FolderFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a folder.
 *
 * A folder is a location for storing files, data, and other folders (sub-folders).
 */
export type FolderGroupsArgs = {
  filter?: InputMaybe<GroupsFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a folder.
 *
 * A folder is a location for storing files, data, and other folders (sub-folders).
 */
export type FolderItemsArgs = {
  filter?: InputMaybe<ItemFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a folder.
 *
 * A folder is a location for storing files, data, and other folders (sub-folders).
 */
export type FolderMembersArgs = {
  filter?: InputMaybe<FolderMemberFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Specifies how to filter folders. */
export type FolderFilterInput = {
  /** The name of the item you want to match. Currently, only exact matches are supported. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An object representing a member of a folder. */
export type FolderMember = {
  __typename?: 'FolderMember';
  /** An object represent the folder that the user is a member of. */
  folder: Folder;
  /** Role of the member in the folder. */
  role: FolderRoleEnum;
  /** The status of the folder member. */
  status: FolderMemberStatus;
  /** Basic details of the user. */
  user: User;
};

/** Input type for filtering folder members based on their name. */
export type FolderMemberFilterInput = {
  /** name of the member. */
  name: Scalars['String']['input'];
};

/** Folder member status. Only applicable for folder level projects. */
export enum FolderMemberStatus {
  /** Currently an active member. */
  Active = 'ACTIVE',
  /** Member is currently inactive. */
  Inactive = 'INACTIVE',
  /** Invitation sent, awaiting acceptance. */
  Pending = 'PENDING'
}

/** Represents pagination and result of list of folder members. */
export type FolderMembers = {
  __typename?: 'FolderMembers';
  /** Contains information about the next page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** List of objects representing folder members. */
  results?: Maybe<Array<FolderMember>>;
};

/** Types of folder member roles. */
export enum FolderRoleEnum {
  /** Administrator of the folder. All Manager permissions and can delete items forever. */
  Administrator = 'ADMINISTRATOR',
  /** Editor of the folder. All Reader permissions and can edit, upload, rename, move and delete. */
  Editor = 'EDITOR',
  /** Manager of the folder. All Editor permissions and can manage members and set access levels. */
  Manager = 'MANAGER',
  /** Reader of the folder. All Viewer permissions and can open with desktop, download and copy. */
  Reader = 'READER',
  /** Viewer of the folder. Can view files, folders, comments and people. */
  Viewer = 'VIEWER'
}

/** Input object to filter components and tip component versions by folder IDs. */
export type FolderSearchInput = {
  /** IDs of folders that belongs to the same hub. */
  ids: Array<Scalars['ID']['input']>;
};

/**
 * A list of Folders returned in response to a query.
 *
 * A folder contains items, such as designs and sub-folders.
 */
export type Folders = {
  __typename?: 'Folders';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing items. */
  results?: Maybe<Array<Folder>>;
};

/** Type Group Represents an object containing group information. */
export type Group = {
  __typename?: 'Group';
  /** The hub that this group belongs to. */
  hub: Hub;
  /** The ID that uniquely identifies the group. */
  id: Scalars['ID']['output'];
  /** The members of this group, with additional details. */
  members?: Maybe<GroupMembers>;
  /** Name of the group. */
  name?: Maybe<Scalars['String']['output']>;
  /** Role of the group in the folder or Folder-Level project. */
  role?: Maybe<FolderRoleEnum>;
};


/** Type Group Represents an object containing group information. */
export type GroupMembersArgs = {
  filter?: InputMaybe<GroupMemberFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Type GroupMember represents an information about the group member. */
export type GroupMember = {
  __typename?: 'GroupMember';
  /** An object representing the group that the user is a member of. */
  group: Group;
  /** The status of the group member. */
  status: FolderMemberStatus;
  /** Basic details of the user. */
  user: User;
};

/** Input type for filtering group members based on their name. */
export type GroupMemberFilterInput = {
  /** name of the member. */
  name: Scalars['String']['input'];
};

/** Represents pagination and result of list of group members. */
export type GroupMembers = {
  __typename?: 'GroupMembers';
  /** Contains information about the next page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** list of objects representing group members. */
  results: Array<GroupMember>;
};

/** Represents pagination and list of groups. */
export type Groups = {
  __typename?: 'Groups';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** List of objects representing groups. */
  results: Array<Group>;
};

/** Input type for filtering groups. */
export type GroupsFilterInput = {
  /** Filter the groups which contains the provided name. */
  name: Scalars['String']['input'];
};

/**
 * Represents a hub.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type Hub = {
  __typename?: 'Hub';
  /** Alternative identifiers for this hub. */
  alternativeIdentifiers?: Maybe<HubAlternativeIdentifiers>;
  /** Retrieves base property definition collections which are common across fusion users. */
  basePropertyDefinitionCollections: PropertyDefinitionCollections;
  /** Fusion Team URL of the hub. */
  fusionWebUrl?: Maybe<Scalars['Url']['output']>;
  /** An object representing the groups in this hub. Only applicable for Folder-Level projects in the hub. */
  groups?: Maybe<Groups>;
  /** The ID that uniquely identifies the hub. */
  id: Scalars['ID']['output'];
  /** An object representing the manage properties of hub. */
  manage?: Maybe<ManagePropertiesOnHub>;
  /** An object representing the members on this hub, with additional details */
  members: HubMembers;
  /** A human-readable name to identify the hub. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Contains a list of projects within the specified hub. Expand to see the inputs for this field.
   * @param {ProjectFilterInput=} filter - Specifies how to filter a list of projects. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  projects?: Maybe<Projects>;
  /** Retrieves property definition collections linked to the hub. */
  propertyDefinitionCollections: PropertyDefinitionCollections;
};


/**
 * Represents a hub.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type HubBasePropertyDefinitionCollectionsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a hub.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type HubGroupsArgs = {
  filter?: InputMaybe<GroupsFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a hub.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type HubMembersArgs = {
  filter?: InputMaybe<HubMemberFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a hub.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type HubProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a hub.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type HubPropertyDefinitionCollectionsArgs = {
  filter?: InputMaybe<PropertyDefinitionCollectionFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Alternative ways of referencing a hub. */
export type HubAlternativeIdentifiers = {
  __typename?: 'HubAlternativeIdentifiers';
  /** The ID of this hub when accessing it through forgeDM. */
  dataManagementAPIHubId: Scalars['ID']['output'];
};

/** Specifies how to filter hubs. */
export type HubFilterInput = {
  /** The name of the hub you want to match. Currently, only exact matches are supported. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An object representing a member of a hub. */
export type HubMember = {
  __typename?: 'HubMember';
  /** An object represent the hub that the user is a member of. */
  hub: Hub;
  /** Role of the member in the hub. */
  role: HubMemberRoleEnum;
  /** The status of the hub member. */
  status?: Maybe<HubMemberStatus>;
  /** Basic details of the user. */
  user: User;
};

/** Input type for filtering hub members based on their status. */
export type HubMemberFilterInput = {
  /** The status of the hub member. */
  status: HubMemberStatus;
};

/** Types of hub member roles. */
export enum HubMemberRoleEnum {
  /** Admin of the hub. This type of member is an administrator of the hub. */
  Admin = 'ADMIN',
  /** Guest of the hub. This type of member is a project contributor and is a member of certain projects only. */
  Guest = 'GUEST',
  /** Regular member of the hub. */
  User = 'USER'
}

/** Hub member status. */
export enum HubMemberStatus {
  /** Currently an active member of the hub. */
  Active = 'ACTIVE',
  /** Member is currently inactive. */
  Inactive = 'INACTIVE',
  /** Invitation sent, awaiting acceptance. */
  Preapproved = 'PREAPPROVED'
}

/** Represents pagination and result of list of hub members. */
export type HubMembers = {
  __typename?: 'HubMembers';
  /** Contains information about the next page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** List of objects representing hub members. */
  results: Array<HubMember>;
};

/**
 * Contains a list of hubs returned in response to a query.
 *
 * A hub is a container of projects, shared resources, and users with a common context.
 */
export type Hubs = {
  __typename?: 'Hubs';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing hubs. */
  results: Array<Maybe<Hub>>;
};

/**
 * Represents an Item.
 *
 * An item refers to a file or sub-folder that exists within a folder.
 */
export type Item = {
  /** An object representing the user who created this item. */
  createdBy?: Maybe<User>;
  /** Indicates when this item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this item. */
  hub?: Maybe<Hub>;
  /** The ID that uniquely identifies the item. */
  id: Scalars['ID']['output'];
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The folder that contains this item. */
  parentFolder?: Maybe<Folder>;
  /** An object representing the project that contains this item. */
  project?: Maybe<Project>;
};

/** Specifies how to filter folders and files. */
export type ItemFilterInput = {
  /** The type of the item you want to match. */
  itemType?: InputMaybe<ItemTypeEnum>;
  /** The name of the item you want to match. Currently, only exact matches are supported. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Represents the types of items supported. */
export enum ItemTypeEnum {
  /** Represents an item that contains a product design. */
  MfgDesignItem = 'MFG_DESIGN_ITEM',
  /** Represents an item that contains 2D projected views of a product design. */
  MfgDrawingItem = 'MFG_DRAWING_ITEM'
}

/** Represents a version of an item. */
export type ItemVersion = {
  /** An object representing the user who created this version of the item. */
  createdBy?: Maybe<User>;
  /** Indicates when this version of the item was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The extension type of the item. */
  extensionType?: Maybe<Scalars['String']['output']>;
  /** An object representing the hub that contains this version of the item. */
  hub?: Maybe<Hub>;
  /** A system-generated ID that uniquely identifies this object. */
  id: Scalars['ID']['output'];
  /** The main item resource that this is a version of. */
  item: Item;
  /** An object representing the user who made the most recent modification. */
  lastModifiedBy?: Maybe<User>;
  /** Indicates when this version of the item was most recently modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The mime type of the item. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** A human-readable name to identify this item. */
  name?: Maybe<Scalars['String']['output']>;
  /** An object representing the project that contains this version of the item. */
  project?: Maybe<Project>;
  /** Version indicator of this item. */
  versionNumber?: Maybe<Scalars['Int']['output']>;
};

/** Contains a list of item versions returned in response to a query. */
export type ItemVersions = {
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing versions of an item. */
  results: Array<Maybe<ItemVersion>>;
};

/**
 * Contains a list of items returned in response to a query.
 *
 * An item refers to a file or sub-folder that exists within a folder.
 */
export type Items = {
  __typename?: 'Items';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing items. */
  results?: Maybe<Array<Item>>;
};

/** Projects have different levels of visibility on the hub, content privacy, and membership restrictions based on the project type. */
export enum LegacyProjectTypesEnum {
  /** Projects of CLOSED project type are visible to Team Members and accessible only to project members. */
  Closed = 'CLOSED',
  /** Projects of OPEN project type are visible and accessible only to Team Members. */
  Open = 'OPEN',
  /** Projects of SECRET project type are visible and accessible only to project members. */
  Secret = 'SECRET'
}

/** Input object for linking property definition collection to a hub. */
export type LinkPropertyDefinitionCollectionInput = {
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
  /** ID of the property definition collection. */
  propertyDefinitionCollectionId: Scalars['ID']['input'];
};

/** Response of ``link`` property definition collection operation. */
export type LinkPropertyDefinitionCollectionPayload = {
  __typename?: 'LinkPropertyDefinitionCollectionPayload';
  /** Object representing hub. */
  hub: Hub;
  /** Object representing property definition collection. */
  propertyDefinitionCollection: PropertyDefinitionCollection;
};

/** Fusion Manage extension fields. */
export type ManageProperties = {
  __typename?: 'ManageProperties';
  /** A unique identifier, Item Number, is assigned by Fusion Manage Extension. */
  itemNumber?: Maybe<Scalars['String']['output']>;
  /** The URL to directly link to the Item in Fusion Manage Extension. */
  itemURL?: Maybe<Scalars['String']['output']>;
  /** The URN of the Item in Fusion Manage Extension. */
  itemURN?: Maybe<Scalars['String']['output']>;
  /** The state of the Fusion item in the product lifecycle. Valid values are ``Production``, ``Working``, and ``In Review``. These values are assigned by the Fusion Manage extension. */
  lifeCycle?: Maybe<Scalars['String']['output']>;
  /** The latest released revision of the Fusion item assigned by the Fusion Manage extension. It will have value ``w`` only for items that are managed but have never been released. */
  revision?: Maybe<Scalars['String']['output']>;
};

/** Represents ManageExtension properties of hub. */
export type ManagePropertiesOnHub = {
  __typename?: 'ManagePropertiesOnHub';
  /** Indicates whether the Hub is Manage Extension enabled. */
  isManageExtensionEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates the Manage Extension tenantId. Will be null if the hub is not Manage Extension enabled. */
  manageExtensionTenantId?: Maybe<Scalars['ID']['output']>;
};

/** Fusion Manage extension fields for versioned item. */
export type ManagePropertiesOnVersion = {
  __typename?: 'ManagePropertiesOnVersion';
  /** The ECO ‘affectedBy’ attribute assigned by the Fusion Manage extension. */
  changeOrder?: Maybe<Scalars['String']['output']>;
  /** The URL to directly link to the ECO item in Fusion Manage Extension. */
  changeOrderURL?: Maybe<Scalars['String']['output']>;
  /** The URN of the ECO item in Fusion Manage Extension. */
  changeOrderURN?: Maybe<Scalars['String']['output']>;
  /**
   * ``true`` : The version of the component is locked. So, it cannot be edited.
   *
   * ``false`` : The version of the component is not locked. So, it can be edited.
   */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /**
   * ``true`` : This version is a release candidate. The next version is to be released.
   *
   * ``false`` : This is version is not a release candidate.
   */
  isNextReleaseMilestone?: Maybe<Scalars['Boolean']['output']>;
  /** A number assigned to this version of the component to track it through its lifecycle. These values are typically assigned by product lifecycle management software such as the Fusion Manage extension. */
  itemNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The state of the component in the product lifecycle. Valid values are ``Production``, ``Working``, and ``In Review``. These values are typically assigned by product lifecycle management software such as the Fusion Manage extension.
   * @deprecated Use 'lifecycleState' to get the lifecycle state of the specific version. Use 'ManageProperties.lifecycle' to get the highest achieved lifecycle of the lineage.
   */
  lifeCycle?: Maybe<Scalars['String']['output']>;
  /** The lifecycle state of a particular design version. Valid values are ``Working``, ``Pre-Production``, ``Production``, and ``Obsolete`` */
  lifeCycleState?: Maybe<Scalars['String']['output']>;
  /** Indicates when the version was released. */
  releasedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The latest released revision of the component assigned by the Fusion Manage extension. It will have value ``w`` only for components that are managed but have never been released. */
  revision?: Maybe<Scalars['String']['output']>;
};

/** Input object to filter tip component versions by manage properties. */
export type ManagePropertySearchInput = {
  /** Used to filter tip component versions based on itemNumber property. */
  itemNumber?: InputMaybe<Scalars['String']['input']>;
  /** Used to filter tip component versions based on itemURN property. */
  itemURN?: InputMaybe<Scalars['String']['input']>;
  /** Used to filter tip component versions based on lifeCycle property. */
  lifeCycle?: InputMaybe<Scalars['String']['input']>;
};

/** Milestone information for a component version. */
export type MilestoneInformation = {
  __typename?: 'MilestoneInformation';
  /** Milestone description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Milestone name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Milestone type */
  type?: Maybe<MilestoneTypeEnum>;
};

/** An enum value for different milestone types. */
export enum MilestoneTypeEnum {
  /** Revision milestone is created when releasing a component version. */
  RevisionMilestone = 'REVISION_MILESTONE',
  /** Standard milestone. */
  StandardMilestone = 'STANDARD_MILESTONE'
}

/** Input object for moving a folder. */
export type MoveFolderInput = {
  /** ID of the destination folder. If not provided, then folder will be moved inside the project. */
  destinationFolderId?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the destination project. */
  destinationProjectId: Scalars['ID']['input'];
  /** ID of the folder to be moved. */
  folderId: Scalars['ID']['input'];
};

/** Return payload for move folder operation. */
export type MoveFolderPayload = {
  __typename?: 'MoveFolderPayload';
  /** Object representing the moved folder. */
  folder?: Maybe<Folder>;
};

/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Activate a hub member.
   * @param {ActivateHubMemberInput} input - Input object for activating a hub member.
   */
  activateHubMember?: Maybe<ActivateHubMemberPayload>;
  /**
   * Add an EventListener to a Target.
   * @param {AddEventListenerInput} input - Input object for adding an EventListener.
   */
  addEventListener?: Maybe<AddEventListenerPayload>;
  /**
   * Add members to a Folder-Level project.
   * @param {AddFolderLevelProjectMembersInput} input - Input object for adding members to a Folder-Level project.
   */
  addFolderLevelProjectMembers?: Maybe<AddFolderLevelProjectMembersPayload>;
  /**
   * Add folder members in a folder of a Folder-Level project.
   * @param {AddFolderMembersInput} input - Input object for adding members to a folder.
   */
  addFolderMembers?: Maybe<AddFolderMembersPayload>;
  /**
   * Add members to a group.
   * @param {AddGroupMembersInput} input - Input object for adding members to a group.
   */
  addGroupMembers?: Maybe<AddGroupMembersPayload>;
  /**
   * Add groups to a folder.
   * @param {AddGroupsToFolderInput} input - Input object for adding groups to a folder.
   */
  addGroupsToFolder?: Maybe<AddGroupsToFolderPayload>;
  /**
   * Add groups to a Folder-Level project.
   * @param {AddGroupsToFolderLevelProjectInput} input - Input object for adding groups to Folder-Level project.
   */
  addGroupsToFolderLevelProject?: Maybe<AddGroupsToFolderLevelProjectPayload>;
  /**
   * Add members to a hub.
   * @param {AddHubMembersInput} input - Input object for adding members to hub.
   */
  addHubMembers?: Maybe<AddHubMembersPayload>;
  /**
   * Add members to a legacy project.
   * @param {AddLegacyProjectMembersInput} input - Input object for adding members to a legacy project.
   */
  addLegacyProjectMembers?: Maybe<AddLegacyProjectMembersPayload>;
  /**
   * Add a PropertyReservation to a Property.
   * @param {AddPropertyReservationInput} input - Input object for adding a PropertyReservation.
   */
  addPropertyReservation: AddPropertyReservationPayload;
  /**
   * Archive a project in a hub.
   * @param {ArchiveProjectInput} input - Input for archiving a project in a hub.
   */
  archiveProject?: Maybe<ArchiveProjectPayload>;
  /**
   * Archives a property definition.
   * @param {ArchivePropertyDefinitionInput} input - The inputs needed to archive a property definition.
   */
  archivePropertyDefinition?: Maybe<ArchivePropertyDefinitionPayload>;
  /**
   * Assign the partNumber for given component
   * @param {AssignPartNumberInput} input - Input object for updating partNumber.
   */
  assignPartNumber: AssignPartNumberPayload;
  /**
   * Change the role of a Folder-Level project member.
   * @param {ChangeFolderLevelProjectMemberRoleInput} input - Input object for changing folder member role.
   */
  changeFolderLevelProjectMemberRole?: Maybe<ChangeFolderLevelProjectMemberRolePayload>;
  /**
   * Change the role of a folder member.
   * @param {ChangeFolderMemberRoleInput} input - Input object for changing folder member role.
   */
  changeFolderMemberRole?: Maybe<ChangeFolderMemberRolePayload>;
  /**
   * Change role of groups in a folder.
   * @param {ChangeGroupsRoleInFolderInput} input - Input object for changing the role of groups in a folder.
   */
  changeGroupsRoleInFolder?: Maybe<ChangeGroupsRoleInFolderPayload>;
  /**
   * Change role of groups in a Folder-Level project.
   * @param {ChangeGroupsRoleInFolderLevelProjectInput} input - Input object for changing the role of groups in a Folder-Level project.
   */
  changeGroupsRoleInFolderLevelProject?: Maybe<ChangeGroupsRoleInFolderLevelProjectPayload>;
  /**
   * Change hub member role.
   * @param {ChangeHubMemberRoleInput} input - Input object for changing a member's role in the hub.
   */
  changeHubMemberRole?: Maybe<ChangeHubMemberRolePayload>;
  /**
   * Change legacy project member role.
   * @param {ChangeLegacyProjectMemberRoleInput} input - Input object for changing a legacy project member's role.
   */
  changeLegacyProjectMemberRole?: Maybe<ChangeLegacyProjectMemberRolePayload>;
  /**
   * Change legacy project type.
   * @param {ChangeLegacyProjectTypeInput} input - Input object for updating a legacy project's type.
   */
  changeLegacyProjectType?: Maybe<ChangeLegacyProjectTypePayload>;
  /**
   * Copy a folder from a project or folder to another project or folder.
   * @param {CopyFolderInput} input - Input object for copying a folder.
   */
  copyFolder?: Maybe<CopyFolderPayload>;
  /**
   * Create design from a file.
   * @param {CreateDesignFromFileInput} input - Input object for creating a design from file.
   *
   * **Supported file formats:** Alias Files (\*.wire), AutoCAD DWG Files (\*.dwg), Autodesk Eagle Files (\*.sch \*.brd \*.lbr), Autodesk Fusion Archive Files (\*.f3d \*.f3z \*.fsch \*.fbrd \*.flbr \*.f2t), Autodesk Inventor Files (\*.iam \*.ipt), CATIA V5 Files (\*.CATProduct \*.CATPart), DXF Files (\*.dxf), FBX Files (\*.fbx), IGES Files (\*.ige \*.iges \*.igs), JT Files (\*.jt), NX Files (\*.prt), OBJ Files (\*.obj), Parasolid Binary Files (\*.x\_b), Parasolid Text Files (\*.x\_t), Pro/ENGlNEER and Creo Parametric Files (\*.asm\* \*.prt\*), Pro/ENGlNEER Granite Files (\*.g), Pro/ENGlNEER Neutral Files (\*.neu\*), Rhino Files (\*.3dm), SAT/SMT Files (\*.sab \*.sat \*.smb \*.smt), SketchUp Files (\*.skp), SolidEdge Files (\*.par \*.asm \*.psm), SolidWorks Files (\*.prt \*.asm \*.sldprt \*.sldasm), STEP Files (\*.ste, \*.step \*.stp), STL Files (\*.stl), 123D Files (\*.123dx), 3MF Files (\*.3mf)
   */
  createDesignFromFile?: Maybe<CreateDesignFromFilePayload>;
  /**
   * Create folder in a project or a sub-folder.
   * @param {CreateFolderInput} input - Input object for creating a folder.
   */
  createFolder?: Maybe<CreateFolderPayload>;
  /**
   * Create a Folder-Level project in a hub.
   * @param {CreateProjectInput} input - Input for creating a Folder-Level project.
   */
  createFolderLevelProject?: Maybe<CreateFolderLevelProjectPayload>;
  /**
   * Create a group of members.
   * @param {CreateMembersGroupInput} input - input object for creating a group of members.
   */
  createGroup?: Maybe<CreateGroupPayload>;
  /**
   * Create a legacy project in a hub.
   * @param {CreateLegacyProjectInput} input - Input for creating a legacy project.
   */
  createLegacyProject?: Maybe<CreateLegacyProjectPayload>;
  /**
   * Creates a property definition.
   * @param {CreatePropertyDefinitionInput} input - The inputs needed to create a property definition.
   */
  createPropertyDefinition?: Maybe<CreatePropertyDefinitionPayload>;
  /**
   * Creates a property definition collection.
   * @param {CreatePropertyDefinitionCollectionInput} input - The inputs needed to create a property definition collection.
   */
  createPropertyDefinitionCollection?: Maybe<CreatePropertyDefinitionCollectionPayload>;
  /**
   * Creates multiple property definitions in a property definition collection.
   * @param {CreatePropertyDefinitionsInput} input - The inputs needed to create property definitions.
   */
  createPropertyDefinitions?: Maybe<CreatePropertyDefinitionsPayload>;
  /**
   * Deactivate a hub member.
   * @param {DeactivateHubMemberInput} input - Input object for deactivating a hub member.
   */
  deactivateHubMember?: Maybe<DeactivateHubMemberPayload>;
  /**
   * Delete folder.
   * @param {DeleteFolderInput} input - Input object for deleting a folder.
   */
  deleteFolder?: Maybe<DeleteFolderPayload>;
  /**
   * Links a property definition collection to a hub.
   * @param {LinkPropertyDefinitionCollectionInput} input - The inputs needed to link the property definition collection.
   */
  linkPropertyDefinitionCollection?: Maybe<LinkPropertyDefinitionCollectionPayload>;
  /**
   * Move folder from a project or folder to another project or folder.
   * @param {MoveFolderInput} input - Input object for moving a folder.
   */
  moveFolder?: Maybe<MoveFolderPayload>;
  /**
   * Remove an EventListener to a Target.
   * @param {ID} eventListenerId - ID of the EventListener to remove.
   */
  removeEventListener?: Maybe<RemoveEventListenerPayload>;
  /**
   * Remove one or more members from Folder-Level project.
   * @param {RemoveFolderLevelProjectMembersInput} input - Input object for removing Folder-Level project members.
   */
  removeFolderLevelProjectMembers?: Maybe<RemoveFolderLevelProjectMembersPayload>;
  /**
   * Remove one or more members from the folder.
   * @param {RemoveFolderMembersInput} input - Input object for removing folder members.
   */
  removeFolderMembers?: Maybe<RemoveFolderMembersPayload>;
  /**
   * Remove groups from a folder of a Folder-Level project..
   * @param {RemoveGroupsFromFolderInput} input - Input object for removing groups from a folder.
   */
  removeGroupsFromFolder?: Maybe<RemoveGroupsFromFolderPayload>;
  /**
   * Remove groups from a Folder-Level project.
   * @param {RemoveGroupsFromFolderLevelProjectInput} input - Input object for removing groups from a Folder-Level project.
   */
  removeGroupsFromFolderLevelProject?: Maybe<RemoveGroupsFromFolderLevelProjectPayload>;
  /**
   * Remove a legacy project member.
   * @param {RemoveLegacyProjectMemberInput} input - Input object for removing a legacy project member.
   */
  removeLegacyProjectMember?: Maybe<RemoveLegacyProjectMemberPayload>;
  /**
   * Remove a PropertyReservation from a Property.
   * @param {RemovePropertyReservationInput} input - Input object for removing a PropertyReservation.
   */
  removePropertyReservation: RemovePropertyReservationPayload;
  /**
   * Rename a folder in a project.
   * @param {RenameFolderInput} input - Input object for renaming a folder in the project.
   */
  renameFolder?: Maybe<RenameFolderPayload>;
  /**
   * Rename a project.
   * @param {RenameProjectInput} input - Input object for renaming a project.
   */
  renameProject?: Maybe<RenameProjectPayload>;
  /**
   * Resend hub invitation.
   * @param {ResendHubInvitationInput} input - Input object for resending hub invitation to a member.
   */
  resendHubInvitation?: Maybe<ResendHubInvitationPayload>;
  /**
   * Restore a project in a hub.
   * @param {RestoreProjectInput} input - Input for restoring a project in a hub.
   */
  restoreProject?: Maybe<RestoreProjectPayload>;
  /**
   * Set the given component as the primary in its part number group.
   * @param {SetComponentAsPrimaryInput} input - Input object for updating primary component.
   */
  setComponentAsPrimary: SetComponentAsPrimaryPayload;
  /**
   * Sets properties of a given target.
   * @param {SetPropertiesInput} input - The inputs needed to set a property.
   */
  setProperties?: Maybe<SetPropertiesPayload>;
  /**
   * Temporarily added the mfg tag. Once the new tag for the mfgdm-core subgraph is created, it will be used.
   * Create a Folder-Level project in a hub.
   * @param {CreateProjectInput} input - Input for creating a Folder-Level project.
   */
  testMutation?: Maybe<TestPayload>;
  /**
   * Unlinks a property definition collection from a hub.
   * @param {UnlinkPropertyDefinitionCollectionInput} input - The inputs needed to unlink the property definition collection.
   */
  unlinkPropertyDefinitionCollection?: Maybe<UnlinkPropertyDefinitionCollectionPayload>;
  /**
   * Updates a property definition.
   * @param {UpdatePropertyDefinitionInput} input - The inputs needed to update the property definition.
   */
  updatePropertyDefinition?: Maybe<UpdatePropertyDefinitionPayload>;
  /**
   * Updates a property definition collection.
   * @param {UpdatePropertyDefinitionCollectionInput} input - The inputs needed to update a property definition collection.
   */
  updatePropertyDefinitionCollection?: Maybe<UpdatePropertyDefinitionCollectionPayload>;
  /**
   * Update the expiration of a PropertyReservation, to make sure that it is maintained and not removed.
   * @param {UpdatePropertyReservationExpirationInput} input - Input object for updating the expiration.
   */
  updatePropertyReservationExpiration: UpdatePropertyReservationPayload;
  /**
   * Update the value of a PropertyReservation.
   * @param {UpdatePropertyReservationValueInput} input - Input object for updating the value.
   */
  updatePropertyReservationValue: UpdatePropertyReservationPayload;
  /**
   * Withdraw hub invitation.
   * @param {WithdrawHubInvitationToMemberInput} input - Input object for withdrawing hub invitation to a member.
   */
  withdrawHubInvitation?: Maybe<WithdrawHubInvitationPayload>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationActivateHubMemberArgs = {
  input: ActivateHubMemberInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddEventListenerArgs = {
  input: AddEventListenerInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddFolderLevelProjectMembersArgs = {
  input: AddFolderLevelProjectMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddFolderMembersArgs = {
  input: AddFolderMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddGroupMembersArgs = {
  input: AddGroupMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddGroupsToFolderArgs = {
  input: AddGroupsToFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddGroupsToFolderLevelProjectArgs = {
  input: AddGroupsToFolderLevelProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddHubMembersArgs = {
  input: AddHubMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddLegacyProjectMembersArgs = {
  input: AddLegacyProjectMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAddPropertyReservationArgs = {
  input: AddPropertyReservationInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationArchiveProjectArgs = {
  input: ArchiveProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationArchivePropertyDefinitionArgs = {
  input: ArchivePropertyDefinitionInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationAssignPartNumberArgs = {
  input?: InputMaybe<AssignPartNumberInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeFolderLevelProjectMemberRoleArgs = {
  input: ChangeFolderLevelProjectMemberRoleInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeFolderMemberRoleArgs = {
  input: ChangeFolderMemberRoleInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeGroupsRoleInFolderArgs = {
  input: ChangeGroupsRoleInFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeGroupsRoleInFolderLevelProjectArgs = {
  input: ChangeGroupsRoleInFolderLevelProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeHubMemberRoleArgs = {
  input: ChangeHubMemberRoleInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeLegacyProjectMemberRoleArgs = {
  input: ChangeLegacyProjectMemberRoleInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationChangeLegacyProjectTypeArgs = {
  input: ChangeLegacyProjectTypeInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCopyFolderArgs = {
  input: CopyFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreateDesignFromFileArgs = {
  input: CreateDesignFromFileInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreateFolderArgs = {
  input: CreateFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreateFolderLevelProjectArgs = {
  input: CreateFolderLevelProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreateLegacyProjectArgs = {
  input: CreateLegacyProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreatePropertyDefinitionArgs = {
  input: CreatePropertyDefinitionInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreatePropertyDefinitionCollectionArgs = {
  input?: InputMaybe<CreatePropertyDefinitionCollectionInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationCreatePropertyDefinitionsArgs = {
  input: CreatePropertyDefinitionsInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationDeactivateHubMemberArgs = {
  input: DeactivateHubMemberInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationDeleteFolderArgs = {
  input: DeleteFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationLinkPropertyDefinitionCollectionArgs = {
  input?: InputMaybe<LinkPropertyDefinitionCollectionInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationMoveFolderArgs = {
  input: MoveFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemoveEventListenerArgs = {
  input: RemoveEventListenerInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemoveFolderLevelProjectMembersArgs = {
  input: RemoveFolderLevelProjectMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemoveFolderMembersArgs = {
  input: RemoveFolderMembersInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemoveGroupsFromFolderArgs = {
  input: RemoveGroupsFromFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemoveGroupsFromFolderLevelProjectArgs = {
  input: RemoveGroupsFromFolderLevelProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemoveLegacyProjectMemberArgs = {
  input: RemoveLegacyProjectMemberInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRemovePropertyReservationArgs = {
  input?: InputMaybe<RemovePropertyReservationInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRenameFolderArgs = {
  input: RenameFolderInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRenameProjectArgs = {
  input: RenameProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationResendHubInvitationArgs = {
  input: ResendHubInvitationInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationRestoreProjectArgs = {
  input: RestoreProjectInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationSetComponentAsPrimaryArgs = {
  input?: InputMaybe<SetComponentAsPrimaryInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationSetPropertiesArgs = {
  input: SetPropertiesInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationTestMutationArgs = {
  input: TestInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationUnlinkPropertyDefinitionCollectionArgs = {
  input?: InputMaybe<UnlinkPropertyDefinitionCollectionInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationUpdatePropertyDefinitionArgs = {
  input: UpdatePropertyDefinitionInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationUpdatePropertyDefinitionCollectionArgs = {
  input: UpdatePropertyDefinitionCollectionInput;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationUpdatePropertyReservationExpirationArgs = {
  input?: InputMaybe<UpdatePropertyReservationExpirationInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationUpdatePropertyReservationValueArgs = {
  input?: InputMaybe<UpdatePropertyReservationValueInput>;
};


/** The entry-point for Autodesk entity mutations. This acts as the top-level API from which all mutations must start. */
export type MutationWithdrawHubInvitationArgs = {
  input: WithdrawHubInvitationInput;
};

/**
 * Represents an occurrence of a version of a component.
 *
 * When a version of a component is inserted in an assembly, it is referred to as an occurrence of that component. An assembly can contain multiple occurrences of a version of a component.
 *
 * For example, consider a wheel that contains four lug-nuts. There are four occurrences of the component lug-nut in the wheel assembly.
 */
export type Occurrence = {
  __typename?: 'Occurrence';
  /** The version of the component of which this is an occurrence of. */
  componentVersion?: Maybe<ComponentVersion>;
  /** A system-generated ID that uniquely identifies the occurrence. */
  id: Scalars['ID']['output'];
  /**
   * ``true`` : At least one part that makes up the occurrence is referenced from an external file.
   *
   * ``false`` : All parts of the occurrence are local.
   */
  isDistributedDesign?: Maybe<Scalars['Boolean']['output']>;
  /** Component occurrences that are children of this occurrence. */
  occurrences: Occurrences;
  /** The version of the direct parent component of this occurrence. */
  parentComponentVersion?: Maybe<ComponentVersion>;
};


/**
 * Represents an occurrence of a version of a component.
 *
 * When a version of a component is inserted in an assembly, it is referred to as an occurrence of that component. An assembly can contain multiple occurrences of a version of a component.
 *
 * For example, consider a wheel that contains four lug-nuts. There are four occurrences of the component lug-nut in the wheel assembly.
 */
export type OccurrenceOccurrencesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/**
 * Contains a list of occurrences of a component, typically returned as a response to a query.
 *
 * When a version of a component is inserted in an assembly, it is referred to as an occurrence of that component. An assembly can contain multiple occurrences of a version of a component.
 *
 * For example, consider a wheel that contains four lug-nuts. There are four occurrences of the component lug-nut in the wheel assembly.
 */
export type Occurrences = {
  __typename?: 'Occurrences';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array of objects where each object represents an occurrence. */
  results: Array<Maybe<Occurrence>>;
};

/** Derivative Service will trigger job for OutputFormatEnum like STEP, STL etc. */
export enum OutputFormatEnum {
  /** OBJ Output Format. */
  Obj = 'OBJ',
  /** STEP Output Format. */
  Step = 'STEP',
  /** STL Output Format. */
  Stl = 'STL'
}

/** OutputFormat of the Derivative in the response. */
export enum OutputFormatResponseEnum {
  /** MTL Output Format. */
  Mtl = 'MTL',
  /** OBJ Output Format. */
  Obj = 'OBJ',
  /** STEP Output Format. */
  Step = 'STEP',
  /** STL Output Format. */
  Stl = 'STL',
  /** ZIP Output Format. */
  Zip = 'ZIP'
}

/** Contains information about the current page, when results are split into multiple pages. */
export type Pagination = {
  __typename?: 'Pagination';
  /** The address of the next page, if one exists. If the current page is the last page, ``cursor`` is ``null``. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The number of items in the response page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
};

/** Specifies how to split the response into multiple pages. */
export type PaginationInput = {
  /** Specifies what page to fetch. If you don't specify ``cursor``, fetches the first page. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** The maximum number of items to return in a page. The default value for ``limit`` varies from query to query. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** A group of components joined with a common part number */
export type PartNumberGroup = {
  __typename?: 'PartNumberGroup';
  /**
   * Indicates whether user has access to PNG
   * - ``true``: User has access
   * - ``false``: User does not have access
   */
  isAccessible?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Indicates whether the group exists
   * - ``true``: Group exists
   * - ``false``: Group does not exist
   */
  isExist?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Indicates whether the part number is represented in collection
   * - ``true``: Part number is represented
   * - ``false``: Part number is not represented
   */
  isRepresented?: Maybe<Scalars['Boolean']['output']>;
  /** The part number for this group */
  partNumber: Scalars['String']['output'];
};

/** Represents a physical property of a component version. */
export type PhysicalProperties = {
  __typename?: 'PhysicalProperties';
  /** Physical property : Area. */
  area?: Maybe<Property>;
  /** The bounding box of the Component, in system units (cm), relative to XXX coordinate system. */
  boundingBox?: Maybe<BoundingBox3D>;
  /** Physical property : Density. */
  density?: Maybe<Property>;
  /** Physical property : Mass. */
  mass?: Maybe<Property>;
  /** Indication whether the properties have been extracted, job running, error or completed successfully. */
  status: PhysicalPropertyStatusEnum;
  /** Physical property : Volume. */
  volume?: Maybe<Property>;
};

/** Physical Property generation status. */
export enum PhysicalPropertyStatusEnum {
  /** PhysicalProperty generation job cancelled, job gets auto submit again. */
  Cancelled = 'CANCELLED',
  /** PhysicalProperty generation job completed. */
  Completed = 'COMPLETED',
  /** PhysicalProperty generation job failed, job gets auto submit again. */
  Failed = 'FAILED',
  /** PhysicalProperty generation job is in execution. */
  InProgress = 'IN_PROGRESS',
  /** PhysicalProperty generation job is waiting for getting scheduled. */
  Queued = 'QUEUED',
  /** PhysicalProperty generation job scheduled. */
  Scheduled = 'SCHEDULED'
}

/**
 * Represents a project.
 *
 * A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.
 */
export type Project = {
  __typename?: 'Project';
  /** Alternative identifiers for this project. */
  alternativeIdentifiers?: Maybe<ProjectAlternativeIdentifiers>;
  /** An object representing the members of a Folder-Level project, with additional details */
  folderLevelProjectMembers?: Maybe<FolderMembers>;
  /**
   * The top-level folders within the project.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   * @param {FolderFilterInput=} filter - Specifies how to filter on folders.
   */
  folders?: Maybe<Folders>;
  /** Fusion Team URL of the project. */
  fusionWebUrl?: Maybe<Scalars['Url']['output']>;
  /** An object representing the groups in this project. Only applicable for Folder-Level project. */
  groups?: Maybe<Groups>;
  /** An object representing the hub that contains this project. */
  hub?: Maybe<Hub>;
  /** The ID that uniquely identifies the project. */
  id: Scalars['ID']['output'];
  /**
   * The top-level items within the project.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   * @param {ItemFilterInput=} filter - Specifies how to filter the content of a folder.
   */
  items?: Maybe<Items>;
  /** An object representing the members of a legacy project, with additional details */
  legacyProjectMembers?: Maybe<ProjectMembers>;
  /** The name of the project. */
  name?: Maybe<Scalars['String']['output']>;
  /** Status of a project. */
  projectStatus?: Maybe<ProjectStatusEnum>;
  /** The type of the project. */
  projectType?: Maybe<ProjectTypesEnum>;
  /** Thumbnail URL of the project. */
  thumbnailUrl?: Maybe<Scalars['Url']['output']>;
};


/**
 * Represents a project.
 *
 * A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.
 */
export type ProjectFolderLevelProjectMembersArgs = {
  filter?: InputMaybe<FolderMemberFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a project.
 *
 * A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.
 */
export type ProjectFoldersArgs = {
  filter?: InputMaybe<FolderFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a project.
 *
 * A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.
 */
export type ProjectGroupsArgs = {
  filter?: InputMaybe<GroupsFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a project.
 *
 * A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.
 */
export type ProjectItemsArgs = {
  filter?: InputMaybe<ItemFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/**
 * Represents a project.
 *
 * A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.
 */
export type ProjectLegacyProjectMembersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Alternative ways of referencing a project. */
export type ProjectAlternativeIdentifiers = {
  __typename?: 'ProjectAlternativeIdentifiers';
  /** The ID of this project when accessing it through forgeDM. */
  dataManagementAPIProjectId: Scalars['ID']['output'];
};

/** Specifies how to filter projects. */
export type ProjectFilterInput = {
  /** The name of the project you want to match. Currently, only exact matches are supported. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An object representing a member of a project. */
export type ProjectMember = {
  __typename?: 'ProjectMember';
  /** An object representing the project that the user is a member of. */
  project: Project;
  /** Role of the member in the project. */
  role: ProjectMemberRoleEnum;
  /** Basic details of the user. */
  user: User;
};

/** Types of project member roles. */
export enum ProjectMemberRoleEnum {
  /** Editor of the project. */
  Editor = 'EDITOR',
  /** Admin of the project. */
  ProjectAdmin = 'PROJECT_ADMIN',
  /** Viewer of the project. */
  Viewer = 'VIEWER'
}

/** Represents pagination and result of list of project members. */
export type ProjectMembers = {
  __typename?: 'ProjectMembers';
  /** Contains information about the next page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** List of objects representing project members. */
  results?: Maybe<Array<ProjectMember>>;
};

/** Input object to filter components and tip component versions by project IDs. */
export type ProjectSearchInput = {
  /** IDs of projects that belongs to the same hub. */
  ids: Array<Scalars['ID']['input']>;
};

/** Types of project status. */
export enum ProjectStatusEnum {
  /** Project is active. Project is visible in a hub and operations can be performed. */
  Active = 'ACTIVE',
  /** Project is inactive. Project was archived and can be restored by admin of the hub. */
  Inactive = 'INACTIVE'
}

/** Projects have different levels of visibility on the hub, content privacy, and membership restrictions based on the project type. */
export enum ProjectTypesEnum {
  /** Projects of CLOSED project type are visible to Team Members and accessible only to project members. */
  Closed = 'CLOSED',
  /**
   * FOLDER_LEVEL project type.
   * Members can be added through invitation only. Member and group roles can be applied to the entire project, specific folders, or sub folders.
   * Note: The Folder-Level security type cannot be changed after creating a Folder-Level project.
   */
  FolderLevel = 'FOLDER_LEVEL',
  /** Projects of OPEN project type are visible and accessible only to Team Members. */
  Open = 'OPEN',
  /** Projects of SECRET project type are visible and accessible only to project members. */
  Secret = 'SECRET'
}

/** Contains a list of projects returned in response to a query. */
export type Projects = {
  __typename?: 'Projects';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing projects. */
  results: Array<Maybe<Project>>;
};

/** Object representing list of Properties. */
export type Properties = {
  __typename?: 'Properties';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array of Properties. */
  results: Array<Maybe<Property>>;
};

/** Data object that represents property. */
export type Property = {
  __typename?: 'Property';
  /** Data object that represents property definition. */
  definition: PropertyDefinition;
  /** Display value of the property. */
  displayValue?: Maybe<Scalars['String']['output']>;
  /** Human readable name for a Property. */
  name: Scalars['String']['output'];
  /** Value of the property. */
  value?: Maybe<Scalars['PropertyValue']['output']>;
};

/** Supported property behaviors */
export enum PropertyBehaviorEnum {
  /** Properties that are only applicable at a specific, historical version of an entity. When an entity is changed, current value is copied over to the next entity version. */
  Dynamic = 'DYNAMIC',
  /** Properties that are only applicable at a specific, historical version of an entity. Typically used for “computed” values. */
  DynamicAtVersion = 'DYNAMIC_AT_VERSION',
  /** Properties that affect the form, fit, or function of an entity. If values are changed, a “new version” of the entity is created. */
  Standard = 'STANDARD',
  /** Properties that are applied at the 'lineage' of an entity. Only one value of property exists at any given time for all versions/revisions of an entity and changes to value does not require a revision. */
  Timeless = 'TIMELESS'
}

/**
 * Data object that represents property definition.
 *
 * Property definition is an object that acts as a template to create properties on an entity.
 */
export type PropertyDefinition = {
  __typename?: 'PropertyDefinition';
  /** Property definition collection in which this property definition is present. */
  collection?: Maybe<PropertyDefinitionCollection>;
  /** A short description of the property definition. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of property definition. */
  id: Scalars['ID']['output'];
  /**
   * ``true`` : The property definition is archived.
   *
   * ``false`` : The property definition is active.
   */
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the parameter is hidden or not in the application. */
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the parameter is read-only or not in the application. */
  isReadOnly?: Maybe<Scalars['Boolean']['output']>;
  /** Name for this property definition. */
  name: Scalars['String']['output'];
  /** Behavior of property definition. */
  propertyBehavior: PropertyBehaviorEnum;
  /** Specifies expected behavior for the property on document data management operation like 'copy' in Autodesk authoring apps. A value of 'true' means the property will be copied along to the new document on such operations. */
  shouldCopy?: Maybe<Scalars['Boolean']['output']>;
  /** Specification of the property definition. It represents the data type of a property definition. */
  specification?: Maybe<Scalars['String']['output']>;
  /** Unit of a property definition. */
  units?: Maybe<Units>;
};

/** Data object that represents property definition collection. */
export type PropertyDefinitionCollection = {
  __typename?: 'PropertyDefinitionCollection';
  /**
   * Get all Property Definitions of this Collection.
   * @param {PropertyDefinitionFilterInput=} filter - Specifies how to filter on property definitions.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  definitions?: Maybe<PropertyDefinitions>;
  /** Description for this property definition collection. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of this property definition collection. */
  id: Scalars['ID']['output'];
  /** Name for this property definition collection. */
  name?: Maybe<Scalars['String']['output']>;
};


/** Data object that represents property definition collection. */
export type PropertyDefinitionCollectionDefinitionsArgs = {
  filter?: InputMaybe<PropertyDefinitionFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Specifies how to filter property definition collections. */
export type PropertyDefinitionCollectionFilterInput = {
  /** The ID of the property definition collection that needs to be filtered. */
  id: Array<Scalars['ID']['input']>;
};

/** Contains a list of Property Definition Collections returned in response to a query. */
export type PropertyDefinitionCollections = {
  __typename?: 'PropertyDefinitionCollections';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array of Property Definition Collections. */
  results: Array<Maybe<PropertyDefinitionCollection>>;
};

/** Specifies how to filter property definitions. */
export type PropertyDefinitionFilterInput = {
  /** The ID of the property definitions that needs to be filtered. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input required for creating property definition. */
export type PropertyDefinitionInput = {
  /** A short description of the property definition. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if the parameter is archived or not in the application. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates if the parameter is hidden or not in the application. */
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates if the parameter is read-only or not in the application. */
  isReadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name for uniquely identifying a property definition. */
  name: Scalars['String']['input'];
  /** Behavior of a property. */
  propertyBehavior: PropertyBehaviorEnum;
  /** Specifies expected behavior for the property on document data management operation like 'copy' in Autodesk authoring apps. Setting it to 'true' will copy the property along to the new document on such operations. */
  shouldCopy?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Specification of property definition.
   *
   * It represents the data type of a property definition.
   */
  specification: Scalars['String']['input'];
};

/** List of property definitions. */
export type PropertyDefinitions = {
  __typename?: 'PropertyDefinitions';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array of property definition. */
  results: Array<Maybe<PropertyDefinition>>;
};

/** Specifies how to filter property. */
export type PropertyFilterInput = {
  /** The names of the property that needs to be to filtered. */
  names: Array<Scalars['String']['input']>;
};

/**  Unique reference to a Property WRT the PropertyReservation subsystem. */
export type PropertyId = {
  __typename?: 'PropertyID';
  /** The ID of the PropertyDefinition that contains the Property, if applicable. */
  propertyDefinitionId?: Maybe<Scalars['ID']['output']>;
  /** The name of the property. */
  propertyName: Scalars['String']['output'];
  /** ID of the target the property applies to (for example, a Component or a Drawing). */
  targetId: Scalars['ID']['output'];
};

/** Input for set property. */
export type PropertyInput = {
  /** ID of the property definition. */
  propertyDefinitionId: Scalars['ID']['input'];
  /** Specify whether to clear the property */
  shouldClear?: InputMaybe<Scalars['Boolean']['input']>;
  /** Value for the property. */
  value?: InputMaybe<Scalars['PropertyValue']['input']>;
};

/** A data object that represents a PropertyReservation. */
export type PropertyReservation = {
  __typename?: 'PropertyReservation';
  /** Time at which the reservation will expire. */
  expiration?: Maybe<Scalars['DateTime']['output']>;
  /** The kind of Reservation. */
  kind: PropertyReservationKindEnum;
  /** Oxygen ID of the owner of the Reservation. */
  owner?: Maybe<Scalars['String']['output']>;
  /** Identifier of the Property that the reservation applies to. */
  property: PropertyId;
  /** ID assigned to the PropertyReservation. */
  reservationId: Scalars['ID']['output'];
  /** A unique identifier for the reservation session, to be used to maintain the PropertyReservation across different interactions */
  sessionId: Scalars['ID']['output'];
  /** Value of the PropertyReservation, representing the value that would be set on the property. */
  value?: Maybe<Scalars['PropertyValue']['output']>;
};

/**
 * The kind of PropertyReservation.
 * Only one EXCLUSIVE PropertyReservation can exist at a time for a given Property, acting like a lock to prevent other users from modifying the Property.
 * More than one SHARED PropertyReservation can exist at the same time for a given Property, allowing multiple users to be present on a Property.
 */
export enum PropertyReservationKindEnum {
  /** A distinct claim or 'reservation', exclusively held by a single user. */
  Exclusive = 'EXCLUSIVE',
  /** An indication of a user's presence for a Property, not exclusive - multiple users can have a shared PropertyReservation for a Property. */
  Shared = 'SHARED'
}

export type PropertyReservations = {
  __typename?: 'PropertyReservations';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** List of objects representing PropertyReservations. */
  results: Array<Maybe<PropertyReservation>>;
};

/** A data object that represents PubNub credentials. */
export type PubNubCredentials = {
  __typename?: 'PubNubCredentials';
  /** PubNub cipher key associated to the user. */
  cipherKey: Scalars['String']['output'];
  /** PubNub subscription key associated to the user. */
  subscriptionKey: Scalars['String']['output'];
};

/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type Query = {
  __typename?: 'Query';
  /** Retrieves application information of APS Application based on Authentication token. */
  application?: Maybe<Application>;
  /**
   * Retrieves BOM based on the specified component version ID and composition type.
   * When fetching BOM for top-level, root item, ``baselineTime`` argument should be omitted as it is calculated automatically by traversal logic and it should be set only when querying for children of non-root BOMItem.
   * When querying for BOMItem ``children``, in order to fetch correct BOM structure, ``baselineTime`` should be set to that of previously returned BOMItem for which children items are requested.
   */
  bom?: Maybe<Bom>;
  /** Retrieves BOM item based on the specified BOM item ID, baseline time and composition type. */
  bomItem?: Maybe<BomItemAtTime>;
  /**
   * Retrieves Ids of components in bulk using Fusion document identifiers such as wip urns and f3d component id.
   *
   * @param {[BulkComponentIdInput]} input - Input object for getting component Ids in bulk.
   * @param {ID} hubId - The ID of the hub that contains components.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages.
   */
  bulkComponentIds?: Maybe<BulkComponentIds>;
  /**
   * Retrieves an object representing a component.
   *
   * A component is an individual part of an assembly that acts as a single unit. For example, a lug nut is an individual component in a wheel assembly.
   * @param {ID} componentId - The ID of the component to fetch.
   */
  component?: Maybe<Component>;
  /**
   * Retrieves an object representing a version of a component.
   *
   * For example, there can be different versions of a lug nut in a wheel assembly.
   * @param {ID} componentVersionId - The ID of the component version to fetch.
   */
  componentVersion?: Maybe<ComponentVersion>;
  /**
   * Retrieves components based on folder IDs.
   * @param {ID} hubId - ID for the hub from which you need to retrieve the components.
   * @param {[ID]} folderIds - folder IDs array to be used for searching components.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  componentsByFolders?: Maybe<Components>;
  /**
   * Retrieves components based on input filter.
   * @param {ID} hubId - ID for the hub from which you need to retrieve components.
   * @param {ComponentSearchInput} filter - filter object to be used for searching components. It will perform an exact match that is case sensitive.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  componentsByHub: Components;
  /**
   * Retrieves components based on project IDs.
   * @param {ID} hubId - ID for the hub from which you need to retrieve the components.
   * @param {[ID]} projectIds - project IDs array to be used for searching components.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  componentsByProjects?: Maybe<Components>;
  /**
   * Retrieves an object representing a drawing.
   *
   * Drawings contain 2D projected views of designs.
   * @param {String} drawingId - The ID of the drawing to fetch.
   */
  drawing?: Maybe<Drawing>;
  /**
   * Retrieves an object representing a version of a drawing.
   *
   * Drawings contain 2D projected views of designs.
   * @param {ID} drawingVersionId - The ID of the drawing version to fetch.
   */
  drawingVersion?: Maybe<DrawingVersion>;
  /**
   * Export status of a file.
   * @param {ExportStatusOfFileInput} input - Input object for getting the export status of a file.
   */
  exportStatusOfFile?: Maybe<ExportStatusOfFilePayload>;
  /**
   * Retrieve folder specified by the provided Id.
   * @param {ID} hubId - The ID of the Hub that contains the item.
   * @param {ID} folderId - The ID of the item to retrieve.
   */
  folderByHubId?: Maybe<Folder>;
  /** Test2 query to test tags in argument fields */
  folderTestDemo2?: Maybe<Scalars['String']['output']>;
  /**
   * Retrieves all subfolders within a specified folder that meet the filter criteria specified by the ``filter`` argument.
   * @param {ID} hubId - The ID of the Hub that contains the item.
   * @param {ID} folderId - The ID of the folder that contains the subfolders.
   * @param {FolderFilterInput=} filter - Specifies how to filter on folders. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  foldersByFolderInHub?: Maybe<Folders>;
  /**
   * Retrieves all top level folders under a specified project that meet the filter criteria specified by the ``filter`` argument.
   * @param {ID} projectId - The ID of the project that contains the items.
   * @param {FolderFilterInput=} filter - Specifies how to filter on folders. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  foldersByProject?: Maybe<Folders>;
  /**
   * Retrieves an object representing a Group from a specified hub.
   * @param {ID} hubId - The ID of the hub that contains the group.
   * @param {ID} groupId - The ID of the group to retrieve.
   */
  group?: Maybe<Group>;
  /**
   * Retrieves an object representing a hub.
   *
   * A Hub is a container of projects, shared resources, and users with a common context.
   * @param {ID} hubId - The ID of the hub to return.
   */
  hub?: Maybe<Hub>;
  /**
   * Retrieves an object representing a hub by its external id.
   *
   * A Hub is a container of projects, shared resources, and users with a common context.
   * @param {ID} dataManagementAPIHubId - The external ID of the hub to return.
   */
  hubByDataManagementAPIId?: Maybe<Hub>;
  /**
   * Retrieves all hubs that match the specified criteria.
   *
   * A Hub is a container of projects, shared resources, and users with a common context.
   * @param {HubFilterInput=} filter - Specifies how to filter a list of hubs. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  hubs?: Maybe<Hubs>;
  /**
   * Retrieves an object representing an item.
   *
   * An item refers to a file or sub-folder that exists within a folder.
   * @param {ID} hubId - The ID of the Hub that contains the item.
   * @param {ID} itemId - The ID of the item to retrieve.
   */
  item?: Maybe<Item>;
  /**
   * Retrieves an object representing a version of an item.
   * @param {ID} hubId - The ID of the Hub that contains the item.
   * @param {ID} versionId - The ID of the basic item version to retrieve.
   */
  itemVersion?: Maybe<ItemVersion>;
  /**
   * Retrieves all versions of the specified item.
   * @param {ID} hubId - The ID of the Hub that contains the item.
   * @param {ID} itemId - The ID of the basic item to retrieve.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  itemVersions?: Maybe<ItemVersions>;
  /**
   * Retrieves all items within a specified folder that meet the filter criteria specified by the ``filter`` argument.
   * @param {ID} hubId - The ID of the Hub that contains the item.
   * @param {ID} folderId - The ID of the folder that contains the items.
   * @param {ItemFilterInput=} filter - Specifies how to filter the content of a folder. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  itemsByFolder?: Maybe<Items>;
  /**
   * Retrieves all top level items under a specified project that meet the filter criteria specified by the ``filter`` argument.
   * @param {ID} projectId - The ID of the project that contains the items.
   * @param {ItemFilterInput=} filter - Specifies how to filter the content of a folder. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  itemsByProject?: Maybe<Items>;
  /** A query to retrieve a PNG */
  partNumberGroup?: Maybe<PartNumberGroup>;
  /**
   * Retrieves an object representing a project from a specified hub.
   *
   * A project is a shared workspace for teams of people to store, organize, and manage all related design data.
   * @param {ID} projectId - The ID of the project to retrieve.
   */
  project?: Maybe<Project>;
  /**
   * Retrieves an object representing a project by its external id.
   *
   * A project is a shared workspace for teams of people to store, organize, and manage all related design data.
   * @param {ID} dataManagementAPIProjectId - The external ID of the project to retrieve.
   */
  projectByDataManagementAPIId?: Maybe<Project>;
  /**
   * Retrieves all projects that match the specified filter criteria from a specified hub.
   * @param {ID} hubId - The ID of the hub that contains the projects.
   * @param {ProjectFilterInput=} filter - Specifies how to filter a list of projects. You can filter by name.
   * @param {PaginationInput=} pagination - Specifies how to split the response into multiple pages.
   */
  projects?: Maybe<Projects>;
  /** Get all PropertyReservations for Properties on a given list of targets. */
  propertyReservations?: Maybe<PropertyReservations>;
  /**
   * Retrieves components in a hub based on input filter, with highlights.
   * @param {ID} hubId - ID for the hub from which you need to retrieve components.
   * @param {SearchComponentsByHubInput} filter - filter object to be used for searching components in a hub. It will perform an exact match that is case sensitive, and also return details about matching text.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  searchComponentsByHub?: Maybe<SearchComponentsByHubPayload>;
  /**
   * Retrieves tip component versions based on folder IDs.
   * @param {ID} hubId - ID for the hub from which you need to retrieve tip component versions.
   * @param {[ID]} folderIds - folder IDs array to be used for searching tip component versions.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  tipComponentVersionsByFolders?: Maybe<ComponentVersions>;
  /**
   * Retrieves tip component versions based on input filter.
   * @param {ID} hubId - ID for the hub from which you need to retrieve tip component versions.
   * @param {ComponentVersionsFilterInput} filter - filter object to be used for searching tip component versions. It will perform an exact match that is case sensitive.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  tipComponentVersionsByHub?: Maybe<ComponentVersions>;
  /**
   * Retrieves tip component versions based on project IDs.
   * @param {ID} hubId - ID for the hub from which you need to retrieve tip component versions.
   * @param {[ID]} projectIds - project IDs array to be used for searching tip component versions.
   * @param {PaginationInput} pagination - Specifies how to split the response into multiple pages. Page size limit is 50 or less.
   */
  tipComponentVersionsByProjects?: Maybe<ComponentVersions>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryBomArgs = {
  baselineTime?: InputMaybe<Scalars['DateTime']['input']>;
  bomComposition: BomCompositionEnum;
  componentVersionId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryBomItemArgs = {
  baselineTime?: InputMaybe<Scalars['DateTime']['input']>;
  bomComposition: BomCompositionEnum;
  bomItemId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryBulkComponentIdsArgs = {
  hubId: Scalars['ID']['input'];
  input: Array<BulkComponentIdInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryComponentArgs = {
  componentId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryComponentVersionArgs = {
  componentVersionId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryComponentsByFoldersArgs = {
  folderIds: Array<Scalars['ID']['input']>;
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryComponentsByHubArgs = {
  filter?: InputMaybe<ComponentSearchInput>;
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryComponentsByProjectsArgs = {
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
  projectIds: Array<Scalars['ID']['input']>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryDrawingArgs = {
  drawingId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryDrawingVersionArgs = {
  drawingVersionId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryExportStatusOfFileArgs = {
  input?: InputMaybe<ExportStatusOfFileInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryFolderByHubIdArgs = {
  folderId: Scalars['ID']['input'];
  hubId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryFolderTestDemo2Args = {
  folderId: Scalars['ID']['input'];
  hubId?: InputMaybe<Scalars['ID']['input']>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryFoldersByFolderInHubArgs = {
  filter?: InputMaybe<FolderFilterInput>;
  folderId: Scalars['ID']['input'];
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryFoldersByProjectArgs = {
  filter?: InputMaybe<FolderFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  projectId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryGroupArgs = {
  groupId: Scalars['ID']['input'];
  hubId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryHubArgs = {
  hubId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryHubByDataManagementApiIdArgs = {
  dataManagementAPIHubId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryHubsArgs = {
  filter?: InputMaybe<HubFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryItemArgs = {
  hubId: Scalars['ID']['input'];
  itemId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryItemVersionArgs = {
  hubId: Scalars['ID']['input'];
  versionId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryItemVersionsArgs = {
  hubId: Scalars['ID']['input'];
  itemId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryItemsByFolderArgs = {
  filter?: InputMaybe<ItemFilterInput>;
  folderId: Scalars['ID']['input'];
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryItemsByProjectArgs = {
  filter?: InputMaybe<ItemFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  projectId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryPartNumberGroupArgs = {
  hubId: Scalars['ID']['input'];
  partNumber: Scalars['String']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryProjectArgs = {
  projectId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryProjectByDataManagementApiIdArgs = {
  dataManagementAPIProjectId: Scalars['ID']['input'];
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryPropertyReservationsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  targets: Array<Scalars['ID']['input']>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QuerySearchComponentsByHubArgs = {
  filter?: InputMaybe<SearchComponentsByHubInput>;
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryTipComponentVersionsByFoldersArgs = {
  folderIds: Array<Scalars['ID']['input']>;
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryTipComponentVersionsByHubArgs = {
  filter?: InputMaybe<ComponentVersionSearchInput>;
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


/** The entry-point for Autodesk entity queries. This acts as the top-level API from which all queries must start. */
export type QueryTipComponentVersionsByProjectsArgs = {
  hubId: Scalars['ID']['input'];
  pagination?: InputMaybe<PaginationInput>;
  projectIds: Array<Scalars['ID']['input']>;
};

/** Input object for removing an EventListener. */
export type RemoveEventListenerInput = {
  /** ID of the event listener to remove. */
  eventListenerId: Scalars['ID']['input'];
};

/** Return payload for removing an EventListener. */
export type RemoveEventListenerPayload = {
  __typename?: 'RemoveEventListenerPayload';
  /** The PropertyReservation that was added. */
  eventListenerId: Scalars['ID']['output'];
};

/** Input object for removing Folder-Level project members. */
export type RemoveFolderLevelProjectMembersInput = {
  /** Email addresses of members. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on removing Folder-Level project members operation. */
export type RemoveFolderLevelProjectMembersPayload = {
  __typename?: 'RemoveFolderLevelProjectMembersPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Input object for removing folder members. */
export type RemoveFolderMembersInput = {
  /** Email addresses of members. */
  emailAddresses: Array<Scalars['EmailAddress']['input']>;
  /** ID of the folder. If members needed to be removed from sub-folders of Folder-Level project. */
  folderId: Scalars['ID']['input'];
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on removing folder members operation. */
export type RemoveFolderMembersPayload = {
  __typename?: 'RemoveFolderMembersPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for removing groups from a folder. */
export type RemoveGroupsFromFolderInput = {
  /** ID of the folder. */
  folderId: Scalars['ID']['input'];
  /** List of the IDs of the member groups to be removed from the folder. */
  groupIds: Array<Scalars['ID']['input']>;
  /** ID of the Folder-Level project. */
  projectId: Scalars['ID']['input'];
};

/** Input object for removing groups from a Folder-Level project. */
export type RemoveGroupsFromFolderLevelProjectInput = {
  /** List of the IDs of the member groups to be removed from the Folder-Level project. */
  groupIds: Array<Scalars['ID']['input']>;
  /** ID of the Folder-Level project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload for remove groups from Folder-Level project operation. */
export type RemoveGroupsFromFolderLevelProjectPayload = {
  __typename?: 'RemoveGroupsFromFolderLevelProjectPayload';
  /** Object representing the Folder-Level project. */
  project?: Maybe<Project>;
};

/** Return payload for remove groups from folder operation. */
export type RemoveGroupsFromFolderPayload = {
  __typename?: 'RemoveGroupsFromFolderPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for removing a member from the legacy project. */
export type RemoveLegacyProjectMemberInput = {
  /** Email address associated with the Autodesk account for the project member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload for removing a member from the legacy project. */
export type RemoveLegacyProjectMemberPayload = {
  __typename?: 'RemoveLegacyProjectMemberPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Input object for removing a PropertyReservation. */
export type RemovePropertyReservationInput = {
  /** ID of the PropertyReservation to be removed. */
  reservationId: Scalars['ID']['input'];
};

/** Return payload for removing a PropertyReservation. */
export type RemovePropertyReservationPayload = {
  __typename?: 'RemovePropertyReservationPayload';
  /** True if successfully removed, false otherwise. */
  success: Scalars['Boolean']['output'];
};

/** Input object for renaming a folder. */
export type RenameFolderInput = {
  /** ID of the folder. */
  folderId: Scalars['ID']['input'];
  /** New folder name to be applied. */
  name: Scalars['String']['input'];
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on rename folder operation. */
export type RenameFolderPayload = {
  __typename?: 'RenameFolderPayload';
  /** Object representing the folder. */
  folder?: Maybe<Folder>;
};

/** Input object for renaming a project. */
export type RenameProjectInput = {
  /** Project name to be updated. */
  name: Scalars['String']['input'];
  /** ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload on rename project operation. */
export type RenameProjectPayload = {
  __typename?: 'RenameProjectPayload';
  /** Object representing the project. */
  project?: Maybe<Project>;
};

/** Input object to resend hub invitation. */
export type ResendHubInvitationInput = {
  /** Email address of member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload on resend hub invitation operation. */
export type ResendHubInvitationPayload = {
  __typename?: 'ResendHubInvitationPayload';
  /** Object representing the hub. */
  hub?: Maybe<Hub>;
  /** Object representing the hub member. */
  member?: Maybe<HubMember>;
};

/** Input for restoring a project in a hub. */
export type RestoreProjectInput = {
  /** The ID of the project. */
  projectId: Scalars['ID']['input'];
};

/** Return payload for restoring a project operation. */
export type RestoreProjectPayload = {
  __typename?: 'RestoreProjectPayload';
  /** An object representing the project that was updated. */
  project?: Maybe<Project>;
};

/** Specifies how to filter components during search operation. */
export type SearchComponentsByHubInput = {
  /** RSQL filter to be used for advanced filtering. */
  advancedFilter?: InputMaybe<FilterInput>;
  /** Filters component based on the DesignItem IDs. */
  designItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Contains a list of components returned in response to search by hub query. */
export type SearchComponentsByHubPayload = {
  __typename?: 'SearchComponentsByHubPayload';
  /** Contains information about the current page, when results are split into multiple pages. */
  pagination?: Maybe<Pagination>;
  /** An array that contains objects representing components. */
  results?: Maybe<Array<SearchComponentsByHubResult>>;
  /** The total number of components fetched that match with the given search criteria. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Object representing a components fetching during a search operation. Also contains details on matching search terms found in the component. */
export type SearchComponentsByHubResult = {
  __typename?: 'SearchComponentsByHubResult';
  /** The ID that uniquely identifies the latest version of the component. */
  componentVersionId?: Maybe<Scalars['String']['output']>;
  /** The ID of the design item associated with this component. */
  designItemId?: Maybe<Scalars['String']['output']>;
  /** The ID of the latest version of the design item associated with this component. */
  designItemVersionId?: Maybe<Scalars['String']['output']>;
  /**
   * A persistent ID assigned by the application creating the model to uniquely identify the component.
   *
   * For example, for Fusion 360 models, ``f3dComponentId`` contains the ID that Fusion 360 uses to identify a component. This ID is created with the component and does not change. This ID can be useful when you need to match up components referenced by the Manufacturing Data Model with the same components referenced by their native APIs (the Fusion 360 API in this case).
   */
  f3dComponentId?: Maybe<Scalars['String']['output']>;
  /** Contains information about search terms that were found in this component. */
  highlightText?: Maybe<Scalars['String']['output']>;
  /** The ID that uniquely identifies the component. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * Every Fusion assembly contains a single, default component that is referred to as the root component.
   *
   * ``true`` : This component is the root component in an assembly.
   *
   * ``false`` : This component is not the root component in an assembly.
   */
  isRoot?: Maybe<Scalars['Boolean']['output']>;
  /** A unique identifier, Item Number, is assigned by Fusion Manage Extension. */
  itemNumber?: Maybe<Scalars['String']['output']>;
  /** The URN of the Item in Fusion Manage Extension. */
  itemURN?: Maybe<Scalars['String']['output']>;
  /** The state of the Fusion item in the product lifecycle. These values are assigned by the Fusion Manage extension. */
  lifeCycle?: Maybe<Scalars['String']['output']>;
  /** The name or names of the types of materials that make up this version of the component. */
  materialName?: Maybe<Scalars['String']['output']>;
  /** A human-readable name to identify the component. */
  name?: Maybe<Scalars['String']['output']>;
  /** A short description of this version of the component. */
  partDescription?: Maybe<Scalars['String']['output']>;
  /** The part number assigned to this version of the component. */
  partNumber?: Maybe<Scalars['String']['output']>;
};

/** Input object for assign primary. */
export type SetComponentAsPrimaryInput = {
  /** componentId of the document */
  componentId: Scalars['ID']['input'];
};

/** Return payload for assign primary. */
export type SetComponentAsPrimaryPayload = {
  __typename?: 'SetComponentAsPrimaryPayload';
  /** The updated component */
  component: Component;
};

/** Input required for setting a property value. */
export type SetPropertiesInput = {
  /** List of property objects to be set. */
  propertyInputs: Array<PropertyInput>;
  /** When true, set standard properties without incrementing design or drawing WIP version. */
  setPropertiesLite?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * The ID of item on which properties will be set.
   *
   * Target ID can be ID of any of the following item: ComponentVersion, DrawingVersion, Component, Drawing.
   */
  targetId: Scalars['ID']['input'];
};

/** Return payload on set properties operation. */
export type SetPropertiesPayload = {
  __typename?: 'SetPropertiesPayload';
  /** Array of property objects that are set. */
  properties: Array<Property>;
  /**
   * The ID of item on which properties are set.
   *
   * Target ID can be ID of any of the following item: ComponentVersion, DrawingVersion, Component, Drawing.
   */
  targetId: Scalars['ID']['output'];
};

/**
 * Temporarily added the mfg tag. Once the new tag for the mfgdm-core subgraph is created, it will be used.
 * Test Input.
 */
export type TestInput = {
  /** The ID that uniquely identifies the hub. */
  hubId: Scalars['ID']['input'];
  /** The ID that uniquely identifies the project. */
  name: Scalars['String']['input'];
};

/**
 * Temporarily added the mfg tag. Once the new tag for the mfgdm-core subgraph is created, it will be used.
 * Return payload.
 */
export type TestPayload = {
  __typename?: 'TestPayload';
  /** Object representing the project. */
  id: Scalars['String']['output'];
};

/** An object representing a small image that depicts a view of a component. */
export type Thumbnail = {
  __typename?: 'Thumbnail';
  /** Epoch time stamp indicating when the signedUrl expires. */
  expires?: Maybe<Scalars['String']['output']>;
  /** The ID that uniquely identifies the thumbnail. */
  id: Scalars['ID']['output'];
  /** The URL to the thumbnail. */
  signedUrl?: Maybe<Scalars['String']['output']>;
  /** Indicates the status of the thumbnail generation process. */
  status: ThumbnailStatusEnum;
};

/** The thumbnail's availability states. */
export enum ThumbnailStatusEnum {
  /** Thumbnail generation failed. */
  Failed = 'FAILED',
  /** Thumbnail generation in progress. */
  InProgress = 'IN_PROGRESS',
  /** Thumbnail generation is pending. */
  Pending = 'PENDING',
  /** Thumbnail generation is successful. */
  Success = 'SUCCESS',
  /** Thumbnail generation process timed out. */
  Timeout = 'TIMEOUT'
}

/** Represents the unit of measurement for a property. */
export type Units = {
  __typename?: 'Units';
  /** Id of the corresponding unit. */
  id: Scalars['ID']['output'];
  /** Name of the corresponding unit. */
  name: Scalars['String']['output'];
};

/** Input object for unlinking a property definition collection from a hub. */
export type UnlinkPropertyDefinitionCollectionInput = {
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
  /** ID of the property definition collection. */
  propertyDefinitionCollectionId: Scalars['ID']['input'];
};

/** Response of ``unlink`` property definition collection operation. */
export type UnlinkPropertyDefinitionCollectionPayload = {
  __typename?: 'UnlinkPropertyDefinitionCollectionPayload';
  /** Object representing a hub. */
  hub: Hub;
  /** Id of the property definition collection unlinked from the hub.  */
  propertyDefinitionCollectionId: Scalars['ID']['output'];
};

/** Input for updating property definition collection. */
export type UpdatePropertyDefinitionCollectionInput = {
  /** The description of the property definition collection. */
  description: Scalars['String']['input'];
  /** The ID of the property definition collection. */
  propertyDefinitionCollectionId: Scalars['ID']['input'];
};

/** Response of update property definition collection operation. */
export type UpdatePropertyDefinitionCollectionPayload = {
  __typename?: 'UpdatePropertyDefinitionCollectionPayload';
  /** Updated property definition collection object. */
  propertyDefinitionCollection: PropertyDefinitionCollection;
};

/** Input for updating a property definition. */
export type UpdatePropertyDefinitionInput = {
  /** A short description of the property definition. */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Indicates if this property should appear in any software that displays properties using this API.
   *
   * This is a hint for the developer, and does not have an effect unless the developer has written code to expressly read and react to this field.
   */
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of a property definition. */
  propertyDefinitionId: Scalars['ID']['input'];
};

/** Response of update property definition operation. */
export type UpdatePropertyDefinitionPayload = {
  __typename?: 'UpdatePropertyDefinitionPayload';
  /** Updated PropertyDefinition Object. */
  propertyDefinition: PropertyDefinition;
};

/** Input object for updating the expiration of a PropertyReservation. */
export type UpdatePropertyReservationExpirationInput = {
  /** Time at which the PropertyReservation will expire. */
  expiration: Scalars['DateTime']['input'];
  /** ID of the PropertyReservation to be updated. */
  reservationId: Scalars['ID']['input'];
};

/** Return payload for updating a PropertyReservation. */
export type UpdatePropertyReservationPayload = {
  __typename?: 'UpdatePropertyReservationPayload';
  /** The PropertyReservation that was updated. */
  reservation: PropertyReservation;
};

/** Input object for updating the value of a PropertyReservation. */
export type UpdatePropertyReservationValueInput = {
  /** ID of the PropertyReservation to be updated. */
  reservationId: Scalars['ID']['input'];
  /** Value for the PropertyReservation, representing the value that would be set on the property. */
  value: Scalars['PropertyValue']['input'];
};

/** An object representing a User. */
export type User = {
  __typename?: 'User';
  /** The date and time the user’s information was created. */
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The ID that uniquely identifies the User. */
  id: Scalars['ID']['output'];
  /** The date and time the user’s information was last modified. */
  lastModifiedOn?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The display name of the user. */
  userName?: Maybe<Scalars['String']['output']>;
};

/** Input object to filter tip component and tip component versions by user details. */
export type UserSearchInput = {
  /** IDs of users */
  ids: Array<Scalars['ID']['input']>;
};

/** Input object to withdraw hub invitation. */
export type WithdrawHubInvitationInput = {
  /** Email address of member. */
  emailAddress: Scalars['EmailAddress']['input'];
  /** ID of the hub. */
  hubId: Scalars['ID']['input'];
};

/** Return payload on withdraw hub invitation operation. */
export type WithdrawHubInvitationPayload = {
  __typename?: 'WithdrawHubInvitationPayload';
  /** Object representing the hub. */
  hub?: Maybe<Hub>;
};

export type CreatePropertyDefinitionCollectionMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type CreatePropertyDefinitionCollectionMutation = { __typename?: 'Mutation', createPropertyDefinitionCollection?: { __typename?: 'CreatePropertyDefinitionCollectionPayload', propertyDefinitionCollection: { __typename?: 'PropertyDefinitionCollection', id: string, name?: string | null, description?: string | null } } | null };

export type CreatePropertyDefinitionMutationVariables = Exact<{
  input: CreatePropertyDefinitionInput;
}>;


export type CreatePropertyDefinitionMutation = { __typename?: 'Mutation', createPropertyDefinition?: { __typename?: 'CreatePropertyDefinitionPayload', propertyDefinition?: { __typename?: 'PropertyDefinition', id: string, name: string, specification?: string | null, isArchived?: boolean | null, isHidden?: boolean | null, shouldCopy?: boolean | null, isReadOnly?: boolean | null, description?: string | null, propertyBehavior: PropertyBehaviorEnum, units?: { __typename?: 'Units', id: string, name: string } | null } | null } | null };

export type ArchivePropertyDefinitionMutationVariables = Exact<{
  input: ArchivePropertyDefinitionInput;
}>;


export type ArchivePropertyDefinitionMutation = { __typename?: 'Mutation', archivePropertyDefinition?: { __typename?: 'ArchivePropertyDefinitionPayload', propertyDefinition: { __typename?: 'PropertyDefinition', id: string, name: string, specification?: string | null, isArchived?: boolean | null, isHidden?: boolean | null, shouldCopy?: boolean | null, isReadOnly?: boolean | null, description?: string | null, propertyBehavior: PropertyBehaviorEnum, units?: { __typename?: 'Units', id: string, name: string } | null } } | null };

export type UpdatePropertyDefinitionCollectionMutationVariables = Exact<{
  input: UpdatePropertyDefinitionCollectionInput;
}>;


export type UpdatePropertyDefinitionCollectionMutation = { __typename?: 'Mutation', updatePropertyDefinitionCollection?: { __typename?: 'UpdatePropertyDefinitionCollectionPayload', propertyDefinitionCollection: { __typename?: 'PropertyDefinitionCollection', id: string, name?: string | null, description?: string | null } } | null };

export type UpdatePropertyDefinitionMutationVariables = Exact<{
  input: UpdatePropertyDefinitionInput;
}>;


export type UpdatePropertyDefinitionMutation = { __typename?: 'Mutation', updatePropertyDefinition?: { __typename?: 'UpdatePropertyDefinitionPayload', propertyDefinition: { __typename?: 'PropertyDefinition', id: string, name: string, specification?: string | null, isArchived?: boolean | null, isHidden?: boolean | null, shouldCopy?: boolean | null, isReadOnly?: boolean | null, description?: string | null, propertyBehavior: PropertyBehaviorEnum, units?: { __typename?: 'Units', id: string, name: string } | null } } | null };

export type ApplicationQueryVariables = Exact<{
  filter?: InputMaybe<PropertyDefinitionCollectionFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type ApplicationQuery = { __typename?: 'Query', application?: { __typename?: 'Application', propertyDefinitionCollections: { __typename?: 'PropertyDefinitionCollections', results: Array<{ __typename?: 'PropertyDefinitionCollection', id: string, name?: string | null, description?: string | null, definitions?: { __typename?: 'PropertyDefinitions', pagination?: { __typename?: 'Pagination', cursor?: string | null, pageSize?: number | null } | null, results: Array<{ __typename?: 'PropertyDefinition', id: string, name: string, specification?: string | null, isArchived?: boolean | null, isHidden?: boolean | null, shouldCopy?: boolean | null, isReadOnly?: boolean | null, description?: string | null, propertyBehavior: PropertyBehaviorEnum, units?: { __typename?: 'Units', id: string, name: string } | null } | null> } | null } | null> } } | null };

export type GetPropertyDefinitionCollectionsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPropertyDefinitionCollectionsQuery = { __typename?: 'Query', application?: { __typename?: 'Application', propertyDefinitionCollections: { __typename?: 'PropertyDefinitionCollections', pagination?: { __typename?: 'Pagination', cursor?: string | null, pageSize?: number | null } | null, results: Array<{ __typename?: 'PropertyDefinitionCollection', id: string, name?: string | null, description?: string | null } | null> } } | null };


export const CreatePropertyDefinitionCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePropertyDefinitionCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPropertyDefinitionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinitionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePropertyDefinitionCollectionMutation, CreatePropertyDefinitionCollectionMutationVariables>;
export const CreatePropertyDefinitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePropertyDefinition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePropertyDefinitionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPropertyDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"specification"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"shouldCopy"}},{"kind":"Field","name":{"kind":"Name","value":"isReadOnly"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"propertyBehavior"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePropertyDefinitionMutation, CreatePropertyDefinitionMutationVariables>;
export const ArchivePropertyDefinitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ArchivePropertyDefinition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArchivePropertyDefinitionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archivePropertyDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"specification"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"shouldCopy"}},{"kind":"Field","name":{"kind":"Name","value":"isReadOnly"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"propertyBehavior"}}]}}]}}]}}]} as unknown as DocumentNode<ArchivePropertyDefinitionMutation, ArchivePropertyDefinitionMutationVariables>;
export const UpdatePropertyDefinitionCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePropertyDefinitionCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePropertyDefinitionCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePropertyDefinitionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinitionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyDefinitionCollectionMutation, UpdatePropertyDefinitionCollectionMutationVariables>;
export const UpdatePropertyDefinitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePropertyDefinition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePropertyDefinitionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePropertyDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"specification"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"shouldCopy"}},{"kind":"Field","name":{"kind":"Name","value":"isReadOnly"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"propertyBehavior"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyDefinitionMutation, UpdatePropertyDefinitionMutationVariables>;
export const ApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Application"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyDefinitionCollectionFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinitionCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"definitions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"specification"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"shouldCopy"}},{"kind":"Field","name":{"kind":"Name","value":"isReadOnly"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"propertyBehavior"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ApplicationQuery, ApplicationQueryVariables>;
export const GetPropertyDefinitionCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertyDefinitionCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyDefinitionCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPropertyDefinitionCollectionsQuery, GetPropertyDefinitionCollectionsQueryVariables>;