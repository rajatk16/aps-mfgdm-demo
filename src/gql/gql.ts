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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreatePropertyDefinitionCollection($name: String!, $description: String!) {\n    createPropertyDefinitionCollection(input: { name: $name, description: $description }) {\n      propertyDefinitionCollection {\n        id\n        name\n        description\n      }\n    }\n  }\n": types.CreatePropertyDefinitionCollectionDocument,
    "\n  mutation CreatePropertyDefinition($input: CreatePropertyDefinitionInput!) {\n    createPropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n": types.CreatePropertyDefinitionDocument,
    "\n  mutation ArchivePropertyDefinition($input: ArchivePropertyDefinitionInput!) {\n    archivePropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n": types.ArchivePropertyDefinitionDocument,
    "\n  mutation UpdatePropertyDefinitionCollection($input: UpdatePropertyDefinitionCollectionInput!) {\n    updatePropertyDefinitionCollection(input: $input) {\n      propertyDefinitionCollection {\n        id\n        name\n        description\n      }\n    }\n  }\n": types.UpdatePropertyDefinitionCollectionDocument,
    "\n  mutation UpdatePropertyDefinition($input: UpdatePropertyDefinitionInput!) {\n    updatePropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n": types.UpdatePropertyDefinitionDocument,
    "\n  query Application($filter: PropertyDefinitionCollectionFilterInput, $pagination: PaginationInput) {\n    application {\n      propertyDefinitionCollections(filter: $filter) {\n        results {\n          id\n          name\n          description\n          definitions(pagination: $pagination) {\n            pagination {\n              cursor\n              pageSize\n            }\n            results {\n              id\n              name\n              specification\n              units {\n                id\n                name\n              }\n              isArchived\n              isHidden\n              shouldCopy\n              isReadOnly\n              description\n              propertyBehavior\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ApplicationDocument,
    "\n  query GetPropertyDefinitionCollections($cursor: String) {\n    application {\n      propertyDefinitionCollections(pagination: { cursor: $cursor }) {\n        pagination {\n          cursor\n          pageSize\n        }\n        results {\n          id\n          name\n          description\n        }\n      }\n    }\n  }\n": types.GetPropertyDefinitionCollectionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePropertyDefinitionCollection($name: String!, $description: String!) {\n    createPropertyDefinitionCollection(input: { name: $name, description: $description }) {\n      propertyDefinitionCollection {\n        id\n        name\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePropertyDefinitionCollection($name: String!, $description: String!) {\n    createPropertyDefinitionCollection(input: { name: $name, description: $description }) {\n      propertyDefinitionCollection {\n        id\n        name\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePropertyDefinition($input: CreatePropertyDefinitionInput!) {\n    createPropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePropertyDefinition($input: CreatePropertyDefinitionInput!) {\n    createPropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ArchivePropertyDefinition($input: ArchivePropertyDefinitionInput!) {\n    archivePropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ArchivePropertyDefinition($input: ArchivePropertyDefinitionInput!) {\n    archivePropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePropertyDefinitionCollection($input: UpdatePropertyDefinitionCollectionInput!) {\n    updatePropertyDefinitionCollection(input: $input) {\n      propertyDefinitionCollection {\n        id\n        name\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePropertyDefinitionCollection($input: UpdatePropertyDefinitionCollectionInput!) {\n    updatePropertyDefinitionCollection(input: $input) {\n      propertyDefinitionCollection {\n        id\n        name\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePropertyDefinition($input: UpdatePropertyDefinitionInput!) {\n    updatePropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePropertyDefinition($input: UpdatePropertyDefinitionInput!) {\n    updatePropertyDefinition(input: $input) {\n      propertyDefinition {\n        id\n        name\n        specification\n        units {\n          id\n          name\n        }\n        isArchived\n        isHidden\n        shouldCopy\n        isReadOnly\n        description\n        propertyBehavior\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Application($filter: PropertyDefinitionCollectionFilterInput, $pagination: PaginationInput) {\n    application {\n      propertyDefinitionCollections(filter: $filter) {\n        results {\n          id\n          name\n          description\n          definitions(pagination: $pagination) {\n            pagination {\n              cursor\n              pageSize\n            }\n            results {\n              id\n              name\n              specification\n              units {\n                id\n                name\n              }\n              isArchived\n              isHidden\n              shouldCopy\n              isReadOnly\n              description\n              propertyBehavior\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Application($filter: PropertyDefinitionCollectionFilterInput, $pagination: PaginationInput) {\n    application {\n      propertyDefinitionCollections(filter: $filter) {\n        results {\n          id\n          name\n          description\n          definitions(pagination: $pagination) {\n            pagination {\n              cursor\n              pageSize\n            }\n            results {\n              id\n              name\n              specification\n              units {\n                id\n                name\n              }\n              isArchived\n              isHidden\n              shouldCopy\n              isReadOnly\n              description\n              propertyBehavior\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPropertyDefinitionCollections($cursor: String) {\n    application {\n      propertyDefinitionCollections(pagination: { cursor: $cursor }) {\n        pagination {\n          cursor\n          pageSize\n        }\n        results {\n          id\n          name\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPropertyDefinitionCollections($cursor: String) {\n    application {\n      propertyDefinitionCollections(pagination: { cursor: $cursor }) {\n        pagination {\n          cursor\n          pageSize\n        }\n        results {\n          id\n          name\n          description\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;