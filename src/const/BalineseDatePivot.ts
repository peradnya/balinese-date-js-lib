import moment from 'moment';
import { Sasih } from './Sasih';

export class BalineseDatePivot {
    public static readonly PIVOT_NG_PON = new BalineseDatePivot(1971, 0, 27, 3, 0, 0, 1892, Sasih.KAPITU, false);
    public static readonly PIVOT_NG_PAING = new BalineseDatePivot(2000, 0, 18, 86, 12, 0, 1921, Sasih.KAPITU, false);

    public readonly calendar: moment.Moment;

    private constructor(
        private readonly year: number,
        private readonly month: number,
        private readonly dayOfMonth: number,
        public readonly pawukonDayInYear: number,
        public readonly penanggal: number,
        public readonly ngunaratriDay: number,
        public readonly saka: number,
        public readonly sasih: Sasih,
        public readonly isNampihSasih: boolean) {
            this.calendar = moment([year, month, dayOfMonth]);
        }

}
