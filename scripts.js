(function() {
  angular.module('app', ['ui.router'])
    .controller('InterviewCtrl', InterviewCtrl)
    .controller('FaqCtrl', FaqCtrl)
    .factory('InterviewService', InterviewService)
    .factory('FaqService', FaqService)
    .directive('headerDirective', headerDirective)
    .config(config);

  InterviewCtrl.$inject = ['$scope', 'InterviewService'];
  FaqCtrl.$inject = ['FaqService'];
  config.$inject = ['$stateProvider'];


  function config($stateProvider) {
    $stateProvider
      .state('interview', {
        url: '/interview',
        templateUrl: 'interviewPartial.html',
        controller: 'InterviewCtrl as interview'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'faqPartial.html',
        controller: 'FaqCtrl as faq'
      });
  };

  function InterviewCtrl($scope, InterviewService) {
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
      scope: {
        pagename: '=',
        service: '='
      },
      templateUrl: 'header.html'
    };
  };

})();