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
  constructor($filter, graphs) {
    'ngInject';

    schemaOrg = new SchemaOrg();
    this.$filter = $filter;
    this.graphs = graphs;
  }

  googleSearchLink(input) {
    return encodeURI("https://www.google.com/search?q=" + input);
  }

  googleMapsLink(input) {
    var address = this.$filter('location')(input, 'fullAddress');
    var name = input.name;
    if (name.lastIndexOf('-') > -1) name = name.substr(name.lastIndexOf('-') + 1);
    return encodeURI("https://www.google.fr/maps/place/" + name + " " + address);
  }

  sameDate(a, b) {
    return a.substr(0, 10) == b.substr(0, 10);
  }

}
