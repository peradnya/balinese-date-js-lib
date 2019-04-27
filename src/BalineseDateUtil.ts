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
import dateAdd = require("date-fns/add_days");
import dateDiff = require("date-fns/difference_in_calendar_days");

import { BalineseDate } from "./BalineseDate";
import { Filter } from "./Filter";
import { PancaWara } from "./PancaWara";
import { Rahinan } from "./Rahinan";
import { SaptaWara } from "./SaptaWara";
import { Sasih } from "./Sasih";
import { SasihDayInfo } from "./SasihDayInfo";
import { TriWara } from "./TriWara";
import { Wuku } from "./Wuku";

/**
 * Utility class to support BalineseDate.
 */
export class BalineseDateUtil {

    /**
     * Returns the list of BalineseDate that match with selected filter, Start Date
     * (inclusive), and End Date (inclusive).
     * <p>
     * <b>Note:</b> This static method is <u>not thread-safe</u>.
     *
     * @param start  the Start Date of the search. Undefined is not allowed.
     * @param end    the End Date of the search. Undefined is not allowed.
     * @param filter the Filter to be match. Undefined for unfiltered result.
     *
     * @return the list of BalineseDate that match with selected filter, Start Date,
     *         and End Date
     */
    public static filterByDateRange(start: Date, end: Date, filter?: Filter) {
        const result: BalineseDate[] = [];

        let now = dateAdd(start, 0);
        for (; dateDiff(end, now) >= 0; now = dateAdd(now, 1)) {
            const x = new BalineseDate(now);
            if (this.filterByItem(x, filter)) {
                result.push(x);
            }
        }

        return result;
    }

    /**
     * Returns the list of BalineseDate that match with selected filter.
     * <p>
     * <b>Note:</b> This static method is <u>not thread-safe</u>.
     *
     * @param list   the list of BalineseDate to be search. Undefined is not allowed.
     * @param filter the Filter to be match. Undefined for unfiltered result.
     *
     * @return the list of BalineseDate that match with selected filter
     */
    public static filterByList(list: BalineseDate[], filter?: Filter) {
        const result: BalineseDate[] = [];

        for (const item of list) {
            if (this.filterByItem(item, filter)) {
                result.push(item);
            }
        }

        return result;
    }

    /**
     * Returns the BalineseDate item that match with selected filter.
     * <p>
     * <b>Note:</b> This static method is <u>not thread-safe</u>.
     *
     * @param item   the BalineseDate to be search. Undefined is not allowed.
     * @param filter the Filter to be match. Undefined for unfiltered result.
     *
     * @return the boolean if item match with selected filter.
     */
    public static filterByItem(item: BalineseDate, filter?: Filter) {
        if (filter !== undefined) {
            if (!_F_CHECK(filter.wuku, item.wuku)) {
                return false;
            }
            if (!_F_CHECK(filter.ekaWara, item.ekaWara)) {
                return false;
            }
            if (!_F_CHECK(filter.dwiWara, item.dwiWara)) {
                return false;
            }
            if (!_F_CHECK(filter.triWara, item.triWara)) {
                return false;
            }
            if (!_F_CHECK(filter.caturWara, item.caturWara)) {
                return false;
            }
            if (!_F_CHECK(filter.pancaWara, item.pancaWara)) {
                return false;
            }
            if (!_F_CHECK(filter.sadWara, item.sadWara)) {
                return false;
            }
            if (!_F_CHECK(filter.saptaWara, item.saptaWara)) {
                return false;
            }
            if (!_F_CHECK(filter.astaWara, item.astaWara)) {
                return false;
            }
            if (!_F_CHECK(filter.sangaWara, item.sangaWara)) {
                return false;
            }
            if (!_F_CHECK(filter.dasaWara, item.dasaWara)) {
                return false;
            }
            if (!_F_CHECK(filter.ingkel, item.ingkel)) {
                return false;
            }
            if (!_F_CHECK(filter.jejepan, item.jejepan)) {
                return false;
            }
            if (!_F_CHECK(filter.watekAlit, item.watekAlit)) {
                return false;
            }
            if (!_F_CHECK(filter.watekMadya, item.watekMadya)) {
                return false;
            }
            if (!_F_CHECK(filter.lintang, item.lintang)) {
                return false;
            }
            if (!_F_CHECK(filter.pancaSuda, item.pancaSuda)) {
                return false;
            }
            if (!_F_CHECK(filter.pararasan, item.pararasan)) {
                return false;
            }
            if (!_F_CHECK(filter.rakam, item.rakam)) {
                return false;
            }
            if (!_F_CHECK(filter.ekaJalaRsi, item.ekaJalaRsi)) {
                return false;
            }
            if (!_F_CHECK(filter.saka, item.saka)) {
                return false;
            }
            if (!_F_CHECK(filter.sasih, item.sasih)) {
                return false;
            }
            if (!_F_CHECK(filter.pratithiSamutPada, item.pratithiSamutPada)) {
                return false;
            }
            if (!_F_CHECK_SASIH_D(filter.sasihDay, item.sasihDay)) {
                return false;
            }
            if (!_F_CHECK_SASIH_D_I(filter.sasihDayInfo, item.sasihDayInfo)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Returns the list of rahinan for given date.
     *
     * @param date the BalineseDate that want to check.
     *
     * @return the list of rahinan for given date.
     */
    public static getRahinan(date: BalineseDate) {
        return _F_CALC_RAHINAN(date);
    }
}

/** @hidden */
const _F_ARRAY_CHECK = (a: number[], b: ReadonlyArray<number>) => {
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) { return false; }
        }
        return true;
    }
    return false;
};

/** @hidden */
const _F_CHECK = <I> (expectation: I, reality: I) => {
    return (expectation !== undefined) ? (expectation === reality) : true;
};

