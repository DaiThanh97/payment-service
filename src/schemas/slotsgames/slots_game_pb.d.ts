// package: schema
// file: slotsgames/slots_game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as slotsgames_asymmetric_reels_slots_game_pb from "../slotsgames/asymmetric_reels_slots_game_pb";
import * as slotsgames_accumulate_multiplier_slots_game_pb from "../slotsgames/accumulate_multiplier_slots_game_pb";
import * as slotsgames_scatter_prize_pb from "../slotsgames/scatter_prize_pb";

export class SlotsGameModel extends jspb.Message { 
    clearSlotsSymbolList(): void;
    getSlotsSymbolList(): Array<SlotsGameSymbolModel>;
    setSlotsSymbolList(value: Array<SlotsGameSymbolModel>): SlotsGameModel;
    addSlotsSymbol(value?: SlotsGameSymbolModel, index?: number): SlotsGameSymbolModel;
    clearGoldCoinsBetValuesList(): void;
    getGoldCoinsBetValuesList(): Array<number>;
    setGoldCoinsBetValuesList(value: Array<number>): SlotsGameModel;
    addGoldCoinsBetValues(value: number, index?: number): number;
    clearSweepCoinsBetValuesList(): void;
    getSweepCoinsBetValuesList(): Array<number>;
    setSweepCoinsBetValuesList(value: Array<number>): SlotsGameModel;
    addSweepCoinsBetValues(value: number, index?: number): number;
    clearRowCountsList(): void;
    getRowCountsList(): Array<number>;
    setRowCountsList(value: Array<number>): SlotsGameModel;
    addRowCounts(value: number, index?: number): number;
    clearScatterPrizesList(): void;
    getScatterPrizesList(): Array<slotsgames_scatter_prize_pb.ScatterPrizeModel>;
    setScatterPrizesList(value: Array<slotsgames_scatter_prize_pb.ScatterPrizeModel>): SlotsGameModel;
    addScatterPrizes(value?: slotsgames_scatter_prize_pb.ScatterPrizeModel, index?: number): slotsgames_scatter_prize_pb.ScatterPrizeModel;

    hasPaylineSlotsGame(): boolean;
    clearPaylineSlotsGame(): void;
    getPaylineSlotsGame(): PaylineSlotsGameModel | undefined;
    setPaylineSlotsGame(value?: PaylineSlotsGameModel): SlotsGameModel;

    hasWaySlotsGame(): boolean;
    clearWaySlotsGame(): void;
    getWaySlotsGame(): WaySlotsGameModel | undefined;
    setWaySlotsGame(value?: WaySlotsGameModel): SlotsGameModel;

    getGameCase(): SlotsGameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: SlotsGameModel): SlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotsGameModel;
    static deserializeBinaryFromReader(message: SlotsGameModel, reader: jspb.BinaryReader): SlotsGameModel;
}

export namespace SlotsGameModel {
    export type AsObject = {
        slotsSymbolList: Array<SlotsGameSymbolModel.AsObject>,
        goldCoinsBetValuesList: Array<number>,
        sweepCoinsBetValuesList: Array<number>,
        rowCountsList: Array<number>,
        scatterPrizesList: Array<slotsgames_scatter_prize_pb.ScatterPrizeModel.AsObject>,
        paylineSlotsGame?: PaylineSlotsGameModel.AsObject,
        waySlotsGame?: WaySlotsGameModel.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        PAYLINE_SLOTS_GAME = 6,
        WAY_SLOTS_GAME = 7,
    }

}

export class SlotsGameSymbolModel extends jspb.Message { 
    getId(): string;
    setId(value: string): SlotsGameSymbolModel;
    getName(): string;
    setName(value: string): SlotsGameSymbolModel;
    getMinimumPaylineToAppear(): number;
    setMinimumPaylineToAppear(value: number): SlotsGameSymbolModel;
    getChanceRatio(): number;
    setChanceRatio(value: number): SlotsGameSymbolModel;
    getIsWild(): boolean;
    setIsWild(value: boolean): SlotsGameSymbolModel;
    getIsJackpot(): boolean;
    setIsJackpot(value: boolean): SlotsGameSymbolModel;
    getIsScatter(): boolean;
    setIsScatter(value: boolean): SlotsGameSymbolModel;
    clearSymbolValuesList(): void;
    getSymbolValuesList(): Array<number>;
    setSymbolValuesList(value: Array<number>): SlotsGameSymbolModel;
    addSymbolValues(value: number, index?: number): number;

    hasAccumulateMultiplierSlotsGameSymbol(): boolean;
    clearAccumulateMultiplierSlotsGameSymbol(): void;
    getAccumulateMultiplierSlotsGameSymbol(): slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameSymbolModel | undefined;
    setAccumulateMultiplierSlotsGameSymbol(value?: slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameSymbolModel): SlotsGameSymbolModel;

