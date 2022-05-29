export type ContentType = {
  id: string,
  name: string,
  parameterized_name: string
};

export type ContentTypeFieldMetaData = {
  widget: string,
  editable: boolean
};

export type ContentTypeField = {
  id: string,
  default_value: string | null,
  name: string,
  attribute_type: string,
  metadata: ContentTypeFieldMetaData
};

export type ContentTypeFields = ContentType & {
  properties: ContentTypeField[]
};
