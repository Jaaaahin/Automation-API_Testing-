const { test, expect } = require("@playwright/test");
const { faker } = require("@faker-js/faker");
const { DateTime } = require("luxon");

test("Create POST api Request Using dynamic data", async ({ request }) => {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const totalprice = faker.number.int({ min: 100, max: 500 });
  const checkInDate = DateTime.now().toFormat("yyyy-MM-dd");
  const checkOutDate = DateTime.now().plus({ days: 5 }).toFormat("yyyy-MM-dd");

  const postApiResponse = await request.post("/booking", {
    data: {
      firstname,
      lastname,
      totalprice,
      depositpaid: true,
      bookingdates: {
        checkin: checkInDate,
        checkout: checkOutDate,
      },
      additionalneeds: faker.lorem.sentence(),
    },
  });


  const responseBody = await postApiResponse.json();
  expect(postApiResponse.ok()).toBeTruthy();
  expect(responseBody.booking).toHaveProperty("firstname", firstname);
  expect(responseBody.booking).toHaveProperty("lastname", lastname);
  expect(responseBody.booking).toHaveProperty("totalprice", totalprice);
  expect(responseBody.booking).toHaveProperty("depositpaid", true);
  expect(responseBody.booking).toHaveProperty("bookingdates");
  expect(responseBody.booking.bookingdates).toHaveProperty("checkin", checkInDate);
  expect(responseBody.booking.bookingdates).toHaveProperty("checkout", checkOutDate);

  console.log("Response Body:", responseBody);

});
