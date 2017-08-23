app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	$scope.users = [];	

	var init = function() {
		getUsers();
	}

	// Retorna a lista de usuários
	var getUsers = function() {
		$http.get('/api/users')
		.then(function successCallback(response) {			
			$scope.users = response.data;
		});
	}

	// Adicionar usuário
	$scope.addUser = function() {
		var _data = {
			name: $scope.name,
			email: $scope.email
		}
		$http.put('/api/users', _data)
		.then(function successCallback(response) {
			console.log(response);
			if ( response.data != "" ) {
				getUsers();
			}
		});
	}

	// Seleciona usuário para edição
	$scope.editUser = function(user) {
		$scope.name = user.usr_name;
		$scope.email = user.usr_email;
	}

	// Salva usuário alterado
	$scope.updUser = function(user) {
		var _data = {
			id: user.usr_id,
			name: user.usr_name,
			email: user.usr_email
		}
		$http.post('/api/users', _data)
		.then(function successCallback(response) {
			if ( response.data != "" ) {
				getUsers();
			}
		});
	}

	// Remover usuário
	$scope.delUser = function() {
		console.log('delUser');
	}

	init();
}]);