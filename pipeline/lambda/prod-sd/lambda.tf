module "lambda" {
  source = "./src"
  region = "us-east-1"
  role = "arn:aws:iam::670692345500:role/secret_lambda_role"
  runtime = "nodejs12.x"
  handler = "index.handler"
  memory = 128
  timeout = 30

  subnet_ids = [
    "subnet-03267c3ef6fb052f4",
    "subnet-0f75b2a8018e6920c",
    "subnet-02a45abd33162e4a4"
  ]

  security_group_ids = [
    "sg-0055ee13ab21690a4",
    "sg-0b19a9d71fb436b85"
  ]
}