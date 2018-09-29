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
 * Enum that represent EkaJalaRsi in Balinese Saka Calendar. The details of EkaJalaRsi
 * available at: <u>Ardhana, I.B.S. (2005). "Pokok-Pokok Wariga".
 * Surabaya : Paramita.</u>
 */
export class EkaJalaRsi {
    static get values() { return _C_VAL; }
    static get BAGNA_MAPASAH() { return _C_VAL[0]; }
    static get BAHU_PUTRA() { return _C_VAL[1]; }
    static get BUAT_ASTAWA() { return _C_VAL[2]; }
    static get BUAT_KINGKING() { return _C_VAL[3]; }
    static get BUAT_LARA() { return _C_VAL[4]; }
    static get BUAT_MERANG() { return _C_VAL[5]; }
    static get BUAT_SEBET() { return _C_VAL[6]; }
    static get BUAT_SUKA() { return _C_VAL[7]; }
    static get DAHAT_KINGKING() { return _C_VAL[8]; }
    static get KAMERANAN() { return _C_VAL[9]; }
    static get KAMERTAAN() { return _C_VAL[10]; }
    static get KASOBAGIAN() { return _C_VAL[11]; }
    static get KINASIHAN_AMERTA() { return _C_VAL[12]; }
    static get KINASIHAN_JANA() { return _C_VAL[13]; }
    static get LANGGENG_KAYOHANAAN() { return _C_VAL[14]; }
    static get LUWIH_BAGIA() { return _C_VAL[15]; }
    static get MANGGIH_BAGIA() { return _C_VAL[16]; }
    static get MANGGIH_SUKA() { return _C_VAL[17]; }
    static get PATINING_AMERTA() { return _C_VAL[18]; }
    static get RAHAYU() { return _C_VAL[19]; }
    static get SIDHA_KASOBAGIAN() { return _C_VAL[20]; }
    static get SUBAGIA() { return _C_VAL[21]; }
    static get SUKA_KAPANGGIH() { return _C_VAL[22]; }
    static get SUKA_PINANGGIH() { return _C_VAL[23]; }
    static get SUKA_RAHAYU() { return _C_VAL[24]; }
    static get TININGGALING_SUKA() { return _C_VAL[25]; }
    static get WERDHI_PUTRA() { return _C_VAL[26]; }
    static get WERDHI_SARWA_MULE() { return _C_VAL[27]; }

    constructor(public readonly id: number, public readonly name: string) {
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new EkaJalaRsi(0, "Bagna Mapasah"),
    new EkaJalaRsi(1, "Bahu Putra"),
    new EkaJalaRsi(2, "Bahu Astawa"),
    new EkaJalaRsi(3, "Buat Kingking"),
    new EkaJalaRsi(4, "Buat Lara"),
    new EkaJalaRsi(5, "Buat Merang"),
    new EkaJalaRsi(6, "Buat Sebet"),
    new EkaJalaRsi(7, "Buat Suka"),
    new EkaJalaRsi(8, "Dahat Kingking"),
    new EkaJalaRsi(9, "Kameranan"),
    new EkaJalaRsi(10, "Kamertaan"),
    new EkaJalaRsi(11, "Kasobagian"),
    new EkaJalaRsi(12, "Kinasihan Amerta"),
    new EkaJalaRsi(13, "Kinasihan Jana"),
    new EkaJalaRsi(14, "Langgeng Kayohanaan"),
    new EkaJalaRsi(15, "Luwih Bagia"),
    new EkaJalaRsi(16, "Manggih Bagia"),
    new EkaJalaRsi(17, "Manggih Suka"),
    new EkaJalaRsi(18, "Patining Amerta"),
    new EkaJalaRsi(19, "Rahayu"),
    new EkaJalaRsi(20, "Sidha Kasobagian"),
    new EkaJalaRsi(21, "Subagia"),
    new EkaJalaRsi(22, "Suka Kapanggih"),
    new EkaJalaRsi(23, "Suka Pinanggih"),
    new EkaJalaRsi(24, "Suka Rahayu"),
    new EkaJalaRsi(25, "Tininggaling Suka"),
    new EkaJalaRsi(26, "Werdhi Putra"),
    new EkaJalaRsi(27, "Werdhi Sarwa Mule"),
];
Object.freeze(_C_VAL);
