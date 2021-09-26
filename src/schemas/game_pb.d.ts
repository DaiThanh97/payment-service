// package: schema
// file: game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as slotsgames_asymmetric_reels_slots_game_pb from "./slotsgames/asymmetric_reels_slots_game_pb";
import * as slotsgames_accumulate_multiplier_slots_game_pb from "./slotsgames/accumulate_multiplier_slots_game_pb";
import * as slotsgames_slots_game_pb from "./slotsgames/slots_game_pb";

export class GameModel extends jspb.Message { 
    getId(): string;
    setId(value: string): GameModel;
    getName(): string;
    setName(value: string): GameModel;

    hasSlotsGame(): boolean;
    clearSlotsGame(): void;
    getSlotsGame(): slotsgames_slots_game_pb.SlotsGameModel | undefined;
    setSlotsGame(value?: slotsgames_slots_game_pb.SlotsGameModel): GameModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameModel;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameModel;

    getGameCase(): GameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameModel.AsObject;
    static toObject(includeInstance: boolean, msg: GameModel): GameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameModel;
    static deserializeBinaryFromReader(message: GameModel, reader: jspb.BinaryReader): GameModel;
}

export namespace GameModel {
    export type AsObject = {
        id: string,
        name: string,
        slotsGame?: slotsgames_slots_game_pb.SlotsGameModel.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        SLOTS_GAME = 3,
    }

}

export class GameVersionModel extends jspb.Message { 
    getId(): number;
    setId(value: number): GameVersionModel;
    getVersionName(): string;
    setVersionName(value: string): GameVersionModel;
    getAndroidUrl(): string;
    setAndroidUrl(value: string): GameVersionModel;
    getAndroidBannerUrl(): string;
    setAndroidBannerUrl(value: string): GameVersionModel;
    getIosUrl(): string;
    setIosUrl(value: string): GameVersionModel;
    getIosBannerUrl(): string;
    setIosBannerUrl(value: string): GameVersionModel;
    getWindowsUrl(): string;
    setWindowsUrl(value: string): GameVersionModel;
    getWindowsBannerUrl(): string;
    setWindowsBannerUrl(value: string): GameVersionModel;
    getWebUrl(): string;
    setWebUrl(value: string): GameVersionModel;
    getWebBannerUrl(): string;
    setWebBannerUrl(value: string): GameVersionModel;
    getGameId(): string;
    setGameId(value: string): GameVersionModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameVersionModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameVersionModel;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameVersionModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameVersionModel.AsObject;
    static toObject(includeInstance: boolean, msg: GameVersionModel): GameVersionModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameVersionModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameVersionModel;
    static deserializeBinaryFromReader(message: GameVersionModel, reader: jspb.BinaryReader): GameVersionModel;
}

export namespace GameVersionModel {
    export type AsObject = {
        id: number,
        versionName: string,
        androidUrl: string,
        androidBannerUrl: string,
        iosUrl: string,
        iosBannerUrl: string,
        windowsUrl: string,
        windowsBannerUrl: string,
        webUrl: string,
        webBannerUrl: string,
        gameId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateGameResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): CreateGameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameResponse): CreateGameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameResponse;
    static deserializeBinaryFromReader(message: CreateGameResponse, reader: jspb.BinaryReader): CreateGameResponse;
}

export namespace CreateGameResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class UpdateGameResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): UpdateGameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGameResponse): UpdateGameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGameResponse;
    static deserializeBinaryFromReader(message: UpdateGameResponse, reader: jspb.BinaryReader): UpdateGameResponse;
}

export namespace UpdateGameResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class AddSlotsGameSymbolResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): AddSlotsGameSymbolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSlotsGameSymbolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddSlotsGameSymbolResponse): AddSlotsGameSymbolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSlotsGameSymbolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSlotsGameSymbolResponse;
    static deserializeBinaryFromReader(message: AddSlotsGameSymbolResponse, reader: jspb.BinaryReader): AddSlotsGameSymbolResponse;
}

export namespace AddSlotsGameSymbolResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class UpdateSlotsGameSymbolResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): UpdateSlotsGameSymbolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSlotsGameSymbolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSlotsGameSymbolResponse): UpdateSlotsGameSymbolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSlotsGameSymbolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSlotsGameSymbolResponse;
    static deserializeBinaryFromReader(message: UpdateSlotsGameSymbolResponse, reader: jspb.BinaryReader): UpdateSlotsGameSymbolResponse;
}

export namespace UpdateSlotsGameSymbolResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}

export class UploadGameVersionRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UploadGameVersionRequest;
    getVersionName(): string;
    setVersionName(value: string): UploadGameVersionRequest;
    getAndroidFile(): Uint8Array | string;
    getAndroidFile_asU8(): Uint8Array;
    getAndroidFile_asB64(): string;
    setAndroidFile(value: Uint8Array | string): UploadGameVersionRequest;
    getAndroidBannerFile(): Uint8Array | string;
    getAndroidBannerFile_asU8(): Uint8Array;
    getAndroidBannerFile_asB64(): string;
    setAndroidBannerFile(value: Uint8Array | string): UploadGameVersionRequest;
    getIosFile(): Uint8Array | string;
    getIosFile_asU8(): Uint8Array;
    getIosFile_asB64(): string;
    setIosFile(value: Uint8Array | string): UploadGameVersionRequest;
    getIosBannerFile(): Uint8Array | string;
    getIosBannerFile_asU8(): Uint8Array;
    getIosBannerFile_asB64(): string;
    setIosBannerFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWindowsFile(): Uint8Array | string;
    getWindowsFile_asU8(): Uint8Array;
    getWindowsFile_asB64(): string;
    setWindowsFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWindowsBannerFile(): Uint8Array | string;
    getWindowsBannerFile_asU8(): Uint8Array;
    getWindowsBannerFile_asB64(): string;
    setWindowsBannerFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWebFile(): Uint8Array | string;
    getWebFile_asU8(): Uint8Array;
    getWebFile_asB64(): string;
    setWebFile(value: Uint8Array | string): UploadGameVersionRequest;
    getWebBannerFile(): Uint8Array | string;
    getWebBannerFile_asU8(): Uint8Array;
    getWebBannerFile_asB64(): string;
    setWebBannerFile(value: Uint8Array | string): UploadGameVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGameVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGameVersionRequest): UploadGameVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGameVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGameVersionRequest;
    static deserializeBinaryFromReader(message: UploadGameVersionRequest, reader: jspb.BinaryReader): UploadGameVersionRequest;
}

export namespace UploadGameVersionRequest {
    export type AsObject = {
        gameId: string,
        versionName: string,
        androidFile: Uint8Array | string,
        androidBannerFile: Uint8Array | string,
        iosFile: Uint8Array | string,
        iosBannerFile: Uint8Array | string,
        windowsFile: Uint8Array | string,
        windowsBannerFile: Uint8Array | string,
        webFile: Uint8Array | string,
        webBannerFile: Uint8Array | string,
    }
}

export class UploadGameVersionResponse extends jspb.Message { 

    hasGameVersion(): boolean;
    clearGameVersion(): void;
    getGameVersion(): GameVersionModel | undefined;
    setGameVersion(value?: GameVersionModel): UploadGameVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGameVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGameVersionResponse): UploadGameVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGameVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGameVersionResponse;
    static deserializeBinaryFromReader(message: UploadGameVersionResponse, reader: jspb.BinaryReader): UploadGameVersionResponse;
}

export namespace UploadGameVersionResponse {
    export type AsObject = {
        gameVersion?: GameVersionModel.AsObject,
    }
}

export class GetGameRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): GetGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameRequest): GetGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameRequest;
    static deserializeBinaryFromReader(message: GetGameRequest, reader: jspb.BinaryReader): GetGameRequest;
}

export namespace GetGameRequest {
    export type AsObject = {
        gameId: string,
    }
}

export class GetGameResponse extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): GameModel | undefined;
    setGame(value?: GameModel): GetGameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameResponse): GetGameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameResponse;
    static deserializeBinaryFromReader(message: GetGameResponse, reader: jspb.BinaryReader): GetGameResponse;
}

export namespace GetGameResponse {
    export type AsObject = {
        game?: GameModel.AsObject,
    }
}
