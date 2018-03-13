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

export class Astawara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Astawara(0, 6, "Sri")),
        Object.freeze(new Astawara(1, 5, "Indra")),
        Object.freeze(new Astawara(2, 8, "Guru")),
        Object.freeze(new Astawara(3, 9, "Yama")),
        Object.freeze(new Astawara(4, 3, "Ludra")),
        Object.freeze(new Astawara(5, 7, "Brahma")),
        Object.freeze(new Astawara(6, 1, "Kala")),
        Object.freeze(new Astawara(7, 4, "Uma")),
    ]);

    public static get SRI(): Readonly<Astawara> { return Astawara.aValues[0]; }
    public static get INDRA(): Readonly<Astawara> { return Astawara.aValues[1]; }
    public static get GURU(): Readonly<Astawara> { return Astawara.aValues[2]; }
    public static get YAMA(): Readonly<Astawara> { return Astawara.aValues[3]; }
    public static get LUDRA(): Readonly<Astawara> { return Astawara.aValues[4]; }
    public static get BRAHMA(): Readonly<Astawara> { return Astawara.aValues[5]; }
    public static get KALA(): Readonly<Astawara> { return Astawara.aValues[6]; }
    public static get UMA(): Readonly<Astawara> { return Astawara.aValues[7]; }

    private constructor(
        private readonly nId: number,
        private readonly nUrip: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get urip(): number {
        return this.nUrip;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Astawara>> {
        return Astawara.aValues;
    }
}
