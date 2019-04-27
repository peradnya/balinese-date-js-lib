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
 * Enum that represent Rahinan in Balinese Saka Calendar. The details of Rahinan
 * available at: <u>Ardhana, I.B.S. (2005). "Pokok-Pokok Wariga".
 * Surabaya : Paramita.</u>
 */
export class Rahinan {
    /** Return the list of Rahinan */
    static get values() { return _C_VAL; }
    /** Id: 0 */
    static get SOMA_RIBEK() { return _C_VAL[0]; }
    /** Id: 1 */
    static get SABUH_EMAS() { return _C_VAL[1]; }
    /** Id: 2 */
    static get PAGER_WESI() { return _C_VAL[2]; }
    /** Id: 3 */
    static get TUMPEK_LANDEP() { return _C_VAL[3]; }
    /** Id: 4 */
    static get TUMPEK_UDUH() { return _C_VAL[4]; }
    /** Id: 5 */
    static get SUGIHAN_JAWA() { return _C_VAL[5]; }
    /** Id: 6 */
    static get SUGIHAN_BALI() { return _C_VAL[6]; }
    /** Id: 7 */
    static get PENYEKEBAN_GALUNGAN() { return _C_VAL[7]; }
    /** Id: 8 */
    static get PENYAJAN_GALUNGAN() { return _C_VAL[8]; }
    /** Id: 9 */
    static get PENAMPAHAN_GALUNGAN() { return _C_VAL[9]; }
    /** Id: 10 */
    static get GALUNGAN() { return _C_VAL[10]; }
    /** Id: 11 */
    static get MANIS_GALUNGAN() { return _C_VAL[11]; }
    /** Id: 12 */
    static get PEMARIDAN_GURU() { return _C_VAL[12]; }
    /** Id: 13 */
    static get ULIHAN() { return _C_VAL[13]; }
    /** Id: 14 */
    static get PEMACEKAN_AGUNG() { return _C_VAL[14]; }
    /** Id: 15 */
    static get PENAMPAHAN_KUNINGAN() { return _C_VAL[15]; }
    /** Id: 16 */
    static get KUNINGAN() { return _C_VAL[16]; }
    /** Id: 17 */
    static get PEGAT_UWAKAN() { return _C_VAL[17]; }
    /** Id: 18 */
    static get TUMPEK_KANDANG() { return _C_VAL[18]; }
    /** Id: 19 */
    static get TUMPEK_WAYANG() { return _C_VAL[19]; }
    /** Id: 20 */
    static get SARASWATI() { return _C_VAL[20]; }
    /** Id: 21 */
    static get BANYU_PINARUH() { return _C_VAL[21]; }
    /** Id: 22 */
    static get SIWA_RATRI() { return _C_VAL[22]; }
    /** Id: 23 */
    static get TAWUR_AGUNG_KASANGA() { return _C_VAL[23]; }
    /** Id: 24 */
    static get NYEPI() { return _C_VAL[24]; }
    /** Id: 25 */
    static get NGEMBAK_GENI() { return _C_VAL[25]; }
    /** Id: 26 */
    static get BUDA_CEMENG() { return _C_VAL[26]; }
    /** Id: 27 */
    static get ANGGARA_KASIH() { return _C_VAL[27]; }
    /** Id: 28 */
    static get KAJENG_KLIWON() { return _C_VAL[28]; }
    /** Id: 29 */
    static get PURNAMA() { return _C_VAL[29]; }
    /** Id: 30 */
    static get TILEM() { return _C_VAL[30]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Rahinan(0, "Soma Ribek"),
    new Rahinan(1, "Sabuh Emas"),
    new Rahinan(2, "Pager Wesi"),
    new Rahinan(3, "Tumpek Landep"),
    new Rahinan(4, "Tumpek Uduh"),
    new Rahinan(5, "Sugihan Jawa"),
    new Rahinan(6, "Sugihan Bali"),
    new Rahinan(7, "Penyekeban Galungan"),
    new Rahinan(8, "Penyajan Galungan"),
    new Rahinan(9, "Penampahan Galungan"),
    new Rahinan(10, "Galungan"),
    new Rahinan(11, "Manis Galungan"),
    new Rahinan(12, "Pemaridan Guru"),
    new Rahinan(13, "Ulihan"),
    new Rahinan(14, "Pemacekan Agung"),
    new Rahinan(15, "Penampahan Kuningan"),
    new Rahinan(16, "Kuningan"),
    new Rahinan(17, "Pegat Uwakan"),
    new Rahinan(18, "Tumpek Kandang"),
    new Rahinan(19, "Tumpek Wayang"),
    new Rahinan(20, "Saraswati"),
    new Rahinan(21, "Banyu Pinaruh"),
    new Rahinan(22, "Siwa Ratri"),
    new Rahinan(23, "Tawur Agung Kasanga"),
    new Rahinan(24, "Nyepi"),
    new Rahinan(25, "Ngembak Geni"),
    new Rahinan(26, "Buda Cemeng"),
    new Rahinan(27, "Anggara Kasih"),
    new Rahinan(28, "Kajeng Kliwon"),
    new Rahinan(29, "Purnama"),
    new Rahinan(30, "Tilem"),
];
Object.freeze(_C_VAL);
