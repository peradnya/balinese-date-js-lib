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
 * Enum that represent SasihDayInfo in Balinese Saka Calendar. The details of SasihDayInfo
 * available at: <u>Ardhana, I.B.S. (2005). "Pokok-Pokok Wariga".
 * Surabaya : Paramita.</u>
 */
export class SasihDayInfo {
    /** Return the list of SasihDayInfo */
    static get values() { return _C_VAL; }
    /** Id: 0, Penanggal: 1-14, Reference: PENANGGAL */
    static get PENANGGAL() { return _C_VAL[0]; }
    /** Id: 1, Pangelong: 1-14, Reference: PANGELONG */
    static get PANGELONG() { return _C_VAL[1]; }
    /** Id: 2, Penanggal: 15, Reference: PENANGGAL */
    static get PURNAMA() { return _C_VAL[2]; }
    /** Id: 3, Pangelong: 15, Reference: PANGELONG */
    static get TILEM() { return _C_VAL[3]; }

    constructor(public readonly id: number, public readonly refId: number, public readonly name: string) {
        Object.freeze(this);
    }

    /**
     * Returns the reference of SasihDayInfo. this method is useful to get reference
     * of PURNAMA and TILEM.
     */
    get reference() { return _C_VAL[this.refId]; }

}

/** @hidden */
const _C_VAL = [
    new SasihDayInfo(0, 0, "Penanggal"),
    new SasihDayInfo(1, 1, "Pangelong"),
    new SasihDayInfo(2, 0, "Purnama"),
    new SasihDayInfo(3, 1, "Tilem"),
];
Object.freeze(_C_VAL);
