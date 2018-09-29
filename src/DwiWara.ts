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
 * Enum that represent DwiWara in Balinese Saka Calendar. The details of DwiWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/dwiwara.htm'>DwiWara at
 * babadbali.com</a>.
 */
export class DwiWara {
    /** Return the list of DwiWara */
    static get values() { return _C_VAL; }
    /** Id: 0, Urip: 5 */
    static get MENGA() { return _C_VAL[0]; }
    /** Id: 1, Urip: 4 */
    static get PEPET() { return _C_VAL[1]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new DwiWara(0, 5, "Menga"),
    new DwiWara(1, 4, "Pepet"),
];
Object.freeze(_C_VAL);
