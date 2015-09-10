angular.module("dogModule", []);

angular.module("dogModule").controller("dogController", ["$scope", function($scope){


	$scope.walmart = "http://www.walmart.com";


	$scope.hoverColor = function ($event) {

		$scope.colorChange = "magic";
		$scope.excite = "!!!";


	};


	$scope.exitHoverColor = function ($event) {

		$scope.colorChange = "normal";
		$scope.excite = "";

	};



	$scope.onClick = function ($event) {

		var hyper = confirm("Do you really want to go there?");
		console.log(hyper);

		if(hyper === false){

		$scope.noWalmart = function(){
			return true;
		};
		$event.preventDefault();

		};


	};

}]);