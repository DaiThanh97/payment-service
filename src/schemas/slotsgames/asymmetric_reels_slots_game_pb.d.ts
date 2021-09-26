// package: schema
// file: slotsgames/asymmetric_reels_slots_game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AsymmetricReelsSlotsGameModel extends jspb.Message { 
    getAsymmetricchance(): number;
    setAsymmetricchance(value: number): AsymmetricReelsSlotsGameModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsymmetricReelsSlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: AsymmetricReelsSlotsGameModel): AsymmetricReelsSlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsymmetricReelsSlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsymmetricReelsSlotsGameModel;
    static deserializeBinaryFromReader(message: AsymmetricReelsSlotsGameModel, reader: jspb.BinaryReader): AsymmetricReelsSlotsGameModel;
}

export namespace AsymmetricReelsSlotsGameModel {
    export type AsObject = {
        asymmetricchance: number,
    }
}

export class AsymmetricReelsSlotsGameSymbolModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsymmetricReelsSlotsGameSymbolModel.AsObject;
    static toObject(includeInstance: boolean, msg: AsymmetricReelsSlotsGameSymbolModel): AsymmetricReelsSlotsGameSymbolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsymmetricReelsSlotsGameSymbolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsymmetricReelsSlotsGameSymbolModel;
    static deserializeBinaryFromReader(message: AsymmetricReelsSlotsGameSymbolModel, reader: jspb.BinaryReader): AsymmetricReelsSlotsGameSymbolModel;
}

export namespace AsymmetricReelsSlotsGameSymbolModel {
    export type AsObject = {
    }
}

export class CreateAsymmetricReelsSlotsGameRequest extends jspb.Message { 
    getGameName(): string;
    setGameName(value: string): CreateAsymmetricReelsSlotsGameRequest;
    clearAvailableGoldCoinsBetValuesList(): void;
    getAvailableGoldCoinsBetValuesList(): Array<number>;
    setAvailableGoldCoinsBetValuesList(value: Array<number>): CreateAsymmetricReelsSlotsGameRequest;
    addAvailableGoldCoinsBetValues(value: number, index?: number): number;
    clearAvailableSweepCoinsBetValuesList(): void;
    getAvailableSweepCoinsBetValuesList(): Array<number>;
    setAvailableSweepCoinsBetValuesList(value: Array<number>): CreateAsymmetricReelsSlotsGameRequest;
    addAvailableSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): CreateAsymmetricReelsSlotsGameRequest;
    addRowCounts(value: number, index?: number): number;
    getAsymmetricchance(): number;
    setAsymmetricchance(value: number): CreateAsymmetricReelsSlotsGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAsymmetricReelsSlotsGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAsymmetricReelsSlotsGameRequest): CreateAsymmetricReelsSlotsGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAsymmetricReelsSlotsGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAsymmetricReelsSlotsGameRequest;
    static deserializeBinaryFromReader(message: CreateAsymmetricReelsSlotsGameRequest, reader: jspb.BinaryReader): CreateAsymmetricReelsSlotsGameRequest;
}

export namespace CreateAsymmetricReelsSlotsGameRequest {
    export type AsObject = {
        gameName: string,
        availableGoldCoinsBetValuesList: Array<number>,
        availableSweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        asymmetricchance: number,
    }
}

export class UpdateAsymmetricReelsSlotsGameRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAsymmetricReelsSlotsGameRequest;
    getGameName(): string;
    setGameName(value: string): UpdateAsymmetricReelsSlotsGameRequest;
    clearAvailableGoldCoinsBetValuesList(): void;
    getAvailableGoldCoinsBetValuesList(): Array<number>;
    setAvailableGoldCoinsBetValuesList(value: Array<number>): UpdateAsymmetricReelsSlotsGameRequest;
    addAvailableGoldCoinsBetValues(value: number, index?: number): number;
    clearAvailableSweepCoinsBetValuesList(): void;
    getAvailableSweepCoinsBetValuesList(): Array<number>;
    setAvailableSweepCoinsBetValuesList(value: Array<number>): UpdateAsymmetricReelsSlotsGameRequest;
    addAvailableSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): UpdateAsymmetricReelsSlotsGameRequest;
    addRowCounts(value: number, index?: number): number;
    getAsymmetricchance(): number;
    setAsymmetricchance(value: number): UpdateAsymmetricReelsSlotsGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAsymmetricReelsSlotsGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAsymmetricReelsSlotsGameRequest): UpdateAsymmetricReelsSlotsGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAsymmetricReelsSlotsGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAsymmetricReelsSlotsGameRequest;
    static deserializeBinaryFromReader(message: UpdateAsymmetricReelsSlotsGameRequest, reader: jspb.BinaryReader): UpdateAsymmetricReelsSlotsGameRequest;
}

export namespace UpdateAsymmetricReelsSlotsGameRequest {
    export type AsObject = {
        gameId: string,
        gameName: string,
        availableGoldCoinsBetValuesList: Array<number>,
        availableSweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        asymmetricchance: number,
    }
}

export class AddAsymmetricReelsSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): AddAsymmetricReelsSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): AddAsymmetricReelsSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): AddAsymmetricReelsSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): AddAsymmetricReelsSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): AddAsymmetricReelsSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): AddAsymmetricReelsSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): AddAsymmetricReelsSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): AddAsymmetricReelsSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAsymmetricReelsSlotsGameSymbolRequest): AddAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAsymmetricReelsSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAsymmetricReelsSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: AddAsymmetricReelsSlotsGameSymbolRequest, reader: jspb.BinaryReader): AddAsymmetricReelsSlotsGameSymbolRequest;
}

export namespace AddAsymmetricReelsSlotsGameSymbolRequest {
    export type AsObject = {
        gameId: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
    }
}

export class UpdateAsymmetricReelsSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getSymbolId(): string;
    setSymbolId(value: string): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAsymmetricReelsSlotsGameSymbolRequest): UpdateAsymmetricReelsSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAsymmetricReelsSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAsymmetricReelsSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: UpdateAsymmetricReelsSlotsGameSymbolRequest, reader: jspb.BinaryReader): UpdateAsymmetricReelsSlotsGameSymbolRequest;
}

export namespace UpdateAsymmetricReelsSlotsGameSymbolRequest {
    export type AsObject = {
        gameId: string,
        symbolId: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
    }
}
