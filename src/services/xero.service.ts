import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { ZodError } from 'zod';
import axios from 'axios';
import { Reports, reportsSchema } from '../types/xero';
import { xeroBalanceSheetEndpoint } from '../constants';

@Service()
export class XeroService {
  public async GetBalanceSheet(): Promise<{ reports: Reports }> {
    try {
      const result = await this.getBalanceSheetFromXero(xeroBalanceSheetEndpoint);
      return { reports: result.reports };
    } catch (e) {
      console.error('🔥 error:', e);
      throw new HttpException(500, `Failed to get balance sheet: ${e.message}`);
    }
  }

  private async getBalanceSheetFromXero(xeroBalanceSheetEndpoint: string): Promise<{ reports: Reports }> {
    try {
      console.log('xeroBalanceSheetEndpoint:', xeroBalanceSheetEndpoint);
      const response = await axios.get(xeroBalanceSheetEndpoint);

      console.log('response', response);
      const data = response.data;

      // Validate the data against the schema
      const parsedData = reportsSchema.parse(data);

      return { reports: parsedData };
    } catch (error) {
      console.log('error:', error);
      if (axios.isAxiosError(error)) {
        // Handle Axios errors
        console.error('HTTP error fetching data:', error.message);
        throw new HttpException(500, `Failed to fetch data from Xero API: ${error.message}`);
      } else if (error instanceof ZodError) {
        // Handle validation errors
        console.error('Validation error:', error.errors);
        throw new HttpException(400, `Validation failed for the data received from the Xero API: ${error.errors}`);
      } else {
        // Handle other types of errors
        console.error('Unexpected error:', error);
        throw new HttpException(500, 'An unexpected error occurred');
      }
    }
  }
}
