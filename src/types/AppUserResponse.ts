export interface AppUserResponse {
  next: string | null;
  previous: string | null;
  results: {
    app_id?: string;
    oxygen_id: string;
    first_name: string;
    last_name: string;
    email: string;
  }[];
}
