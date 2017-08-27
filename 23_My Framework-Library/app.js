//var g = G$(firstname, lastname,language);       // Returns object


var g = G$("John", "Doe");       // Returns object
g.greet().setLang('es').greet(true);
//console.log(g);

$('#login').click(function() {
    var loginGrtr = G$('john', 'doe');
    
    $('#logindiv').hide();
    
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});

// add support for more languages