package routes

import (
	"aviculture/controllers"

	"github.com/gin-gonic/gin"
)

func Router() *gin.Engine {
	router := gin.Default()
	router.Static("/static", "./")
	router.POST("/signup",controllers.CreateProfile)
	return router
}