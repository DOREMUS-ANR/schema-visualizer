export class MainController {
  constructor(graphs, $location, $http, permalink, $rootScope) {
    'ngInject';

    this.creationDate = 1467036486462;

    let id = $location.search().id;

    if (id) {
      permalink.get({
        id: id
      }, (res) => {
        let newGraphs = res.data;
        if (newGraphs) {
          graphs.replaceWith(newGraphs);

          this.permalink = $location.absUrl();
          this.input = angular.toJson(graphs);
        }
        $rootScope.ready = true;
      }, (err) => {
        this._$log.error(err.data.error.message, err);
        $rootScope.ready = true;
      });
    } else {
      $rootScope.ready = true;
    }
    this.graphs = graphs;
  }
}
