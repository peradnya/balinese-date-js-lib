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

export class Pararasan {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Pararasan(0, "Laku Pandita Sakti")),
        Object.freeze(new Pararasan(1, "Aras Tuding")),
        Object.freeze(new Pararasan(2, "Aras Kembang")),
        Object.freeze(new Pararasan(3, "Laku Bintang")),
        Object.freeze(new Pararasan(4, "Laku Bulan")),
        Object.freeze(new Pararasan(5, "Laku Surya")),
        Object.freeze(new Pararasan(6, "Laku Air")),
        Object.freeze(new Pararasan(7, "Laku Bumi")),
        Object.freeze(new Pararasan(8, "Laku Api")),
        Object.freeze(new Pararasan(9, "Laku Angin")),
    ]);

    public static get LAKU_PANDITA_SAKTI(): Readonly<Pararasan> { return Pararasan.aValues[0]; }
    public static get ARAS_TUDING(): Readonly<Pararasan> { return Pararasan.aValues[1]; }
    public static get ARAS_KEMBANG(): Readonly<Pararasan> { return Pararasan.aValues[2]; }
    public static get LAKU_BINTANG(): Readonly<Pararasan> { return Pararasan.aValues[3]; }
    public static get LAKU_BULAN(): Readonly<Pararasan> { return Pararasan.aValues[4]; }
    public static get LAKU_SURYA(): Readonly<Pararasan> { return Pararasan.aValues[5]; }
    public static get LAKU_AIR(): Readonly<Pararasan> { return Pararasan.aValues[6]; }
    public static get LAKU_BUMI(): Readonly<Pararasan> { return Pararasan.aValues[7]; }
    public static get LAKU_API(): Readonly<Pararasan> { return Pararasan.aValues[8]; }
    public static get LAKU_ANGIN(): Readonly<Pararasan> { return Pararasan.aValues[9]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Pararasan>> {
        return Pararasan.aValues;
    }
}
