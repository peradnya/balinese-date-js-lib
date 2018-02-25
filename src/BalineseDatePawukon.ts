import * as BalineseDateConst from "./const";

export class BalineseDatePawukon {
    private readonly urip: number;

    private readonly wuku: Readonly<BalineseDateConst.Wuku>;

    private readonly ekawara: Readonly<BalineseDateConst.Ekawara>;
    private readonly dwiwara: Readonly<BalineseDateConst.Dwiwara>;
    private readonly triwara: Readonly<BalineseDateConst.Triwara>;
    private readonly caturwara: Readonly<BalineseDateConst.Caturwara>;
    private readonly pancawara: Readonly<BalineseDateConst.Pancawara>;
    private readonly sadwara: Readonly<BalineseDateConst.Sadwara>;
    private readonly saptawara: Readonly<BalineseDateConst.Saptawara>;
    private readonly astawara: Readonly<BalineseDateConst.Astawara>;
    private readonly sangawara: Readonly<BalineseDateConst.Sangawara>;
    private readonly dasawara: Readonly<BalineseDateConst.Dasawara>;

    private readonly ingkel: Readonly<BalineseDateConst.Ingkel>;
    private readonly jejapan: Readonly<BalineseDateConst.Jejapan>;
    private readonly watekAlit: Readonly<BalineseDateConst.PewatekanAlit>;
    private readonly watekMadya: Readonly<BalineseDateConst.PewatekanMadya>;
    private readonly lintang: Readonly<BalineseDateConst.Lintang>;
    private readonly pancasuda: Readonly<BalineseDateConst.Pancasuda>;
    private readonly pararasan: Readonly<BalineseDateConst.Pararasan>;
    private readonly rakam: Readonly<BalineseDateConst.Rakam>;

    public constructor(private readonly pawukonDayInYear: number) {
        if (pawukonDayInYear >= BalineseDateConst.DAYS_IN_YEAR_PAWUKON ||
            pawukonDayInYear < 0) {
            throw Error("Invalid day in year value. Value need in between 0 - 209.");
        }

        this.wuku = BalineseDateConst.Wuku.values[pawukonDayInYear / 7];

        this.triwara = BalineseDateConst.Triwara.values[pawukonDayInYear % 3];
        this.pancawara = BalineseDateConst.Pancawara.values[pawukonDayInYear % 5];
        this.sadwara = BalineseDateConst.Sadwara.values[pawukonDayInYear % 6];
        this.saptawara = BalineseDateConst.Saptawara.values[pawukonDayInYear % 7];

        this.urip = this.pancawara.urip + this.saptawara.urip;
        this.ekawara = BalineseDateConst.Ekawara.values[this.urip % 2];
        this.dwiwara = BalineseDateConst.Dwiwara.values[this.urip % 2];
        this.dasawara = BalineseDateConst.Dasawara.values[this.urip % 10];

        this.caturwara = BalineseDateConst.Caturwara.values[this.calcCaturwaraIdx(pawukonDayInYear)];
        this.astawara = BalineseDateConst.Astawara.values[this.calcAstawaraIdx(pawukonDayInYear)];
        this.sangawara = BalineseDateConst.Sangawara.values[this.calcSangawaraIdx(pawukonDayInYear)];

        this.ingkel = BalineseDateConst.Ingkel.values[this.wuku.id % 6];
        this.jejapan = BalineseDateConst.Jejapan.values[pawukonDayInYear % 6];
        this.lintang = BalineseDateConst.Lintang.values[pawukonDayInYear % 35];

        this.watekAlit = BalineseDateConst.PewatekanAlit.values[this.urip % 4];
        this.watekMadya = BalineseDateConst.PewatekanMadya.values[this.urip % 5];
        this.pararasan = BalineseDateConst.Pararasan.values[this.urip % 10];

        this.pancasuda = BalineseDateConst.Pancasuda.values[(this.saptawara.kertaaji + this.pancawara.urip) % 7];
        this.rakam = BalineseDateConst.Rakam.values[(this.saptawara.kupih + this.pancawara.kupih) % 6];
    }

    private calcCaturwaraIdx(pawukonDayInYear: number): number {
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

    private calcAstawaraIdx(pawukonDayInYear: number): number {
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

    private calcSangawaraIdx(pawukonDayInYear: number): number {
        let idx = 0;
        if (pawukonDayInYear <= 3) {
            idx = BalineseDateConst.Sangawara.DANGU.id;
        } else {
            idx = (pawukonDayInYear - 3) % 9;
        }

        return idx;
    }
}
