provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "example" {
  name     = "myResourceGroup"
  location = "East US"
}
resource "azurerm_app_service_plan" "example" {
  name                = "myAppServicePlan"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  sku {
    tier     = "Basic"
    size     = "B1"
  }
}
resource "azurerm_app_service" "example" {
  name                = "myUniqueAppName" # Ensure this is globally unique
  location            = azurerm_resource_group.example.location  #pointing to east US
  resource_group_name = azurerm_resource_group.example.name #pointing to 5 to 8
  app_service_plan_id = azurerm_app_service_plan.example.id
  app_settings = {
    "WEBSITE_NODE_DEFAULT_VERSION" = "14"
  }
}