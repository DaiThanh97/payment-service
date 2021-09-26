// package: schema
// file: game.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as game_pb from "./game_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as slotsgames_asymmetric_reels_slots_game_pb from "./slotsgames/asymmetric_reels_slots_game_pb";
import * as slotsgames_accumulate_multiplier_slots_game_pb from "./slotsgames/accumulate_multiplier_slots_game_pb";
import * as slotsgames_slots_game_pb from "./slotsgames/slots_game_pb";

interface IGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadGameVersion: IGameServiceService_IUploadGameVersion;
    createAccumulateMultiplierSlotsGame: IGameServiceService_ICreateAccumulateMultiplierSlotsGame;
    updateAccumulateMultiplierSlotsGame: IGameServiceService_IUpdateAccumulateMultiplierSlotsGame;
    addAccumulateMultiplierSlotsGameSymbol: IGameServiceService_IAddAccumulateMultiplierSlotsGameSymbol;
    updateAccumulateMultiplierSlotsGameSymbol: IGameServiceService_IUpdateAccumulateMultiplierSlotsGameSymbol;
    createAsymmetricReelsSlotsGame: IGameServiceService_ICreateAsymmetricReelsSlotsGame;
    updateAsymmetricReelsSlotsGame: IGameServiceService_IUpdateAsymmetricReelsSlotsGame;
    addAsymmetricReelsSlotsGameSymbol: IGameServiceService_IAddAsymmetricReelsSlotsGameSymbol;
    updateAsymmetricReelsSlotsGameSymbol: IGameServiceService_IUpdateAsymmetricReelsSlotsGameSymbol;
    getGame: IGameServiceService_IGetGame;
}

interface IGameServiceService_IUploadGameVersion extends grpc.MethodDefinition<game_pb.UploadGameVersionRequest, game_pb.UploadGameVersionResponse> {
    path: "/schema.GameService/UploadGameVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.UploadGameVersionRequest>;
    requestDeserialize: grpc.deserialize<game_pb.UploadGameVersionRequest>;
    responseSerialize: grpc.serialize<game_pb.UploadGameVersionResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UploadGameVersionResponse>;
}
interface IGameServiceService_ICreateAccumulateMultiplierSlotsGame extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, game_pb.CreateGameResponse> {
    path: "/schema.GameService/CreateAccumulateMultiplierSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.CreateGameResponse>;
}
interface IGameServiceService_IUpdateAccumulateMultiplierSlotsGame extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, game_pb.UpdateGameResponse> {
    path: "/schema.GameService/UpdateAccumulateMultiplierSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateGameResponse>;
}
interface IGameServiceService_IAddAccumulateMultiplierSlotsGameSymbol extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.GameService/AddAccumulateMultiplierSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.AddSlotsGameSymbolResponse>;
}
interface IGameServiceService_IUpdateAccumulateMultiplierSlotsGameSymbol extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.GameService/UpdateAccumulateMultiplierSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IGameServiceService_ICreateAsymmetricReelsSlotsGame extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, game_pb.CreateGameResponse> {
    path: "/schema.GameService/CreateAsymmetricReelsSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.CreateGameResponse>;
}
interface IGameServiceService_IUpdateAsymmetricReelsSlotsGame extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, game_pb.UpdateGameResponse> {
    path: "/schema.GameService/UpdateAsymmetricReelsSlotsGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateGameResponse>;
}
interface IGameServiceService_IAddAsymmetricReelsSlotsGameSymbol extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.GameService/AddAsymmetricReelsSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.AddSlotsGameSymbolResponse>;
}
interface IGameServiceService_IUpdateAsymmetricReelsSlotsGameSymbol extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.GameService/UpdateAsymmetricReelsSlotsGameSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IGameServiceService_IGetGame extends grpc.MethodDefinition<game_pb.GetGameRequest, game_pb.GetGameResponse> {
    path: "/schema.GameService/GetGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<game_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<game_pb.GetGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.GetGameResponse>;
}

export const GameServiceService: IGameServiceService;

export interface IGameServiceServer extends grpc.UntypedServiceImplementation {
    uploadGameVersion: grpc.handleUnaryCall<game_pb.UploadGameVersionRequest, game_pb.UploadGameVersionResponse>;
    createAccumulateMultiplierSlotsGame: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, game_pb.CreateGameResponse>;
    updateAccumulateMultiplierSlotsGame: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, game_pb.UpdateGameResponse>;
    addAccumulateMultiplierSlotsGameSymbol: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse>;
    updateAccumulateMultiplierSlotsGameSymbol: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse>;
    createAsymmetricReelsSlotsGame: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, game_pb.CreateGameResponse>;
    updateAsymmetricReelsSlotsGame: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, game_pb.UpdateGameResponse>;
    addAsymmetricReelsSlotsGameSymbol: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse>;
    updateAsymmetricReelsSlotsGameSymbol: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse>;
    getGame: grpc.handleUnaryCall<game_pb.GetGameRequest, game_pb.GetGameResponse>;
}

