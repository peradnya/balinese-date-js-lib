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
 * Enum that represent SadWara in Balinese Saka Calendar. The details of SadWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/sadwara.htm'>SadWara at
 * babadbali.com</a>.
 */
export class SadWara {
    static get values() { return _C_VAL; }
    static get TUNGLEH() { return _C_VAL[0]; }
    static get ARYANG() { return _C_VAL[1]; }
    static get URUKUNG() { return _C_VAL[2]; }
    static get PANIRON() { return _C_VAL[3]; }
    static get WAS() { return _C_VAL[4]; }
    static get MAULU() { return _C_VAL[5]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new SadWara(0, 7, "Tungleh"),
    new SadWara(1, 6, "Aryang"),
    new SadWara(2, 5, "Urukung"),
    new SadWara(3, 8, "Paniron"),
    new SadWara(4, 9, "Was"),
    new SadWara(5, 3, "Maulu"),
];
Object.freeze(_C_VAL);
