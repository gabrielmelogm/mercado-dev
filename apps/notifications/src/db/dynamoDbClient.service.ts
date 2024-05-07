import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { env } from '../../env'

export const dynamoDBClient = (): DocumentClient => {
	return new AWS.DynamoDB.DocumentClient({
		region: env.REGION,
		endpoint: env.ENDPOINT_URL,
	})
}
