export function sitenameFilter() {
  'ngInject';

  return (input) => {
    if (!input || !angular.isString(input)) return '';

    let url = new URL(input);
    return url.hostname;
  };
}
