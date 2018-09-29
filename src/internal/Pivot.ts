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

import { Sasih } from "../Sasih";

/** @hidden */
export class Pivot {
    public static get PIVOT_1971() { return _C_VAL[0]; }
    public static get PIVOT_2000() { return _C_VAL[1]; }

    public readonly date: Date;

    constructor(year: number,
                month: number,
                dayOfMonth: number,
                public readonly pawukonDay: number,
                public readonly sasihDay: number,
                public readonly ngunaRatriDay: number,
                public readonly saka: number,
                public readonly sasih: Sasih,
                public readonly isNampihSasih: boolean) {
        this.date = new Date(year, month, dayOfMonth);
        Object.freeze(this.date);
        Object.freeze(this);
    }
}

/** @hidden */
const _C_VAL = [
    new Pivot(1971, 0, 27, 3, 0, 0, 1892, Sasih.KAPITU, false),
    new Pivot(2000, 0, 18, 86, 12, 0, 1921, Sasih.KAPITU, false),
];
Object.freeze(_C_VAL);
