export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  location: { lat: number; lon: number } | null;
}
