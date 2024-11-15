export interface ApplicationResponse {
  id: string;
  contextId: string | null;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  oAuthFlows: {
    clientType: 'CONFIDENTIAL' | 'PUBLIC';
    grantType: 'AUTHORIZATION_CODE' | 'CLIENT_CREDENTIALS' | 'IMPLICIT';
    pkce: 'REQUIRED' | 'OPTIONAL' | 'UNSUPPORTED';
  }[];
  jwksUri: string | null;
  secretCreatedAt: string | null;
  preparedSecretExpiresAt: string | null;
  callbackUris: string[];
  apiProductIds: string[];
  owner: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}
