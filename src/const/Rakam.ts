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

export class Rakam {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Rakam(0, "Nuju Pati")),
        Object.freeze(new Rakam(1, "Kala Tinantang")),
        Object.freeze(new Rakam(2, "Demang Kandhuruwan")),
        Object.freeze(new Rakam(3, "Sanggar Waringin")),
        Object.freeze(new Rakam(4, "Mantri Sinaroja")),
        Object.freeze(new Rakam(5, "Macan Katawan")),
    ]);

    public static get NUJU_PATI(): Readonly<Rakam> { return Rakam.aValues[0]; }
    public static get KALA_TINANTANG(): Readonly<Rakam> { return Rakam.aValues[1]; }
    public static get DEMANG_KANDHURUWAN(): Readonly<Rakam> { return Rakam.aValues[2]; }
    public static get SANGGAR_WARINGIN(): Readonly<Rakam> { return Rakam.aValues[3]; }
    public static get MANTRI_SINAROJA(): Readonly<Rakam> { return Rakam.aValues[4]; }
    public static get MACAN_KATAWAN(): Readonly<Rakam> { return Rakam.aValues[5]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Rakam>> {
        return Rakam.aValues;
    }
}
