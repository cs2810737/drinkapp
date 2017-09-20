'use strict';

angular.module('myApp.view1', ['ngRoute'])


.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('view1', {
			url: '/view1',
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		})
	}])

.controller('View1Ctrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {

	$scope.showPrompt = function(ev) {
	    // Appending dialog to document.body to cover sidenav in docs app
	    var confirm = $mdDialog.show({
	    	controller:'RecDrinkCtrl',
	    	templateUrl:'view1/record_drink.html',
	    	parent: angular.element(document.body),
	    	targetEvent: ev,
	    	clickOutsideToClose: true
	    })
  	};
}])

.controller('RecDrinkCtrl', ['$scope', '$mdDialog', '$http', '$timeout', '$q', '$log', function($scope, $mdDialog, $http, $timeout, $q, $log){
	$scope.hide = function() {
  		$mdDialog.hide();
    };

    $scope.cancel = function() {
    	$mdDialog.cancel();
    };

    $scope.answer = function(answer) {
    	$mdDialog.hide(answer);
    };  

    function getLocation(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition)
		} else {
			console.log('geolocation not supported')
		}
	}

	function showPosition(position){
		console.log('here')
		console.log(position.coords.latitude)
		console.log(position.coords.longitude)
	}

	getLocation()
	navigator.geolocation.getCurrentPosition(showPosition)

	var data = {
		user: $scope.user,
		customer_name: $scope.customer_name,
		location: $scope.location,
		fav_drink: $scope.fav_drink,
		date: new Date().toISOString().slice(0, 10),
	}

	// console.log(data)
    // $http.get('http://localhost:8000/leads/')
    // 	.then(function(result){
    // 		$scope.leads = result.data
    // 	})

    var self = this

    self.simulateQuery = false
    self.isDisabled = false

    //list of drinks value/display objects
    self.drinks = loadAll()
    self.querySearch = querySearch
    self.selectedItemChange = selectedItemChange
    self.searchTextChange = searchTextChange

    self.newDrink = newDrink

    function newDrink(drink){
    	alert("Sorry! This feature is yet to be enabled.")
    }

    function querySearch(query){
    	var results = query ? self.drinks.filter(createFilterFor(query)) : self.drinks, deferred
    	if (self.simulateQuery) {
    		deferred = $q.defer()
    		$timeout(function(){
    			deferred.resolve(results)
    		}, Math.random() * 1000, false)
    		return deferred.promise
    	} else {
    		return results
    	}
    }

    function searchTextChange(text){
    	$log.info('Text changed to '+ text)
    }

    function selectedItemChange(item){
    	$log.info('Item changed to '+JSON.stringify(item))
    }

    function loadAll(){
    	var allDrinks = 'coca-cola, diet coke, coca-cola zero, fanta orange, fanta pineapple,\
    	 fanta passion, fanta strawberry, fanta blackcurrent, dasani, sprite, sprite zero, stoney tangawizi, krest, novida'

    	return allDrinks.split(/, +/g).map(function(drink){
    		return {
    			value: drink.toLowerCase(),
    			display: drink
    		}
    	})
    }


    function createFilterFor(query){
    	var lowercaseQuery = angular.lowercase(query)

    	return function filterFn(drink){
    		return (drink.value.indexOf(lowercaseQuery) === 0)
    	}
    }
}])

.controller('')