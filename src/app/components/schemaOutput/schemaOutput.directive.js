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
  constructor() {
    'ngInject';

    schemaOrg = new SchemaOrg();
  }

  isInstanceOf(actual, expected) {
    return schemaOrg.is(actual['@type'], expected);
  }

}
