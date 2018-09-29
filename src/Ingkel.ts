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
 * Enum that represent Ingkel in Balinese Saka Calendar. The details of Ingkel
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/ingkel.htm'>Ingkel at babadbali.com</a>.
 */
export class Ingkel {
    static get values() { return _C_VAL; }
    static get WONG() { return _C_VAL[0]; }
    static get SATO() { return _C_VAL[1]; }
    static get MINA() { return _C_VAL[2]; }
    static get MANUK() { return _C_VAL[3]; }
    static get TARU() { return _C_VAL[4]; }
    static get BUKU() { return _C_VAL[5]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Ingkel(0, "Wong"),
    new Ingkel(1, "Sato"),
    new Ingkel(2, "Mina"),
    new Ingkel(3, "Manuk"),
    new Ingkel(4, "Taru"),
    new Ingkel(5, "Buku"),
];
Object.freeze(_C_VAL);
