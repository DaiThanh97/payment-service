import Mali from 'mali';
import {
  ServerCredentials
} from "@grpc/grpc-js";
import { createConnection } from 'typeorm';
import {
  checkAuth,
  LISTEN_ADDRESS,
  LISTEN_PORT,
  loggerError,
  loggerInfo,
  checkApiKey,
  logRequest,
  massageError
} from '@galaxy-fortune/common';
import ORMconfig from './configs/db';
import ORMconnfigDev from './configs/db.dev';
import PaymentSchema from './schemas/payment_grpc_pb';
import PaymentService from './services/payment';
import Validation from './middlewares/validation';

const host = `${LISTEN_ADDRESS}:${LISTEN_PORT}`;
(async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      await createConnection(ORMconnfigDev);
    }
    else {
      const connection = await createConnection(ORMconfig);
      await connection.runMigrations();
    }
    const app = new Mali(PaymentSchema);
    app.use(logRequest(__filename)); // Logger middleware
    app.use({
      getAllTransaction: PaymentService.getAllTransaction,
      rechargeWithStripe: [checkAuth, Validation.rechargeWithStripe, PaymentService.rechargeWithStripe],
      rechargeWithSkrill: [checkAuth, Validation.rechargeWithSkrill, PaymentService.rechargeWithSkrill],
      updateSkrillTransactionStatus: [
        checkApiKey,
        Validation.updateSkrillTransactionStatus,
        PaymentService.updateSkrillTransactionStatus
      ]
    });
    app.on('error', (error) => massageError(error));
    await app.start(host, ServerCredentials.createInsecure());
    loggerInfo(`Payment Service is listening on ${host}`, __filename);
  }
  catch (err) {
    if (err instanceof Error) {
      loggerError(`Payment Service error: ${err.message}`, __filename, err);
    }
  }
})();