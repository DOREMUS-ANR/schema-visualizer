import SchemaOrg from 'schema.org';

export function locationFilter() {
  'ngInject';

  return (input, mode) => {
    let schemaOrg = new SchemaOrg();
    if (!angular.isObject(input)) return input;

    if (input.address && schemaOrg.is(input.address['@type'], 'PostalAddress')) {
      let address = input.address;

      if (mode == "summary")
        return input.name + ' in ' + address.addressLocality + ", " + address.addressCountry;
      else {
        let array = [address.streetAddress];
        if(address.addressLocality) array.push(address.addressLocality);
        if(address.addressRegion) array.push(address.addressRegion);
        if(address.addressCountry) array.push(address.addressCountry);
        return array.join(', ');
      }
    }

    return input.name;
  };
}
