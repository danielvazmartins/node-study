app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	$scope.users = [];
	$scope.selectedUserId = null;
	$scope.msgError= "";

	var init = function() {
		getUsers();
	}

	// Cria a estrutura do banco de dados
	$scope.createDB = function() {
		$http.get('/api/users/create-database')
		.then(function successCallback(response) {
			console.log(response);
		})
	}

	// Retorna a lista de usuários
	var getUsers = function() {
		$http.get('/api/users')
		.then(function successCallback(response) {
			$scope.users = response.data;
		}, function errorCallback(response) {			
			$scope.msgError = "Erro ao acessar banco de dados!";
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
			if ( response.data != "" ) {
				getUsers();
			}
		});
	}

	// Seleciona usuário para edição
	$scope.editUser = function(user) {
		$scope.selectedUserId = user.usr_id;
		$scope.name = user.usr_name;
		$scope.email = user.usr_email;
	}

	// Salva usuário alterado
	$scope.updUser = function(user) {
		var _data = {
			id: $scope.selectedUserId,
			name: $scope.name,
			email: $scope.email
		}
		$http.post('/api/users', _data)
		.then(function successCallback(response) {
			if ( response.data != "" ) {
				$scope.selectedUserId = null;
				$scope.name = "";
				$scope.email = "";
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