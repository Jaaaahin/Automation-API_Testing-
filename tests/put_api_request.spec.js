const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { DateTime } = require('luxon');
import { stringFormat } from '../utils/common';
const bookingData = require('../test-data/post_dynamic_req_body.json');
const putData = require('../test-data/token_request_body.json');
const putRequestBody = require('../test-data/put_request_body.json');

test('Create PUT api Request Using dynamic data', async ({ request }) => {
  const dynamicData = stringFormat(JSON.stringify(bookingData), "ninja", "api", "fatish");
  const postApiResponse = await request.post('/booking', {
    data: JSON.parse(dynamicData)
  });

  const responseBody = await postApiResponse.json();
  const bId = responseBody.bookingid;

  const apiResponse = await request.get(`/booking/${bId}`)
  console.log(await apiResponse.json());
  expect(apiResponse.ok()).toBeTruthy();

  // Generate token
  const tokenResponse = await request.post('/auth', {
    data: putData
  });

  const tokenResponseBody = await tokenResponse.json();
  const token = tokenResponseBody.token;
  console.log("Token:", token);

  const putResponse = await request.put(`/booking/${bId}`, {
    headers:{
         "Content-Type": "application/json",
         "Cookie": `token=${token}`
    },
    data:putRequestBody

  })
  const putResponseBody = await putResponse.json();
  console.log("PUT Response Body:", putResponseBody);
  expect(putResponse.ok()).toBeTruthy();
}); 




