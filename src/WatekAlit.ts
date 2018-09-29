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
 * Enum that represent WatekAlit in Balinese Saka Calendar. The details of WatekAlit
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/watek.htm'>WatekAlit at babadbali.com</a>.
 */
export class WatekAlit {
    /** Return the list of WatekAlit */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get LINTAH() { return _C_VAL[0]; }
    /** Id: 1 */
    static get ULER() { return _C_VAL[1]; }
    /** Id: 2 */
    static get GAJAH() { return _C_VAL[2]; }
    /** Id: 3 */
    static get LEMBU() { return _C_VAL[3]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new WatekAlit(0, "Lintah"),
    new WatekAlit(1, "Uler"),
    new WatekAlit(2, "Gajah"),
    new WatekAlit(3, "Lembu"),
];
Object.freeze(_C_VAL);
