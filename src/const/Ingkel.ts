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

export class Ingkel {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Ingkel(0, "Wong")),
        Object.freeze(new Ingkel(1, "Sato")),
        Object.freeze(new Ingkel(2, "Mina")),
        Object.freeze(new Ingkel(3, "Manuk")),
        Object.freeze(new Ingkel(4, "Taru")),
        Object.freeze(new Ingkel(5, "Buku")),
    ]);

    public static get WONG(): Readonly<Ingkel> { return Ingkel.aValues[0]; }
    public static get SATO(): Readonly<Ingkel> { return Ingkel.aValues[1]; }
    public static get MINA(): Readonly<Ingkel> { return Ingkel.aValues[2]; }
    public static get MANUK(): Readonly<Ingkel> { return Ingkel.aValues[3]; }
    public static get TARU(): Readonly<Ingkel> { return Ingkel.aValues[4]; }
    public static get BUKU(): Readonly<Ingkel> { return Ingkel.aValues[5]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Ingkel>> {
        return Ingkel.aValues;
    }
}
