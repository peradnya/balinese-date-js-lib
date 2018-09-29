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
 * Enum that represent Lintang in Balinese Saka Calendar. The details of Lintang
 * available at: <a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/lintang.htm'>Lintang at babadbali.com</a>.
 */
export class Lintang {
    static get values() { return _C_VAL; }
    static get GAJAH() { return _C_VAL[0]; }
    static get KIRIMAN() { return _C_VAL[1]; }
    static get JUNG_SARAT() { return _C_VAL[2]; }
    static get ATIWA_TIWA() { return _C_VAL[3]; }
    static get SANGKA_TIKEL() { return _C_VAL[4]; }
    static get BUBU_BOLONG() { return _C_VAL[5]; }
    static get SUNGENGE() { return _C_VAL[6]; }
    static get ULUKU() { return _C_VAL[7]; }
    static get PEDATI() { return _C_VAL[8]; }
    static get KUDA() { return _C_VAL[9]; }
    static get GAJAH_MINA() { return _C_VAL[10]; }
    static get BADE() { return _C_VAL[11]; }
    static get MAGELUT() { return _C_VAL[12]; }
    static get PAGELANGAN() { return _C_VAL[13]; }
    static get KALA_SUNGSANG() { return _C_VAL[14]; }
    static get KUKUS() { return _C_VAL[15]; }
    static get ASU() { return _C_VAL[16]; }
    static get KARTIKA() { return _C_VAL[17]; }
    static get NAGA() { return _C_VAL[18]; }
    static get ANGSA_ANGREM() { return _C_VAL[19]; }
    static get PANAH() { return _C_VAL[20]; }
    static get PATREM() { return _C_VAL[21]; }
    static get LEMBU() { return _C_VAL[22]; }
    static get DEPAT() { return _C_VAL[23]; }
    static get TANGIS() { return _C_VAL[24]; }
    static get SALAH_UKUR() { return _C_VAL[25]; }
    static get PERAHU_PEGAT() { return _C_VAL[26]; }
    static get PUWUH_ATARUNG() { return _C_VAL[27]; }
    static get LAWEAN() { return _C_VAL[28]; }
    static get KELAPA() { return _C_VAL[29]; }
    static get YUYU() { return _C_VAL[30]; }
    static get LUMBUNG() { return _C_VAL[31]; }
    static get KUMBA() { return _C_VAL[32]; }
    static get UDANG() { return _C_VAL[33]; }
    static get BEGOONG() { return _C_VAL[34]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Lintang(0, "Gajah"),
    new Lintang(1, "Kiriman"),
    new Lintang(2, "Jung Sarat"),
    new Lintang(3, "Atiwa Tiwa"),
    new Lintang(4, "Sangka Tikel"),
    new Lintang(5, "Bubu Bolong"),
    new Lintang(6, "Sungenge"),
    new Lintang(7, "Uluku"),
    new Lintang(8, "Pedati"),
    new Lintang(9, "Kuda"),
    new Lintang(10, "Gajah Mina"),
    new Lintang(11, "Bade"),
    new Lintang(12, "Magelut"),
    new Lintang(13, "Pagelangan"),
    new Lintang(14, "Kala Sungsang"),
    new Lintang(15, "Kukus"),
    new Lintang(16, "Asu"),
    new Lintang(17, "Kartika"),
    new Lintang(18, "Naga"),
    new Lintang(19, "Angsa Angrem"),
    new Lintang(20, "Panah"),
    new Lintang(21, "Patrem"),
    new Lintang(22, "Lembu"),
    new Lintang(23, "Depat"),
    new Lintang(24, "Tangis"),
    new Lintang(25, "Salah Ukur"),
    new Lintang(26, "Perahu Pegat"),
    new Lintang(27, "Puwuh Atarung"),
    new Lintang(28, "Lawean"),
    new Lintang(29, "Kelapa"),
    new Lintang(30, "Yuyu"),
    new Lintang(31, "Lumbung"),
    new Lintang(32, "Kumba"),
    new Lintang(33, "Udang"),
    new Lintang(34, "Begoong"),
];
Object.freeze(_C_VAL);
