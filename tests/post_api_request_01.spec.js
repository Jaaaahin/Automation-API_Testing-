const { test, expect } = require('@playwright/test');


test('Create POST api Request Using request body', async ({ request }) => {

  const postApiResponse = await request.post('/booking', {
    data: {
      "firstname": "testers_ninja",
      "lastname": "testers_ninja_api",
      "totalprice": 1000,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2017-01-01",
        "checkout": "2019-01-01"
      },
      "additionalneeds": "super bowls"
    }

  })
  const responseBody = await postApiResponse.json();
  expect(postApiResponse.ok()).toBeTruthy();
  expect(responseBody.booking).toHaveProperty('firstname', 'testers_ninja');
  expect(responseBody.booking).toHaveProperty('lastname', 'testers_ninja_api');
  expect(responseBody.booking).toHaveProperty('totalprice', 1000);
  expect(responseBody.booking).toHaveProperty('depositpaid', true);
  expect(responseBody.booking).toHaveProperty('bookingdates');
  expect(responseBody.booking.bookingdates).toHaveProperty('checkin', '2017-01-01');
  expect(responseBody.booking.bookingdates).toHaveProperty('checkout', '2019-01-01');
  expect(responseBody.booking).toHaveProperty('additionalneeds', 'super bowls');
})

