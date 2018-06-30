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

import * as BalineseDateConst from "./const";

/**
 * BalineseDatePawukon provides representation of Pawukon used by BalineseDate.
 * <p>
 * BalineseDatePawukon provides information about:
 * <ul>
 *  <li>Wuku (Sinta - Watugunung)</li>
 *  <li>Wewaran (Ekawara - Dasawara)</li>
 *  <li>Paringkelan (Ingkel, Jejapan, Watek, Lintang, Pancasuda, Pararasan, Rakam)</li>
 *  <li>Eka Jala Rsi</li>
 * </ul>
 * <p>
 * Calculation of pawukon that used by this class, is based on documentation from :
 * <a href='http://www.babadbali.com/pewarigaan/paringkelan.htm'>babadbali.com</a>.
 * <p>
 * Calculation of Eka Jala Rsi that used by this class, is based on :
 * Ardhana, I.B.S.(2005). "Pokok-Pokok Wariga". Surabaya : Paramita.
 * @author Ida Bagus Putu Peradnya Dinata
 */
export class BalineseDatePawukon {

    private static readonly DAYS_IN_YEAR_PAWUKON = 210;

    private static readonly ejlMap = Object.freeze([
        23, 7, 17, 7, 23, 23, 17,
        9, 7, 13, 26, 24, 23, 20,
        13, 7, 13, 25, 19, 5, 2,
        14, 26, 17, 20, 25, 22, 0,
        10, 5, 15, 23, 7, 17, 23,
        17, 25, 4, 23, 2, 2, 2,
        12, 12, 4, 14, 12, 26, 26,
        1, 23, 23, 15, 25, 15, 5,
        9, 25, 18, 25, 11, 15, 21,
        25, 25, 12, 0, 17, 13, 0,
        15, 23, 12, 7, 16, 25, 18,
        24, 12, 12, 5, 7, 5, 26,
        7, 5, 12, 7, 25, 2, 12,
        25, 25, 14, 15, 26, 7, 12,
        20, 7, 5, 25, 25, 5, 13,
        25, 17, 13, 23, 5, 26, 20,
        25, 25, 23, 7, 18, 18, 17,
        7, 17, 7, 4, 26, 17, 5,
        9, 12, 12, 13, 25, 18, 18,
        5, 2, 25, 25, 2, 25, 17,
        20, 14, 27, 23, 17, 8, 25,
        17, 5, 17, 7, 6, 15, 18,
        25, 2, 7, 13, 25, 20, 7,
        15, 15, 23, 7, 8, 24, 2,
        12, 9, 24, 24, 17, 24, 20,
        7, 12, 12, 14, 18, 25, 20,
        4, 18, 4, 20, 26, 12, 23,
        18, 17, 17, 25, 15, 2, 24,
        3, 2, 23, 25, 18, 25, 20,
        14, 3, 2, 25, 7, 25, 17,
    ]);

    private static calcCaturwaraIdx(pawukonDayInYear: number): number {
        let idx = 0;
        if (pawukonDayInYear <= 70) {
            idx = pawukonDayInYear % 4;
        } else if (pawukonDayInYear === 71 || pawukonDayInYear === 72) {
            idx = BalineseDateConst.Caturwara.JAYA.id;
        } else {
            idx = (pawukonDayInYear - 2) % 4;
        }

        return idx;
    }

    private static calcAstawaraIdx(pawukonDayInYear: number): number {
        let idx = 0;
        if (pawukonDayInYear <= 70) {
            idx = pawukonDayInYear % 8;
        } else if (pawukonDayInYear === 71 || pawukonDayInYear === 72) {
            idx = BalineseDateConst.Astawara.KALA.id;
        } else {
            idx = (pawukonDayInYear - 2) % 8;
        }

        return idx;
    }

    private static calcSangawaraIdx(pawukonDayInYear: number): number {
        let idx = 0;
        if (pawukonDayInYear <= 3) {
            idx = BalineseDateConst.Sangawara.DANGU.id;
        } else {
            idx = (pawukonDayInYear - 3) % 9;
        }

        return idx;
    }

    private readonly nUrip: number;

    private readonly oWuku: Readonly<BalineseDateConst.Wuku>;

    private readonly oEkawara: Readonly<BalineseDateConst.Ekawara>;
    private readonly oDwiwara: Readonly<BalineseDateConst.Dwiwara>;
    private readonly oTriwara: Readonly<BalineseDateConst.Triwara>;
    private readonly oCaturwara: Readonly<BalineseDateConst.Caturwara>;
    private readonly oPancawara: Readonly<BalineseDateConst.Pancawara>;
    private readonly oSadwara: Readonly<BalineseDateConst.Sadwara>;
    private readonly oSaptawara: Readonly<BalineseDateConst.Saptawara>;
    private readonly oAstawara: Readonly<BalineseDateConst.Astawara>;
    private readonly oSangawara: Readonly<BalineseDateConst.Sangawara>;
    private readonly oDasawara: Readonly<BalineseDateConst.Dasawara>;

    private readonly oIngkel: Readonly<BalineseDateConst.Ingkel>;
    private readonly oJejapan: Readonly<BalineseDateConst.Jejapan>;
    private readonly oWatekAlit: Readonly<BalineseDateConst.PawatekanAlit>;
    private readonly oWatekMadya: Readonly<BalineseDateConst.PawatekanMadya>;
    private readonly oLintang: Readonly<BalineseDateConst.Lintang>;
    private readonly oPancasuda: Readonly<BalineseDateConst.Pancasuda>;
    private readonly oPararasan: Readonly<BalineseDateConst.Pararasan>;
    private readonly oRakam: Readonly<BalineseDateConst.Rakam>;
    private readonly oEkaJalaRsi: Readonly<BalineseDateConst.EkaJalaRsi>;

