exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    const body = '<html><head><title>HTML from Lambda URL</title></head>' + 
    '<body><h1>Hello you ! This is served by a Lambda function URL</h1></body></html>'
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body
    };
  };