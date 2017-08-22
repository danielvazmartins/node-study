app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	$scope.users = [];
	$scope.test = 'test';

	var init = function() {
		getUsers();
	}

	var getUsers = function() {
		$http.get('/api/users')
		.then(function successCallback(response) {			
			$scope.users = response.data;
		});
	}

	init();
}]);