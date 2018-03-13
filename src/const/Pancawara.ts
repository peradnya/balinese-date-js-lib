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

export class Pancawara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Pancawara(0, 9, 3, "Paing")),
        Object.freeze(new Pancawara(1, 7, 4, "Pon")),
        Object.freeze(new Pancawara(2, 4, 5, "Wage")),
        Object.freeze(new Pancawara(3, 8, 1, "Kliwon")),
        Object.freeze(new Pancawara(4, 5, 2, "Umanis")),
    ]);

    public static get PAING(): Readonly<Pancawara> { return Pancawara.aValues[0]; }
    public static get PON(): Readonly<Pancawara> { return Pancawara.aValues[1]; }
    public static get WAGE(): Readonly<Pancawara> { return Pancawara.aValues[2]; }
    public static get KLIWON(): Readonly<Pancawara> { return Pancawara.aValues[3]; }
    public static get UMANIS(): Readonly<Pancawara> { return Pancawara.aValues[4]; }

    private constructor(
        private readonly nId: number,
        private readonly nUrip: number,
        private readonly nKupih: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get urip(): number {
        return this.nUrip;
    }

    public get kupih(): number {
        return this.nKupih;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Pancawara>> {
        return Pancawara.aValues;
    }
}
