angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$sce) {
//objeto con la definicion de los headers del
//request HTTP, vamos a enviarle JSON al servidor
//y vamos a recibir JSON del servidor.
var defaultHTTPHeaders ={
     'Content-type': 'application/json',
     'Accept': 'application/json'
};
//Al objeto $http, le establecemos sus propiedades
//por defecto para que utilece los headers que
// definimos arriba.
$http.defaults.headers.post =defaultHTTPHeaders;


  $scope.estudiante =
  {
       documento : '',
       edad : '',
       nombre : '',
       genero : ''
  };
  $scope.guardarEstudiante = function() {
    //var urlCompleta = 'http://190.11.75.187:8000/appmobile/services/?photo='ftyfygug344'&latitude=344556&longitude=566777&altitude=679870809&orientation=8887767567&speed=89787675654&imei='rtyy34jjk'&phone=56678778&message='hola soy mary funciona app'';
    var urlCompleta = 'http://190.11.75.187:8000/appmobile/services/?'
    var postUrl= $sce.trustAsResourceUrl(urlCompleta);
    
    $http.post(postUrl,estudianteObj)
    .then(
      function(){ //funcion a ejecutar en caso de exito
        alert('el estudiante se aguardado con exito.');
      },
      function(){ //funcion a ejecutar en caso de error
        alert('Error al guardar el estudiante.');
      }

      );
     
    };

  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
