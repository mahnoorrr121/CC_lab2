const users = [
  { id: 1, name: 'Ali Khan', email: 'ali@example.com', age: 22 },
  { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', age: 25 },
  { id: 3, name: 'Ahmed Raza', email: 'ahmed@example.com', age: 28 },
  { id: 4, name: 'Fatima Noor', email: 'fatima@example.com', age: 21 }
];

exports.handler = async (event) => {
  if (event.httpMethod && event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)
  };
};
