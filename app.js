var modulo = angular.module("app",["ui.router","ngAnimate"]);

modulo.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/Inicio")

	$stateProvider
		.state("Inicio",{
			url:"/Inicio",
			templateUrl:"corazon.html"
		})
		.state("Mensaje",{
			url:"/Mensaje",
			templateUrl:"mensaje.html"
		})
		.state("Video",{
			url:"/Video",
			templateUrl:"video.html"
		})


})

modulo.controller("AppController",function($scope,$location){
	console.log("Hola controller",$location.path().slice(1));
	$scope.TipoVista = $location.path().slice(1)
	$scope.CambioUrl = function(dato)
	{
		$scope.TipoVista = dato;
	}
})
modulo.directive("rotacion",function($timeout){
	return{
		link:function(scope,ele,attrs){

			$timeout(function(){
				ele.find(".cuadrado").addClass("rotar");
			},1000)
			$timeout(function(){
				ele.find(".cuadrado").removeClass("rotar");
			},3000)

		}
	}
})
modulo.directive("latido",function($timeout){
	return{
		link:function(scope,ele,attrs){
			$timeout(function(){
				ele.addClass("show");
			},5000)

			ele.on("click",function(){
				ele.find("span").toggleClass("icon-play3").toggleClass("icon-stop2").toggleClass("margin-left")
				$(".Corazon").toggleClass("startLatido")
			})
		}
	}
})