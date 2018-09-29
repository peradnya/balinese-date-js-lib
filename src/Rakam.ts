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
 * Enum that represent Rakam in Balinese Saka Calendar. The details of Rakam
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/rakam.htm'>Rakam at babadbali.com</a>.
 */
export class Rakam {
    /** Return the list of Rakam */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get NUJU_PATI() { return _C_VAL[0]; }
    /** Id: 1 */
    static get KALA_TINANTANG() { return _C_VAL[1]; }
    /** Id: 2 */
    static get DEMANG_KANDHURUWAN() { return _C_VAL[2]; }
    /** Id: 3 */
    static get SANGGAR_WARINGIN() { return _C_VAL[3]; }
    /** Id: 4 */
    static get MANTRI_SINAROJA() { return _C_VAL[4]; }
    /** Id: 5 */
    static get MACAN_KATAWAN() { return _C_VAL[5]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Rakam(0, "Nuju Pati"),
    new Rakam(1, "Kala Tinantang"),
    new Rakam(2, "Demang Kandhuruwan"),
    new Rakam(3, "Sanggar Waringin"),
    new Rakam(4, "Mantri Sinaroja"),
    new Rakam(5, "Macan Katawan"),
];
Object.freeze(_C_VAL);
