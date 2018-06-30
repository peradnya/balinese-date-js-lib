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

export class SasihDayInfo {
    private static readonly aValues = Object.freeze([
        Object.freeze(new SasihDayInfo(0, 1, "Tilem")),
        Object.freeze(new SasihDayInfo(1, 0, "Penanggal")),
        Object.freeze(new SasihDayInfo(2, 0, "Purnama")),
        Object.freeze(new SasihDayInfo(3, 1, "Pangelong")),
    ]);

    public static get TILEM(): Readonly<SasihDayInfo> { return SasihDayInfo.aValues[0]; }
    public static get PENANGGAL(): Readonly<SasihDayInfo> { return SasihDayInfo.aValues[1]; }
    public static get PURNAMA(): Readonly<SasihDayInfo> { return SasihDayInfo.aValues[2]; }
    public static get PANGELONG(): Readonly<SasihDayInfo> { return SasihDayInfo.aValues[3]; }

    private constructor(
        private readonly nId: number,
        private readonly nGroup: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get group(): number {
        return this.nGroup;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<SasihDayInfo>> {
        return SasihDayInfo.aValues;
    }
}
