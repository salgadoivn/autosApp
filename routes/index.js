var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var Mazda = require('../models/autos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'autosApp' });
});

router.get('/Mazda', function (req, res, next){
	var infoMazda={};
	infoMazda.pais='Japón';
	infoMazda.sectorVentas='Comercial';
	infoMazda.anioFundacion=1929;
	infoMazda.logo="https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png";

	res.render('Mazda', infoMazda);
});

router.get('/Toyota', function (req, res, next){
	var infoToyo={};
	infoToyo.pais='Japón';
	infoToyo.sectorVentas='Comercial';
	infoToyo.anioFundacion=1937;
	infoToyo.logo="http://www.car-brand-names.com/wp-content/uploads/2015/07/Toyota-logo.png";

	res.render('Toyota', infoToyo);
});	

router.post('/alta', function(req, res, next){
	//crear un bojeto mongo
	//hacer el insert
	var miMazda=Mazda({
		nombre:req.body.nombre,
		foto:req.body.foto
	});
	miMazda.save(function(err, data){
		if (err) {console.log('error');}
		else{
			res.render('resultadoAlta',data);
		}
	});
});

module.exports = router;
