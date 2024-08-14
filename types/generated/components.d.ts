import type { Schema, Attribute } from '@strapi/strapi';

export interface JsonTypeData1 extends Schema.Component {
  collectionName: 'components_json_type_data1s';
  info: {
    displayName: 'data';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'json-type.data1': JsonTypeData1;
    }
  }
}
