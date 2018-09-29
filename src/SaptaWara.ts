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
 * Enum that represent SaptaWara in Balinese Saka Calendar. The details of SaptaWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/saptawara.htm'>SaptaWara at
 * babadbali.com</a>.
 */
export class SaptaWara {
    /** Return the list of SaptaWara */
    static get values() { return _C_VAL; }
    /** Id: 0, Urip: 5, KertaAji: 6, Kupih: 3 */
    static get REDITE() { return _C_VAL[0]; }
    /** Id: 1, Urip: 4, KertaAji: 4, Kupih: 4 */
    static get SOMA() { return _C_VAL[1]; }
    /** Id: 2, Urip: 3, KertaAji: 3, Kupih: 5 */
    static get ANGGARA() { return _C_VAL[2]; }
    /** Id: 3, Urip: 7, KertaAji: 6, Kupih: 6 */
    static get BUDA() { return _C_VAL[3]; }
    /** Id: 4, Urip: 8, KertaAji: 5, Kupih: 7 */
    static get WRASPATI() { return _C_VAL[4]; }
    /** Id: 5, Urip: 6, KertaAji: 7, Kupih: 1 */
    static get SUKRA() { return _C_VAL[5]; }
    /** Id: 6, Urip: 9, KertaAji: 8, Kupih: 2 */
    static get SANISCARA() { return _C_VAL[6]; }

    constructor(public readonly id: number,
                public readonly urip: number,
                public readonly kertaAji: number,
                public readonly kupih: number,
                public readonly name: string) {
                    Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new SaptaWara(0, 5, 6, 3, "Redite"),
    new SaptaWara(1, 4, 4, 4, "Soma"),
    new SaptaWara(2, 3, 3, 5, "Anggara"),
    new SaptaWara(3, 7, 6, 6, "Buda"),
    new SaptaWara(4, 8, 5, 7, "Wraspati"),
    new SaptaWara(5, 6, 7, 1, "Sukra"),
    new SaptaWara(6, 9, 8, 2, "Saniscara"),
];
Object.freeze(_C_VAL);
