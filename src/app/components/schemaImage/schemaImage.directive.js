import SchemaOrg from 'schema.org';

export function SchemaImageDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/schemaImage/schemaImage.html',
    controller: schemaImageController,
    controllerAs: 'imgCtrl',
    scope: {
      image: "=img"
    },
    bindToController: true
  };

  return directive;
}

var schemaOrg;

class schemaImageController {
  constructor() {
    'ngInject';

    if (!this.image) {
      //TODO placeholder
      this.imageUrl = "";
    } else if (angular.isString(this.image)) {
      this.imageUrl = this.image;
    } else {
      schemaOrg = new SchemaOrg();
      if (schemaOrg.is(this.image['@type'], 'ImageObject')) {
        this.imageUrl = this.image.contentUrl;
      } else this.imageUrl = "";
    }
  }
}
