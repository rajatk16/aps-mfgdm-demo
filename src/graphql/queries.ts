import { gql } from "@apollo/client";

export const GET_PROPERTY_DEFINITION_COLLECTIONS = gql`
  query GetPropertyDefinitionCollections($cursor: String) {
    application {
      propertyDefinitionCollections(pagination: { cursor: $cursor }) {
        pagination {
          cursor
          pageSize
        }
        results {
          id
          name
          description
        }
      }
    }
  }
`;

export const GET_BASE_PROPERTY_DEFINITION_COLLECTIONS = gql`
  query GetBasePropertyDefinitionCollections($pagination: PaginationInput) {
    hubs(pagination: $pagination) {
      results {
        basePropertyDefinitionCollections {
          results {
            id
            name
            description
            definitions {
              results {
                id
                name
                specification
                units {
                  id
                  name
                }
                isArchived
                isHidden
                shouldCopy
                isReadOnly
                description
                propertyBehavior
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROPERTY_DEFINITIONS = gql`
  query Application($filter: PropertyDefinitionCollectionFilterInput, $pagination: PaginationInput) {
    application {
      propertyDefinitionCollections(filter: $filter) {
        results {
          id
          name
          description
          definitions(pagination: $pagination) {
            pagination {
              cursor
              pageSize
            }
            results {
              id
              name
              specification
              units {
                id
                name
              }
              isArchived
              isHidden
              shouldCopy
              isReadOnly
              description
              propertyBehavior
            }
          }
        }
      }
    }
  }
`;