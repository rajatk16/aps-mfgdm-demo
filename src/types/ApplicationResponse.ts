export interface ApplicationResponse {
  app_id: string;
  app_name: string;
  apigee_app_name?: string;
  approve_date?: string | null;
  app_type: 'web' | 'mobile' | 'service' | null;
  callback_url: string;
  callback_urls: string[];
  consumer_key: string;
  created_date?: string;
  delete_hook_url?: string;
  description: string;
  developer: string;
  gdpr_sys_id?: string;
  modified_date?: string;
  site_url?: string;
  status?: 'approved' | 'pending' | 'rejected';
}
