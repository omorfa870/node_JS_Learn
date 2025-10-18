const sumRequest = (req, res) => {

  console.log('Inside sumRequest', req.url);
  const body = [];
  req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on('end', () => {
    const bodyStr=Buffer.concat(body).toString();
    console.log(bodyStr);
    const params = new URLSearchParams(bodyStr);
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      const result = Number(bodyObj.firstNumber) + Number(bodyObj.secondNumber);
      console.log('Result:', result);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
      <head>
          <title>Calculator</title>
      </head>
      <body>
      <h1>The sum is ${result}</h1>
      </body>
      </html>
    `);
    return res.end();
  });
}

exports.sumRequest = sumRequest;