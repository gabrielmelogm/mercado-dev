data "template_file" "openapi" {
  template = file("${path.module}/openapi.yaml")
}

resource "aws_api_gateway_rest_api" "api_gateway" {
  name = "Api Gateway"
  description = "Mercado dev api gateway"
  body = data.template_file.openapi.rendered
}

resource "aws_api_gateway_deployment" "deploy" {
  depends_on = [ aws_api_gateway_rest_api.api_gateway ]
  rest_api_id = aws_api_gateway_rest_api.api_gateway.id
  stage_name = "dev"
}