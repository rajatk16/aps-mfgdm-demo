import { gql } from "@apollo/client";

export const CREATE_PROPERTY_DEFINITION_COLLECTION = gql`
  mutation CreatePropertyDefinitionCollection($name: String!, $description: String!) {
    createPropertyDefinitionCollection(
      input: {name: $name, description: $description}
    ) {
      propertyDefinitionCollection {
        id
        name
        description
      }
    }
  }
`;

export const CREATE_PROPERTY_DEFINITION = gql`
  mutation CreatePropertyDefinition($input: CreatePropertyDefinitionInput!) {
    createPropertyDefinition(input: $input) {
      propertyDefinition {
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
`;

export const UPDATE_PROPERTY_DEFINITION_COLLECTION = gql`
  mutation UpdatePropertyDefinitionCollection($input: UpdatePropertyDefinitionCollectionInput!) {
    updatePropertyDefinitionCollection(input: $input) {
      propertyDefinitionCollection {
        id
        name
        description
      }
    }
  }
`

export const UPDATE_PROPERTY_DEFINITION = gql`
  mutation UpdatePropertyDefinition($input: UpdatePropertyDefinitionInput!) {
    updatePropertyDefinition(input: $input) {
      propertyDefinition {
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
`;

export const ARCHIVE_PROPERTY_DEFINITION = gql`
  mutation ArchivePropertyDefinition($input: ArchivePropertyDefinitionInput!) {
    archivePropertyDefinition(input: $input) {
      propertyDefinition {
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
`;