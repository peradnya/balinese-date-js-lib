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

export class BalineseDatePawukon {

    private static readonly DAYS_IN_YEAR_PAWUKON = 210;

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

    public constructor(private readonly nPawukonDayInYear: number) {
        if (nPawukonDayInYear >= BalineseDatePawukon.DAYS_IN_YEAR_PAWUKON ||
            nPawukonDayInYear < 0) {
            throw Error("Invalid day in year value. Value need in between 0 - 209.");
        }

        this.oWuku = BalineseDateConst.Wuku.values[Math.floor(nPawukonDayInYear / 7)];

        this.oTriwara = BalineseDateConst.Triwara.values[nPawukonDayInYear % 3];
        this.oPancawara = BalineseDateConst.Pancawara.values[nPawukonDayInYear % 5];
        this.oSadwara = BalineseDateConst.Sadwara.values[nPawukonDayInYear % 6];
        this.oSaptawara = BalineseDateConst.Saptawara.values[nPawukonDayInYear % 7];

        this.nUrip = this.oPancawara.urip + this.oSaptawara.urip;
        this.oEkawara = BalineseDateConst.Ekawara.values[this.nUrip % 2];
        this.oDwiwara = BalineseDateConst.Dwiwara.values[this.nUrip % 2];
        this.oDasawara = BalineseDateConst.Dasawara.values[this.nUrip % 10];

        this.oCaturwara = BalineseDateConst.Caturwara.values[BalineseDatePawukon.calcCaturwaraIdx(nPawukonDayInYear)];
        this.oAstawara = BalineseDateConst.Astawara.values[BalineseDatePawukon.calcAstawaraIdx(nPawukonDayInYear)];
        this.oSangawara = BalineseDateConst.Sangawara.values[BalineseDatePawukon.calcSangawaraIdx(nPawukonDayInYear)];

        this.oIngkel = BalineseDateConst.Ingkel.values[this.oWuku.id % 6];
        this.oJejapan = BalineseDateConst.Jejapan.values[nPawukonDayInYear % 6];
        this.oLintang = BalineseDateConst.Lintang.values[nPawukonDayInYear % 35];

        this.oWatekAlit = BalineseDateConst.PawatekanAlit.values[this.nUrip % 4];
        this.oWatekMadya = BalineseDateConst.PawatekanMadya.values[this.nUrip % 5];
        this.oPararasan = BalineseDateConst.Pararasan.values[this.nUrip % 10];

        this.oPancasuda = BalineseDateConst.Pancasuda.values[(this.oSaptawara.kertaaji + this.oPancawara.urip) % 7];
        this.oRakam = BalineseDateConst.Rakam.values[(this.oSaptawara.kupih + this.oPancawara.kupih) % 6];
    }

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

}
