(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
            category: categoryShortName
        }
    }).then(function (response) {
      return response.data;
    });
  };
}

})();


(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
		  console.log("Success in retrieving : getAllCategories");
      return response.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
            category: categoryShortName
        }
    }).then(function (response) {
      console.log("Success in retrieving : getItemsForCategory");
      return response.data;
    });
  };
}

})();
