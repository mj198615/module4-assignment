(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();

