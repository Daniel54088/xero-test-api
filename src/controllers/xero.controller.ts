import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { XeroService } from '@services/xero.service';

export class XeroController {
  public xeroService = Container.get(XeroService);

  public getBalanceSheet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { reports } = await this.xeroService.GetBalanceSheet();
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  };
}
