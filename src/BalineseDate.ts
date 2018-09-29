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
import dateCompare = require("date-fns/compare_asc");
import dateDiff = require("date-fns/difference_in_calendar_days");

import { AstaWara } from "./AstaWara";
import { BalineseDateUtil } from "./BalineseDateUtil";
import { CaturWara } from "./CaturWara";
import { DasaWara } from "./DasaWara";
import { DwiWara } from "./DwiWara";
import { EkaJalaRsi } from "./EkaJalaRsi";
import { EkaWara } from "./EkaWara";
import { Filter } from "./Filter";
import { Ingkel } from "./Ingkel";
import { Pivot } from "./internal/Pivot";
import { Jejepan } from "./Jejepan";
import { Lintang } from "./Lintang";
import { PancaSuda } from "./PancaSuda";
import { PancaWara } from "./PancaWara";
import { Pararasan } from "./Pararasan";
import { PratithiSamutPada } from "./PratithiSamutPada";
import { Rakam } from "./Rakam";
import { SadWara } from "./SadWara";
import { SangaWara } from "./SangaWara";
import { SaptaWara } from "./SaptaWara";
import { Sasih } from "./Sasih";
import { SasihDayInfo } from "./SasihDayInfo";
import { TriWara } from "./TriWara";
import { WatekAlit } from "./WatekAlit";
import { WatekMadya } from "./WatekMadya";
import { Wuku } from "./Wuku";

export {
    AstaWara, BalineseDateUtil, CaturWara, DasaWara, DwiWara, EkaJalaRsi,
    EkaWara, Filter, Ingkel, Jejepan, Lintang, PancaSuda, PancaWara,
    Pararasan, PratithiSamutPada, Rakam, SadWara, SangaWara, SaptaWara,
    Sasih, SasihDayInfo, TriWara, WatekAlit, WatekMadya, Wuku,
};

/**
 * BalineseDate provide the implementation of Balinese Saka Calendar.
 * <p>
 * BalineseDate is designed to be <u>immutable</u> and <u>thread-safe</u>.
 * BalineseDate have several balinese calendar features like:
 * <ul>
 * <li><a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/kalender-pawukon.htm'>Pawukon</a></li>
 * <li><a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/pawewaran.htm'>Pawewaran</a></li>
 * <li><a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/paringkelan.htm'>Paringkelan</a></li>
 * <li>Eka Jala Rsi</li>
 * <li>Pratithi Samut Pada</li>
 * <li>Dewasa</li>
 * <li>Sasih</li>
 * <li><a target='_blank' href=
 * 'http://www.babadbali.com/pewarigaan/kalender-saka.htm'>Saka</a></li>
 * </ul>
 * <p>
 * <b>References</b> used by BalineseDate:
 * <ul>
 * <li><a target='_blank' href='http://www.babadbali.com/'>Babadbali.com
 * (Yayasan Bali Galang).</a></li>
 * <li>Ardhana, I.B.S. (2005). "Pokok-Pokok Wariga". Surabaya : Paramita.</li>
 * <li>Pendit, Nyoman. (2001). "Nyepi: kebangkitan, toleransi, dan kerukunan".
 * Jakarta : Gramedia.</li>
 * </ul>
 *
 * @author Ida Bagus Putu Peradnya Dinata
 */
export class BalineseDate {
    public readonly date: Date;
    public readonly wuku: Wuku;
    public readonly ekaWara: EkaWara;
    public readonly dwiWara: DwiWara;
    public readonly triWara: TriWara;
    public readonly caturWara: CaturWara;
    public readonly pancaWara: PancaWara;
    public readonly sadWara: SadWara;
    public readonly saptaWara: SaptaWara;
    public readonly astaWara: AstaWara;
    public readonly sangaWara: SangaWara;
    public readonly dasaWara: DasaWara;
    public readonly jejepan: Jejepan;
    public readonly lintang: Lintang;
    public readonly pancaSuda: PancaSuda;
    public readonly rakam: Rakam;
    public readonly ekaJalaRsi: EkaJalaRsi;
    public readonly ingkel: Ingkel;
    public readonly watekAlit: WatekAlit;
    public readonly watekMadya: WatekMadya;
    public readonly pararasan: Pararasan;
    public readonly sasih: Sasih;
    public readonly saka: number;
    public readonly sasihDayInfo: SasihDayInfo;
    public readonly sasihDay: number[];
    public readonly pratithiSamutPada: PratithiSamutPada;

