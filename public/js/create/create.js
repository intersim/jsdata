'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			theAuthor: function (User, $stateParams) {
				return User.find($stateParams.userId)
			}
		}
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, theAuthor, Post, $state) {

	console.log('theAuthor: ', theAuthor.username);
	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.newPost = {author: theAuthor};

	// $scope.newPost.author = theAuthor.username || newPost.name

	$scope.createNewPost = function () {
		Post.create($scope.newPost)
		.then(function (postData) {
			console.log("postData: ", postData);
			// $state.go('main', postData)
		})
	}
}) 