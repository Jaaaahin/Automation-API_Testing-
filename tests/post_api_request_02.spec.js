const { test, expect } = require('@playwright/test');
const bookingData = require('../test-data/post_request_body.json')

test('Create POST api Request Using static json file', async ({ request }) => {

  const postApiResponse = await request.post('/booking', {
    data: bookingData
  })
  const responseBody = await postApiResponse.json();
  expect(postApiResponse.ok()).toBeTruthy();
  expect(responseBody.booking).toHaveProperty('firstname', bookingData.firstname);
  expect(responseBody.booking).toHaveProperty('lastname', bookingData.lastname);
  expect(responseBody.booking).toHaveProperty('totalprice', bookingData.totalprice);
  expect(responseBody.booking).toHaveProperty('depositpaid', bookingData.depositpaid);
  expect(responseBody.booking).toHaveProperty('bookingdates');
  expect(responseBody.booking.bookingdates).toHaveProperty('checkin', bookingData.bookingdates.checkin);
  expect(responseBody.booking.bookingdates).toHaveProperty('checkout', bookingData.bookingdates.checkout);
  expect(responseBody.booking).toHaveProperty('additionalneeds', bookingData.additionalneeds);
})

