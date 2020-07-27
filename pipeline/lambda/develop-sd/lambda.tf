module "lambda" {
  source = "./src"
  region = "us-east-1"
  role = "arn:aws:iam::642574587037:role/service-role/basic-lambda-execute-rol"
  runtime = "nodejs12.x"
  handler = "index.handler"
  memory = 128
  timeout = 30

  subnet_ids = [
    "subnet-0b703138b2b6c0583",
    "subnet-0465b800e4f0a6bf0",
    "subnet-08607ad75c18db8e8"
  ]

  security_group_ids = [
    "sg-07e8f401b536d2856",
    "sg-0fd4f53b861ff6e16"
  ]
}