    /**
     * Construct BalineseDate Pawukon.
     * @param nPawukonDay number of day in 1 year (cycle) of pawukon.
     *                          Number is from 0 (Redite Sinta) to 209 (Saniscara Watugunung).
     */
    public constructor(private readonly nPawukonDay: number) {
        if (nPawukonDay >= BalineseDatePawukon.DAYS_IN_YEAR_PAWUKON ||
            nPawukonDay < 0) {
            throw Error("Invalid day in year value. Value need in between 0 - 209.");
        }

        this.oWuku = BalineseDateConst.Wuku.values[Math.floor(nPawukonDay / 7)];

        this.oTriwara = BalineseDateConst.Triwara.values[nPawukonDay % 3];
        this.oPancawara = BalineseDateConst.Pancawara.values[nPawukonDay % 5];
        this.oSadwara = BalineseDateConst.Sadwara.values[nPawukonDay % 6];
        this.oSaptawara = BalineseDateConst.Saptawara.values[nPawukonDay % 7];

        this.nUrip = this.oPancawara.urip + this.oSaptawara.urip;
        this.oEkawara = BalineseDateConst.Ekawara.values[this.nUrip % 2];
        this.oDwiwara = BalineseDateConst.Dwiwara.values[this.nUrip % 2];
        this.oDasawara = BalineseDateConst.Dasawara.values[this.nUrip % 10];

        this.oCaturwara = BalineseDateConst.Caturwara.values[BalineseDatePawukon.calcCaturwaraIdx(nPawukonDay)];
        this.oAstawara = BalineseDateConst.Astawara.values[BalineseDatePawukon.calcAstawaraIdx(nPawukonDay)];
        this.oSangawara = BalineseDateConst.Sangawara.values[BalineseDatePawukon.calcSangawaraIdx(nPawukonDay)];

        this.oIngkel = BalineseDateConst.Ingkel.values[this.oWuku.id % 6];
        this.oJejapan = BalineseDateConst.Jejapan.values[nPawukonDay % 6];
        this.oLintang = BalineseDateConst.Lintang.values[nPawukonDay % 35];

        this.oWatekAlit = BalineseDateConst.PawatekanAlit.values[this.nUrip % 4];
        this.oWatekMadya = BalineseDateConst.PawatekanMadya.values[this.nUrip % 5];
        this.oPararasan = BalineseDateConst.Pararasan.values[this.nUrip % 10];

        this.oPancasuda = BalineseDateConst.Pancasuda.values[(this.oSaptawara.kertaaji + this.oPancawara.urip) % 7];
        this.oRakam = BalineseDateConst.Rakam.values[(this.oSaptawara.kupih + this.oPancawara.kupih) % 6];

        this.oEkaJalaRsi = BalineseDateConst.EkaJalaRsi.values[BalineseDatePawukon.ejlMap[nPawukonDay]];
    }

    public get pawukonDay(): number { return this.nPawukonDay; }
    public get urip(): number { return this.nUrip; }
    public get wuku(): Readonly<BalineseDateConst.Wuku> { return this.oWuku; }

    public get ekawara(): Readonly<BalineseDateConst.Ekawara> { return this.oEkawara; }
    public get dwiwara(): Readonly<BalineseDateConst.Dwiwara> { return this.oDwiwara; }
    public get triwara(): Readonly<BalineseDateConst.Triwara> { return this.oTriwara; }
    public get caturwara(): Readonly<BalineseDateConst.Caturwara> { return this.oCaturwara; }
    public get pancawara(): Readonly<BalineseDateConst.Pancawara> { return this.oPancawara; }
    public get sadwara(): Readonly<BalineseDateConst.Sadwara> { return this.oSadwara; }
    public get saptawara(): Readonly<BalineseDateConst.Saptawara> { return this.oSaptawara; }
    public get astawara(): Readonly<BalineseDateConst.Astawara> { return this.oAstawara; }
    public get sangawara(): Readonly<BalineseDateConst.Sangawara> { return this.oSangawara; }
    public get dasawara(): Readonly<BalineseDateConst.Dasawara> { return this.oDasawara; }

    public get ingkel(): Readonly<BalineseDateConst.Ingkel> { return this.oIngkel; }
    public get jejapan(): Readonly<BalineseDateConst.Jejapan> { return this.oJejapan; }
    public get watekAlit(): Readonly<BalineseDateConst.PawatekanAlit> { return this.oWatekAlit; }
    public get watekMadya(): Readonly<BalineseDateConst.PawatekanMadya> { return this.oWatekMadya; }
    public get lintang(): Readonly<BalineseDateConst.Lintang> { return this.oLintang; }
    public get pancasuda(): Readonly<BalineseDateConst.Pancasuda> { return this.oPancasuda; }
    public get pararasan(): Readonly<BalineseDateConst.Pararasan> { return this.oPararasan; }
    public get rakam(): Readonly<BalineseDateConst.Rakam> { return this.oRakam; }

    public get ekaJalaRsi(): Readonly<BalineseDateConst.EkaJalaRsi> { return this.oEkaJalaRsi; }
}
