import { InternalError } from '@galaxy-fortune/common';
import { Status } from '@grpc/grpc-js/build/src/constants';
import axios from 'axios';
import { STATUS_CODE } from '../constants/common';
import {
  SKRILL_CANCEL_URL,
  SKRILL_PAYMENT_EMAIL,
  SKRILL_RECIPIENT_DESCRIPTION,
  SKRILL_RETURN_URL,
  SKRILL_STATUS_URL,
  SKRILL_URL
} from '../constants/env';
import { ERROR_NAME_PAYMENT, NOTI_PAYMENT } from '../constants/noti';
import { SkrillErrorResponse } from '../types/skrill';

const requestSessionId = async (
  amount: number,
  transactionId: number
): Promise<string> => {
  const params = new URLSearchParams();
  params.append('currency', 'USD');
  params.append('pay_to_email', SKRILL_PAYMENT_EMAIL);
  params.append('amount', amount + '');
  params.append('language', 'EN');
  params.append('prepare_only', '1');
  params.append('transaction_id', transactionId + '');
  params.append('recipient_description', SKRILL_RECIPIENT_DESCRIPTION);
  params.append('status_url', SKRILL_STATUS_URL);
  params.append('return_url', SKRILL_RETURN_URL);
  params.append('cancel_url', SKRILL_CANCEL_URL);

  const { status, data } = await axios.post(SKRILL_URL, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  // Check if Skrill return error
  if (status !== STATUS_CODE.SUCCESS) {
    const { message } = data as SkrillErrorResponse;
    throw new InternalError(
      message || NOTI_PAYMENT.ERROR_SKRILL_INIT_SESSION,
      ERROR_NAME_PAYMENT.ERROR_SKRILL_INIT_SESSION
    );
  }

  return data;
};

export default {
  requestSessionId
};