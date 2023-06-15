# FIWARE Data Ingestion Draco - Supermarket example

## Scenario description
-	Two data sources about Supermarkets that need to be integrated in the FIWARE ecosystem.
	-	Polling service: Draco makes a petition every 10 seconds.
	-	Real time service: Draco receives notifications when a data source is updated.
-	Context Broker to manage Context Information and Draco to ETL (Extract-Transform-Load tasks)
	-	Draco to homogeneize data an to store the m in te Context Broker
	-	Draco to generate the historical database



## Tasks
-	Clone the repository
-	docker compose up -d
-	Create the subscription: ./entities/createSubscription.sh
-	Configure both Draco templates and run them
-	Access http://localhost:3001/entities in order to test that the ingestion was made correctly
-	Access the historical database in order to test that the historical data are generated