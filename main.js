angular.module('gitSearchApp', [])
    .controller('gitSearchController', ['$scope', '$http', function($scope, $http) {
        $scope.searchGit = function() {
            console.log('git search initiated');
            $http.get('https://api.github.com/search/repositories?q=' + $scope.searchGitText).
                success(function(data, status, headers, config) {
                    
                }).
                error(function(data, status, headers, config) {
                    console.log('error');
                
            })
        }
    }])