    constructor(date: Date = new Date()) {
        this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        Object.freeze(this.date);

        const pivot = _F_BEST_PIVOT(this.date);
        const pawukonDay = _F_PAWUKON_DAY(pivot, this.date);

        this.wuku = Wuku.values[Math.floor(pawukonDay / 7)];
        this.triWara = TriWara.values[pawukonDay % 3];
        this.pancaWara = PancaWara.values[pawukonDay % 5];
        this.sadWara = SadWara.values[pawukonDay % 6];
        this.saptaWara = SaptaWara.values[pawukonDay % 7];
        this.jejepan = Jejepan.values[pawukonDay % 6];
        this.lintang = Lintang.values[pawukonDay % 35];
        this.pancaSuda = PancaSuda.values[(this.saptaWara.kertaAji + this.pancaWara.urip) % 7];
        this.rakam = Rakam.values[(this.saptaWara.kupih + this.pancaWara.kupih) % 6];
        this.ekaJalaRsi = EkaJalaRsi.values[_C_EJR_MAP[pawukonDay]];
        this.ingkel = Ingkel.values[this.wuku.id % 6];

        const urip = this.pancaWara.urip + this.saptaWara.urip;
        this.ekaWara = EkaWara.values[urip % 2];
        this.dwiWara = DwiWara.values[urip % 2];
        this.dasaWara = DasaWara.values[urip % 10];
        this.watekAlit = WatekAlit.values[urip % 4];
        this.watekMadya = WatekMadya.values[urip % 5];
        this.pararasan = Pararasan.values[urip % 10];
        this.caturWara = _F_CALC_CATURWARA(pawukonDay);
        this.astaWara = _F_CALC_ASTAWARA(pawukonDay);
        this.sangaWara = _F_CALC_SANGAWARA(pawukonDay);

        const resSasih = _F_CALC_SASIH_INFO(pivot, this.date);
        const resSasihDay = _F_CALC_SASIH_DAY(pivot, this.date);
        this.saka = resSasih[0];
        this.sasih = _F_CALC_SASIH(resSasih);
        this.sasihDayInfo = _F_CALC_SASIH_DAY_INFO(resSasihDay, this.sasih, this.saka);

        if (resSasihDay[2] === 1) {
            this.sasihDay = [resSasihDay[0], ((resSasihDay[0] === 15) ? 1 : resSasihDay[0] + 1)];
        } else {
            this.sasihDay = [resSasihDay[0]];
        }
        Object.freeze(this.sasihDay);

        this.pratithiSamutPada = _F_CALC_PRATITHI_S_P(this.sasihDay, this.sasihDayInfo, this.sasih, this.date);

        Object.freeze(this);
    }
}

/** @hidden */
const _C_DAY_PAWUKON = 210;

/** @hidden */
const _C_DAY_NGUNARATRI = 63;

/** @hidden */
const _C_PANGALANTAKA_PAING = new Date(2000, 0, 6);
Object.freeze(_C_PANGALANTAKA_PAING);

/** @hidden */
const _C_SK_START = new Date(1993, 0, 24);
Object.freeze(_C_SK_START);

/** @hidden */
const _C_SK_END = new Date(2003, 0, 3);
Object.freeze(_C_SK_END);

/** @hidden */
const _C_EJR_MAP = Object.freeze([23, 7, 17, 7, 23, 23, 17, 9, 7, 13, 26, 24, 23, 20, 13, 7, 13, 25, 19, 6, 2,
    14, 26, 17, 20, 25, 22, 0, 10, 6, 15, 23, 7, 17, 23, 17, 25, 5, 23, 2, 2, 2, 12, 12, 5, 14, 12, 26, 26, 1,
    23, 23, 15, 25, 15, 6, 9, 25, 18, 25, 11, 15, 21, 25, 25, 12, 0, 17, 13, 0, 15, 23, 12, 7, 16, 25, 18, 24,
    12, 12, 6, 7, 6, 26, 7, 6, 12, 7, 25, 2, 12, 25, 25, 14, 15, 26, 7, 12, 20, 7, 6, 25, 25, 6, 13, 25, 17, 13,
    23, 6, 26, 20, 25, 25, 23, 7, 18, 18, 17, 7, 17, 7, 5, 26, 17, 6, 9, 12, 12, 13, 25, 18, 18, 6, 2, 25, 25,
    2, 25, 17, 20, 14, 27, 23, 17, 8, 25, 17, 6, 17, 7, 3, 15, 18, 25, 2, 7, 13, 25, 20, 7, 15, 15, 23, 7, 8,
    24, 2, 12, 9, 24, 24, 17, 24, 20, 7, 12, 12, 14, 18, 25, 20, 5, 18, 5, 20, 26, 12, 23, 18, 17, 17, 25, 15,
    2, 24, 4, 2, 23, 25, 18, 25, 20, 14, 4, 2, 25, 7, 25, 17]);

