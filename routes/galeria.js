var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var Mazda = require('../models/autos');

router.get('/mazda', function (req, res, next){
	
	/*var data={autos:[]};
	var auto={};
	auto.nombre="Mazda 3";
	auto.Foto="https://www.actualidadmotor.com/wp-content/uploads/2019/01/Mazda-3-1250x515.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda 6";
	auto.Foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2020/mazda6/vlp/360/gris-titanio/mazda-6-vehiculos-exterior-gris-titanio-17.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.Foto="https://www.mazdausa.com/siteassets/vehicles/2019/cx-3/vlp/studio-360s/machine-gray/my19-cx3-gt-machine-gray-0002.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda 6";
	auto.Foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2020/mazda6/vlp/360/gris-titanio/mazda-6-vehiculos-exterior-gris-titanio-17.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.Foto="https://www.mazdausa.com/siteassets/vehicles/2019/cx-3/vlp/studio-360s/machine-gray/my19-cx3-gt-machine-gray-0002.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda 6";
	auto.Foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2020/mazda6/vlp/360/gris-titanio/mazda-6-vehiculos-exterior-gris-titanio-17.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.Foto="https://www.mazdausa.com/siteassets/vehicles/2019/cx-3/vlp/studio-360s/machine-gray/my19-cx3-gt-machine-gray-0002.jpg";
	data.autos.push(auto);
*/

	Mazda.find({},function(err, data){

		//console.log(data)

		var x={autos:data};
	res.render("./galeria/mazda",x);

});	
});

module.exports = router;
