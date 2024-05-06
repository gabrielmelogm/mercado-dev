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
  range_key = "user_id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "user_id"
    type = "S"
  }

  attribute {
    name = "title"
    type = "S"
  }

  attribute {
    name = "content"
    type = "S"
  }

  attribute {
    name = "read"
    type = "B"
  }

  global_secondary_index {
    name               = "GSI1"
    hash_key           = "user_id"
    range_key          = "content"
    write_capacity     = 1
    read_capacity      = 1
    projection_type    = "ALL"
  }

   global_secondary_index {
    name               = "TitleIndex"
    hash_key           = "title"
    write_capacity     = 1
    read_capacity      = 1
    projection_type    = "ALL"
  }

  # Índice global secundário para consulta por leitura
  global_secondary_index {
    name               = "ReadIndex"
    hash_key           = "read"
    write_capacity     = 1
    read_capacity      = 1
    projection_type    = "ALL"
  }

  # Índice global secundário para consulta por usuário
  global_secondary_index {
    name               = "UserIdIndex"
    hash_key           = "user_id"
    write_capacity     = 1
    read_capacity      = 1
    projection_type    = "ALL"
  }

}