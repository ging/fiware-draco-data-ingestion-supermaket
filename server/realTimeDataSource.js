const generateJSONEntity = () => {
  return [{
    id: "urn:ngsi-ld:BarcelonaMarket:01",
    denomination: "",
    city: "Barcelona",
    occupation: Math.floor(Math.random() * 100),
    capacity: 340,
    dateObserved: new Date().toISOString(),
  },
  {
    id: "urn:ngsi-ld:AthensMarket:01",
    denomination: "",
    city: "Athens",
    occupation: Math.floor(Math.random() * 100),
    capacity: 340,
    dateObserved: new Date().toISOString(),
  }];
};

exports.generateJSONEntity = generateJSONEntity;
