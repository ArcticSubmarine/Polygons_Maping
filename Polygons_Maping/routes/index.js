var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET home page. */
router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({extended: true,})
);

router.get('/map', function (request, response) {
    response.sendFile('map.html', {root: 'Polygons_Maping/views'});
});

module.exports = router;
