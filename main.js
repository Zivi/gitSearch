angular.module('gitSearchApp', [])
    .controller('gitSearchController', ['$scope', '$http', function($scope, $http) {
        $scope.searchGit = function() {
            console.log('git search initiated');
            $http.get('https://api.github.com/search/repositories?q=' + $scope.searchGitText).
                success(function(data) {
                    $scope.searchResults = data.items;
                }).
                error(function(data) {
                    console.log('error');
                
            })
        }
    }])