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
 * Enum that represent PratithiSamutPada in Balinese Saka Calendar. The details of PratithiSamutPada
 * available at: <u>Ardhana, I.B.S. (2005). "Pokok-Pokok Wariga".
 * Surabaya : Paramita.</u>
 */
export class PratithiSamutPada {
    /** Return the list of PratithiSamutPada */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get TRESNA() { return _C_VAL[0]; }
    /** Id: 1 */
    static get UPADANA() { return _C_VAL[1]; }
    /** Id: 2 */
    static get BHAWA() { return _C_VAL[2]; }
    /** Id: 3 */
    static get JATI() { return _C_VAL[3]; }
    /** Id: 4 */
    static get JARAMARANA() { return _C_VAL[4]; }
    /** Id: 5 */
    static get AWIDYA() { return _C_VAL[5]; }
    /** Id: 6 */
    static get SASKARA() { return _C_VAL[6]; }
    /** Id: 7 */
    static get WIDNYANA() { return _C_VAL[7]; }
    /** Id: 8 */
    static get NAMARUPA() { return _C_VAL[8]; }
    /** Id: 9 */
    static get SADAYATANA() { return _C_VAL[9]; }
    /** Id: 10 */
    static get SEPARSA() { return _C_VAL[10]; }
    /** Id: 11 */
    static get WEDANA() { return _C_VAL[11]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new PratithiSamutPada(0, "Tresna"),
    new PratithiSamutPada(1, "Upadana"),
    new PratithiSamutPada(2, "Bhawa"),
    new PratithiSamutPada(3, "Jati"),
    new PratithiSamutPada(4, "Jaramarana"),
    new PratithiSamutPada(5, "Awidya"),
    new PratithiSamutPada(6, "Saskara"),
    new PratithiSamutPada(7, "Widnyana"),
    new PratithiSamutPada(8, "Namarupa"),
    new PratithiSamutPada(9, "Sadayatana"),
    new PratithiSamutPada(10, "Separsa"),
    new PratithiSamutPada(11, "Wedana"),
];
Object.freeze(_C_VAL);