    hasAsymmetricReelsSlotsGameSymbol(): boolean;
    clearAsymmetricReelsSlotsGameSymbol(): void;
    getAsymmetricReelsSlotsGameSymbol(): slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameSymbolModel | undefined;
    setAsymmetricReelsSlotsGameSymbol(value?: slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameSymbolModel): SlotsGameSymbolModel;

    getSymbolCase(): SlotsGameSymbolModel.SymbolCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotsGameSymbolModel.AsObject;
    static toObject(includeInstance: boolean, msg: SlotsGameSymbolModel): SlotsGameSymbolModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotsGameSymbolModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotsGameSymbolModel;
    static deserializeBinaryFromReader(message: SlotsGameSymbolModel, reader: jspb.BinaryReader): SlotsGameSymbolModel;
}

export namespace SlotsGameSymbolModel {
    export type AsObject = {
        id: string,
        name: string,
        minimumPaylineToAppear: number,
        chanceRatio: number,
        isWild: boolean,
        isJackpot: boolean,
        isScatter: boolean,
        symbolValuesList: Array<number>,
        accumulateMultiplierSlotsGameSymbol?: slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameSymbolModel.AsObject,
        asymmetricReelsSlotsGameSymbol?: slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameSymbolModel.AsObject,
    }

    export enum SymbolCase {
        SYMBOL_NOT_SET = 0,
        ACCUMULATE_MULTIPLIER_SLOTS_GAME_SYMBOL = 9,
        ASYMMETRIC_REELS_SLOTS_GAME_SYMBOL = 10,
    }

}

export class PaylineModel extends jspb.Message { 
    getId(): number;
    setId(value: number): PaylineModel;
    clearRowIndexList(): void;
    getRowIndexList(): Array<number>;
    setRowIndexList(value: Array<number>): PaylineModel;
    addRowIndex(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaylineModel.AsObject;
    static toObject(includeInstance: boolean, msg: PaylineModel): PaylineModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaylineModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaylineModel;
    static deserializeBinaryFromReader(message: PaylineModel, reader: jspb.BinaryReader): PaylineModel;
}

export namespace PaylineModel {
    export type AsObject = {
        id: number,
        rowIndexList: Array<number>,
    }
}

export class PaylineSlotsGameModel extends jspb.Message { 
    clearPaylinesList(): void;
    getPaylinesList(): Array<PaylineModel>;
    setPaylinesList(value: Array<PaylineModel>): PaylineSlotsGameModel;
    addPaylines(value?: PaylineModel, index?: number): PaylineModel;

    hasAsymmetricReelsSlotsGame(): boolean;
    clearAsymmetricReelsSlotsGame(): void;
    getAsymmetricReelsSlotsGame(): slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameModel | undefined;
    setAsymmetricReelsSlotsGame(value?: slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameModel): PaylineSlotsGameModel;

    getGameCase(): PaylineSlotsGameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaylineSlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: PaylineSlotsGameModel): PaylineSlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaylineSlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaylineSlotsGameModel;
    static deserializeBinaryFromReader(message: PaylineSlotsGameModel, reader: jspb.BinaryReader): PaylineSlotsGameModel;
}

export namespace PaylineSlotsGameModel {
    export type AsObject = {
        paylinesList: Array<PaylineModel.AsObject>,
        asymmetricReelsSlotsGame?: slotsgames_asymmetric_reels_slots_game_pb.AsymmetricReelsSlotsGameModel.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        ASYMMETRIC_REELS_SLOTS_GAME = 2,
    }

}

export class WaySlotsGameModel extends jspb.Message { 

    hasAccumulateMultiplierSlotsGame(): boolean;
    clearAccumulateMultiplierSlotsGame(): void;
    getAccumulateMultiplierSlotsGame(): slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameModel | undefined;
    setAccumulateMultiplierSlotsGame(value?: slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameModel): WaySlotsGameModel;

    getGameCase(): WaySlotsGameModel.GameCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaySlotsGameModel.AsObject;
    static toObject(includeInstance: boolean, msg: WaySlotsGameModel): WaySlotsGameModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaySlotsGameModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaySlotsGameModel;
    static deserializeBinaryFromReader(message: WaySlotsGameModel, reader: jspb.BinaryReader): WaySlotsGameModel;
}

export namespace WaySlotsGameModel {
    export type AsObject = {
        accumulateMultiplierSlotsGame?: slotsgames_accumulate_multiplier_slots_game_pb.AccumulateMultiplierSlotsGameModel.AsObject,
    }

    export enum GameCase {
        GAME_NOT_SET = 0,
        ACCUMULATE_MULTIPLIER_SLOTS_GAME = 1,
    }

}
