const cheeses = require ('../data/cheese.js');

/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Returnerer et JSON object med alle oste fra kartoteket
     * @returns {Object}
     */
    'getAll': () => cheeses,

    /**
     * getOne
     * Returnerer et JSON object med en enkelt ost fra kartoteket
     * @param {string}varenr - varenummer på en ost
     * @returns {Object}
     */

    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);

            }
        });

        if (currentCheese !== null) {
            return(currentCheese);
        
        }else{
            return{
                "code": "ResourceNotFound",
                "message": varenr + " does not exist"
            };
        }
    }
};