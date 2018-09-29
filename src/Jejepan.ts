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
 * Enum that represent Jejepan in Balinese Saka Calendar. The details of Jejepan
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/jejepan.htm'>Jejepan at babadbali.com</a>.
 */
export class Jejepan {
    /** Return the list of Jejepan */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get MINA() { return _C_VAL[0]; }
    /** Id: 1 */
    static get TARU() { return _C_VAL[1]; }
    /** Id: 2 */
    static get SATO() { return _C_VAL[2]; }
    /** Id: 3 */
    static get PATRA() { return _C_VAL[3]; }
    /** Id: 4 */
    static get WONG() { return _C_VAL[4]; }
    /** Id: 5 */
    static get PAKSI() { return _C_VAL[5]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Jejepan(0, "Mina"),
    new Jejepan(1, "Taru"),
    new Jejepan(2, "Sato"),
    new Jejepan(3, "Patra"),
    new Jejepan(4, "Wong"),
    new Jejepan(5, "Paksi"),
];
Object.freeze(_C_VAL);