/** @hidden */
const _F_CHECK_SASIH_D = (expectation: number[] | undefined, reality: ReadonlyArray<number>) => {
    if (expectation !== undefined) {
        switch (expectation.length) {
        case 1:
            if (reality.length === 1) {
                return (expectation[0] === reality[0]);
            } else if (reality.length === 2) {
                return (expectation[0] === reality[0]) || (expectation[0] === reality[1]);
            }
            return false;
        case 2:
            return (reality.length === 2) ? _F_ARRAY_CHECK(expectation, reality) : false;
        default:
            return false;
        }
    }
    return true;
};

/** @hidden */
const _F_CHECK_SASIH_D_I = (expectation: SasihDayInfo | undefined, reality: SasihDayInfo) => {
    if (expectation !== undefined) {
        if (expectation === SasihDayInfo.PURNAMA || expectation === SasihDayInfo.TILEM) {
            return expectation === reality;
        } else {
            return expectation === reality.reference;
        }
    }
    return true;
};

/** @hidden */
const _F_CALC_RAHINAN = (date: BalineseDate) => {

    const arr = new Array<Rahinan>();

    if (date !== undefined) {
        if (date.wuku === Wuku.SINTA) {
            if (date.saptaWara === SaptaWara.REDITE) {
                arr.push(Rahinan.BANYU_PINARUH);
            } else if (date.saptaWara === SaptaWara.SOMA) {
                arr.push(Rahinan.SOMA_RIBEK);
            } else if (date.saptaWara === SaptaWara.ANGGARA) {
                arr.push(Rahinan.SABUH_EMAS);
            } else if (date.saptaWara === SaptaWara.BUDA) {
                arr.push(Rahinan.PAGER_WESI);
            }
        } else if (date.wuku === Wuku.LANDEP) {
            if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.TUMPEK_LANDEP);
            }
        } else if (date.wuku === Wuku.WARIGA) {
            if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.TUMPEK_UDUH);
            }
        } else if (date.wuku === Wuku.SUNGSANG) {
            if (date.saptaWara === SaptaWara.WRASPATI) {
                arr.push(Rahinan.SUGIHAN_JAWA);
            } else if (date.saptaWara === SaptaWara.SUKRA) {
                arr.push(Rahinan.SUGIHAN_BALI);
            }
        } else if (date.wuku === Wuku.DUNGULAN) {
            if (date.saptaWara === SaptaWara.REDITE) {
                arr.push(Rahinan.PENYEKEBAN_GALUNGAN);
            } else if (date.saptaWara === SaptaWara.SOMA) {
                arr.push(Rahinan.PENYAJAN_GALUNGAN);
            } else if (date.saptaWara === SaptaWara.ANGGARA) {
                arr.push(Rahinan.PENAMPAHAN_GALUNGAN);
            } else if (date.saptaWara === SaptaWara.BUDA) {
                arr.push(Rahinan.GALUNGAN);
            } else if (date.saptaWara === SaptaWara.WRASPATI) {
                arr.push(Rahinan.MANIS_GALUNGAN);
            } else if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.PEMARIDAN_GURU);
            }
        } else if (date.wuku === Wuku.KUNINGAN) {
            if (date.saptaWara === SaptaWara.REDITE) {
                arr.push(Rahinan.ULIHAN);
            } else if (date.saptaWara === SaptaWara.SOMA) {
                arr.push(Rahinan.PEMACEKAN_AGUNG);
            } else if (date.saptaWara === SaptaWara.SUKRA) {
                arr.push(Rahinan.PENAMPAHAN_KUNINGAN);
            } else if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.KUNINGAN);
            }
        } else if (date.wuku === Wuku.PAHANG) {
            if (date.saptaWara === SaptaWara.BUDA) {
                arr.push(Rahinan.PEGAT_UWAKAN);
            }
        } else if (date.wuku === Wuku.UYE) {
            if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.TUMPEK_KANDANG);
            }
        } else if (date.wuku === Wuku.WAYANG) {
            if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.TUMPEK_WAYANG);
            }
        } else if (date.wuku === Wuku.WATUGUNUNG) {
            if (date.saptaWara === SaptaWara.SANISCARA) {
                arr.push(Rahinan.SARASWATI);
            }
        }

        if (date.triWara === TriWara.KAJENG && date.pancaWara === PancaWara.KLIWON) {
            arr.push(Rahinan.KAJENG_KLIWON);
        }

        if (date.saptaWara === SaptaWara.ANGGARA && date.pancaWara === PancaWara.KLIWON) {
            arr.push(Rahinan.ANGGARA_KASIH);
        }

        if (date.saptaWara === SaptaWara.BUDA && date.pancaWara === PancaWara.WAGE) {
            arr.push(Rahinan.BUDA_CEMENG);
        }

        const temp  = date.date;
        const n1Day = new BalineseDate(dateAdd(temp, 1));
        const b1Day = new BalineseDate(dateAdd(temp, -1));
        const b2Day = new BalineseDate(dateAdd(temp, -2));

        if (n1Day.sasih === Sasih.KAPITU && n1Day.sasihDayInfo === SasihDayInfo.TILEM) {
            arr.push(Rahinan.SIWA_RATRI);
        }

        if (date.saka < n1Day.saka) {
            arr.push(Rahinan.TAWUR_AGUNG_KASANGA);
        }

        if (b1Day.saka < date.saka) {
            arr.push(Rahinan.NYEPI);
        }

        if (b2Day.saka < date.saka && b1Day.saka === date.saka) {
            arr.push(Rahinan.NGEMBAK_GENI);
        }
    }

    Object.freeze(arr);

    return arr;
};
