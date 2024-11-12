import { PropertyDef } from './PropertyDef';

export interface Collection {
  id: string;
  name: string;
  description?: string;
  definitions?: PropertyDef[];
}
