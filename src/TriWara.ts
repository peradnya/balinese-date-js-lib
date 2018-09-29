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
 * Enum that represent TriWara in Balinese Saka Calendar. The details of TriWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/triwara.htm'>TriWara at
 * babadbali.com</a>.
 */
export class TriWara {
    static get values() { return _C_VAL; }
    static get PASAH() { return _C_VAL[0]; }
    static get BETENG() { return _C_VAL[1]; }
    static get KAJENG() { return _C_VAL[2]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new TriWara(0, 9, "Pasah"),
    new TriWara(1, 4, "Beteng"),
    new TriWara(2, 7, "Kajeng"),
];
Object.freeze(_C_VAL);
