const { test, expect } = require('@playwright/test');
const { stringFormat } = require('../utils/common');
const bookingData = require('../test-data/post_dynamic_req_body.json');

test('Create POST api Request Using dynamic data', async ({ request }) => {
  const dynamicData = stringFormat(JSON.stringify(bookingData), "ninja", "api", "fatish");

  const postApiResponse = await request.post('/booking', {
    data: JSON.parse(dynamicData)
  });

  expect(postApiResponse.ok()).toBeTruthy();
  const responseBody = await postApiResponse.json();

  expect(responseBody.booking).toHaveProperty('firstname', 'ninja');
  expect(responseBody.booking).toHaveProperty('lastname', 'api');
  expect(responseBody.booking).toHaveProperty('totalprice', 1000);
  expect(responseBody.booking).toHaveProperty('depositpaid', true);
  expect(responseBody.booking).toHaveProperty('bookingdates');
  expect(responseBody.booking).toHaveProperty('additionalneeds', 'joss');
  
  console.log("Response Body:", responseBody);
});

