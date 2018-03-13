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

export class Triwara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Triwara(0, 9, "Pasah")),
        Object.freeze(new Triwara(1, 4, "Beteng")),
        Object.freeze(new Triwara(2, 7, "Kajeng")),
    ]);

    public static get PASAH(): Readonly<Triwara> { return Triwara.aValues[0]; }
    public static get BETENG(): Readonly<Triwara> { return Triwara.aValues[1]; }
    public static get KAJENG(): Readonly<Triwara> { return Triwara.aValues[2]; }

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

    public static get values(): ReadonlyArray<Readonly<Triwara>> {
        return Triwara.aValues;
    }
}
