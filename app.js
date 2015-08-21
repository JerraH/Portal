var searchApp = angular.module('searchApp', []);

searchApp.controller('myController', ['$scope', function($scope, $http){
	$scope.typeofsearch = {
		singleSelect: null,
		availableOptions: [
			{id: 1, name: '2D inspiration', value:'inspiration'}, //(to find art)
			{id: 2, name: 'reference', value:'reference'}, // to find photography
			{id: 3, name: '3d Inspiration', value:'3d'}, //3d art, behance
			{id: 4, name: 'Color Palettes', value:'palettes'},
			{id: 5, name: 'materials', value:'materials'}, //(to find art)
			{id: 6, name: 'brushes', value:'brushes'}, // to find photography
			{id: 7, name: 'concept art', value:'conceptart'}, //3d art, behance
		],
		searchlocation: ''
	};

	$scope.colorChoice = {
		singleSelect: null,
		colorOptions: [
			{id: 1, name: 'blues', value:'blues'}, //(to find art)
			{id: 2, name: 'reds', value:'reds'}, // to find photography
			{id: 3, name: 'greens', value:'greens'}, //3d art, behance
			{id: 4, name: 'blacks and whites', value:'BlackandWhite'},
			{id: 5, name: 'pastels', value:'pastels'}, //(to find art)
			{id: 6, name: 'oranges', value:'oranges'}, // to find photography
			{id: 7, name: 'purples', value:'purples'},
			{id: 8, name: 'yellows', value:'yellows'}, //(to find art)
			{id: 9, name: 'warm colors', value:'warmcolors'}, // to find photography
			{id: 10, name: 'dark colors', value:'darkcolors'}

		]
	};

	$scope.searchText = $scope.search;

	$scope.inspiration = function(searchText){
	

		$http({
			method: 'JSONP',
			url: 'backend.deviantart.com/rss.xml?type=deviation&q=boost%3Apopular+in%3Adigitalart%2Fdrawings+'+ searchText,
	
	})
		.success(function(result){
			console.log(result);
		});

	// $scope.inspiration.submit = function(){

	// };
	// $scope.reference.submit = function(){

	// };
	// 	$scope.3d.submit = function(){

	// };
	// 	$scope.palettes.submit = function(){

	// };
	// 	$scope.materials.submit = function(){

	// };
	// 	$scope.brushes.submit = function(){

	// 	};

	// 	$scope.conceptart.submit = function(){

		};

}]);
