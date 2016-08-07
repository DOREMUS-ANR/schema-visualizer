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
    //   "@context": "http://schema.org/",
    //   "@type": "MusicEvent",
    //   "description": "Concert par l'ensemble vocal \"Ristretto\" et le \"BBC Symphony Chorus\"\n\n« Liberté »\n« Figure Humaine », de Francis Poulenc et œuvres de Hector Berlioz, Claude Debussy, Claudio Monteverdi, Hugo Wolf par l’ensemble vocal « Ristretto » et chanteurs du \"BBC Symphony Chorus\"\nDirection Errol Girdlestone ",
    //   "image": {
    //     "@type": "ImageObject",
    //     "contentUrl": "https://api.getwemap.com/images/pps-picpoints/b18b384a6da16d80dad46e90.04427439.jpg?width=500&always_fit=false",
    //     "creator": "Ristretto"
    //   },
    //   "location": {
    //     "@type": "Place",
    //     "name": "Cathédrale Sainte-Réparate",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "addressCountry": "France",
    //       "addressLocality": " Nice",
    //       "postalCode": "06000",
    //       "streetAddress": "Place Rossetti"
    //     }
    //   },
    //   "performer": [{
    //     "@type": "PerformanceRole",
    //     "roleName": "Director",
    //     "performer": {
    //       "@type": "Person",
    //       "name": "Errol Girdlestone",
    //       "image": "http://marc.syl20.free.fr/images/errolGirdlestone.jpg"
    //     }
    //   }, {
    //     "@type": "PerformanceRole",
    //     "roleName": "Chorus",
    //     "performer": {
    //       "@type": "MusicGroup",
    //       "name": "Ensemble vocal \"Ristretto\"",
    //       "image": "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/11539781_799484743506088_6237680323271273838_n.png?oh=6c7d40e65935e23172dffbc376b364ac&oe=58243D0E"
    //     }
    //   }, {
    //     "@type": "PerformanceRole",
    //     "roleName": "Chorus",
    //     "performer": {
    //       "@type": "MusicGroup",
    //       "name": "BBC Symphony Chorus",
    //       "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXmvc7Nf4CRFThkGezHPbfQ2wjGuqlRY0et5dN8a8NQVtYXDgZRQ"
    //     }
    //   }],
    //   "name": "Liberté !",
    //   "startDate": "2016-09-17T20:00",
    //   "endDate": "2016-09-17T22:00",
    //   "doorTime": "20:00",
    //   "workPerformed": {
    //     "@id": "bnode0"
    //   },
    //   "url": "http://journeesdupatrimoine.culturecommunication.gouv.fr/Programme?logid=1735682",
    //   "offers": [{
    //     "@type": "Offer",
    //     "name": "Entrée libre",
    //     "price": 0,
    //     "priceCurrency": "EUR",
    //     "url": "https://citm-philharmoniedeparis.shop.secutix.com/api/1/redirect/product/performance?id=618710145&lang=en"
    //   }]
    // }, {
    //   "@context": "http://schema.org/",
    //   "@type": "Event",
    //   "description": "Des vestiges les plus anciens au patrimoine du XXIe siècle : parcourez les premiers monuments figurant dans la programmation qui s'enrichira au fil de l’été avec de nombreuses ouvertures et des animations inédites.",
    //   "name": "Journées Européennes du Patrimoine",
    //   "startDate": "2016-09-17",
    //   "endDate": "2016-09-18",
    //   "image": "http://www.culturecommunication.gouv.fr/var/culture/storage/images/media/regions/drac-aquitaine-limousin-poitou-charentes/images/manifestations-nationales/jep-2016-c-des-signes-studio-muchir-desclouds/1549927-4-fre-FR/JEP-2016-C-Des-Signes-studio-Muchir-Desclouds.jpg",
    //   "url": "http://journeesdupatrimoine.culturecommunication.gouv.fr/"
    // }, {
    //   "@context": "http://schema.org/",
    //   "@type": "MusicComposition",
    //   "@id": ":bnode0",
    //   "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/500px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
    //   "name": "Figure Humaine",
    //   "description": "Figure humaine de Francis Poulenc est une cantate pour double chœur mixte composée en 1943 sur des textes de Paul Éluard, créée à Londres en anglais par la BBC en 1945, en français en 1946 à Bruxelles et en France le 22 mai 1947 à Paris.",
    //   "dateCreated": "1943",
    //   "agent": {
    //     "@type": "Role",
    //     "roleName": "composer",
    //     "agent": {
    //       "@id": ":poulenc"
    //     }
    //   },
    //   "timeRequired": "PT18M",
    //   "musicCompositionForm": "Cantate"
    // }, {
    //   "@id": ":poulenc",
    //   "@type": "Person",
    //   "familyName": "Poulenc",
    //   "givenName": "Francis",
    //   "image": "https://upload.wikimedia.org/wikipedia/en/b/b8/Poulenc-1922.jpg",
    //   "name": "Francis Poulenc",
    //   "birthDate": "1899-01-07",
    //   "deathDate": "1963-01-30"
    // }]);
    //
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
