angular.module('app').service('modalService', function($http){

this.getModalInfo = function (ModalRequest) {

  return $http.get ('./html/directiveTemplates/'+ ModalRequest +'.html')

}

})
