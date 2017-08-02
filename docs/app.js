var app = angular.module("movie_module", ['routesModule']);

app.service("services", function($http) {
    this.returnedObj = function() {
        return $http.get("movies.json");
    }

//     this.objectNew = function() {
//         return $http.get("http://api.population.io:80/1.0/countries");
//     }
});


app.controller("homeController", function(services) {
    var that = this;

    that.selected = undefined;
    that.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma',
        'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'
    ];

//     services.objectNew().then(function(response){
//         that.z = JSON.parse(JSON.stringify(response.data));

//         console.log(that.z);
//     });


    services.returnedObj().then(function(response) {
        that.obj = JSON.parse(JSON.stringify(response.data.data));

        that.filtered = that.obj.map(function(val) {
            return val.Title;
        });
        console.log(that.filtered);
    });

});


// Setup the filter
app.filter('capitalize', function() {

    // Create the return function and set the required parameter as well as an optional paramater
    return function(input, char) {

        if (isNaN(input)) {

            // If the input data is not a number, perform the operations to capitalize the correct letter.
            var char = char - 1 || 0;
            var letter = input.charAt(char).toUpperCase();
            var out = [];

            for (var i = 0; i < input.length; i++) {

                if (i == char) {
                    out.push(letter);
                } else {
                    out.push(input[i]);
                }
            }
            return out.join('');

        } else {
            return input;
        }

    }

});
