(function () {
  'use strict';

  angular
    .module('testApp')
    .controller('handleController', handleController);

  /** @ngInject */
  function handleController() {
    var vm = this;
    vm.handledStrings = [];
    vm.numberQuantity = 'Результат';
    vm.applyForm = applyForm;


    function applyForm(form) {
      vm.numberQuantity = vm.string.replace(/[^0-9]/g, "").length;
      vm.handledStrings.push({
        "string": vm.string,
        "quantity": vm.numberQuantity
      })
    }
  }
})();
