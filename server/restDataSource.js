const superMarketsJSONEntities = [
    {
        "id": "urn:ngsi-ld:MadridMarket:01",
        "denomination": "Madrid Market", 
        "city": "Madrid",
        "occupation": 20,
        "capacity": 500, 
        "dateObserved": new Date().toISOString()
    },
    {
        "id": "Vienna:01",
        "denomination": "urn:ngsi-ld:ViennaMarket:01", 
        "city": "Vienna",
        "occupation": 60,
        "capacity": 100, 
        "dateObserved": new Date().toISOString()
    },
    {
        "id": "urn:ngsi-ld:ParisMarket:01",
        "denomination": "Paris Market", 
        "city": "Paris",
        "occupation": 30,
        "capacity": 200, 
        "dateObserved": new Date().toISOString()
    },
    {
        "id": "urn:ngsi-ld:LondonMarket:01",
        "denomination": "", 
        "city": "London",
        "occupation": 22,
        "capacity": 340, 
        "dateObserved": new Date().toISOString()
    }
]

const generateJSONEntities = (superMarketsJSONEntities) => {
    return superMarketsJSONEntities.map(superMarket => {
        superMarket['occupation'] = Math.floor(Math.random() * 100) 
        superMarket['dateObserved'] = new Date().toISOString()
        return superMarket
    })
}

exports.superMarketsJSONEntities = superMarketsJSONEntities
exports.generateJSONEntities = generateJSONEntities