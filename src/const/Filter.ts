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

import { Astawara } from "./Astawara";
import { Caturwara } from "./Caturwara";
import { Dasawara } from "./Dasawara";
import { Dwiwara } from "./Dwiwara";
import { Ekawara } from "./Ekawara";
import { Pancawara } from "./Pancawara";
import { Sadwara } from "./Sadwara";
import { Sangawara } from "./Sangawara";
import { Saptawara } from "./Saptawara";
import { Triwara } from "./Triwara";

import { Wuku } from "./Wuku";

import { Ingkel } from "./Ingkel";
import { Jejapan } from "./Jejapan";
import { Lintang } from "./Lintang";
import { Pancasuda } from "./Pancasuda";
import { Pararasan } from "./Pararasan";
import { PawatekanAlit } from "./PawatekanAlit";
import { PawatekanMadya } from "./PawatekanMadya";
import { Rakam } from "./Rakam";

import { PenanggalInfo } from "./PenanggalInfo";
import { Sasih } from "./Sasih";

/**
 * Filter class for BalineseDateUtil class.
 * @author Ida Bagus Putu Peradnya Dinata
 */
export class Filter {

    public ekawara?: Readonly<Ekawara>;
    public dwiwara?: Readonly<Dwiwara>;
    public triwara?: Readonly<Triwara>;
    public caturwara?: Readonly<Caturwara>;
    public pancawara?: Readonly<Pancawara>;
    public sadwara?: Readonly<Sadwara>;
    public saptawara?: Readonly<Saptawara>;
    public astawara?: Readonly<Astawara>;
    public sangawara?: Readonly<Sangawara>;
    public dasawara?: Readonly<Dasawara>;

    public wuku?: Readonly<Wuku>;

    public ingkel?: Readonly<Ingkel>;
    public jejapan?: Readonly<Jejapan>;
    public lintang?: Readonly<Lintang>;
    public pancasuda?: Readonly<Pancasuda>;
    public pararasan?: Readonly<Pararasan>;
    public watekAlit?: Readonly<PawatekanAlit>;
    public watekMadya?: Readonly<PawatekanMadya>;
    public rakam?: Readonly<Rakam>;

    public penanggalInfo?: Readonly<PenanggalInfo>;
    public sasih?: Readonly<Sasih>;
    public isNgunaRatri?: boolean;
    public saka?: number;
    public penanggal?: number;

}
