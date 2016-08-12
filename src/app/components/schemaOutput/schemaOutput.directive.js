export function SchemaOutputDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/schemaOutput/schemaOutput.html',
    controller: schemaOutputController,
    controllerAs: 'outCtrl',
    scope: {
      permalink: "="
    },
    bindToController: true
  };

  return directive;
}

class schemaOutputController {
  constructor($filter, $scope, $rootScope, $location, $timeout, $http, $log, $mdToast, mlabKey, graphs, googleKey) {
    'ngInject';

    this.$filter = $filter;
    this.graphs = graphs;
    this._$location = $location;
    this._$http = $http;
    this._$log = $log;
    this._$mdToast = $mdToast;
    this.googleKey = googleKey;
    this.mlabKey = mlabKey;

    this.inProgress = true;

    var readyWatch = $rootScope.$watch(() => $rootScope.ready, (ready) => {
      if (!ready) return;

      readyWatch();

      this._firstTime = true;
      $scope.$watch(() => this.graphs, (graphs) => {
        if (!graphs || !graphs.length) return;
        if (this._firstTime) {
          this._firstTime = false;
          return;
        }

        this.inProgress = false;
      }, true);
    });
  }

  getPermalink() {
    if (!this.graphs || this.graphs.length < 1) return;
    this.inProgress = true;
    // this._$location.search({
    //   graphs: convertHex.bytesToHex(new Uint8Array(mPack.encode(this.graphs)))
    // });
    // console.log(mPack.encode(this.graphs));

    this._$http.post('https://api.mlab.com/api/1/databases/schema-visualizer/collections/permalink?apiKey=' + this.mlabKey, {
      'data': this.graphs
    }, {
      'Content-Type': 'application/json'
    }).then((res) => {
      var id = res.data._id.$oid;
      this._$location.search({
        id: id
      });
      this.permalink = this._$location.absUrl();
    }, (err) => {
      this._$log.error(err.data.error.message, err);
    });
  }

  copied() {
    let $mdToast = this._$mdToast;
    $mdToast.show(
      $mdToast.simple()
      .textContent('Copied!')
      .position('top right')
      .hideDelay(3000)
    );
  }

  copyFailed(err) {
    this._$log.error(err);
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
