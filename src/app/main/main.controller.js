export class MainController {
  constructor(graphs, $location, $http, $timeout, mlabKey) {
    'ngInject';

    this.creationDate = 1467036486462;

    let id = $location.search().id;

    if (id) {
      $http.get(`https://api.mlab.com/api/1/databases/schema-visualizer/collections/permalink/${id}?apiKey=` + mlabKey)
        .then((res) => {
          let newGraphs = res.data && res.data.data;
          if (newGraphs) {
            graphs.replaceWith(newGraphs);

            $timeout(() => {
              this.permalink = $location.absUrl();
              this.input = angular.toJson(graphs);
            }, 200);
          }
        }, (err) => {
          this._$log.error(err.data.error.message, err);
        });
    }
    this.graphs = graphs;
  }
}
