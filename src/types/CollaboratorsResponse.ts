export interface CollaboratorsResponse {
  pagination: {
    limit: number;
    nextUrl: string | null;
    previousUrl: string | null;
  };
  results: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    accessLevel: 'VIEWER' | 'EDITOR';
    createdAt: string;
  }[];
}
