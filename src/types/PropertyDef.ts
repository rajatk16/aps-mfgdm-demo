export interface PropertyDef {
  id: string;
  name: string;
  description: string;
  specification: string;
  units?: {
    id: string;
    name: string;
  };
  propertyBehavior?: string;
  isArchived?: boolean;
  isHidden?: boolean;
  isReadOnly?: boolean;
  shouldCopy?: boolean;
}
