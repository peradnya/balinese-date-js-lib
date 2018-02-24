import * as BalineseDateConst from './const';

export class BalineseDatePawukon {

    private readonly urip: number;

    private readonly wuku: BalineseDateConst.Wuku;

    private readonly ekawara: BalineseDateConst.Ekawara;
    private readonly dwiwara: BalineseDateConst.Dwiwara;
    private readonly triwara: BalineseDateConst.Triwara;
    private readonly caturwara: BalineseDateConst.Caturwara;
    private readonly pancawara: BalineseDateConst.Pancawara;
    private readonly sadwara: BalineseDateConst.Sadwara;
    private readonly saptawara: BalineseDateConst.Saptawara;
    private readonly astawara: BalineseDateConst.Astawara;
    private readonly sangawara: BalineseDateConst.Sangawara;
    private readonly dasawara: BalineseDateConst.Dasawara;

    private readonly ingkel: BalineseDateConst.Ingkel;
    private readonly jejapan: BalineseDateConst.Jejapan;
    private readonly watekAlit: BalineseDateConst.PewatekanAlit;
    private readonly watekMadya: BalineseDateConst.PewatekanMadya;
    private readonly lintang: BalineseDateConst.Lintang;
    private readonly pancasuda: BalineseDateConst.Pancasuda;
    private readonly pararasan: BalineseDateConst.Pararasan;
    private readonly rakam: BalineseDateConst.Rakam;

    public constructor(private readonly pawukonDayInYear: number) {
        if (pawukonDayInYear >= BalineseDateConst.DAYS_IN_YEAR_PAWUKON ||
            pawukonDayInYear < 0) {
            throw Error('Invalid day in year value. Value need in between 0 - 209.');
        }

        this.wuku = BalineseDateConst.Wuku.lookup[pawukonDayInYear / 7];

        this.triwara = BalineseDateConst.Triwara.lookup[pawukonDayInYear % 3];
        this.pancawara = BalineseDateConst.Pancawara.lookup[pawukonDayInYear % 5];
        this.sadwara = BalineseDateConst.Sadwara.lookup[pawukonDayInYear % 6];
        this.saptawara = BalineseDateConst.Saptawara.lookup[pawukonDayInYear % 7];

        this.urip = this.pancawara.urip + this.saptawara.urip;
        this.ekawara = BalineseDateConst.Ekawara.lookup[this.urip % 2];
        this.dwiwara = BalineseDateConst.Dwiwara.lookup[this.urip % 2];
        this.dasawara = BalineseDateConst.Dasawara.lookup[this.urip % 10];

        this.caturwara = BalineseDateConst.Caturwara.lookup[this.calcCaturwaraIdx(pawukonDayInYear)];
        this.astawara = BalineseDateConst.Astawara.lookup[this.calcAstawaraIdx(pawukonDayInYear)];
        this.sangawara = BalineseDateConst.Sangawara.lookup[this.calcSangawaraIdx(pawukonDayInYear)];

        this.ingkel = BalineseDateConst.Ingkel.lookup[this.wuku.id % 6];
        this.jejapan = BalineseDateConst.Jejapan.lookup[pawukonDayInYear % 6];
        this.lintang = BalineseDateConst.Lintang.lookup[pawukonDayInYear % 35];

        this.watekAlit = BalineseDateConst.PewatekanAlit.lookup[this.urip % 4];
        this.watekMadya = BalineseDateConst.PewatekanMadya.lookup[this.urip % 5];
        this.pararasan = BalineseDateConst.Pararasan.lookup[this.urip % 10];

        this.pancasuda = BalineseDateConst.Pancasuda.lookup[(this.saptawara.kertaaji + this.pancawara.urip) % 7];
        this.rakam = BalineseDateConst.Rakam.lookup[(this.saptawara.kupih + this.pancawara.kupih) % 6];
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
