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
 * Enum that represent Pararasan in Balinese Saka Calendar. The details of Pararasan
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/paarasan.htm'>Pararasan at babadbali.com</a>.
 */
export class Pararasan {
    /** Return the list of Pararasan */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get LAKU_PANDITA_SAKTI() { return _C_VAL[0]; }
    /** Id: 1 */
    static get ARAS_TUDING() { return _C_VAL[1]; }
    /** Id: 2 */
    static get ARAS_KEMBANG() { return _C_VAL[2]; }
    /** Id: 3 */
    static get LAKU_BINTANG() { return _C_VAL[3]; }
    /** Id: 4 */
    static get LAKU_BULAN() { return _C_VAL[4]; }
    /** Id: 5 */
    static get LAKU_SURYA() { return _C_VAL[5]; }
    /** Id: 6 */
    static get LAKU_AIR() { return _C_VAL[6]; }
    /** Id: 7 */
    static get LAKU_BUMI() { return _C_VAL[7]; }
    /** Id: 8 */
    static get LAKU_API() { return _C_VAL[8]; }
    /** Id: 9 */
    static get LAKU_ANGIN() { return _C_VAL[9]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Pararasan(0, "Laku Pandita Sakti"),
    new Pararasan(1, "Aras Tuding"),
    new Pararasan(2, "Aras Kembang"),
    new Pararasan(3, "Laku Bintang"),
    new Pararasan(4, "Laku Bulan"),
    new Pararasan(5, "Laku Surya"),
    new Pararasan(6, "Laku Air"),
    new Pararasan(7, "Laku Bumi"),
    new Pararasan(8, "Laku Api"),
    new Pararasan(9, "Laku Angin"),
];
Object.freeze(_C_VAL);
