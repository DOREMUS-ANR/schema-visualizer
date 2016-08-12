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

class PerformerController {
  constructor() {
    'ngInject';
  }
}
