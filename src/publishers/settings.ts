import { credentials } from '@grpc/grpc-js';
import {
  SETTINGS_SERVICE_HOST,
  SETTINGS_SERVICE_PORT
} from '@galaxy-fortune/common';
import { SettingServiceClient } from '../schemas/settings_grpc_pb';
import { GetSettingsRequest, GetSettingsResponse } from '../schemas/settings_pb';
import { NOTI_PAYMENT } from '../constants/noti';

const client = new SettingServiceClient(
  `${SETTINGS_SERVICE_HOST}:${SETTINGS_SERVICE_PORT}`,
  credentials.createInsecure()
);

const getSettings = () => {
  return new Promise<GetSettingsResponse>((resolve, reject) => {
    const request = new GetSettingsRequest();

    client.getSettings(request, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

const retrieveSettings = async () => {
  const settingsResponse = await getSettings();
  const settingsRPC = settingsResponse.getSettings();
  if (!settingsRPC) {
    throw new Error(NOTI_PAYMENT.ERROR_GET_SETTINGS);
  }

  const settings = settingsRPC.toObject();
  const { usdtogoldcoins, usdtosweepcoins } = settings;
  return {
    usdToGoldCoins: usdtogoldcoins,
    usdToSweepCoins: usdtosweepcoins
  }
};

export default {
  retrieveSettings
};