'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('gjuHarInt2016016App.admin', ['gjuHarInt2016016App.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
