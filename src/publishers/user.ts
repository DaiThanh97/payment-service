import { credentials, Metadata } from '@grpc/grpc-js';
import {
  API_KEY,
  METADATA_API_KEY,
  USER_SERVICE_HOST,
  USER_SERVICE_PORT
} from '@galaxy-fortune/common';
import { UserServiceClient } from '../schemas/user_grpc_pb';
import {
  AddCoinsToPlayerRequest,
  AddCoinsToPlayerResponse
} from '../schemas/user_pb';

const client = new UserServiceClient(
  `${USER_SERVICE_HOST}:${USER_SERVICE_PORT}`,
  credentials.createInsecure()
);

const addCoinsToPlayer = (
  userId: number,
  goldCoins: number,
  sweepCoins: number
) => {
  return new Promise<AddCoinsToPlayerResponse>((resolve, reject) => {
    const request = new AddCoinsToPlayerRequest();
    request.setUserId(userId);
    request.setGoldCoins(goldCoins);
    request.setSweepCoins(sweepCoins);

    const metadata = new Metadata();
    metadata.set(METADATA_API_KEY, API_KEY);

    client.addCoinsToPlayer(request, metadata, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

export default {
  addCoinsToPlayer
};