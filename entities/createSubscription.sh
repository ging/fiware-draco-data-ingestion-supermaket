curl -v  localhost:1027/ngsi-ld/v1/subscriptions/ -s -S -H 'Content-Type: application/ld+json' -d @- <<EOF
{
  "description": "A subscription to get updates the Supermarket",
  "type": "Subscription",
  "entities": [{
    "type": "Supermarket"
    }],
  "watchedAttributes": [
      "occupation"
    ],
  "notification": {
    "endpoint": {
      "uri": "http://draco:5051/notify",
      "accept": "application/json"
    }
  },
    "@context": [
        "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld"
    ] 
}
EOF