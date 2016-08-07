export function normalizeValueFilter(graphs) {
  'ngInject';

  return (input) => {
    if (!input) return '';

    if (angular.isArray(input))
      return input.join(', ');

    if (input['@id'])
      return graphs.get(input['@id']).name;

    if (input.name) return input.name;
    
    return input;
  };
}
