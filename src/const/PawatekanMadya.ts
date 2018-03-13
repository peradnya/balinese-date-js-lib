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

export class PawatekanMadya {
    private static readonly aValues = Object.freeze([
        Object.freeze(new PawatekanMadya(0, "Wong")),
        Object.freeze(new PawatekanMadya(1, "Gajah")),
        Object.freeze(new PawatekanMadya(2, "Watu")),
        Object.freeze(new PawatekanMadya(3, "Buta")),
        Object.freeze(new PawatekanMadya(4, "Suku")),
    ]);

    public static get WONG(): Readonly<PawatekanMadya> { return PawatekanMadya.aValues[0]; }
    public static get GAJAH(): Readonly<PawatekanMadya> { return PawatekanMadya.aValues[1]; }
    public static get WATU(): Readonly<PawatekanMadya> { return PawatekanMadya.aValues[2]; }
    public static get BUTA(): Readonly<PawatekanMadya> { return PawatekanMadya.aValues[3]; }
    public static get SUKU(): Readonly<PawatekanMadya> { return PawatekanMadya.aValues[4]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<PawatekanMadya>> {
        return PawatekanMadya.aValues;
    }
}
