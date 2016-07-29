/* global moment:false */

import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { SchemaInputDirective } from '../app/components/schemaInput/schemaInput.directive';
import { SchemaOutputDirective } from '../app/components/schemaOutput/schemaOutput.directive';
import { normalizeValueFilter } from '../app/filters/normalizeValue.filter';
import { locationFilter } from '../app/filters/location.filter';
import { sitenameFilter } from '../app/filters/sitename.filter';

var graphs = [];
graphs.get = function (id) {
  return graphs.find((g) => g['@id'] == id);
};

angular.module('schemaVisualizer', ['ngAria', 'ngMaterial', 'ngMap', 'toastr'])
  .constant('moment', moment)
  .value('graphs', graphs)
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('schemaInput', SchemaInputDirective)
  .directive('schemaOutput', SchemaOutputDirective)
  .filter('normalizeValue', normalizeValueFilter)
  .filter('sitename', sitenameFilter)
  .filter('location', locationFilter);
