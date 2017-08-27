
// You can use the following structure for simulating input data
// Big initialization
var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 main street',
            'richmond hill'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '111 main street',
            'richmond hill'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]
console.log(people);

var a = 3;
console.log(typeof a);