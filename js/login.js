Lungo.init({
    name: 'Crm.js && php',
    version:'1.0',
    resources:[

    ]
});

Lungo.dom("#btnLogin").tap(function (event){
	Lungo.Router.section("ppal.php")
});