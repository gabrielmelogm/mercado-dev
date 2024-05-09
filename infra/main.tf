terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.48.0"
    }
  }
}

provider "aws" {
  region = "sa-east-1"
}

resource "aws_dynamodb_table" "notifications" {
  name = "notifications"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "user_id"
    type = "S"
  }

  global_secondary_index {
    name               = "userId_index"
    hash_key           = "user_id"
    write_capacity     = 1
    read_capacity      = 1
    projection_type    = "ALL"
  }

}