(function() {
  angular.module('app', ['ngRoute'])
    .controller('InterviewCtrl', InterviewCtrl)
    .controller('FaqCtrl', FaqCtrl)
    .factory('InterviewService', InterviewService)
    .factory('FaqService', FaqService)
    .directive('headerDirective', headerDirective)
    .config(config);

  InterviewCtrl.$inject = ['InterviewService'];
  FaqCtrl.$inject = ['FaqService'];
  config.$inject = ['$routeProvider'];


  function config($routeProvider) {
    $routeProvider
      .when('/interview', {
        templateUrl: 'interviewPartial.html',
        controller: 'InterviewCtrl'
      })
      .when('/faq', {
        templateUrl: 'faqPartial.html',
        controller: 'FaqCtrl'
      })
      .otherwise({
        redirectTo: '/interview',
        controller: 'InterviewCtrl'
      });
  };

  function InterviewCtrl(InterviewService) {
    var vm = this;
    vm.pagename = "Interviews";
    vm.service = InterviewService;
    console.log(vm.service.collection);
  };

  function FaqCtrl(FaqService) {
    var vm = this;
    vm.pagename = "FAQs";
    vm.service = FaqService;
  };

  function InterviewService() {
    var service = {
      collection: [
        {
          title: 'Galaxy',
          question: 'What is the answer to life, the universe, and everything?',
          author: 'Eric'
        },
        {
          title: 'Lost',
          question: 'What did one snowman say to the other snowman?',
          author: 'John Locke'
        }
      ]
    }
    return service;
  };

  function FaqService() {
    var service = {
      collection: [
        {
          title: 'How do interview?',
          question: 'How does interview?',
          answer: 'Crush your eneimies. See them driven before you. Hear the lamentations of their women.'
        }
      ]
    }
    return service;
  };

  function headerDirective() {
    return {
      templateUrl: 'header.html'
    };
  };

})();