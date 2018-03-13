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

import { Sasih } from "./Sasih";

export class BalineseDatePivot {
    private static readonly aValues = Object.freeze([
        Object.freeze(new BalineseDatePivot(1971, 0, 27, 3, 0, 0, 1892, Sasih.KAPITU, false)),
        Object.freeze(new BalineseDatePivot(2000, 0, 18, 86, 12, 0, 1921, Sasih.KAPITU, false)),
    ]);

    public static get PIVOT_NG_PON(): Readonly<BalineseDatePivot> { return BalineseDatePivot.aValues[0]; }
    public static get PIVOT_NG_PAING(): Readonly<BalineseDatePivot> { return BalineseDatePivot.aValues[1]; }

    private readonly mCalendar: Readonly<Date>;

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
            this.mCalendar = Object.freeze(new Date(nYear, nMonth, nDayOfMonth));
        }

    public get calendar(): Readonly<Date> {
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
