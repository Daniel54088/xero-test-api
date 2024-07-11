import request from 'supertest';
import { App } from '@/app';
import { XeroRoute } from '@/routes/xero.route';
import { XeroService } from '@/services/xero.service';
import { reportsSchema, Reports } from '@/types/xero';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('TEST Xero API', () => {
  const route = new XeroRoute();
  const app = new App([route]);

  it('response statusCode 200', () => {
    return request(app.getServer()).get(`${route.path}/balance-sheet`).expect(200);
  });
});

describe('XeroService', () => {
  let xeroService: XeroService;
  beforeEach(() => {
    xeroService = new XeroService(); // Create an instance of the service
  });

  it('Check the service return data is valid', async () => {
    const result = await xeroService.GetBalanceSheet();

    // Ensure the data matches the Reports type
    const isValid = reportsSchema.safeParse(result.reports);

    expect(isValid.success).toBe(true);
  });
});
