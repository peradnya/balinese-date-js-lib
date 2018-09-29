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
 * Enum that represent Sasih in Balinese Saka Calendar. The details of Sasih
 * available at: <u>Ardhana, I.B.S. (2005). "Pokok-Pokok Wariga".
 * Surabaya : Paramita.</u>
 */
export class Sasih {
    static get values() { return _C_VAL; }
    static get KASA() { return _C_VAL[0]; }
    static get KARO() { return _C_VAL[1]; }
    static get KATIGA() { return _C_VAL[2]; }
    static get KAPAT() { return _C_VAL[3]; }
    static get KALIMA() { return _C_VAL[4]; }
    static get KANEM() { return _C_VAL[5]; }
    static get KAPITU() { return _C_VAL[6]; }
    static get KAWOLU() { return _C_VAL[7]; }
    static get KASANGA() { return _C_VAL[8]; }
    static get KADASA() { return _C_VAL[9]; }
    static get DESTHA() { return _C_VAL[10]; }
    static get SADHA() { return _C_VAL[11]; }
    static get MALA_DESTHA() { return _C_VAL[12]; }
    static get MALA_SADHA() { return _C_VAL[13]; }
    static get NAMPIH_DESTHA() { return _C_VAL[14]; }
    static get NAMPIH_KATIGA() { return _C_VAL[15]; }
    static get NAMPIH_KASA() { return _C_VAL[16]; }
    static get NAMPIH_KADASA() { return _C_VAL[17]; }
    static get NAMPIH_KARO() { return _C_VAL[18]; }
    static get NAMPIH_SADHA() { return _C_VAL[19]; }

    constructor(public readonly id: number, public readonly refId: number, public readonly name: string) {
        Object.freeze(this);
    }

    get reference() { return _C_VAL[this.refId]; }
}

/** @hidden */
const _C_VAL = [
    new Sasih(0, 0, "Kasa"),
    new Sasih(1, 1, "Karo"),
    new Sasih(2, 2, "Katiga"),
    new Sasih(3, 3, "Kapat"),
    new Sasih(4, 4, "Kalima"),
    new Sasih(5, 5, "Kanem"),
    new Sasih(6, 6, "Kapitu"),
    new Sasih(7, 7, "Kawolu"),
    new Sasih(8, 8, "Kasanga"),
    new Sasih(9, 9, "Kadasa"),
    new Sasih(10, 10, "Destha"),
    new Sasih(11, 11, "Sadha"),
    new Sasih(12, 10, "Mala Destha"),
    new Sasih(13, 11, "Mala Sadha"),
    new Sasih(14, 10, "Nampih Destha"),
    new Sasih(15, 2, "Nampih Katiga"),
    new Sasih(16, 0, "Nampih Kasa"),
    new Sasih(17, 9, "Nampih Kadasa"),
    new Sasih(18, 1, "Nampih Karo"),
    new Sasih(19, 11, "Nampih Sadha"),
];
Object.freeze(_C_VAL);
