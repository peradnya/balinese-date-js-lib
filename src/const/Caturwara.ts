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

export class Caturwara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Caturwara(0, 6, "Sri")),
        Object.freeze(new Caturwara(1, 5, "Laba")),
        Object.freeze(new Caturwara(2, 1, "Jaya")),
        Object.freeze(new Caturwara(3, 8, "Menala")),
    ]);

    public static get SRI(): Readonly<Caturwara> { return Caturwara.aValues[0]; }
    public static get LABA(): Readonly<Caturwara> { return Caturwara.aValues[1]; }
    public static get JAYA(): Readonly<Caturwara> { return Caturwara.aValues[2]; }
    public static get MENALA(): Readonly<Caturwara> { return Caturwara.aValues[3]; }

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

    public static get values(): ReadonlyArray<Readonly<Caturwara>> {
        return Caturwara.aValues;
    }
}
