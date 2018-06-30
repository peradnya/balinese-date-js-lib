/**
 *  Copyright 2018 Ida Bagus Putu Peradnya Dinata
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

export class PratithiSamutPada {
    private static readonly aValues = Object.freeze([
        Object.freeze(new PratithiSamutPada(0, "Tresna")),
        Object.freeze(new PratithiSamutPada(1, "Upadana")),
        Object.freeze(new PratithiSamutPada(2, "Bhawa")),
        Object.freeze(new PratithiSamutPada(3, "Jati")),
        Object.freeze(new PratithiSamutPada(4, "Jaramarana")),
        Object.freeze(new PratithiSamutPada(5, "Awidya")),
        Object.freeze(new PratithiSamutPada(6, "Samskara")),
        Object.freeze(new PratithiSamutPada(7, "Widnyana")),
        Object.freeze(new PratithiSamutPada(8, "Namarupa")),
        Object.freeze(new PratithiSamutPada(9, "Sadayatana")),
        Object.freeze(new PratithiSamutPada(10, "Separsa")),
        Object.freeze(new PratithiSamutPada(11, "Wedana")),
    ]);

    public static get TRESNA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[0]; }
    public static get UPADANA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[1]; }
    public static get BHAWA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[2]; }
    public static get JATI(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[3]; }
    public static get JARAMARANA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[4]; }
    public static get AWIDYA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[5]; }
    public static get SAMSKARA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[6]; }
    public static get WIDNYANA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[7]; }
    public static get NAMARUPA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[8]; }
    public static get SADAYATANA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[9]; }
    public static get SEPARSA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[10]; }
    public static get WEDANA(): Readonly<PratithiSamutPada> { return PratithiSamutPada.aValues[11]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<PratithiSamutPada>> {
        return PratithiSamutPada.aValues;
    }
}
