// package: schema
// file: slotsgames/scatter_prize.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ScatterPrizeModel extends jspb.Message { 
    getId(): number;
    setId(value: number): ScatterPrizeModel;

    hasSimpleScatterPrize(): boolean;
    clearSimpleScatterPrize(): void;
    getSimpleScatterPrize(): SimpleScatterPrize | undefined;
    setSimpleScatterPrize(value?: SimpleScatterPrize): ScatterPrizeModel;

    hasAccumulateMultiplierScatterPrize(): boolean;
    clearAccumulateMultiplierScatterPrize(): void;
    getAccumulateMultiplierScatterPrize(): AccumulateMultiplierScatterPrize | undefined;
    setAccumulateMultiplierScatterPrize(value?: AccumulateMultiplierScatterPrize): ScatterPrizeModel;

    getPrizeCase(): ScatterPrizeModel.PrizeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScatterPrizeModel.AsObject;
    static toObject(includeInstance: boolean, msg: ScatterPrizeModel): ScatterPrizeModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScatterPrizeModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScatterPrizeModel;
    static deserializeBinaryFromReader(message: ScatterPrizeModel, reader: jspb.BinaryReader): ScatterPrizeModel;
}

export namespace ScatterPrizeModel {
    export type AsObject = {
        id: number,
        simpleScatterPrize?: SimpleScatterPrize.AsObject,
        accumulateMultiplierScatterPrize?: AccumulateMultiplierScatterPrize.AsObject,
    }

    export enum PrizeCase {
        PRIZE_NOT_SET = 0,
        SIMPLE_SCATTER_PRIZE = 2,
        ACCUMULATE_MULTIPLIER_SCATTER_PRIZE = 3,
    }

}

export class SimpleScatterPrize extends jspb.Message { 
    getFreeSpins(): number;
    setFreeSpins(value: number): SimpleScatterPrize;
    getPrize(): number;
    setPrize(value: number): SimpleScatterPrize;
    getFreeSpinsMultiplier(): number;
    setFreeSpinsMultiplier(value: number): SimpleScatterPrize;
    getCurrentSpinMultiplier(): number;
    setCurrentSpinMultiplier(value: number): SimpleScatterPrize;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleScatterPrize.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleScatterPrize): SimpleScatterPrize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleScatterPrize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleScatterPrize;
    static deserializeBinaryFromReader(message: SimpleScatterPrize, reader: jspb.BinaryReader): SimpleScatterPrize;
}

export namespace SimpleScatterPrize {
    export type AsObject = {
        freeSpins: number,
        prize: number,
        freeSpinsMultiplier: number,
        currentSpinMultiplier: number,
    }
}

export class AccumulateMultiplierScatterPrize extends jspb.Message { 
    getInitialFreeSpins(): number;
    setInitialFreeSpins(value: number): AccumulateMultiplierScatterPrize;
    getInitialFreeSpinMultiplier(): number;
    setInitialFreeSpinMultiplier(value: number): AccumulateMultiplierScatterPrize;
    getAccumulatedFreeSpins(): number;
    setAccumulatedFreeSpins(value: number): AccumulateMultiplierScatterPrize;
    getAccumulatedFreeSpinMultiplier(): number;
    setAccumulatedFreeSpinMultiplier(value: number): AccumulateMultiplierScatterPrize;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccumulateMultiplierScatterPrize.AsObject;
    static toObject(includeInstance: boolean, msg: AccumulateMultiplierScatterPrize): AccumulateMultiplierScatterPrize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccumulateMultiplierScatterPrize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccumulateMultiplierScatterPrize;
    static deserializeBinaryFromReader(message: AccumulateMultiplierScatterPrize, reader: jspb.BinaryReader): AccumulateMultiplierScatterPrize;
}

export namespace AccumulateMultiplierScatterPrize {
    export type AsObject = {
        initialFreeSpins: number,
        initialFreeSpinMultiplier: number,
        accumulatedFreeSpins: number,
        accumulatedFreeSpinMultiplier: number,
    }
}
