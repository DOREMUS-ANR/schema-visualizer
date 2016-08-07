import SchemaOrg from 'schema.org';

export function isSchemaInstanceOfFilter() {
  'ngInject';
  var schemaOrg = new SchemaOrg();

  return (items, expected) => Array.prototype.filter.call(items, (input) =>
    schemaOrg.is(input['@type'], expected)
  );
}
