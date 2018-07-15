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

import add_days from "date-fns/add_days";
import differenceInCalendarDays from "date-fns/difference_in_calendar_days";
import isAfter from "date-fns/is_after";
import isBefore from "date-fns/is_before";
import isEqual from "date-fns/is_equal";

import { BalineseDatePawukon } from "./BalineseDatePawukon";
import { BalineseDatePivot } from "./const/BalineseDatePivot";

import * as BalineseDateConst from "./const";

export * from "./const/index";
export * from "./BalineseDateUtil";

/**
 * BalineseDate provides implementation of Saka Calendar used by Indonesia Hindu's.
 * <p>
 * BalineseDate provides information about:
 * <ul>
 *  <li>Pawukon info: Wewaran, Wuku, Paringkelan, etc.</li>
 *  <li>Sasih info: Sasih Day (1-15), Sasih Day Info (Penanggal, Pangelong, Purnama, Tilem), Sasih Name, etc.</li>
 *  <li>Saka info: Saka Year</li>
 *  <li>Pratithi Samut Pada</li>
 * </ul>
 * <p>
 * Calculation of Pratithi Samut Pada that used by this class, is based on :
 * Ardhana, I.B.S.(2005). "Pokok-Pokok Wariga". Surabaya : Paramita.
 *
 * @author Ida Bagus Putu Peradnya Dinata
 * @see BalineseDatePawukon
 */

export class BalineseDate {

    /**
     * Static method to construct BalineseDate object from Javascript Date
     * @param oDate the Javascript Date Object
     * @returns BalineseDate Object
     */
    public static toBalineseDate(oDate: Date): BalineseDate {
        return new BalineseDate(oDate.getFullYear(), oDate.getMonth(), oDate.getDate());
    }

    private static readonly NGUNARATRI = 63;
    private static readonly DAYS_IN_YEAR_PAWUKON = 210;

    private static readonly DATE_TRANSITION_PON = Object.freeze(new Date(1971, 0, 27));
    private static readonly DATE_TRANSITION_PAING = Object.freeze(new Date(2000, 0, 6));
    private static readonly DATE_TRANSITION_SK_START = Object.freeze(new Date(1993, 0, 24));
    private static readonly DATE_TRANSITION_SK_FINISH = Object.freeze(new Date(2003, 0, 3));

    private static mod(a: number, b: number): number {
        // try to fix negative mod
        return ((a % b) + b) % b;
    }

    private static chooseBestPivot(calendar: Readonly<Date>): Readonly<BalineseDatePivot> {
        const a = BalineseDate.DATE_TRANSITION_PAING.getTime();
        const b = calendar.getTime();

        return isBefore(b, a) ?
            BalineseDatePivot.PIVOT_NG_PON :
            BalineseDatePivot.PIVOT_NG_PAING;
    }

    private static calcPawukonDay(
        pivot: Readonly<BalineseDatePivot>,
        calendar: Readonly<Date>): number {

        const a = pivot.calendar.getTime();
        const b = calendar.getTime();

        const diff = differenceInCalendarDays(b, a);
        return BalineseDate.mod(pivot.pawukonDay + diff, BalineseDate.DAYS_IN_YEAR_PAWUKON);
    }

    private static calcSasihDay(
        pivot: Readonly<BalineseDatePivot>,
        calendar: Readonly<Date>): number[] {

        const res = new Array<number>(3);

        const a = pivot.calendar.getTime();
        const b = calendar.getTime();
        const dayDiff = differenceInCalendarDays(b, a);
        const daySkip = Math.ceil(dayDiff / BalineseDate.NGUNARATRI);
        const dayTotal = pivot.sasihDay + dayDiff + daySkip;

        res[0] = BalineseDate.mod(dayTotal, 30);
        res[1] = (res[0] === 0 || res[0] > 15) ? 1 : 0;
        res[2]  = BalineseDate.mod(dayDiff, BalineseDate.NGUNARATRI) === 0 ? 1 : 0;

        res[0] = BalineseDate.mod(res[0], 15);
        res[0] = (res[0] === 0) ? 15 : res[0];

        return res;
    }

