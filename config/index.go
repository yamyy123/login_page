package config

import (
	"context"
	"aviculture/constants"

	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Customer_ProfileCollection *mongo.Collection


func init() {
	clientoption := options.Client().ApplyURI(constants.Connectstring)
	ctx, _ := context.WithTimeout(context.Background(), 100*time.Second)
	client, err := mongo.Connect(ctx, clientoption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("MongoDb sucessfully connected-(patient)")
	Customer_ProfileCollection = client.Database(constants.DB_Name).Collection(constants.Collection1)

	fmt.Println("Collection Connected")
}