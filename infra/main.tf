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
    type = "BOOL"
  }

}