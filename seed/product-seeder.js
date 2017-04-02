var Product = require('../models/Product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Mad_Max_2015_video_game_cover_art.jpg',
        title: 'Mad MAx',
        description: 'Mad Max Game',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
        title: 'Witchers 3',
        description: 'Beat RPG',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/40/Witcher_2_cover.jpg',
        title: 'Witchers 2',
        description: 'a once nice',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg',
        title: 'Dark Souls ',
        description: 'its awsome',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Needforspeedtheruncover.jpg',
        title: 'nfs run',
        description: 'a racing game',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/03/ACSyndicate.jpg',
        title: 'AC syndicate',
        description: 'Ubisoft assassins',
        price: 12
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit()  {
    mongoose.disconnect();
}

