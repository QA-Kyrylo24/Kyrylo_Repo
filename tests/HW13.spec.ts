const { test, expect } = require('@playwright/test');

test('task1', async ({ request }) => {

  const response = await request.get('https://reqres.in/api/users/2');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log('Response Body:', JSON.stringify(responseBody, null, 2));

  expect(responseBody).toHaveProperty('data');

  const userData = responseBody.data;
  expect(userData.first_name).toBe('Janet');
  expect(userData.last_name).toBe('Weaver');
  expect(userData.email).toBe('janet.weaver@reqres.in');
});

test('task2', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/posts/add', {
      data: {
        title: 'Awesome title',
        userId: 10
      }
    });
  
    expect(response.status()).toBe(201);
  
    const responseBody = await response.json();
  
    expect(responseBody.title).toBe('Awesome title');
    expect(responseBody.userId).toBe(10);
  });