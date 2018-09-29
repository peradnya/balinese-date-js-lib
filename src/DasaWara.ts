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
 * Enum that represent DasaWara in Balinese Saka Calendar. The details of DasaWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/dasawara.htm'>DasaWara at
 * babadbali.com</a>.
 */
export class DasaWara {
    static get values() { return _C_VAL; }
    static get PANDITA() { return _C_VAL[0]; }
    static get PATI() { return _C_VAL[1]; }
    static get SUKA() { return _C_VAL[2]; }
    static get DUKA() { return _C_VAL[3]; }
    static get SRI() { return _C_VAL[4]; }
    static get MANUH() { return _C_VAL[5]; }
    static get MANUSA() { return _C_VAL[6]; }
    static get RAJA() { return _C_VAL[7]; }
    static get DEWA() { return _C_VAL[8]; }
    static get RAKSASA() { return _C_VAL[9]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new DasaWara(0, 5, "Pandita"),
    new DasaWara(1, 7, "Pati"),
    new DasaWara(2, 10, "Suka"),
    new DasaWara(3, 4, "Duka"),
    new DasaWara(4, 6, "Sri"),
    new DasaWara(5, 2, "Manuh"),
    new DasaWara(6, 3, "Manusa"),
    new DasaWara(7, 8, "Raja"),
    new DasaWara(8, 9, "Dewa"),
    new DasaWara(9, 1, "Raksasa"),
];
Object.freeze(_C_VAL);
