import moment from "moment";
import { Sasih } from "./Sasih";

export class BalineseDatePivot {
    private static readonly aValues = Object.freeze([
        Object.freeze(new BalineseDatePivot(1971, 0, 27, 3, 0, 0, 1892, Sasih.KAPITU, false)),
        Object.freeze(new BalineseDatePivot(2000, 0, 18, 86, 12, 0, 1921, Sasih.KAPITU, false)),
    ]);

    public static get PIVOT_NG_PON(): Readonly<BalineseDatePivot> { return BalineseDatePivot.aValues[0]; }
    public static get PIVOT_NG_PAING(): Readonly<BalineseDatePivot> { return BalineseDatePivot.aValues[1]; }

    private readonly mCalendar: moment.Moment;

    private constructor(
        private readonly nYear: number,
        private readonly nMonth: number,
        private readonly nDayOfMonth: number,
        private readonly nPawukonDayInYear: number,
        private readonly nPenanggal: number,
        private readonly nNgunaratriDay: number,
        private readonly nSaka: number,
        private readonly oSasih: Readonly<Sasih>,
        private readonly bIsNampihSasih: boolean) {
            this.mCalendar = Object.freeze(moment([nYear, nMonth, nDayOfMonth]));
        }

    public get calendar(): moment.Moment {
        return this.mCalendar;
    }

    public get pawukonDayInYear(): number {
        return this.nPawukonDayInYear;
    }

    public get penanggal(): number {
        return this.nPenanggal;
    }

    public get ngunaratriDay(): number {
        return this.nNgunaratriDay;
    }

    public get saka(): number {
        return this.nSaka;
    }

    public get sasih(): Readonly<Sasih> {
        return this.oSasih;
    }

    public get isNampihSasih(): boolean {
        return this.bIsNampihSasih;
    }
}