/** @hidden */
const _F_MOD = (a: number, b: number) => ((a % b) + b) % b;

/** @hidden */
const _F_DELTA_D = (a: Date, b: Date) => dateDiff(b, a);

/** @hidden */
const _F_BEST_PIVOT = (date: Date) => {
    return dateCompare(date, _C_PANGALANTAKA_PAING) < 0 ? Pivot.PIVOT_1971 : Pivot.PIVOT_2000;
};

/** @hidden */
const _F_PAWUKON_DAY = (pivot: Pivot, date: Date) => {
    return _F_MOD(pivot.pawukonDay + _F_DELTA_D(pivot.date, date), _C_DAY_PAWUKON);
};

/** @hidden */
const _F_CALC_CATURWARA = (pawukonDay: number) => {
    if (pawukonDay < 71) {
        return CaturWara.values[pawukonDay % 4];
    } else if (pawukonDay > 72) {
        return CaturWara.values[(pawukonDay - 2) % 4];
    } else {
        return CaturWara.JAYA;
    }
};

/** @hidden */
const _F_CALC_ASTAWARA = (pawukonDay: number) => {
    if (pawukonDay < 71) {
        return AstaWara.values[pawukonDay % 8];
    } else if (pawukonDay > 72) {
        return AstaWara.values[(pawukonDay - 2) % 8];
    } else {
        return AstaWara.KALA;
    }
};

/** @hidden */
const _F_CALC_SANGAWARA = (pawukonDay: number) => {
    if (pawukonDay > 3) {
        return SangaWara.values[(pawukonDay - 3) % 9];
    } else {
        return SangaWara.DANGU;
    }
};

