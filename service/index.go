package service

import (
	"aviculture/config"
	"aviculture/models"
	"context"
	"errors"
	"fmt"
	"math/rand"
	"time"

	"go.mongodb.org/mongo-driver/bson"
)

func Insert(profile models.Signup) error {
	ctx := context.Background()
	emailQuery := bson.M{"email": profile.Email}
	usernameQuery := bson.M{"username": profile.Username}

	// Check for duplicate username
	if err := config.Customer_ProfileCollection.FindOne(ctx, usernameQuery).Err(); err == nil {
		return errors.New("Duplicate Username")
	}

	// Check for duplicate email
	if err := config.Customer_ProfileCollection.FindOne(ctx, emailQuery).Err(); err == nil {
		return errors.New("Duplicate MailID")
	}

	id := GenerateID()
	fmt.Println(id)
	profile.Customerid = id

	newuser := models.Signup{
		Username:   profile.Username,
		Email:      profile.Email,
		Password:   profile.Password,
		Customerid: profile.Customerid,
	}

	inserted, err := config.Customer_ProfileCollection.InsertOne(ctx, newuser)
	if err != nil {
		return err
	}
	fmt.Println("Inserted", inserted.InsertedID)
	return nil
}

func GenerateID() string {
	length := 4
	characters := "0123456789"
	rand.Seed(time.Now().UnixNano())
	id := make([]byte, length)
	for i := 0; i < length; i++ {
		id[i] = characters[rand.Intn(len(characters))]
	}
	return "PA" + string(id)
}