export interface IGameServiceClient {
    uploadGameVersion(request: game_pb.UploadGameVersionRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    uploadGameVersion(request: game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    uploadGameVersion(request: game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    createAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    addAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    createAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    addAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
}

export class GameServiceClient extends grpc.Client implements IGameServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public uploadGameVersion(request: game_pb.UploadGameVersionRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    public uploadGameVersion(request: game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    public uploadGameVersion(request: game_pb.UploadGameVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UploadGameVersionResponse) => void): grpc.ClientUnaryCall;
    public createAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public addAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAccumulateMultiplierSlotsGameSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public createAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public addAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateAsymmetricReelsSlotsGameSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
}

interface IAccumulateMultiplierSlotsGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGame: IAccumulateMultiplierSlotsGameServiceService_ICreateGame;
    updateGame: IAccumulateMultiplierSlotsGameServiceService_IUpdateGame;
    addSymbol: IAccumulateMultiplierSlotsGameServiceService_IAddSymbol;
    updateSymbol: IAccumulateMultiplierSlotsGameServiceService_IUpdateSymbol;
    getGame: IAccumulateMultiplierSlotsGameServiceService_IGetGame;
}

interface IAccumulateMultiplierSlotsGameServiceService_ICreateGame extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, game_pb.CreateGameResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/CreateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.CreateGameResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IUpdateGame extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, game_pb.UpdateGameResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/UpdateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateGameResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IAddSymbol extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/AddSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.AddSlotsGameSymbolResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IUpdateSymbol extends grpc.MethodDefinition<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/UpdateSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IAccumulateMultiplierSlotsGameServiceService_IGetGame extends grpc.MethodDefinition<game_pb.GetGameRequest, game_pb.GetGameResponse> {
    path: "/schema.AccumulateMultiplierSlotsGameService/GetGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<game_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<game_pb.GetGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.GetGameResponse>;
}

export const AccumulateMultiplierSlotsGameServiceService: IAccumulateMultiplierSlotsGameServiceService;

export interface IAccumulateMultiplierSlotsGameServiceServer extends grpc.UntypedServiceImplementation {
    createGame: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, game_pb.CreateGameResponse>;
    updateGame: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, game_pb.UpdateGameResponse>;
    addSymbol: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse>;
    updateSymbol: grpc.handleUnaryCall<slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse>;
    getGame: grpc.handleUnaryCall<game_pb.GetGameRequest, game_pb.GetGameResponse>;
}

export interface IAccumulateMultiplierSlotsGameServiceClient {
    createGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
}

export class AccumulateMultiplierSlotsGameServiceClient extends grpc.Client implements IAccumulateMultiplierSlotsGameServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: slotsgames_accumulate_multiplier_slots_game_pb.CreateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.AddAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: slotsgames_accumulate_multiplier_slots_game_pb.UpdateAccumulateMultiplierSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
}

interface IAsymmetricReelsSlotsGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGame: IAsymmetricReelsSlotsGameServiceService_ICreateGame;
    updateGame: IAsymmetricReelsSlotsGameServiceService_IUpdateGame;
    addSymbol: IAsymmetricReelsSlotsGameServiceService_IAddSymbol;
    updateSymbol: IAsymmetricReelsSlotsGameServiceService_IUpdateSymbol;
    getGame: IAsymmetricReelsSlotsGameServiceService_IGetGame;
}

interface IAsymmetricReelsSlotsGameServiceService_ICreateGame extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, game_pb.CreateGameResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/CreateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.CreateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.CreateGameResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IUpdateGame extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, game_pb.UpdateGameResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/UpdateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateGameResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IAddSymbol extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/AddSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.AddSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.AddSlotsGameSymbolResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IUpdateSymbol extends grpc.MethodDefinition<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/UpdateSymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    requestDeserialize: grpc.deserialize<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdateSlotsGameSymbolResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdateSlotsGameSymbolResponse>;
}
interface IAsymmetricReelsSlotsGameServiceService_IGetGame extends grpc.MethodDefinition<game_pb.GetGameRequest, game_pb.GetGameResponse> {
    path: "/schema.AsymmetricReelsSlotsGameService/GetGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<game_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<game_pb.GetGameResponse>;
    responseDeserialize: grpc.deserialize<game_pb.GetGameResponse>;
}

export const AsymmetricReelsSlotsGameServiceService: IAsymmetricReelsSlotsGameServiceService;

export interface IAsymmetricReelsSlotsGameServiceServer extends grpc.UntypedServiceImplementation {
    createGame: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, game_pb.CreateGameResponse>;
    updateGame: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, game_pb.UpdateGameResponse>;
    addSymbol: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, game_pb.AddSlotsGameSymbolResponse>;
    updateSymbol: grpc.handleUnaryCall<slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, game_pb.UpdateSlotsGameSymbolResponse>;
    getGame: grpc.handleUnaryCall<game_pb.GetGameRequest, game_pb.GetGameResponse>;
}

export interface IAsymmetricReelsSlotsGameServiceClient {
    createGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    createGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    updateGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    addSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    updateSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
}

export class AsymmetricReelsSlotsGameServiceClient extends grpc.Client implements IAsymmetricReelsSlotsGameServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: slotsgames_asymmetric_reels_slots_game_pb.CreateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public updateGame(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateGameResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public addSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.AddAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.AddSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public updateSymbol(request: slotsgames_asymmetric_reels_slots_game_pb.UpdateAsymmetricReelsSlotsGameSymbolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdateSlotsGameSymbolResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
    public getGame(request: game_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetGameResponse) => void): grpc.ClientUnaryCall;
}
