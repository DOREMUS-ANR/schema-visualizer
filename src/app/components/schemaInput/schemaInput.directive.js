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
    //   "@type": "Event",
    //   "description": "Jazz à la Villette for kids (spectacle)\n\nRendez-vous incontournable de la fin d'été, Jazz à la Villette présente toutes les nuances du jazz, croise les styles et les tendances, pour offrir un panorama d'une musique en pleine effervescence.\nLe festival revient du 30 août au 11 septembre avec Nas, Snarky Puppy, Seun Kuti, Laura Mvula, Chick Corea, McCoy Tyner, Chucho Valdés, Erik Truffaz, Archie Shepp, GoGo Penguin et beaucoup d’autres.",
    //   "image": "http://philharmoniedeparis.fr/sites/default/files/styles/event_slide_full/public/pierre-and-the-loup-c-daniel-jourdy.jpg?itok=drTEPMNa",
    //   "location": {
    //     "@type": "Place",
    //     "name": "Amphithéâtre - Cité de la musique",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "addressCountry": "France",
    //       "addressLocality": " Paris",
    //       "postalCode": "75019",
    //       "streetAddress": "221, avenue Jean-Jaurès"
    //     }
    //   },
    //   "name": "Pierre and the Loup",
    //   "startDate": "2016-09-03",
    //   "endDate": "2016-09-03",
    //   "doorTime": "11:00",
    //   "workPerformed": {
    //     "@id": "bnode0"
    //   },
    //   "url": "http://philharmoniedeparis.fr/en/activity/show-kids/17534-pierre-and-loup",
    //   "offers": [{
    //     "@type": "Offer",
    //     "name": "Full price",
    //     "price": 8,
    //     "priceCurrency": "EUR",
    //     "url": "https://citm-philharmoniedeparis.shop.secutix.com/api/1/redirect/product/performance?id=618710145&lang=en"
    //   }]
    // }, {
    //   "@context": "http://schema.org/",
    //   "@type": "Event",
    //   "description": "The big event to kickoff the new season, Jazz à la Villette covers the entire jazz palette, crossing genre lines and mixing trends to offer a living panorama of this ever-evolving brand of music.",
    //   "image": "http://philharmoniedeparis.fr/sites/default/files/styles/page_additionnal_bloc/public/affiche-alembic-jazz2016-300x300.jpg?itok=WwK_gQ69",
    //   "location": {
    //     "@type": "Place",
    //     "name": "Philharmonie de Paris",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "addressCountry": "France",
    //       "addressLocality": " Paris",
    //       "postalCode": "75019",
    //       "streetAddress": "221, avenue Jean-Jaurès"
    //     }
    //   },
    //   "name": "Jazz à la Villette",
    //   "startDate": "2016-08-30",
    //   "endDate": "2016-09-11",
    //   "url": "http://www.jazzalavillette.com/"
    // }, {
    //   "@context": "http://schema.org/",
    //   "@type": "MusicComposition",
    //   "@id": ":bnode0",
    //   "image": "https://amdprod.files.wordpress.com/2011/11/affiche-pierre-and-the-loup.jpg",
    //   "name": "Pierre and the loup",
    //   "description": "Version entièrement nouvelle du célèbre conte russe. L’histoire est la même, mais la musique inédite- composée par un quatuor de sax- change radicalement l’approche de ce classique du genre.  C’est en dépit de bien des règles qu’à 5 ils raconteront, à leur sauce, une histoire qui ressemble à s’y méprendre à l’originale exception faite de l’écriture jazz et c’est énorme.",
    //   "composer": "Heavy Fingers",
    //   "dateCreated": "2014",
    //   "genre": "jazz",
    //   "isBasedOn": {
    //     "@id": ":bnode1"
    //   }
    // }, {
    //   "@context": "http://schema.org/",
    //   "@type": "MusicComposition",
    //   "@id": ":bnode1",
    //   "alternateName": "Петя и волк, Petya i volk",
    //   "name": "Peter and the Wolf",
    //   "description": "Peter and the Wolf, Op. 67, is a composition written by Sergei Prokofiev in 1936 in the USSR. It is a children's story (with both music and text by Prokofiev), spoken by a narrator accompanied by the orchestra.",
    //   "composer": "Sergej Prokof'ev",
    //   "dateCreated": "1936",
    //   "genre": "classic music",
    //   "locationCreated": "Soviet Union"
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
