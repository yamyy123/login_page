package controllers

import (
	"aviculture/models"
	"aviculture/service"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateProfile(c *gin.Context) {
	fmt.Println("Creating Profile")
	var profile models.Signup

	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}

	fmt.Println("JSON binded")
	fmt.Println(profile)

	err := service.Insert(profile)
		if err != nil {
			if err.Error() == "Duplicate MailID" {
				errorMessage := "Duplicate Mail-ID,Please enter a new E-mail"
				c.JSON(http.StatusBadRequest, gin.H{"error": errorMessage})
				return
			} else if err.Error() == "Duplicate Username" {
				errorMessage := "Duplicate Username,Please enter a New Username"
				c.JSON(http.StatusBadRequest, gin.H{"error": errorMessage})
				return
			}

        fmt.Println("Error:", err)  // Add this line for debugging

        // c.JSON(http.StatusBadRequest, gin.H{"error": errorMessage})
        // return
    } else {
		fmt.Println("No Error:", err)
		c.JSON(http.StatusOK,  gin.H{"data": "successfully created"})
		return
	}
}
