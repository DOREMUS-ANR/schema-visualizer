import SchemaOrg from 'schema.org';

export function PerformerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/performer/performer.html',
    controller: PerformerController,
    controllerAs: 'performerCtrl',
    scope: {
      performer: "="
    },
    bindToController: true
  };

  return directive;
}

var schemaOrg;

class PerformerController {
  constructor() {
    'ngInject';

    // schemaOrg.is(this.image['@type'], 'ImageObject');
  }
}
