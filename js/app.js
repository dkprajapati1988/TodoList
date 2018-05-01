var app = angular.module('toDoApp', []);
app
  .controller('ToDoController', ['$scope', function ($scope) {
      $scope.tasks = [];
      $scope.IsAllChecked = false;
      $scope.deleteSelectStatus = false;
      $scope.addTask = function () {
          $scope.tasks.push({ task: $scope.task, done: false })
          $scope.task = '';
      }

      $scope.deleteTask = function (index) {
          $scope.tasks.splice(index, 1);
      }
      $scope.deleteSelected = function () {
          $scope.tasks = $scope.tasks.filter(function (item) {
              return !item.done;
          });
          $scope.IsAllChecked = false;
          $scope.deleteSelectStatus = false;
      };


      $scope.CheckUncheckHeader = function () {

          checkdeleteSelectStatus();
          for (var i = 0; i < $scope.tasks.length; i++) {
              if (!$scope.tasks[i].done) {

                  $scope.IsAllChecked = false;
                  break;
              }
              if ($scope.tasks.length == i + 1) {
                  $scope.IsAllChecked = true;
              }
          };
      };
      $scope.CheckUncheckHeader();

      function checkdeleteSelectStatus() {
          for (var i = 0; i < $scope.tasks.length; i++) {
              if ($scope.tasks[i].done) {

                  $scope.deleteSelectStatus = true;
                  break;
              }
              else {
                  $scope.deleteSelectStatus = false;
              }
          };
      }

      $scope.CheckUncheckAll = function () {
        
          for (var i = 0; i < $scope.tasks.length; i++) {
              $scope.tasks[i].done = $scope.IsAllChecked;
          }
          checkdeleteSelectStatus();
          
      };

  }])