/** @hidden */
const _F_CALC_SASIH_INFO = (pivot: Pivot, date: Date) => {
    const res = new Array<number>(3);

    const ptime = pivot.date;
    const dayDiff = _F_DELTA_D(ptime, date);
    const daySkip = Math.ceil(dayDiff / _C_DAY_NGUNARATRI);
    const dayTotal = pivot.sasihDay + dayDiff + daySkip;

    const pivotOffset = (pivot.sasihDay === 0 && pivot.ngunaRatriDay === 0) ? 0 : 1;

    let totalSasih = Math.ceil(dayTotal / 30) - pivotOffset;

    let currentSasih = pivot.sasih.id;
    let currentSaka = pivot.saka - (currentSasih === Sasih.KADASA.id ? 1 : 0);
    let nampihCount = pivot.isNampihSasih ? 1 : 0;

    let nyepiFix = false;
    let inSK = false;
    if (dateCompare(ptime, _C_SK_START) >= 0 && dateCompare(ptime, _C_SK_END) < 0) {
        inSK = true;
    }

    while (totalSasih !== 0) {
        if (dayDiff >= 0) {
            if (nampihCount === 0 || nampihCount === 2) {
                nampihCount = 0;
                currentSasih = _F_MOD(currentSasih + 1, 12);
            }

            totalSasih = totalSasih - 1;

            if (currentSasih === Sasih.KADASA.id && nampihCount === 0) {
                currentSaka = currentSaka + 1;
                if (currentSaka === 1917) {
                    currentSaka = currentSaka - 1;
                    nyepiFix = true;
                }
            } else if (currentSasih === Sasih.DESTHA.id && nampihCount === 0 && nyepiFix) {
                currentSaka = currentSaka + 1;
                nyepiFix = false;
            }

            if (currentSasih === Sasih.KAWOLU.id && currentSaka === 1914) {
                inSK = true;
            } else if (currentSasih === Sasih.KAWOLU.id && currentSaka === 1924) {
                inSK = false;
            }
        } else if (dayDiff < 0) {
            if (nampihCount === 0 || nampihCount === 2) {
                nampihCount = 0;
                currentSasih = _F_MOD(currentSasih - 1, 12);
            }

            totalSasih = totalSasih + 1;

            if (currentSasih === Sasih.KADASA.id && nampihCount === 0) {
                if (currentSaka === 1917) {
                    currentSaka = currentSaka - 1;
                    nyepiFix = true;
                }
            } else if (currentSasih === Sasih.KASANGA.id && nampihCount === 0) {
                if (!nyepiFix) {
                    currentSaka = currentSaka - 1;
                } else {
                    nyepiFix = false;
                }
            }

            if (currentSasih === Sasih.KAPITU.id && currentSaka === 1914) {
                inSK = false;
            } else if (currentSasih === Sasih.KAPITU.id && currentSaka === 1924) {
                inSK = true;
            }
        }

        switch (currentSaka % 19) {
            case 0:
            case 6:
            case 11:
                if (currentSasih === Sasih.DESTHA.id && !inSK) {
                    if (currentSaka !== 1925) {
                        nampihCount++;
                    }
                }
                break;
            case 3:
            case 8:
            case 14:
            case 16:
                if (currentSasih === Sasih.SADHA.id && !inSK) {
                    nampihCount++;
                }
                break;
            case 2:
            case 10:
                if (currentSasih === Sasih.DESTHA.id && inSK) {
                    nampihCount++;
                }
                break;
            case 4:
                if (currentSasih === Sasih.KATIGA.id && inSK) {
                    nampihCount++;
                }
                break;
            case 7:
                if (currentSasih === Sasih.KASA.id && inSK) {
                    nampihCount++;
                }
                break;
            case 13:
                if (currentSasih === Sasih.KADASA.id && inSK) {
                    nampihCount++;
                }
                break;
            case 15:
                if (currentSasih === Sasih.KARO.id && inSK) {
                    nampihCount++;
                }
                break;
            case 18:
                if (currentSasih === Sasih.SADHA.id && inSK) {
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
};

/** @hidden */
const _F_CALC_SASIH_DAY = (pivot: Pivot, date: Date) => {
    const res = new Array<number>(3);

    const ptime = pivot.date;
    const dayDiff = _F_DELTA_D(ptime, date);
    const daySkip = Math.ceil(dayDiff / _C_DAY_NGUNARATRI);
    const dayTotal = pivot.sasihDay + dayDiff + daySkip;

    res[0] = _F_MOD(dayTotal, 30);
    res[1] = (res[0] === 0 || res[0] > 15) ? 1 : 0;
    res[2] = (_F_MOD(dayDiff, _C_DAY_NGUNARATRI) === 0) ? 1 : 0;
    res[0] = _F_MOD(res[0], 15);
    res[0] = (res[0] === 0) ? 15 : res[0];

    return res;
};

/** @hidden */
const _F_CALC_SASIH = (resSasih: number[]) => {
    const saka = resSasih[0];
    const sasih = resSasih[1];
    let res = Sasih.values[sasih];

    if (resSasih[2] === 1) {
        if (res === Sasih.DESTHA) {
            res = (saka < 1914) ? Sasih.MALA_DESTHA : Sasih.NAMPIH_DESTHA;
        } else if (res === Sasih.KATIGA) {
            res = Sasih.NAMPIH_KATIGA;
        } else if (res === Sasih.KASA) {
            res = Sasih.NAMPIH_KASA;
        } else if (res === Sasih.KADASA) {
            res = Sasih.NAMPIH_KADASA;
        } else if (res === Sasih.KARO) {
            res = Sasih.NAMPIH_KARO;
        } else if (res === Sasih.SADHA) {
            res = (saka < 1914) ? Sasih.MALA_SADHA : Sasih.NAMPIH_SADHA;
        }
    }

    return res;
};

/** @hidden */
const _F_CALC_SASIH_DAY_INFO = (resSasihDay: number[], sasih: Sasih, saka: number) => {
    const date = resSasihDay[0];
    const isPangelong = resSasihDay[1] === 1;
    const isNgunaRatri = resSasihDay[2] === 1;

    if (isPangelong) {
        if (date === 15 || (date === 14 && isNgunaRatri)) {
            return SasihDayInfo.TILEM;
        } else if (date === 14 && sasih === Sasih.KAPITU && saka === 1921) {
            return SasihDayInfo.TILEM;
        } else {
            return SasihDayInfo.PANGELONG;
        }
    } else {
        if (date === 15 || (date === 14 && isNgunaRatri)) {
            return SasihDayInfo.PURNAMA;
        } else {
            return SasihDayInfo.PENANGGAL;
        }
    }
};

/** @hidden */
const _F_CALC_PRATITHI_S_P = (sasihDay: ReadonlyArray<number>,
                              sasihDayInfo: SasihDayInfo,
                              sasih: Sasih,
                              date: Date) => {
    let move = 0;
    const isNG = sasihDay.length > 1;
    const day = isNG ? sasihDay[1] : sasihDay[0];

    if (sasihDayInfo.reference === SasihDayInfo.PENANGGAL) {
        if (day === 1 && isNG) {
            move = 0;
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
            const temp = dateAdd(date, 1);
            const nextDay = new BalineseDate(temp);

            if (nextDay.sasih.reference !== sasih.reference) {
                move = -1;
            }
        } else {
            move = (day >= 13) ? day - 11 : day - 1;
        }
    }

    const start = PratithiSamutPada.values[sasih.reference.id];
    const newID = _F_MOD(start.id - move, 12);

    return PratithiSamutPada.values[newID];
};
