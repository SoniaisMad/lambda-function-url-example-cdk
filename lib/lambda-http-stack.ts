import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LambdaHttpStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const myFunction= new lambda.Function(this, 'LambdaHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'index.handler'                // file is "index", function is "handler"
    });

    const fnUrl = myFunction.addFunctionUrl({  // your function url
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new CfnOutput(this, 'TheUrl', {
      value: fnUrl.url,
    });
  }
}
