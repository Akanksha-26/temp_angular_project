


module.exports = function($stateProvider,$urlRouterProvider) {

		
		$urlRouterProvider.otherwise("/myTasks");


		$stateProvider
					.state('myTasks',{
						url:"/myTasks",
						templateUrl:"partials/myTasks.html"
					})

					.state('state1', {
				      url: "/state1",
				      templateUrl: "partials/state1.html"
				    })
					.state('state2', {
				      url: "/state2",
				      templateUrl: "partials/state2.html"
				    });
};