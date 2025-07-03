const {test, expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker');
const {DateTime} = require('luxon');
import {stringFormat} from '../utils/common';
const bookingData = require('../test-data/post_dynamic_req_body.json');

test('Create GET api Request Using dynamic data', async ({request}) => {
    const dynamicData = stringFormat(JSON.stringify(bookingData), "ninja", "api", "fatish");
    const postApiResponse = await request.post('/booking', {
        data: JSON.parse(dynamicData)
    });

    const responseBody = await postApiResponse.json();
    const bId = responseBody.bookingid;

   


  const apiResponse =  await request.get(`/booking/${bId}`)
   console.log(await apiResponse.json());
   expect(apiResponse.ok()).toBeTruthy();



});