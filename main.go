package main

import (
	"aviculture/routes"
	"fmt"
	"log"
)

func main() {
	fmt.Println("Started Running")
	r := routes.Router()
	log.Fatal(r.Run(":8082"))
	fmt.Println("Listening At PORT ... ")
}