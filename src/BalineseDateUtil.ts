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

import addDays from "date-fns/add_days";
import differenceInCalendarDays from "date-fns/difference_in_calendar_days";

import { BalineseDate } from "./BalineseDate";
import { BalineseDatePawukon } from "./BalineseDatePawukon";

import * as BalineseDateConst from "./const";

/**
 * Utility class to support BalineseDate library
 * @author Ida Bagus Putu Peradnya Dinata
 */
export class BalineseDateUtil {

    /**
     * Get BalineseDates that match with given filters and dates.
     * @param filter the filters for balinese date search (null similar to no filter).
     * @param start the start date of search (not null).
     * @param finish the end date of search (not null).
     * @return array of BalineseDate that matched with given filters and dates.
     * @see Filter
     */
    public static getBalineseDateByDate(
        filter: BalineseDateConst.Filter,
        start: Date,
        finish: Date): BalineseDate[] {

        if (start === undefined || finish === undefined) { throw Error("Date must defined"); }

        const res: BalineseDate[] = [];

        let now: Date;
        for (now = addDays(start, 0); differenceInCalendarDays(finish, now) <= 0; now = addDays(now, 1)) {
            const date: BalineseDate = new BalineseDate(now.getFullYear(), now.getMonth(), now.getDate());
            const pawukon: Readonly<BalineseDatePawukon> = date.pawukon;

            if (filter !== undefined && filter !== null) {

                if (BalineseDateUtil.check(filter.ekawara, pawukon.ekawara))         { continue; }
                if (BalineseDateUtil.check(filter.dwiwara, pawukon.dwiwara))         { continue; }
                if (BalineseDateUtil.check(filter.triwara, pawukon.triwara))         { continue; }
                if (BalineseDateUtil.check(filter.caturwara, pawukon.caturwara))     { continue; }
                if (BalineseDateUtil.check(filter.pancawara, pawukon.pancawara))     { continue; }
                if (BalineseDateUtil.check(filter.sadwara, pawukon.sadwara))         { continue; }
                if (BalineseDateUtil.check(filter.saptawara, pawukon.saptawara))     { continue; }
                if (BalineseDateUtil.check(filter.astawara, pawukon.astawara))       { continue; }
                if (BalineseDateUtil.check(filter.sangawara, pawukon.sangawara))     { continue; }
                if (BalineseDateUtil.check(filter.dasawara, pawukon.dasawara))       { continue; }

                if (BalineseDateUtil.check(filter.ingkel, pawukon.ingkel))           { continue; }
                if (BalineseDateUtil.check(filter.jejapan, pawukon.jejapan))         { continue; }
                if (BalineseDateUtil.check(filter.watekAlit, pawukon.watekAlit))     { continue; }
                if (BalineseDateUtil.check(filter.watekMadya, pawukon.watekMadya))   { continue; }
                if (BalineseDateUtil.check(filter.lintang, pawukon.lintang))         { continue; }
                if (BalineseDateUtil.check(filter.pancasuda, pawukon.pancasuda))     { continue; }
                if (BalineseDateUtil.check(filter.pararasan, pawukon.pararasan))     { continue; }
                if (BalineseDateUtil.check(filter.rakam, pawukon.rakam))             { continue; }

                if (BalineseDateUtil.check(filter.wuku, pawukon.wuku))               { continue; }

                if (BalineseDateUtil.check(filter.sasih, date.sasih))                { continue; }
                if (BalineseDateUtil.check(filter.penanggalInfo, date.penanggalInfo)) { continue; }
                if (BalineseDateUtil.check(filter.isNgunaRatri, date.isNgunaRatri))  { continue; }
                if (BalineseDateUtil.check(filter.penanggal, date.penanggal))        { continue; }
                if (BalineseDateUtil.check(filter.saka, date.saka))                  { continue; }

            }

            res.push(date);
        }

        return res;
    }

    private static check<I>(filter: I, date: I): boolean {
        return (filter !== undefined ? filter !== date : false);
    }

}
