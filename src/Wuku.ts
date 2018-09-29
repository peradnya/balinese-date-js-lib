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

/**
 * Enum that represent Wuku in Balinese Saka Calendar. The details of Wuku
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/wuku.htm'>Wuku at
 * babadbali.com</a>.
 */
export class Wuku {
    /** Return the list of Wuku */
    static get values() { return _C_VAL; }
    /** Id: 0, Urip: 7 */
    static get SINTA() { return _C_VAL[0]; }
    /** Id: 1, Urip: 1 */
    static get LANDEP() { return _C_VAL[1]; }
    /** Id: 2, Urip: 4 */
    static get UKIR() { return _C_VAL[2]; }
    /** Id: 3, Urip: 6 */
    static get KULANTIR() { return _C_VAL[3]; }
    /** Id: 4, Urip: 5 */
    static get TOLU() { return _C_VAL[4]; }
    /** Id: 5, Urip: 8 */
    static get GUMBREG() { return _C_VAL[5]; }
    /** Id: 6, Urip: 9 */
    static get WARIGA() { return _C_VAL[6]; }
    /** Id: 7, Urip: 3 */
    static get WARIGADEAN() { return _C_VAL[7]; }
    /** Id: 8, Urip: 7 */
    static get JULUNGWANGI() { return _C_VAL[8]; }
    /** Id: 9, Urip: 1 */
    static get SUNGSANG() { return _C_VAL[9]; }
    /** Id: 10, Urip: 4 */
    static get DUNGULAN() { return _C_VAL[10]; }
    /** Id: 11, Urip: 6 */
    static get KUNINGAN() { return _C_VAL[11]; }
    /** Id: 12, Urip: 5 */
    static get LANGKIR() { return _C_VAL[12]; }
    /** Id: 13, Urip: 8 */
    static get MEDANGSIA() { return _C_VAL[13]; }
    /** Id: 14, Urip: 9 */
    static get PUJUT() { return _C_VAL[14]; }
    /** Id: 15, Urip: 3 */
    static get PAHANG() { return _C_VAL[15]; }
    /** Id: 16, Urip: 7 */
    static get KRULUT() { return _C_VAL[16]; }
    /** Id: 17, Urip: 1 */
    static get MERAKIH() { return _C_VAL[17]; }
    /** Id: 18, Urip: 4 */
    static get TAMBIR() { return _C_VAL[18]; }
    /** Id: 19, Urip: 6 */
    static get MEDANGKUNGAN() { return _C_VAL[19]; }
    /** Id: 20, Urip: 5 */
    static get MATAL() { return _C_VAL[20]; }
    /** Id: 21, Urip: 8 */
    static get UYE() { return _C_VAL[21]; }
    /** Id: 22, Urip: 9 */
    static get MENAIL() { return _C_VAL[22]; }
    /** Id: 23, Urip: 3 */
    static get PRANGBAKAT() { return _C_VAL[23]; }
    /** Id: 24, Urip: 7 */
    static get BALA() { return _C_VAL[24]; }
    /** Id: 25, Urip: 1 */
    static get UGU() { return _C_VAL[25]; }
    /** Id: 26, Urip: 4 */
    static get WAYANG() { return _C_VAL[26]; }
    /** Id: 27, Urip: 6 */
    static get KLAWU() { return _C_VAL[27]; }
    /** Id: 28, Urip: 5 */
    static get DUKUT() { return _C_VAL[28]; }
    /** Id: 29, Urip: 8 */
    static get WATUGUNUNG() { return _C_VAL[29]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Wuku(0, 7, "Sinta"),
    new Wuku(1, 1, "Landep"),
    new Wuku(2, 4, "Ukir"),
    new Wuku(3, 6, "Kulantir"),
    new Wuku(4, 5, "Tolu"),
    new Wuku(5, 8, "Gumbreg"),
    new Wuku(6, 9, "Wariga"),
    new Wuku(7, 3, "Warigadean"),
    new Wuku(8, 7, "Julungwangi"),
    new Wuku(9, 1, "Sungsang"),
    new Wuku(10, 4, "Dungulan"),
    new Wuku(11, 6, "Kuningan"),
    new Wuku(12, 5, "Langkir"),
    new Wuku(13, 8, "Medangsia"),
    new Wuku(14, 9, "Pujut"),
    new Wuku(15, 3, "Pahang"),
    new Wuku(16, 7, "Krulut"),
    new Wuku(17, 1, "Merakih"),
    new Wuku(18, 4, "Tambir"),
    new Wuku(19, 6, "Medangkungan"),
    new Wuku(20, 5, "Matal"),
    new Wuku(21, 8, "Uye"),
    new Wuku(22, 9, "Menail"),
    new Wuku(23, 3, "Prangbakat"),
    new Wuku(24, 7, "Bala"),
    new Wuku(25, 1, "Ugu"),
    new Wuku(26, 4, "Wayang"),
    new Wuku(27, 6, "Klawu"),
    new Wuku(28, 5, "Dukut"),
    new Wuku(29, 8, "Watugunung"),
];
Object.freeze(_C_VAL);
