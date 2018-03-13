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

export class Wuku {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Wuku( 0, 7, "Sinta")),
        Object.freeze(new Wuku( 1, 1, "Landep")),
        Object.freeze(new Wuku( 2, 4, "Ukir")),
        Object.freeze(new Wuku( 3, 6, "Kulantir")),
        Object.freeze(new Wuku( 4, 5, "Tolu")),
        Object.freeze(new Wuku( 5, 8, "Gumbreg")),
        Object.freeze(new Wuku( 6, 9, "Wariga")),
        Object.freeze(new Wuku( 7, 3, "Warigadean")),
        Object.freeze(new Wuku( 8, 7, "Julungwangi")),
        Object.freeze(new Wuku( 9, 1, "Sungsang")),
        Object.freeze(new Wuku(10, 4, "Dungulan")),
        Object.freeze(new Wuku(11, 6, "Kuningan")),
        Object.freeze(new Wuku(12, 5, "Langkir")),
        Object.freeze(new Wuku(13, 8, "Medangsia")),
        Object.freeze(new Wuku(14, 9, "Pujut")),
        Object.freeze(new Wuku(15, 3, "Pahang")),
        Object.freeze(new Wuku(16, 7, "Krulut")),
        Object.freeze(new Wuku(17, 1, "Merakih")),
        Object.freeze(new Wuku(18, 4, "Tambir")),
        Object.freeze(new Wuku(19, 6, "Medangkungan")),
        Object.freeze(new Wuku(20, 5, "Matal")),
        Object.freeze(new Wuku(21, 8, "Uye")),
        Object.freeze(new Wuku(22, 9, "Menail")),
        Object.freeze(new Wuku(23, 3, "Prangbakat")),
        Object.freeze(new Wuku(24, 7, "Bala")),
        Object.freeze(new Wuku(25, 1, "Ugu")),
        Object.freeze(new Wuku(26, 4, "Wayang")),
        Object.freeze(new Wuku(27, 6, "Klawu")),
        Object.freeze(new Wuku(28, 5, "Dukut")),
        Object.freeze(new Wuku(29, 8, "Watugunung")),
    ]);

    public static get SINTA(): Readonly<Wuku> { return Wuku.aValues[0]; }
    public static get LANDEP(): Readonly<Wuku> { return Wuku.aValues[1]; }
    public static get UKIR(): Readonly<Wuku> { return Wuku.aValues[2]; }
    public static get KULANTIR(): Readonly<Wuku> { return Wuku.aValues[3]; }
    public static get TOLU(): Readonly<Wuku> { return Wuku.aValues[4]; }
    public static get GUMBREG(): Readonly<Wuku> { return Wuku.aValues[5]; }
    public static get WARIGA(): Readonly<Wuku> { return Wuku.aValues[6]; }
    public static get WARIGADEAN(): Readonly<Wuku> { return Wuku.aValues[7]; }
    public static get JULUNGWANGI(): Readonly<Wuku> { return Wuku.aValues[8]; }
    public static get SUNGSANG(): Readonly<Wuku> { return Wuku.aValues[9]; }
    public static get DUNGULAN(): Readonly<Wuku> { return Wuku.aValues[10]; }
    public static get KUNINGAN(): Readonly<Wuku> { return Wuku.aValues[11]; }
    public static get LANGKIR(): Readonly<Wuku> { return Wuku.aValues[12]; }
    public static get MEDANGSIA(): Readonly<Wuku> { return Wuku.aValues[13]; }
    public static get PUJUD(): Readonly<Wuku> { return Wuku.aValues[14]; }
    public static get PAHANG(): Readonly<Wuku> { return Wuku.aValues[15]; }
    public static get KRULUT(): Readonly<Wuku> { return Wuku.aValues[16]; }
    public static get MERAKIH(): Readonly<Wuku> { return Wuku.aValues[17]; }
    public static get TAMBIR(): Readonly<Wuku> { return Wuku.aValues[18]; }
    public static get MEDANGKUNGAN(): Readonly<Wuku> { return Wuku.aValues[19]; }
    public static get MATAL(): Readonly<Wuku> { return Wuku.aValues[20]; }
    public static get UYE(): Readonly<Wuku> { return Wuku.aValues[21]; }
    public static get MENAIL(): Readonly<Wuku> { return Wuku.aValues[22]; }
    public static get PRANGBAKAT(): Readonly<Wuku> { return Wuku.aValues[23]; }
    public static get BALA(): Readonly<Wuku> { return Wuku.aValues[24]; }
    public static get UGU(): Readonly<Wuku> { return Wuku.aValues[25]; }
    public static get WAYANG(): Readonly<Wuku> { return Wuku.aValues[26]; }
    public static get KLAWU(): Readonly<Wuku> { return Wuku.aValues[27]; }
    public static get DUKUT(): Readonly<Wuku> { return Wuku.aValues[28]; }
    public static get WATUGUNUNG(): Readonly<Wuku> { return Wuku.aValues[29]; }

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

    public static get values(): ReadonlyArray<Readonly<Wuku>> {
        return Wuku.aValues;
    }
}
