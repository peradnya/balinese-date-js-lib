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
 * Enum that represent PancaSuda in Balinese Saka Calendar. The details of PancaSuda
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/pancasuda.htm'>PancaSuda at babadbali.com</a>.
 */
export class PancaSuda {
    /** Return the list of PancaSuda */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get LEBU_KATIUB_ANGIN() { return _C_VAL[0]; }
    /** Id: 1 */
    static get WISESA_SEGARA() { return _C_VAL[1]; }
    /** Id: 2 */
    static get TUNGGAK_SEMI() { return _C_VAL[2]; }
    /** Id: 3 */
    static get SATRIA_WIBAWA() { return _C_VAL[3]; }
    /** Id: 4 */
    static get SUMUR_SINABA() { return _C_VAL[4]; }
    /** Id: 5 */
    static get SATRIA_WIRANG() { return _C_VAL[5]; }
    /** Id: 6 */
    static get BUMI_KAPETAK() { return _C_VAL[6]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new PancaSuda(0, "Lebu Katiup Angin"),
    new PancaSuda(1, "Wisesa Segara"),
    new PancaSuda(2, "Tunggak Semi"),
    new PancaSuda(3, "Satria Wibawa"),
    new PancaSuda(4, "Sumur Sinaba"),
    new PancaSuda(5, "Satria Wirang"),
    new PancaSuda(6, "Bumi Kapetak"),
];
Object.freeze(_C_VAL);
