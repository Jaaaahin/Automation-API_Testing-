const {test, expect} = require('@playwright/test');
import {stringFormat} from '../utils/common';
const bookingData = require('../test-data/post_dynamic_req_body.json');

test("Create query parameters", async ({request}) => {

  const dynamicData = stringFormat(JSON.stringify(bookingData),"Jahin","api","boss");

  const getApiResponse = await request.get('booking/',{
    params:{
      "firstname": "ninja",
    }
  });

  console.log(await getApiResponse.json());
  expect(getApiResponse.ok()).toBeTruthy();
});
