import SchemaOrg from 'schema.org';

export function SchemaOutputDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/schemaOutput/schemaOutput.html',
    controller: schemaOutputController,
    controllerAs: 'outCtrl',
    bindToController: true
  };

  return directive;
}

var schemaOrg;

class schemaOutputController {
  constructor($filter) {
    'ngInject';

    schemaOrg = new SchemaOrg();
    this.$filter = $filter;
  }

  isInstanceOf(actual, expected) {
    return schemaOrg.is(actual['@type'], expected);
  }

  googleSearchLink(input) {
    return encodeURI("https://www.google.com/search?q=" + input);
  }

  googleMapsLink(input) {
    var address = this.$filter('location')(input, 'fullAddress');
    return encodeURI("https://www.google.fr/maps/place/" + input.name + " " + address);
  }

  sameDate(a, b) {
    var dateA = new Date(a),
      dateB = new Date(b);

    return dateA.getFullYear() == dateB.getFullYear() &&
      dateA.getMonth() == dateB.getMonth() &&
      dateA.getDate() == dateB.getDate();
  }

}
