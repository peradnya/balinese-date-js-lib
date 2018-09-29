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
 * Enum that represent AstaWara in Balinese Saka Calendar. The details of AstaWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/astawara.htm'>AstaWara at
 * babadbali.com</a>.
 */
export class AstaWara {
    /** Return the list of CaturWara */
    static get values() { return _C_VAL; }
    /** Id: 0, Urip: 6 */
    static get SRI() { return _C_VAL[0]; }
    /** Id: 1, Urip: 5 */
    static get INDRA() { return _C_VAL[1]; }
    /** Id: 2, Urip: 8 */
    static get GURU() { return _C_VAL[2]; }
    /** Id: 3, Urip: 9 */
    static get YAMA() { return _C_VAL[3]; }
    /** Id: 4, Urip: 3 */
    static get LUDRA() { return _C_VAL[4]; }
    /** Id: 5, Urip: 7 */
    static get BRAHMA() { return _C_VAL[5]; }
    /** Id: 6, Urip: 1 */
    static get KALA() { return _C_VAL[6]; }
    /** Id: 7, Urip: 4 */
    static get UMA() { return _C_VAL[7]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new AstaWara(0, 6, "Sri"),
    new AstaWara(1, 5, "Indra"),
    new AstaWara(2, 8, "Guru"),
    new AstaWara(3, 9, "Yama"),
    new AstaWara(4, 3, "Ludra"),
    new AstaWara(5, 7, "Brahma"),
    new AstaWara(6, 1, "Kala"),
    new AstaWara(7, 4, "Uma"),
];
Object.freeze(_C_VAL);
