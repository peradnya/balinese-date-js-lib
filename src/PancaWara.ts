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
 * Enum that represent PancaWara in Balinese Saka Calendar. The details of PancaWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/pancawara.htm'>PancaWara at
 * babadbali.com</a>.
 */
export class PancaWara {
    /** Return the list of PancaWara */
    static get values() { return _C_VAL; }
    /** Id: 0, Urip: 9, Kupih: 3 */
    static get PAING() { return _C_VAL[0]; }
    /** Id: 1, Urip: 7, Kupih: 4 */
    static get PON() { return _C_VAL[1]; }
    /** Id: 2, Urip: 4, Kupih: 5 */
    static get WAGE() { return _C_VAL[2]; }
    /** Id: 3, Urip: 8, Kupih: 1 */
    static get KLIWON() { return _C_VAL[3]; }
    /** Id: 4, Urip: 5, Kupih: 2 */
    static get UMANIS() { return _C_VAL[4]; }

    constructor(public readonly id: number,
                public readonly urip: number,
                public readonly kupih: number,
                public readonly name: string) {
                    Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new PancaWara(0, 9, 3, "Paing"),
    new PancaWara(1, 7, 4, "Pon"),
    new PancaWara(2, 4, 5, "Wage"),
    new PancaWara(3, 8, 1, "Kliwon"),
    new PancaWara(4, 5, 2, "Umanis"),
];
Object.freeze(_C_VAL);
