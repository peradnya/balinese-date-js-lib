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
    /** Return the list of Sasih */
    static get values() { return _C_VAL; }
    /** Id: 0, Normal Sasih, Reference: KASA */
    static get KASA() { return _C_VAL[0]; }
    /** Id: 1, Normal Sasih, Reference: KARO */
    static get KARO() { return _C_VAL[1]; }
    /** Id: 2, Normal Sasih, Reference: KATIGA */
    static get KATIGA() { return _C_VAL[2]; }
    /** Id: 3, Normal Sasih, Reference: KAPAT */
    static get KAPAT() { return _C_VAL[3]; }
    /** Id: 4, Normal Sasih, Reference: KALIMA */
    static get KALIMA() { return _C_VAL[4]; }
    /** Id: 5, Normal Sasih, Reference: KANEM */
    static get KANEM() { return _C_VAL[5]; }
    /** Id: 6, Normal Sasih, Reference: KAPITU */
    static get KAPITU() { return _C_VAL[6]; }
    /** Id: 7, Normal Sasih, Reference: KAWOLU */
    static get KAWOLU() { return _C_VAL[7]; }
    /** Id: 8, Normal Sasih, Reference: KASANGA */
    static get KASANGA() { return _C_VAL[8]; }
    /** Id: 9, Normal Sasih, Reference: KADASA */
    static get KADASA() { return _C_VAL[9]; }
    /** Id: 10, Normal Sasih, Reference: DESTHA */
    static get DESTHA() { return _C_VAL[10]; }
    /** Id: 11, Normal Sasih, Reference: SADHA */
    static get SADHA() { return _C_VAL[11]; }
    /** Id: 12, Mala Sasih, Reference: DESTHA */
    static get MALA_DESTHA() { return _C_VAL[12]; }
    /** Id: 13, Mala Sasih, Reference: SADHA */
    static get MALA_SADHA() { return _C_VAL[13]; }
    /** Id: 14, Mala Sasih, Reference: DESTHA */
    static get NAMPIH_DESTHA() { return _C_VAL[14]; }
    /** Id: 15, Nampih Sasih, Reference: KATIGA */
    static get NAMPIH_KATIGA() { return _C_VAL[15]; }
    /** Id: 16, Nampih Sasih, Reference: KASA */
    static get NAMPIH_KASA() { return _C_VAL[16]; }
    /** Id: 17, Nampih Sasih, Reference: KADASA */
    static get NAMPIH_KADASA() { return _C_VAL[17]; }
    /** Id: 18, Nampih Sasih, Reference: KARO */
    static get NAMPIH_KARO() { return _C_VAL[18]; }
    /** Id: 19, Nampih Sasih, Reference: SADHA */
    static get NAMPIH_SADHA() { return _C_VAL[19]; }

    constructor(public readonly id: number, public readonly refId: number, public readonly name: string) {
        Object.freeze(this);
    }

    /**
     * Returns the reference of Sasih. This method is useful to get the normal Sasih
     * from Mala/Nampih Sasih.
     */
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
