const fs = require('fs');
const path = require('path');

const categories = [
  ['hotel', 'HOTEL item'],
  ['bus', 'Hiace (Full Day)'],
  ['restaurant', 'RESTAURANT item'],
  ['guide', 'GUIDE / TOUR LEADER item'],
  ['ticket', 'TICKET / ENTRANCE item'],
  ['other', 'OTHER item']
];

const customers = Array.from({length: 5}, (_, index) => {
  const number = index + 1;
  return {
    id: `QA-PAGE-CUSTOMER-${number}`,
    name: `QA Pagination Customer ${number}`,
    info: `QA Pagination Customer ${number}\nContact: QA Test\nEmail: qa-pagination-${number}@example.test\nTel: 000-000-${String(number).padStart(4, '0')}`,
    createdAt: `2026-07-19T00:0${index}:00.000Z`,
    updatedAt: `2026-07-19T00:0${index}:00.000Z`
  };
});

function makeData(index) {
  return Object.fromEntries(categories.map(([id, description]) => [id, {
    enabled: true,
    items: [{
      description,
      start: `2026-08-${String((index % 20) + 1).padStart(2, '0')}`,
      end: `2026-08-${String((index % 20) + 1).padStart(2, '0')}`,
      qty: 1,
      unit: 1,
      price: id === 'hotel' ? 10000 + index * 100 : 0,
      note: id === 'bus' ? 'all inc. driver / gassoline / highway / parking / kaiso / meal / hotel / ochadai dv.' : ''
    }]
  }]));
}

const statuses = ['Draft', 'Sent', 'Confirmed', 'Cancelled'];
const records = Array.from({length: 25}, (_, offset) => {
  const index = offset + 1;
  const number = String(index).padStart(3, '0');
  const customer = customers[offset % customers.length];
  const timestamp = `2026-07-19T01:${String(offset).padStart(2, '0')}:00.000Z`;
  const quoteNo = `QA-PAGE-${number}`;
  const tripName = `QA Pagination Trip ${String.fromCharCode(65 + (offset % 5))}`;
  const data = makeData(index);
  return {
    id: `QA-PAGINATION-RECORD-${number}`,
    meta: {
      quoteNo,
      customer: customer.name,
      tripName,
      status: statuses[offset % statuses.length],
      favorite: index % 5 === 0,
      quoteYear: '2026',
      tripStart: data.hotel.items[0].start,
      createdAt: timestamp,
      updatedAt: timestamp
    },
    payload: {
      version: 'V5.8-CI-record-manager',
      savedAt: timestamp,
      fields: {
        quoteNo,
        quoteDate: '2026-07-19',
        validUntil: '2026-08-02',
        currency: 'JPY / Yen → THB',
        exchangeRate: '0.21',
        tripName,
        quoteStatus: statuses[offset % statuses.length],
        sellerInfo: 'ICHINO TOUR (Thailand)\nQA TEST DATA',
        customerInfo: customer.info,
        remarks: 'QA Pagination fixture — ข้อมูลจำลองเท่านั้น',
        fontFamily: 'Arial',
        fontSize: '14',
        textColor: '#1d2733',
        primaryColor: '#0f3a5f',
        accentColor: '#d4af37',
        busOptions: 'Hiace (Full Day)\nHiace (Transfer)'
      },
      flags: {favorite: index % 5 === 0, isFavorite: index % 5 === 0},
      data,
      logo: ''
    }
  };
});

const backup = {
  app: 'Ichino Tour Quotation',
  version: '5.8',
  fixture: 'pagination-25',
  exportedAt: '2026-07-19T02:00:00.000Z',
  records,
  customers
};

const output = path.join(__dirname, 'pagination_25_records.json');
fs.writeFileSync(output, `${JSON.stringify(backup, null, 2)}\n`, 'utf8');
console.log(output);