    private static calcSasihDayInfo(
        resultSasihDay: number[],
        sasih: Readonly<BalineseDateConst.Sasih>,
        saka: number): Readonly<BalineseDateConst.SasihDayInfo> {

        const date          = resultSasihDay[0];
        const isPangelong   = resultSasihDay[1] === 1;
        const isNgunaRatri  = resultSasihDay[2] === 1;

        if (isPangelong) {
            if (date === 15 || (date === 14 && isNgunaRatri)) {
                return BalineseDateConst.SasihDayInfo.TILEM;
            } else if (date === 14 &&
                        isNgunaRatri === false &&
                        sasih === BalineseDateConst.Sasih.KAPITU &&
                        saka === 1921) {
                return BalineseDateConst.SasihDayInfo.TILEM;
            } else {
                return BalineseDateConst.SasihDayInfo.PANGELONG;
            }
        } else {
            if (date === 15 || (date === 14 && isNgunaRatri)) {
                return BalineseDateConst.SasihDayInfo.PURNAMA;
            } else {
                return BalineseDateConst.SasihDayInfo.PENANGGAL;
            }
        }
    }

    private static calcSasih(
        pivot: Readonly<BalineseDatePivot>,
        calendar: Readonly<Date>): number[] {

        const res = new Array<number>(3);

        const a = pivot.calendar.getTime();
        const b = calendar.getTime();
        const dayDiff = differenceInCalendarDays(b, a);
        const daySkip = Math.ceil(dayDiff / BalineseDate.NGUNARATRI);
        const dayTotal = pivot.sasihDay + dayDiff + daySkip;

        const pivotOffset = pivot.sasihDay === 0 && pivot.ngunaRatriDay === 0 ? 0 : 1;

        let totalSasih = Math.ceil(dayTotal / 30) - pivotOffset;
        let currentSasih = pivot.sasih.id;
        let currentSaka = pivot.saka - (currentSasih === BalineseDateConst.Sasih.KADASA.id ? 1 : 0);
        let nampihCount = pivot.isNampihSasih ? 1 : 0;

        let nyepiFix = false;
        let inSK = false;

        const tStart = BalineseDate.DATE_TRANSITION_SK_START.getTime();
        const tFinish = BalineseDate.DATE_TRANSITION_SK_FINISH.getTime();

        if ((isEqual(a, tStart) || isAfter(a, tStart)) && isBefore(a, tFinish)) {
            inSK = true;
        }

        while (totalSasih !== 0) {
            if (dayDiff >= 0) {
                if (nampihCount === 0 || nampihCount === 2) {
                    nampihCount     = 0;
                    totalSasih      = totalSasih - 1;
                    currentSasih    = BalineseDate.mod(currentSasih + 1, 12);
                } else {
                    totalSasih      = totalSasih - 1;
                }

                if (currentSasih === BalineseDateConst.Sasih.KADASA.id && nampihCount === 0) {
                    currentSaka = currentSaka + 1;
                    if (currentSaka === 1917) {
                        currentSaka = currentSaka - 1;
                        nyepiFix    = true;
                    }
                } else if (currentSasih === BalineseDateConst.Sasih.DESTHA.id &&
                    nampihCount === 0 && nyepiFix) {
                        currentSaka = currentSaka + 1;
                        nyepiFix    = false;
                }

                if (currentSasih === BalineseDateConst.Sasih.KAWOLU.id && currentSaka === 1914) {
                    inSK = true;
                } else if (currentSasih === BalineseDateConst.Sasih.KAWOLU.id && currentSaka === 1924) {
                    inSK = false;
                }
            } else if (dayDiff < 0) {
                if (nampihCount === 0 || nampihCount === 2) {
                    nampihCount     = 0;
                    totalSasih      = totalSasih + 1;
                    currentSasih    = BalineseDate.mod(currentSasih - 1, 12);
                } else {
                    totalSasih      = totalSasih + 1;
                }

                if (currentSasih === BalineseDateConst.Sasih.KADASA.id && nampihCount === 0) {
                    if (currentSaka === 1917) {
                        currentSaka = currentSaka - 1;
                        nyepiFix    = true;
                    }
                } else if (currentSasih === BalineseDateConst.Sasih.KASANGA.id && nampihCount === 0) {
                    if (!nyepiFix) {
                        currentSaka = currentSaka - 1;
                    } else {
                        nyepiFix = false;
                    }
                }

                if (currentSasih === BalineseDateConst.Sasih.KAPITU.id && currentSaka === 1914) {
                    inSK = false;
                } else if (currentSasih === BalineseDateConst.Sasih.KAPITU.id && currentSaka === 1924) {
                    inSK = true;
                }
            }

            switch (currentSaka % 19) {
                case 0:
                case 6:
                case 11:
                    if (currentSasih === BalineseDateConst.Sasih.DESTHA.id && !inSK) {
                        if (currentSaka !== 1925) {
                            nampihCount++;
                        }
                    }
                    break;
                case 3:
                case 8:
                case 14:
                case 16:
                    if (currentSasih === BalineseDateConst.Sasih.SADHA.id && !inSK) {
                        nampihCount++;
                    }
                    break;
                case 2:
                case 10:
                    if (currentSasih === BalineseDateConst.Sasih.DESTHA.id && inSK) {
                        nampihCount++;
                    }
                    break;
                case 4:
                    if (currentSasih === BalineseDateConst.Sasih.KATIGA.id && inSK) {
                        nampihCount++;
                    }
                    break;
                case 7:
                    if (currentSasih === BalineseDateConst.Sasih.KASA.id &&  inSK) {
                        nampihCount++;
                    }
                    break;
                case 13:
                    if (currentSasih === BalineseDateConst.Sasih.KADASA.id && inSK) {
                        nampihCount++;
                    }
                    break;
                case 15:
                    if (currentSasih === BalineseDateConst.Sasih.KARO.id && inSK) {
                        nampihCount++;
                    }
                    break;
                case 18:
                    if (currentSasih === BalineseDateConst.Sasih.SADHA.id && inSK) {
                        nampihCount++;
                    }
                    break;
                default:
                    break;
            }
        }

        res[0] = currentSaka;
        res[1] = currentSasih;

        if (dayTotal >= 0) {
            res[2] = nampihCount === 2 ? 1 : 0;
        } else {
            res[2] = nampihCount === 1 ? 1 : 0;
        }

        return res;
    }

