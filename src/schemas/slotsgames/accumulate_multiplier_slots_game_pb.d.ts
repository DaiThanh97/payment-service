// package: schema
// file: slotsgames/accumulate_multiplier_slots_game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AccumulateMultiplierSlotsGameModel extends jspb.Message { 
    getMaxMultiplier(): number;
    setMaxMultiplier(value: number): AccumulateMultiplierSlotsGameModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccumulateMultiplierSlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: AccumulateMultiplierSlotsGameModel): AccumulateMultiplierSlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccumulateMultiplierSlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccumulateMultiplierSlotsGameModel;
    static deserializeBinaryFromReader(message: AccumulateMultiplierSlotsGameModel, reader: jspb.BinaryReader): AccumulateMultiplierSlotsGameModel;
}

export namespace AccumulateMultiplierSlotsGameModel {
    export type AsObject = {
        maxMultiplier: number,
    }
}

export class AccumulateMultiplierSlotsGameSymbolModel extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccumulateMultiplierSlotsGameSymbolModel.AsObject;
    static toObject(includeInstance: boolean, msg: AccumulateMultiplierSlotsGameSymbolModel): AccumulateMultiplierSlotsGameSymbolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccumulateMultiplierSlotsGameSymbolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccumulateMultiplierSlotsGameSymbolModel;
    static deserializeBinaryFromReader(message: AccumulateMultiplierSlotsGameSymbolModel, reader: jspb.BinaryReader): AccumulateMultiplierSlotsGameSymbolModel;
}

export namespace AccumulateMultiplierSlotsGameSymbolModel {
    export type AsObject = {
    }
}

export class CreateAccumulateMultiplierSlotsGameRequest extends jspb.Message { 
    getGameName(): string;
    setGameName(value: string): CreateAccumulateMultiplierSlotsGameRequest;
    clearAvailableGoldCoinsBetValuesList(): void;
    getAvailableGoldCoinsBetValuesList(): Array<number>;
    setAvailableGoldCoinsBetValuesList(value: Array<number>): CreateAccumulateMultiplierSlotsGameRequest;
    addAvailableGoldCoinsBetValues(value: number, index?: number): number;
    clearAvailableSweepCoinsBetValuesList(): void;
    getAvailableSweepCoinsBetValuesList(): Array<number>;
    setAvailableSweepCoinsBetValuesList(value: Array<number>): CreateAccumulateMultiplierSlotsGameRequest;
    addAvailableSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): CreateAccumulateMultiplierSlotsGameRequest;
    addRowCounts(value: number, index?: number): number;
    getMaxMultiplier(): number;
    setMaxMultiplier(value: number): CreateAccumulateMultiplierSlotsGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccumulateMultiplierSlotsGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccumulateMultiplierSlotsGameRequest): CreateAccumulateMultiplierSlotsGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccumulateMultiplierSlotsGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccumulateMultiplierSlotsGameRequest;
    static deserializeBinaryFromReader(message: CreateAccumulateMultiplierSlotsGameRequest, reader: jspb.BinaryReader): CreateAccumulateMultiplierSlotsGameRequest;
}

export namespace CreateAccumulateMultiplierSlotsGameRequest {
    export type AsObject = {
        gameName: string,
        availableGoldCoinsBetValuesList: Array<number>,
        availableSweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        maxMultiplier: number,
    }
}

export class UpdateAccumulateMultiplierSlotsGameRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAccumulateMultiplierSlotsGameRequest;
    getGameName(): string;
    setGameName(value: string): UpdateAccumulateMultiplierSlotsGameRequest;
    clearAvailableGoldCoinsBetValuesList(): void;
    getAvailableGoldCoinsBetValuesList(): Array<number>;
    setAvailableGoldCoinsBetValuesList(value: Array<number>): UpdateAccumulateMultiplierSlotsGameRequest;
    addAvailableGoldCoinsBetValues(value: number, index?: number): number;
    clearAvailableSweepCoinsBetValuesList(): void;
    getAvailableSweepCoinsBetValuesList(): Array<number>;
    setAvailableSweepCoinsBetValuesList(value: Array<number>): UpdateAccumulateMultiplierSlotsGameRequest;
    addAvailableSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): UpdateAccumulateMultiplierSlotsGameRequest;
    addRowCounts(value: number, index?: number): number;
    getMaxMultiplier(): number;
    setMaxMultiplier(value: number): UpdateAccumulateMultiplierSlotsGameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccumulateMultiplierSlotsGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccumulateMultiplierSlotsGameRequest): UpdateAccumulateMultiplierSlotsGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccumulateMultiplierSlotsGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccumulateMultiplierSlotsGameRequest;
    static deserializeBinaryFromReader(message: UpdateAccumulateMultiplierSlotsGameRequest, reader: jspb.BinaryReader): UpdateAccumulateMultiplierSlotsGameRequest;
}

export namespace UpdateAccumulateMultiplierSlotsGameRequest {
    export type AsObject = {
        gameId: string,
        gameName: string,
        availableGoldCoinsBetValuesList: Array<number>,
        availableSweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        maxMultiplier: number,
    }
}

export class AddAccumulateMultiplierSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): AddAccumulateMultiplierSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAccumulateMultiplierSlotsGameSymbolRequest): AddAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAccumulateMultiplierSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAccumulateMultiplierSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: AddAccumulateMultiplierSlotsGameSymbolRequest, reader: jspb.BinaryReader): AddAccumulateMultiplierSlotsGameSymbolRequest;
}

export namespace AddAccumulateMultiplierSlotsGameSymbolRequest {
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

export class UpdateAccumulateMultiplierSlotsGameSymbolRequest extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getSymbolId(): string;
    setSymbolId(value: string): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getName(): string;
    setName(value: string): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getChanceRatio(): number;
    setChanceRatio(value: number): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getIsWild(): boolean;
    setIsWild(value: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    addSymbolValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccumulateMultiplierSlotsGameSymbolRequest): UpdateAccumulateMultiplierSlotsGameSymbolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccumulateMultiplierSlotsGameSymbolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
    static deserializeBinaryFromReader(message: UpdateAccumulateMultiplierSlotsGameSymbolRequest, reader: jspb.BinaryReader): UpdateAccumulateMultiplierSlotsGameSymbolRequest;
}

export namespace UpdateAccumulateMultiplierSlotsGameSymbolRequest {
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
