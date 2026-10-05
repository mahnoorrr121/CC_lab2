const users = [
  { id: 1, name: 'Mahnoor', email: 'mahnoor@example.com', age: 22 },
  { id: 2, name: 'Tooba', email: 'tooba@example.com', age: 21 },
  { id: 3, name: 'Hamna', email: 'hamna@example.com', age: 23 },
  { id: 4, name: 'Eman', email: 'eman@example.com', age: 22 }
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
