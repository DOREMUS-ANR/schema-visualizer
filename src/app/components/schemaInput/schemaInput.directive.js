export function SchemaInputDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/schemaInput/schemaInput.html',
    controller: schemaInputController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class schemaInputController {
  constructor($scope, $log, graphs) {
    'ngInject';


    // this.input = angular.toJson([{
    //   "@context": "http://schema.org",
    //   "@id": "http://data.doremus.org/Self_Contained_Expression/F22/3908d595-bf99-46ca-bd29-19af260e8116",
    //   "@type": "MusicComposition",
    //   "name": "Sonata quasi una Fantasia",
    //   "alternateName": [
    //     "Sonate au clair de lune",
    //     "Clair de lune",
    //     "Sonate no 14 en do dièse mineur"
    //   ],
    //   "mentions": "Contesse Giulietta",
    //   "musicalKey": "Do dièse mineur",
    //   "musicCompositionForm": "sonate",
    //   "timeRequired": "PT16M",
    //   "description": "opus 27, n°2",
    //   "genre": "Musique Romantique",
    //   "composer": {
    //     "@id": "http://data.doremus.org/composer/beethoven"
    //   },
    //   "locationCreated": {
    //     "@type": "Place",
    //     "name": "Vienne"
    //   },
    //   "dateCreated": "1801",
    //   "hasPart": [{
    //     "@type": "MusicComposition",
    //     "name": "1. Adagio sostenuto",
    //     "musicalKey": "do dièse mineur"
    //   }, {
    //     "@type": "MusicComposition",
    //     "name": "2. Allegretto",
    //     "musicalKey": "ré bémol majeur"
    //   }, {
    //     "@type": "MusicComposition",
    //     "name": "3. Presto agitato",
    //     "musicalKey": "do dièse mineur"
    //   }]
    // }, {
    //   "@context": "http://schema.org",
    //   "@id": "http://data.doremus.org/Expression_Creation/F28/3908d595-bf99-46ca-bd29-19af263738465",
    //   "@type": "CreateAction",
    //   "description": "Composèe à Vienne en 1801, dèdicace à Giulietta",
    //   "startTime": "1801",
    //   "endTime": "1801",
    //   "location": {
    //     "@type": "Place",
    //     "name": "Vienne"
    //   },
    //   "result": "http://data.doremus.org/Self_Contained_Expression/F22/3908d595-bf99-46ca-bd29-19af260e8116",
    //   "agent": {
    //     "@type": "Role",
    //     "roleName": "composer",
    //     "agent": {
    //       "@id": "http://data.doremus.org/composer/beethoven"
    //     }
    //   }
    // }, {
    //   "@context": "http://schema.org",
    //   "@id": "http://data.doremus.org/composer/beethoven",
    //   "@type": "Person",
    //   "name": "Ludwig van Beethoven",
    //   "familyName": "van Beethoven",
    //   "givenName": "Ludwig",
    //   "birthDate": "1770",
    //   "deathDate": "1827",
    //   "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Beethoven.jpg"
    // }]);

    $scope.$watch(() => this.input, (input) => {
      try {
        let obj = angular.fromJson(input);
        if (!angular.isArray(obj)) obj = [obj];
        graphs.splice(0, graphs.length);
        obj.forEach((elem) => {
          if (elem) graphs.push(elem);
        });
      } catch (e) {
        // do nothing
        $log.error(e);
      }
    });
  }
}