    private static calcSasihInfo(
        resultSasih: ReadonlyArray<number>): Readonly<BalineseDateConst.Sasih> {

        const saka          = resultSasih[0];
        const sasih         = resultSasih[1];
        const isNampihSasih = resultSasih[2] === 1;

        if (isNampihSasih) {
            if (saka < 1914) {
                if (sasih === BalineseDateConst.Sasih.DESTHA.id) {
                    return BalineseDateConst.Sasih.MALA_DESTHA;
                } else if (sasih === BalineseDateConst.Sasih.SADHA.id) {
                    return BalineseDateConst.Sasih.MALA_SADHA;
                }
            } else {
                if (sasih === BalineseDateConst.Sasih.DESTHA.id) {
                    return BalineseDateConst.Sasih.NAMPIH_DESTHA;
                } else if (sasih === BalineseDateConst.Sasih.KATIGA.id) {
                    return BalineseDateConst.Sasih.NAMPIH_KATIGA;
                } else if (sasih === BalineseDateConst.Sasih.KASA.id) {
                    return BalineseDateConst.Sasih.NAMPIH_KASA;
                } else if (sasih === BalineseDateConst.Sasih.KADASA.id) {
                    return BalineseDateConst.Sasih.NAMPIH_KADASA;
                } else if (sasih === BalineseDateConst.Sasih.KARO.id) {
                    return BalineseDateConst.Sasih.NAMPIH_KARO;
                } else if (sasih === BalineseDateConst.Sasih.SADHA.id) {
                    return BalineseDateConst.Sasih.NAMPIH_SADHA;
                }
            }
        }

        return BalineseDateConst.Sasih.values[sasih];
    }

    private static calcPratithiSamutPada(
        sasihDay: ReadonlyArray<number>,
        sasihDayInfo: Readonly<BalineseDateConst.SasihDayInfo>,
        sasih: Readonly<BalineseDateConst.Sasih>,
        date: Readonly<Date>): Readonly<BalineseDateConst.PratithiSamutPada> {

        const start = BalineseDateConst.PratithiSamutPada.values[sasih.ref];
        let   move  = 0;
        const isNG  = sasihDay.length > 1;
        const day   = isNG ? sasihDay[1] : sasihDay[0];

        if (sasihDayInfo.group === BalineseDateConst.SasihDayInfo.PENANGGAL.group) {
            if (day === 1 && isNG) {
                move = 0;    // Penanggal to Pangelong.
            } else {
                if (day >= 1 && day <= 8) {
                    move = day - 1;
                } else if (day >= 9 && day <= 13) {
                    move = day - 2;
                } else if (day === 14) {
                    move = 11;
                } else if (day === 15) {
                    move = 0;
                }
            }
        } else {
            if (day === 1 && isNG) {
                const temp = add_days(date.getTime(), 1);
                const nextDay = new BalineseDate(
                    temp.getFullYear(),
                    temp.getMonth(),
                    temp.getDate());

                if (nextDay.sasih.ref !== sasih.ref) {
                    move = -1;   // to the next penanggal
                }
            } else {
                move = (day >= 13) ? day - 11 : day - 1;
            }
        }

        const newId = BalineseDate.mod(start.id - move, 12);

        return BalineseDateConst.PratithiSamutPada.values[newId];
    }

