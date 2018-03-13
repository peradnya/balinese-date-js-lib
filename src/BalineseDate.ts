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

import differenceInDays from "date-fns/difference_in_days";
import isAfter from "date-fns/is_after";
import isBefore from "date-fns/is_before";
import isEqual from "date-fns/is_equal";

import { BalineseDatePawukon } from "./BalineseDatePawukon";
import * as BalineseDateConst from "./const";

export * from "./const/index";
export * from "./BalineseDatePawukon";

export class BalineseDate {

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

    private static chooseBestPivot(calendar: Readonly<Date>): Readonly<BalineseDateConst.BalineseDatePivot> {
        const a = BalineseDate.DATE_TRANSITION_PAING.getTime();
        const b = calendar.getTime();

        return isBefore(b, a) ?
            BalineseDateConst.BalineseDatePivot.PIVOT_NG_PON :
            BalineseDateConst.BalineseDatePivot.PIVOT_NG_PAING;
    }

    private static calcPawukonDayInYear(
        pivot: Readonly<BalineseDateConst.BalineseDatePivot>,
        calendar: Readonly<Date>): number {

        const a = pivot.calendar.getTime();
        const b = calendar.getTime();

        const diff = differenceInDays(b, a);
        return BalineseDate.mod(pivot.pawukonDayInYear + diff, BalineseDate.DAYS_IN_YEAR_PAWUKON);
    }

    private static calcPenanggal(
        pivot: Readonly<BalineseDateConst.BalineseDatePivot>,
        calendar: Readonly<Date>): number[] {

        const res = new Array<number>(3);

        const a = pivot.calendar.getTime();
        const b = calendar.getTime();
        const dayDiff = differenceInDays(b, a);
        const daySkip = Math.ceil(dayDiff / BalineseDate.NGUNARATRI);
        const dayTotal = pivot.penanggal + dayDiff + daySkip;

        res[0] = BalineseDate.mod(dayTotal, 30);
        res[1] = (res[0] === 0 || res[0] > 15) ? 1 : 0;
        res[2]  = BalineseDate.mod(dayDiff, BalineseDate.NGUNARATRI) === 0 ? 1 : 0;

        res[0] = BalineseDate.mod(res[0], 15);
        res[0] = (res[0] === 0) ? 15 : res[0];

        return res;
    }

    private static calcPenanggalInfo(
        penanggal: number,
        isPangelong: boolean,
        isNgunaRatri: boolean,
        sasih: Readonly<BalineseDateConst.Sasih>,
        saka: number): Readonly<BalineseDateConst.PenanggalInfo> {

        if (isPangelong) {
            if (penanggal === 15 || (penanggal === 14 && isNgunaRatri)) {
                return BalineseDateConst.PenanggalInfo.TILEM;
            } else if (penanggal === 14 &&
                        isNgunaRatri === false &&
                        sasih === BalineseDateConst.Sasih.KAPITU &&
                        saka === 1921) {
                return BalineseDateConst.PenanggalInfo.TILEM;
            } else {
                return BalineseDateConst.PenanggalInfo.PANGELONG;
            }
        } else {
            if (penanggal === 15 || (penanggal === 14 && isNgunaRatri)) {
                return BalineseDateConst.PenanggalInfo.PURNAMA;
            } else {
                return BalineseDateConst.PenanggalInfo.PENANGGAL;
            }
        }
    }

    private static calcSasih(
        pivot: Readonly<BalineseDateConst.BalineseDatePivot>,
        calendar: Readonly<Date>): number[] {

        const res = new Array<number>(3);

        const a = pivot.calendar.getTime();
        const b = calendar.getTime();
        const dayDiff = differenceInDays(b, a);
        const daySkip = Math.ceil(dayDiff / BalineseDate.NGUNARATRI);
        const dayTotal = pivot.penanggal + dayDiff + daySkip;

        const pivotOffset = pivot.penanggal === 0 && pivot.ngunaratriDay === 0 ? 0 : 1;

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
                    if (currentSaka === 1917 || currentSaka === 1919) {
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
                    if (currentSaka === 1917 || currentSaka === 1919) {
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
        sasih: number,
        isNampihSasih: boolean,
        saka: number): Readonly<BalineseDateConst.Sasih> {

        if (isNampihSasih) {
            if (saka >= 1914 && saka <= 1924) {
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
            } else {
                if (sasih === BalineseDateConst.Sasih.DESTHA.id) {
                    return BalineseDateConst.Sasih.MALA_DESTHA;
                } else if (sasih === BalineseDateConst.Sasih.SADHA.id) {
                    return BalineseDateConst.Sasih.MALA_SADHA;
                }
            }
        }

        return BalineseDateConst.Sasih.values[sasih];
    }

    private readonly oCalendar: Readonly<Date>;
    private readonly oPivot: Readonly<BalineseDateConst.BalineseDatePivot>;

    private readonly nPenanggal: number;
    private readonly bIsPangelong: boolean;
    private readonly bIsNgunaRatri: boolean;
    private readonly oPenanggalInfo: Readonly<BalineseDateConst.PenanggalInfo>;

    private readonly nSaka: number;
    private readonly oSasih: Readonly<BalineseDateConst.Sasih>;
    private readonly bIsNampihSasih: boolean;
    private readonly oPawukon: Readonly<BalineseDatePawukon>;

    public constructor()
    public constructor(nYear: number, nMonth: number, nDaysOfMonth: number)
    public constructor(nYear?: number, nMonth?: number, nDaysOfMonth?: number) {
        if (nYear !== undefined && nMonth !== undefined && nDaysOfMonth !== undefined) {
            this.oCalendar = Object.freeze(new Date(nYear, nMonth, nDaysOfMonth));
        } else {
            this.oCalendar = Object.freeze(new Date());
        }

        this.oPivot = BalineseDate.chooseBestPivot(this.oCalendar);

        const nPDIY = BalineseDate.calcPawukonDayInYear(this.oPivot, this.oCalendar);
        this.oPawukon = Object.freeze(new BalineseDatePawukon(nPDIY));

        const resPenanggal = BalineseDate.calcPenanggal(this.oPivot, this.oCalendar);
        this.nPenanggal = resPenanggal[0];
        this.bIsPangelong = resPenanggal[1] === 1;
        this.bIsNgunaRatri = resPenanggal[2] === 1;

        const resSasih = BalineseDate.calcSasih(this.oPivot, this.oCalendar);
        this.nSaka = resSasih[0];
        this.bIsNampihSasih = resSasih[2] === 1;
        this.oSasih = BalineseDate.calcSasihInfo(resSasih[1], this.bIsNampihSasih, this.nSaka);

        this.oPenanggalInfo = BalineseDate.calcPenanggalInfo(
            this.nPenanggal,
            this.bIsPangelong,
            this.bIsNgunaRatri,
            this.oSasih,
            this.nSaka);
    }

    public get toDate(): Readonly<Date> {
        return Object.freeze(new Date(this.oCalendar.getTime()));
    }

    public get pawukon(): Readonly<BalineseDatePawukon> {
        return this.oPawukon;
    }

    public get penanggal(): number {
        return this.nPenanggal;
    }

    public get penanggalInfo(): Readonly<BalineseDateConst.PenanggalInfo> {
        return this.oPenanggalInfo;
    }

    public get isNgunaRatri(): boolean {
        return this.bIsNgunaRatri;
    }

    public get saka(): number {
        return this.nSaka;
    }

    public get sasih(): Readonly<BalineseDateConst.Sasih> {
        return this.oSasih;
    }
}
