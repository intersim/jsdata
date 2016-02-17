'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
	    resolve: {
	      	allUsers: function (User) {
	        	return User.findAll();
    	  },
    	  	allPosts: function(Post, allUsers) {
    	  		return Post.findAll();
    	  	}
    	}
	})
})


/*
This state should display all of the users and all of the posts. As indicated by the comments, we need to add a resolve block here in order to get the data. Remember that we need to get all of the users from the server also so that JSData can link them to their posts.
*/

app.controller('MainController', function($scope, allPosts, Post) {

	$scope.allPosts = allPosts;

	// playing around with synchronous methods

	// synchronous
	// var dataInJsDataCache = Post.getAll()
	// console.log('data in jsdata cache: ', dataInJsDataCache)


	// console.log('posts 1:', allPosts);
	// var foo = allPosts[0]


	// var postData = Post.getAll()
	// Post.ejectAll() // removes all the posts from the data store
	// var newCache = Post.getAll()
	// console.log("newCache",newCache)
	// Post.inject(postData)  // adds them back
	// console.log("new Post.getAll",Post.getAll())

	// console.log('posts 2:', allPosts[0]);
	// console.log("foo is now",foo)

		 	/*
			TODOS: 
			1 - use js-data to retrieve all users and all posts
			(HINT: if you want to be fancy, add a resolve block to this state 
			and retrieve the data there)

	 	*/
})


