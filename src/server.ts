import { App } from '@/app';
import { XeroRoute } from '@routes/xero.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new XeroRoute()]);

app.listen();
