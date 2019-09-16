(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',function($scope)
	{
	$scope.checkItems = function(){
		if($scope.lunchmenu =="")
		{
			$scope.showMessage ="Please enter data first";
			return;
		}
		var item = $scope.lunchmenu.split(',');
		if(item.length<=3)
		{
			$scope.showMessage ="Enjoy!";
			return;
		}
		else if(item.length >3)
		{
			$scope.showMessage ="Too much!";
			return;
		}
	};
	}
		
	);
	
	
})();