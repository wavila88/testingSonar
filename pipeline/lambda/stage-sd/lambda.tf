module "lambda" {
  source = "./src"
  region = "us-east-1"
  role = "arn:aws:iam::169629235675:role/secret_lambda_role"
  runtime = "nodejs12.x"
  handler = "index.handler"
  memory = 128
  timeout = 30

  subnet_ids = [
    "subnet-00067168c6e267486",
    "subnet-05e61c72590046553",
    "subnet-0d6d4ea0dbe653472"
  ]

  security_group_ids = [
    "sg-06e6e77d3f51fd09b",
    "sg-099b558582cbefb35"
  ]
}