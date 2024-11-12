export interface UserProfile {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  preferred_username: string;
  email: string;
  thumbnails: Record<string, string>;
}
