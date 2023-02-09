import { load } from 'cheerio';
import axios from 'axios';
import puppeteer from 'puppeteer';

const url = 'https://getthat.com/autos';
export default async function handler(req, res) {
  const method = req.method;
  if (method === 'GET') {
    const response = await fetch(url);
    const html = await response.text();
    const $ = load(html);
    const cars = [];

    $('div.row.medium-up-2.large-up-4.search-result.landing-page-listing').each(
      (index, el) => {
        const car = $(el);
        const title = car.find('div.make').text();

        cars.push(title);
      }
    );
    console.log(JSON.stringify(cars));
    res.send(cars);
  } else {
    res.send('Method not allowed');
  }
}
