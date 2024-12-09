export interface UserResponse {
  id: string;
  name: string;
  fullname: string | null;
  created: string;
  about: string | null;
  last_active: string | null;
  activity_streams_email_notifications: boolean;
  sysadmin: boolean;
  state: string;
  image_url: string | null;
  display_name: string;
  email_hash: string;
  number_created_packages: number;
  apikey: string | null;
  email: string;
  image_display_url: string | null;
}

export interface User {
  id: string;
  name: string;
  fullName: string | null;
  created: string;
  about: string | null;
  lastActive: string | null;
  activityStreamsEmailNotifications: boolean;
  sysadmin: boolean;
  state: string;
  imageUrl: string | null;
  displayName: string;
  emailHash: string;
  numberCreatedPackages: number;
  apiKey: string | null;
  email: string;
  imageDisplayUrl: string | null;
}
