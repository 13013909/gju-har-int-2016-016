'use strict';

import angular from 'angular';

export default angular.module('gjuHarInt2016016App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
