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

import { BalineseDate } from "./BalineseDate";
import * as BalineseDateConst from "./const";

export class BalineseDateUtil {

    public static findBalineseDateByPawukonInSaka(
        saptawara: Readonly<BalineseDateConst.Saptawara>,
        pancawara: Readonly<BalineseDateConst.Pancawara>,
        wuku: Readonly<BalineseDateConst.Wuku>,
        saka: number): BalineseDate[] {
        return [];
    }

    public static findBalineseDateByPawukonInYear(
        saptawara: Readonly<BalineseDateConst.Saptawara>,
        pancawara: Readonly<BalineseDateConst.Pancawara>,
        wuku: Readonly<BalineseDateConst.Wuku>,
        year: number): BalineseDate[] {
        return [];
    }

    public static findBalineseDateBySasihInSaka(
        sasih: Readonly<BalineseDateConst.Sasih>,
        isPangelong: boolean,
        penanggal: number,
        saka: number): BalineseDate[] {
        return [];
    }

    public static findBalineseDateBySasihInYear(
        sasih: Readonly<BalineseDateConst.Sasih>,
        isPangelong: boolean,
        penanggal: number,
        year: number): BalineseDate[] {
        return [];
    }

}
