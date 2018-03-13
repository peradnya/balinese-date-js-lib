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

export class Sasih {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Sasih(0, "Kasa")),
        Object.freeze(new Sasih(1, "Karo")),
        Object.freeze(new Sasih(2, "Katiga")),
        Object.freeze(new Sasih(3, "Kapat")),
        Object.freeze(new Sasih(4, "Kalima")),
        Object.freeze(new Sasih(5, "Kanem")),
        Object.freeze(new Sasih(6, "Kapitu")),
        Object.freeze(new Sasih(7, "Kawolu")),
        Object.freeze(new Sasih(8, "Kasanga")),
        Object.freeze(new Sasih(9, "Kadasa")),
        Object.freeze(new Sasih(10, "Destha")),
        Object.freeze(new Sasih(11, "Sadha")),
        Object.freeze(new Sasih(12, "Mala Destha")),
        Object.freeze(new Sasih(13, "Mala Sadha")),
        Object.freeze(new Sasih(14, "Nampih Destha")),
        Object.freeze(new Sasih(15, "Nampih Katiga")),
        Object.freeze(new Sasih(16, "Nampih Kasa")),
        Object.freeze(new Sasih(17, "Nampih Kadasa")),
        Object.freeze(new Sasih(18, "Nampih Karo")),
        Object.freeze(new Sasih(19, "Nampih Sadha")),
    ]);

    public static get KASA(): Readonly<Sasih> { return Sasih.aValues[0]; }
    public static get KARO(): Readonly<Sasih> { return Sasih.aValues[1]; }
    public static get KATIGA(): Readonly<Sasih> { return Sasih.aValues[2]; }
    public static get KAPAT(): Readonly<Sasih> { return Sasih.aValues[3]; }
    public static get KALIMA(): Readonly<Sasih> { return Sasih.aValues[4]; }
    public static get KANEM(): Readonly<Sasih> { return Sasih.aValues[5]; }
    public static get KAPITU(): Readonly<Sasih> { return Sasih.aValues[6]; }
    public static get KAWOLU(): Readonly<Sasih> { return Sasih.aValues[7]; }
    public static get KASANGA(): Readonly<Sasih> { return Sasih.aValues[8]; }
    public static get KADASA(): Readonly<Sasih> { return Sasih.aValues[9]; }
    public static get DESTHA(): Readonly<Sasih> { return Sasih.aValues[10]; }
    public static get SADHA(): Readonly<Sasih> { return Sasih.aValues[11]; }
    public static get MALA_DESTHA(): Readonly<Sasih> { return Sasih.aValues[12]; }
    public static get MALA_SADHA(): Readonly<Sasih> { return Sasih.aValues[13]; }
    public static get NAMPIH_DESTHA(): Readonly<Sasih> { return Sasih.aValues[14]; }
    public static get NAMPIH_KATIGA(): Readonly<Sasih> { return Sasih.aValues[15]; }
    public static get NAMPIH_KASA(): Readonly<Sasih> { return Sasih.aValues[16]; }
    public static get NAMPIH_KADASA(): Readonly<Sasih> { return Sasih.aValues[17]; }
    public static get NAMPIH_KARO(): Readonly<Sasih> { return Sasih.aValues[18]; }
    public static get NAMPIH_SADHA(): Readonly<Sasih> { return Sasih.aValues[19]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Sasih>> {
        return Sasih.aValues;
    }
}
