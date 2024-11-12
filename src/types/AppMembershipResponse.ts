export interface AppMembershipResponse {
  next: string | null;
  previous: string | null;
  results: {
    access_level: string;
    app_id: string;
    date_invited: string;
    date_joined: string | null;
    member: string;
    membership_id: string; // UUID format
    owner: string;
    status: 'invited' | 'member' | 'blocked'; // Use union types if there are specific statuses
  }[];
}
