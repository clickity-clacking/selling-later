const { HPost } = require ('../models');

const HPostdata = [
    {
        "address": "2436 hollywood ave ca 92638",  
        "sell_date" :"12/03/2022",
        "post_url": "",
        "price_floor": 100000,
        "price_ceiling" : 283789 ,
        "beds": 2,
        "baths": 2 ,
        "sqft" :  2000 
    },
    {"address": "2436 hollywood ave ca 92638",  
        "sell_date" :"12/03/2022",
        "post_url":"",
        "price_floor": 134268 ,
        "price_ceiling" :2983678  ,
        "beds": 3,
        "baths":3  ,
        "sqft" : 3000  
},
{
    "address": "2436 hollywood ave ca 92638",  
        "sell_date" :"12/03/2022",
        "post_url":"",
        "price_floor": 2000399 ,
        "price_ceiling" : 2038888 ,
        "beds": 3,
        "baths": 4 ,
        "sqft" : 2567  
},
{
    "address": "2436 hollywood ave ca 92638",  
        "sell_date" :"12/03/2022",
        "post_url":"",
        "price_floor": 30000203 ,
        "price_ceiling" : 3638380 ,
        "beds": 4,
        "baths": 4 ,
        "sqft" : 3400
},
{
    "address": "2436 hollywood ave ca 92638",  
        "sell_date" :"12/03/2022",
        "post_url":"",
        "price_floor": 2383899 ,
        "price_ceiling" : 2838399 ,
        "beds": 3,
        "baths": 3 ,
        "sqft" : 3000
}
];
const seedPosts = () => HPost.bulkCreate(HPostdata);

module.exports = seedPosts;
