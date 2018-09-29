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

import { AstaWara } from "./AstaWara";
import { CaturWara } from "./CaturWara";
import { DasaWara } from "./DasaWara";
import { DwiWara } from "./DwiWara";
import { EkaJalaRsi } from "./EkaJalaRsi";
import { EkaWara } from "./EkaWara";
import { Ingkel } from "./Ingkel";
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

/**
 * Filter class to use by static method inside BalineseDateUtil.
 */
export class Filter {
    public ekaWara?: EkaWara;
    public dwiWara?: DwiWara;
    public triWara?: TriWara;
    public caturWara?: CaturWara;
    public pancaWara?: PancaWara;
    public sadWara?: SadWara;
    public saptaWara?: SaptaWara;
    public astaWara?: AstaWara;
    public sangaWara?: SangaWara;
    public dasaWara?: DasaWara;
    public ingkel?: Ingkel;
    public jejepan?: Jejepan;
    public lintang?: Lintang;
    public pancaSuda?: PancaSuda;
    public pararasan?: Pararasan;
    public watekAlit?: WatekAlit;
    public watekMadya?: WatekMadya;
    public rakam?: Rakam;
    public ekaJalaRsi?: EkaJalaRsi;
    public wuku?: Wuku;
    public sasih?: Sasih;
    public sasihDayInfo?: SasihDayInfo;
    public sasihDay?: number[];
    public saka?: number;
    public pratithiSamutPada?: PratithiSamutPada;

    constructor() {
        this.ekaWara = undefined;
        this.dwiWara = undefined;
        this.triWara = undefined;
        this.caturWara = undefined;
        this.pancaWara = undefined;
        this.sadWara = undefined;
        this.saptaWara = undefined;
        this.astaWara = undefined;
        this.sangaWara = undefined;
        this.dasaWara = undefined;
        this.ingkel = undefined;
        this.jejepan = undefined;
        this.lintang = undefined;
        this.pancaSuda = undefined;
        this.pararasan = undefined;
        this.watekAlit = undefined;
        this.watekMadya = undefined;
        this.rakam = undefined;
        this.ekaJalaRsi = undefined;
        this.wuku = undefined;
        this.sasih = undefined;
        this.sasihDayInfo = undefined;
        this.sasihDay = undefined;
        this.saka = undefined;
        this.pratithiSamutPada = undefined;

        Object.seal(this);
    }

}
