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

export class EkaJalaRsi {
    private static readonly aValues = Object.freeze([
        Object.freeze(new EkaJalaRsi(0, "Bagna Mapasah")),
        Object.freeze(new EkaJalaRsi(1, "Bahu Putra")),
        Object.freeze(new EkaJalaRsi(2, "Bahu Astawa")),
        Object.freeze(new EkaJalaRsi(3, "Buat Lara")),
        Object.freeze(new EkaJalaRsi(4, "Buat Merang")),
        Object.freeze(new EkaJalaRsi(5, "Buat Sebet")),
        Object.freeze(new EkaJalaRsi(6, "Buat Kingking")),
        Object.freeze(new EkaJalaRsi(7, "Buat Suka")),
        Object.freeze(new EkaJalaRsi(8, "Dahat Kingking")),
        Object.freeze(new EkaJalaRsi(9, "Kameranan")),
        Object.freeze(new EkaJalaRsi(10, "Kamrtaan")),
        Object.freeze(new EkaJalaRsi(11, "Kasobagian")),
        Object.freeze(new EkaJalaRsi(12, "Kinasihan Amrta")),
        Object.freeze(new EkaJalaRsi(13, "Kinasihan Jana")),
        Object.freeze(new EkaJalaRsi(14, "Langgeng Kayohanaan")),
        Object.freeze(new EkaJalaRsi(15, "Luwih Bagia")),
        Object.freeze(new EkaJalaRsi(16, "Manggih Bagia")),
        Object.freeze(new EkaJalaRsi(17, "Manggih Suka")),
        Object.freeze(new EkaJalaRsi(18, "Patining Amrta")),
        Object.freeze(new EkaJalaRsi(19, "Rahayu")),
        Object.freeze(new EkaJalaRsi(20, "Sidha Kasobagian")),
        Object.freeze(new EkaJalaRsi(21, "Subagia")),
        Object.freeze(new EkaJalaRsi(22, "Suka Kapanggih")),
        Object.freeze(new EkaJalaRsi(23, "Suka Pinanggih")),
        Object.freeze(new EkaJalaRsi(24, "Suka Rahayu")),
        Object.freeze(new EkaJalaRsi(25, "Tininggaling Suka")),
        Object.freeze(new EkaJalaRsi(26, "Wredhi Putra")),
        Object.freeze(new EkaJalaRsi(27, "Wredhi Sarwa Mule")),
    ]);

    public static get BAGNA_MAPASAH(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[0]; }
    public static get BAHU_PUTRA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[1]; }
    public static get BUAT_ASTAWA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[2]; }
    public static get BUAT_LARA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[3]; }
    public static get BUAT_MERANG(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[4]; }
    public static get BUAT_SEBET(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[5]; }
    public static get BUAT_KINGKING(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[6]; }
    public static get BUAT_SUKA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[7]; }
    public static get DAHAT_KINGKING(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[8]; }
    public static get KAMERANAN(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[9]; }
    public static get KAMRTAAN(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[10]; }
    public static get KASOBAGIAN(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[11]; }
    public static get KINASIHAN_AMRTA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[12]; }
    public static get KINASIHAN_JANA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[13]; }
    public static get LANGGENG_KAYOHANAAN(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[14]; }
    public static get LUWIH_BAGIA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[15]; }
    public static get MANGGIH_BAGIA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[16]; }
    public static get MANGGIH_SUKA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[17]; }
    public static get PATINING_AMRTA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[18]; }
    public static get RAHAYU(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[19]; }
    public static get SIDHA_KASOBAGIAN(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[20]; }
    public static get SUBAGIA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[21]; }
    public static get SUKA_KAPANGGIH(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[22]; }
    public static get SUKA_PINANGGIH(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[23]; }
    public static get SUKA_RAHAYU(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[24]; }
    public static get TININGGALING_SUKA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[25]; }
    public static get WREDHI_PUTRA(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[26]; }
    public static get WREDHI_SARWA_MULE(): Readonly<EkaJalaRsi> { return EkaJalaRsi.aValues[27]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<EkaJalaRsi>> {
        return EkaJalaRsi.aValues;
    }
}
