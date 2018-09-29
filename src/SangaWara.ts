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
 * Enum that represent SangaWara in Balinese Saka Calendar. The details of SangaWara
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/sangawara.htm'>SangaWara at
 * babadbali.com</a>.
 */
export class SangaWara {
    static get values() { return _C_VAL; }
    static get DANGU() { return _C_VAL[0]; }
    static get JANGUR() { return _C_VAL[1]; }
    static get GIGIS() { return _C_VAL[2]; }
    static get NOHAN() { return _C_VAL[3]; }
    static get OGAN() { return _C_VAL[4]; }
    static get ERANGAN() { return _C_VAL[5]; }
    static get URUNGAN() { return _C_VAL[6]; }
    static get TULUS() { return _C_VAL[7]; }
    static get DADI() { return _C_VAL[8]; }

    constructor(public readonly id: number, public readonly urip: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new SangaWara(0, 5, "Dangu"),
    new SangaWara(1, 8, "Jangur"),
    new SangaWara(2, 9, "Gigis"),
    new SangaWara(3, 3, "Nohan"),
    new SangaWara(4, 7, "Ogan"),
    new SangaWara(5, 1, "Erangan"),
    new SangaWara(6, 4, "Urungan"),
    new SangaWara(7, 6, "Tulus"),
    new SangaWara(8, 8, "Dadi"),
];
Object.freeze(_C_VAL);
