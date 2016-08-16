export function config ($logProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
}

export const keys = {
  googleKey: 'AIzaSyCRrWk5ZBS-g9P4FSgymP65ZXyqOp-Xa0w', // key for Google Maps
  mlabKey: 'kSJJhR72ClYzcRYmrhpeXlhbXddPE6kf', // key for mLab
  mlabDbName: 'schema-visualizer' // database name on mLab
};
