import { Router } from 'express';
import { XeroController } from '@controllers/xero.controller';
import { Routes } from '@interfaces/routes.interface';

export class XeroRoute implements Routes {
  public path = '/xero';
  public router = Router();
  public xero = new XeroController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/balance-sheet`, this.xero.getBalanceSheet);
  }
}
