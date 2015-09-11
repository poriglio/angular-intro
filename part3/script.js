angular.module("boxModule", []);

angular.module("boxModule").controller("boxHandler", ["$scope", function($scope){

	$scope.annoying = true;

	$scope.onClick = function(){
		console.log("This got weird quickly...");
		$scope.annoying = false;
		console.log($scope.annoying);
	};

	$scope.onEscape = function ( ) {

		$scope.annoying = true;

	}

}]);