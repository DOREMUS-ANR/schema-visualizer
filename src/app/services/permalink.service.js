import { keys } from './../index.config';

var databaseApi = `https://api.mlab.com/api/1/databases/${keys.mlabDbName}/collections/permalink/:id`;

export function PermalinkFactory($resource) {
  'ngInject';

  var PermalinkResource = $resource(databaseApi, {
    apiKey: keys.mlabKey
  }, {});

  return PermalinkResource;
}
