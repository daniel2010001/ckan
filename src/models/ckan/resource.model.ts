import { State } from ".";

/** Interface for Resource for the backend */
export interface ResourceResponse {
  cache_last_updated: string | null;
  cache_url: string | null;
  created: string;
  datastore_active: boolean;
  datastore_contains_all_records_of_source_file: boolean;
  description: string;
  format: string;
  hash: string;
  id: string;
  last_modified: string;
  metadata_modified: string;
  mimetype: string;
  mimetype_inner: string | null;
  name: string;
  package_id: string;
  position: number;
  resource_type: string | null;
  size: number;
  state: State;
  url: string;
  url_type: string;
}

/** Interface for Resource for the frontend */
export interface Resource {
  id: string;
  packageId: string;

  name: string;
  description: string;
  isActive: boolean;
  size: number;
  format: string;
  hash: string;

  created: Date;
  lastModified: Date;
  metadataModified: Date;

  position: number;
  mimetype: string;
  resourceType: string | null;
  url: string;
  urlType: string;

  datastoreActive: boolean;
  datastoreContainsAllRecordsOfSourceFile: boolean;
}

export interface ResourceView {
  description: string;
  id: string;
  package_id: string;
  resource_id: string;
  title: string;
  view_type: "image_view" | "datatables_view" | "pdf_view" | "audio_view" | "video_view";
}

export interface ResourceCreate {
  package_id: string;
  name: string;
  description: string;
  upload: File;
}
