// SETTING THE MODULE

angular.module("firstModule", [] );

// GETTING THE MODULE AND SETTING THE CONTROLLER

angular.module("firstModule").controller("firstController", ["$scope", function($scope){

	$scope.title = "Practicing Angular Up in Hurrrrr";

	$scope.buttonColor = "dodgerblue";
	$scope.whenClicked = function(){
		console.log("You touched the butt!");
		$scope.visibility = "surprise";
	};

	$scope.whenClicked2 = function(){
		console.log("You touched the butt!");
		$scope.visibility2 = true;
	};

}]);