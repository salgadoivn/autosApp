var express = require('express');
var router = express.Router();

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

module.exports = router;