    private readonly oPivot: Readonly<BalineseDatePivot>;

    private readonly aSasihDay: ReadonlyArray<number>;
    private readonly oSasihDayInfo: Readonly<BalineseDateConst.SasihDayInfo>;

    private readonly nSaka: number;
    private readonly oSasih: Readonly<BalineseDateConst.Sasih>;
    private readonly oPratithiSamutPada: Readonly<BalineseDateConst.PratithiSamutPada>;

    private readonly oCalendar: Readonly<Date>;
    private readonly oPawukon: Readonly<BalineseDatePawukon>;

    /**
     * Construct BalineseDate object with specific date. Zero parameter mean using current date.
     * @param nYear the gregorian year.
     * @param nMonth the gregorian month of year. Start from 0 (January) to 11 (December).
     * @param nDaysOfMonth the gregorian day of month. Start from 1 - 31.
     */
    public constructor()
    public constructor(nYear: number, nMonth: number, nDaysOfMonth: number)
    public constructor(nYear?: number, nMonth?: number, nDaysOfMonth?: number) {
        if (nYear !== undefined && nMonth !== undefined && nDaysOfMonth !== undefined) {
            this.oCalendar = Object.freeze(new Date(nYear, nMonth, nDaysOfMonth));
        } else {
            const date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);

            this.oCalendar = Object.freeze(date);
        }

        this.oPivot = BalineseDate.chooseBestPivot(this.oCalendar);

        const pawukonDay        = BalineseDate.calcPawukonDay(this.oPivot, this.oCalendar);
        this.oPawukon           = Object.freeze(new BalineseDatePawukon(pawukonDay));

        const resultSasihDay    = BalineseDate.calcSasihDay(this.oPivot, this.oCalendar);
        const day               = resultSasihDay[0];
        this.aSasihDay          = (resultSasihDay[2] === 1) ?
                                    Object.freeze([day, (day === 15) ? 1 : day + 1]) :
                                    Object.freeze([day]);

        const resultSasih       = BalineseDate.calcSasih(this.oPivot, this.oCalendar);

        this.nSaka              = resultSasih[0];
        this.oSasih             = BalineseDate.calcSasihInfo(resultSasih);

        this.oSasihDayInfo      = BalineseDate.calcSasihDayInfo(resultSasihDay, this.oSasih, this.nSaka);
        this.oPratithiSamutPada = BalineseDate.calcPratithiSamutPada(
            this.aSasihDay,
            this.oSasihDayInfo,
            this.oSasih,
            this.oCalendar);
    }

    public get toDate(): Readonly<Date> {
        return Object.freeze(new Date(this.oCalendar.getTime()));
    }

    public get pawukon(): Readonly<BalineseDatePawukon> {
        return this.oPawukon;
    }

    public get sasihDay(): ReadonlyArray<number> {
        const temp = (this.aSasihDay.length === 1) ?
            [this.aSasihDay[0]] :
            [this.aSasihDay[0], this.aSasihDay[1]];
        return Object.freeze(temp);
    }

    public get sasihDayInfo(): Readonly<BalineseDateConst.SasihDayInfo> {
        return this.oSasihDayInfo;
    }

    public get saka(): number {
        return this.nSaka;
    }

    public get sasih(): Readonly<BalineseDateConst.Sasih> {
        return this.oSasih;
    }

    public get pratithiSamutPada(): Readonly<BalineseDateConst.PratithiSamutPada> {
        return this.oPratithiSamutPada;
    }

    public get toString(): string {
        let dateStr = "" + this.aSasihDay[0];
        if (this.aSasihDay.length > 1) {
            dateStr = dateStr + "/" + this.aSasihDay[1];
        }

        return this.oPawukon.toString + ", " +
            this.oSasihDayInfo.name + " " +
            dateStr + ", Sasih " +
            this.oSasih.name + ", Saka " + this.nSaka;
    }
}
