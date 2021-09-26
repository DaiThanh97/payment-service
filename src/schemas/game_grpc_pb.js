// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var game_pb = require('./game_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var slotsgames_asymmetric_reels_slots_game_pb = require('./slotsgames/asymmetric_reels_slots_game_pb.js');
var slotsgames_accumulate_multiplier_slots_game_pb = require('./slotsgames/accumulate_multiplier_slots_game_pb.js');
var slotsgames_slots_game_pb = require('./slotsgames/slots_game_pb.js');

function serialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.AddAccumulateMultiplierSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest(buffer_arg) {
  return slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.AddAsymmetricReelsSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest(buffer_arg) {
  return slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_AddSlotsGameSymbolResponse(arg) {
  if (!(arg instanceof game_pb.AddSlotsGameSymbolResponse)) {
    throw new Error('Expected argument of type schema.AddSlotsGameSymbolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_AddSlotsGameSymbolResponse(buffer_arg) {
  return game_pb.AddSlotsGameSymbolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateAccumulateMultiplierSlotsGameRequest(arg) {
  if (!(arg instanceof slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.CreateAccumulateMultiplierSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateAccumulateMultiplierSlotsGameRequest(buffer_arg) {
  return slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateAsymmetricReelsSlotsGameRequest(arg) {
  if (!(arg instanceof slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.CreateAsymmetricReelsSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateAsymmetricReelsSlotsGameRequest(buffer_arg) {
  return slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_CreateGameResponse(arg) {
  if (!(arg instanceof game_pb.CreateGameResponse)) {
    throw new Error('Expected argument of type schema.CreateGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_CreateGameResponse(buffer_arg) {
  return game_pb.CreateGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetGameRequest(arg) {
  if (!(arg instanceof game_pb.GetGameRequest)) {
    throw new Error('Expected argument of type schema.GetGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetGameRequest(buffer_arg) {
  return game_pb.GetGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_GetGameResponse(arg) {
  if (!(arg instanceof game_pb.GetGameResponse)) {
    throw new Error('Expected argument of type schema.GetGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_GetGameResponse(buffer_arg) {
  return game_pb.GetGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAccumulateMultiplierSlotsGameRequest(arg) {
  if (!(arg instanceof slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.UpdateAccumulateMultiplierSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAccumulateMultiplierSlotsGameRequest(buffer_arg) {
  return slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.UpdateAccumulateMultiplierSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest(buffer_arg) {
  return slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAsymmetricReelsSlotsGameRequest(arg) {
  if (!(arg instanceof slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest)) {
    throw new Error('Expected argument of type schema.UpdateAsymmetricReelsSlotsGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAsymmetricReelsSlotsGameRequest(buffer_arg) {
  return slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest(arg) {
  if (!(arg instanceof slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest)) {
    throw new Error('Expected argument of type schema.UpdateAsymmetricReelsSlotsGameSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest(buffer_arg) {
  return slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateGameResponse(arg) {
  if (!(arg instanceof game_pb.UpdateGameResponse)) {
    throw new Error('Expected argument of type schema.UpdateGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateGameResponse(buffer_arg) {
  return game_pb.UpdateGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UpdateSlotsGameSymbolResponse(arg) {
  if (!(arg instanceof game_pb.UpdateSlotsGameSymbolResponse)) {
    throw new Error('Expected argument of type schema.UpdateSlotsGameSymbolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UpdateSlotsGameSymbolResponse(buffer_arg) {
  return game_pb.UpdateSlotsGameSymbolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UploadGameVersionRequest(arg) {
  if (!(arg instanceof game_pb.UploadGameVersionRequest)) {
    throw new Error('Expected argument of type schema.UploadGameVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UploadGameVersionRequest(buffer_arg) {
  return game_pb.UploadGameVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_schema_UploadGameVersionResponse(arg) {
  if (!(arg instanceof game_pb.UploadGameVersionResponse)) {
    throw new Error('Expected argument of type schema.UploadGameVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_schema_UploadGameVersionResponse(buffer_arg) {
  return game_pb.UploadGameVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GameServiceService = exports.GameServiceService = {
  uploadGameVersion: {
    path: '/schema.GameService/UploadGameVersion',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.UploadGameVersionRequest,
    responseType: game_pb.UploadGameVersionResponse,
    requestSerialize: serialize_schema_UploadGameVersionRequest,
    requestDeserialize: deserialize_schema_UploadGameVersionRequest,
    responseSerialize: serialize_schema_UploadGameVersionResponse,
    responseDeserialize: deserialize_schema_UploadGameVersionResponse,
  },
  createAccumulateMultiplierSlotsGame: {
    path: '/schema.GameService/CreateAccumulateMultiplierSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest,
    responseType: game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateAccumulateMultiplierSlotsGame: {
    path: '/schema.GameService/UpdateAccumulateMultiplierSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest,
    responseType: game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  addAccumulateMultiplierSlotsGameSymbol: {
    path: '/schema.GameService/AddAccumulateMultiplierSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateAccumulateMultiplierSlotsGameSymbol: {
    path: '/schema.GameService/UpdateAccumulateMultiplierSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  createAsymmetricReelsSlotsGame: {
    path: '/schema.GameService/CreateAsymmetricReelsSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest,
    responseType: game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateAsymmetricReelsSlotsGame: {
    path: '/schema.GameService/UpdateAsymmetricReelsSlotsGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest,
    responseType: game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  addAsymmetricReelsSlotsGameSymbol: {
    path: '/schema.GameService/AddAsymmetricReelsSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest,
    responseType: game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateAsymmetricReelsSlotsGameSymbol: {
    path: '/schema.GameService/UpdateAsymmetricReelsSlotsGameSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseType: game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  getGame: {
    path: '/schema.GameService/GetGame',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.GetGameRequest,
    responseType: game_pb.GetGameResponse,
    requestSerialize: serialize_schema_GetGameRequest,
    requestDeserialize: deserialize_schema_GetGameRequest,
    responseSerialize: serialize_schema_GetGameResponse,
    responseDeserialize: deserialize_schema_GetGameResponse,
  },
};

exports.GameServiceClient = grpc.makeGenericClientConstructor(GameServiceService);
var AccumulateMultiplierSlotsGameServiceService = exports.AccumulateMultiplierSlotsGameServiceService = {
  createGame: {
    path: '/schema.AccumulateMultiplierSlotsGameService/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest,
    responseType: game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateGame: {
    path: '/schema.AccumulateMultiplierSlotsGameService/UpdateGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest,
    responseType: game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  addSymbol: {
    path: '/schema.AccumulateMultiplierSlotsGameService/AddSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateSymbol: {
    path: '/schema.AccumulateMultiplierSlotsGameService/UpdateSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseType: game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAccumulateMultiplierSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  getGame: {
    path: '/schema.AccumulateMultiplierSlotsGameService/GetGame',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.GetGameRequest,
    responseType: game_pb.GetGameResponse,
    requestSerialize: serialize_schema_GetGameRequest,
    requestDeserialize: deserialize_schema_GetGameRequest,
    responseSerialize: serialize_schema_GetGameResponse,
    responseDeserialize: deserialize_schema_GetGameResponse,
  },
};

exports.AccumulateMultiplierSlotsGameServiceClient = grpc.makeGenericClientConstructor(AccumulateMultiplierSlotsGameServiceService);
var AsymmetricReelsSlotsGameServiceService = exports.AsymmetricReelsSlotsGameServiceService = {
  createGame: {
    path: '/schema.AsymmetricReelsSlotsGameService/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest,
    responseType: game_pb.CreateGameResponse,
    requestSerialize: serialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_CreateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_CreateGameResponse,
    responseDeserialize: deserialize_schema_CreateGameResponse,
  },
  updateGame: {
    path: '/schema.AsymmetricReelsSlotsGameService/UpdateGame',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest,
    responseType: game_pb.UpdateGameResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameRequest,
    responseSerialize: serialize_schema_UpdateGameResponse,
    responseDeserialize: deserialize_schema_UpdateGameResponse,
  },
  addSymbol: {
    path: '/schema.AsymmetricReelsSlotsGameService/AddSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest,
    responseType: game_pb.AddSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_AddAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_AddSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_AddSlotsGameSymbolResponse,
  },
  updateSymbol: {
    path: '/schema.AsymmetricReelsSlotsGameService/UpdateSymbol',
    requestStream: false,
    responseStream: false,
    requestType: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseType: game_pb.UpdateSlotsGameSymbolResponse,
    requestSerialize: serialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    requestDeserialize: deserialize_schema_UpdateAsymmetricReelsSlotsGameSymbolRequest,
    responseSerialize: serialize_schema_UpdateSlotsGameSymbolResponse,
    responseDeserialize: deserialize_schema_UpdateSlotsGameSymbolResponse,
  },
  getGame: {
    path: '/schema.AsymmetricReelsSlotsGameService/GetGame',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.GetGameRequest,
    responseType: game_pb.GetGameResponse,
    requestSerialize: serialize_schema_GetGameRequest,
    requestDeserialize: deserialize_schema_GetGameRequest,
    responseSerialize: serialize_schema_GetGameResponse,
    responseDeserialize: deserialize_schema_GetGameResponse,
  },
};

exports.AsymmetricReelsSlotsGameServiceClient = grpc.makeGenericClientConstructor(AsymmetricReelsSlotsGameServiceService);
