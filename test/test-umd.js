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

import test from "ava";

var BD = require("../umd/balinese-date-js-lib.min");

test("1969-01-01-node", t => {
    const date = new Date(1969,0,1);
    const bdate = new BD.BalineseDate(date);

    t.is(BD.Wuku.LANGKIR, bdate.wuku);

    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.LABA, bdate.caturWara);
    t.is(BD.PancaWara.WAGE, bdate.pancaWara);
    t.is(BD.SadWara.PANIRON, bdate.sadWara);
    t.is(BD.SaptaWara.BUDA, bdate.saptaWara);
    t.is(BD.AstaWara.BRAHMA, bdate.astaWara);
    t.is(BD.SangaWara.NOHAN, bdate.sangaWara);
    t.is(BD.DasaWara.PATI, bdate.dasaWara);

    t.is(BD.Ingkel.WONG, bdate.ingkel);
    t.is(BD.Jejepan.PATRA, bdate.jejepan);
    t.is(BD.WatekMadya.GAJAH, bdate.watekMadya);
    t.is(BD.WatekAlit.LEMBU, bdate.watekAlit);
    t.is(BD.Lintang.KARTIKA, bdate.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pararasan);
    t.is(BD.PancaSuda.SATRIA_WIBAWA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BUAT_SUKA, bdate.ekaJalaRsi);

    t.deepEqual([12, 13], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.WIDNYANA, bdate.pratithiSamutPada);

    t.is(1890, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("1970-01-01-node", t => {
    const date = new Date(1970,0,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.TOLU, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.KAJENG, bdate.triWara);
    t.is(BD.CaturWara.SRI, bdate.caturWara);
    t.is(BD.PancaWara.WAGE, bdate.pancaWara);
    t.is(BD.SadWara.URUKUNG, bdate.sadWara);
    t.is(BD.SaptaWara.WRASPATI, bdate.saptaWara);
    t.is(BD.AstaWara.SRI, bdate.astaWara);
    t.is(BD.SangaWara.GIGIS, bdate.sangaWara);
    t.is(BD.DasaWara.SUKA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.SATO, bdate.jejepan);
    t.is(BD.WatekMadya.WATU, bdate.watekMadya);
    t.is(BD.WatekAlit.LINTAH, bdate.watekAlit);
    t.is(BD.Lintang.KUMBA, bdate.lintang);
    t.is(BD.Pararasan.ARAS_KEMBANG, bdate.pararasan);
    t.is(BD.PancaSuda.TUNGGAK_SEMI, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BUAT_SUKA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([8], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PANGELONG, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.WEDANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1891, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});


test("1976-03-31-node", t => {
    const date = new Date(1976,2,31);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.SINTA, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.MENALA, bdate.caturWara);
    t.is(BD.PancaWara.KLIWON, bdate.pancaWara);
    t.is(BD.SadWara.PANIRON, bdate.sadWara);
    t.is(BD.SaptaWara.BUDA, bdate.saptaWara);
    t.is(BD.AstaWara.YAMA, bdate.astaWara);
    t.is(BD.SangaWara.DANGU, bdate.sangaWara);
    t.is(BD.DasaWara.MANUH, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.WONG, bdate.ingkel);
    t.is(BD.Jejepan.PATRA, bdate.jejepan);
    t.is(BD.WatekMadya.WONG, bdate.watekMadya);
    t.is(BD.WatekAlit.LEMBU, bdate.watekAlit);
    t.is(BD.Lintang.ATIWA_TIWA, bdate.lintang);
    t.is(BD.Pararasan.LAKU_SURYA, bdate.pararasan);
    t.is(BD.PancaSuda.LEBU_KATIUB_ANGIN, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BUAT_SUKA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([15, 1], bdate.sasihDay);
    t.is(BD.SasihDayInfo.TILEM, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SADAYATANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1897, bdate.saka);
    t.is(BD.Sasih.KASANGA, bdate.sasih);
});


test("1976-04-01-node", t => {
    const date = new Date(1976,3,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.SINTA, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.SRI, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.WAS, bdate.sadWara);
    t.is(BD.SaptaWara.WRASPATI, bdate.saptaWara);
    t.is(BD.AstaWara.LUDRA, bdate.astaWara);
    t.is(BD.SangaWara.JANGUR, bdate.sangaWara);
    t.is(BD.DasaWara.DUKA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.WONG, bdate.ingkel);
    t.is(BD.Jejepan.WONG, bdate.jejepan);
    t.is(BD.WatekMadya.BUTA, bdate.watekMadya);
    t.is(BD.WatekAlit.ULER, bdate.watekAlit);
    t.is(BD.Lintang.SANGKA_TIKEL, bdate.lintang);
    t.is(BD.Pararasan.LAKU_BINTANG, bdate.pararasan);
    t.is(BD.PancaSuda.SATRIA_WIBAWA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.SUKA_PINANGGIH, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([2], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.NAMARUPA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1898, bdate.saka);
    t.is(BD.Sasih.KADASA, bdate.sasih);
});


test("1978-05-08-node", t => {
    const date = new Date(1978,4,8);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.MATAL, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.MENALA, bdate.caturWara);
    t.is(BD.PancaWara.PON, bdate.pancaWara);
    t.is(BD.SadWara.PANIRON, bdate.sadWara);
    t.is(BD.SaptaWara.SOMA, bdate.saptaWara);
    t.is(BD.AstaWara.YAMA, bdate.astaWara);
    t.is(BD.SangaWara.NOHAN, bdate.sangaWara);
    t.is(BD.DasaWara.PATI, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.MINA, bdate.ingkel);
    t.is(BD.Jejepan.PATRA, bdate.jejepan);
    t.is(BD.WatekMadya.GAJAH, bdate.watekMadya);
    t.is(BD.WatekAlit.LEMBU, bdate.watekAlit);
    t.is(BD.Lintang.KIRIMAN, bdate.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pararasan);
    t.is(BD.PancaSuda.SUMUR_SINABA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.LANGGENG_KAYOHANAAN, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([1], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SEPARSA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1900, bdate.saka);
    t.is(BD.Sasih.MALA_DESTHA, bdate.sasih);
});


test("1993-03-24-node", t => {
    const date = new Date(1993,2,24);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.KRULUT, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.LABA, bdate.caturWara);
    t.is(BD.PancaWara.PAING, bdate.pancaWara);
    t.is(BD.SadWara.ARYANG, bdate.sadWara);
    t.is(BD.SaptaWara.BUDA, bdate.saptaWara);
    t.is(BD.AstaWara.INDRA, bdate.astaWara);
    t.is(BD.SangaWara.OGAN, bdate.sangaWara);
    t.is(BD.DasaWara.MANUSA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.TARU, bdate.jejepan);
    t.is(BD.WatekMadya.GAJAH, bdate.watekMadya);
    t.is(BD.WatekAlit.LINTAH, bdate.watekAlit);
    t.is(BD.Lintang.GAJAH_MINA, bdate.lintang);
    t.is(BD.Pararasan.LAKU_AIR, bdate.pararasan);
    t.is(BD.PancaSuda.WISESA_SEGARA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BUAT_SUKA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([1], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SADAYATANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1915, bdate.saka);
    t.is(BD.Sasih.KADASA, bdate.sasih);
});


test("1993-09-01-node", t => {
    const date = new Date(1993,8,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.SUNGSANG, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.JAYA, bdate.caturWara);
    t.is(BD.PancaWara.PON, bdate.pancaWara);
    t.is(BD.SadWara.TUNGLEH, bdate.sadWara);
    t.is(BD.SaptaWara.BUDA, bdate.saptaWara);
    t.is(BD.AstaWara.GURU, bdate.astaWara);
    t.is(BD.SangaWara.DANGU, bdate.sangaWara);
    t.is(BD.DasaWara.SRI, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.MANUK, bdate.ingkel);
    t.is(BD.Jejepan.MINA, bdate.jejepan);
    t.is(BD.WatekMadya.SUKU, bdate.watekMadya);
    t.is(BD.WatekAlit.GAJAH, bdate.watekAlit);
    t.is(BD.Lintang.LUMBUNG, bdate.lintang);
    t.is(BD.Pararasan.LAKU_BULAN, bdate.pararasan);
    t.is(BD.PancaSuda.BUMI_KAPETAK, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BAGNA_MAPASAH, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([14, 15], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PURNAMA, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.UPADANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1915, bdate.saka);
    t.is(BD.Sasih.NAMPIH_KARO, bdate.sasih);
});


test("1999-01-01-node", t => {
    const date = new Date(1999,0,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.MERAKIH, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.JAYA, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.WAS, bdate.sadWara);
    t.is(BD.SaptaWara.SUKRA, bdate.saptaWara);
    t.is(BD.AstaWara.GURU, bdate.astaWara);
    t.is(BD.SangaWara.OGAN, bdate.sangaWara);
    t.is(BD.DasaWara.PATI, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.BUKU, bdate.ingkel);
    t.is(BD.Jejepan.WONG, bdate.jejepan);
    t.is(BD.WatekMadya.GAJAH, bdate.watekMadya);
    t.is(BD.WatekAlit.LEMBU, bdate.watekAlit);
    t.is(BD.Lintang.ANGSA_ANGREM, bdate.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pararasan);
    t.is(BD.PancaSuda.SATRIA_WIRANG, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.MANGGIH_SUKA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([13], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.WIDNYANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1920, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});


test("1999-03-17-node", t => {
    const date = new Date(1999,2,17);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.DUKUT, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.LABA, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.ARYANG, bdate.sadWara);
    t.is(BD.SaptaWara.BUDA, bdate.saptaWara);
    t.is(BD.AstaWara.BRAHMA, bdate.astaWara);
    t.is(BD.SangaWara.TULUS, bdate.sangaWara);
    t.is(BD.DasaWara.SUKA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.TARU, bdate.jejepan);
    t.is(BD.WatekMadya.WATU, bdate.watekMadya);
    t.is(BD.WatekAlit.LINTAH, bdate.watekAlit);
    t.is(BD.Lintang.TANGIS, bdate.lintang);
    t.is(BD.Pararasan.ARAS_KEMBANG, bdate.pararasan);
    t.is(BD.PancaSuda.SUMUR_SINABA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.TININGGALING_SUKA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([15], bdate.sasihDay);
    t.is(BD.SasihDayInfo.TILEM, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.JARAMARANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1920, bdate.saka);
    t.is(BD.Sasih.KASANGA, bdate.sasih);
});

test("1999-03-18-node", t => {
    const date = new Date(1999,2,18);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.DUKUT, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.KAJENG, bdate.triWara);
    t.is(BD.CaturWara.JAYA, bdate.caturWara);
    t.is(BD.PancaWara.PAING, bdate.pancaWara);
    t.is(BD.SadWara.URUKUNG, bdate.sadWara);
    t.is(BD.SaptaWara.WRASPATI, bdate.saptaWara);
    t.is(BD.AstaWara.KALA, bdate.astaWara);
    t.is(BD.SangaWara.DADI, bdate.sangaWara);
    t.is(BD.DasaWara.RAJA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.SATO, bdate.jejepan);
    t.is(BD.WatekMadya.WATU, bdate.watekMadya);
    t.is(BD.WatekAlit.ULER, bdate.watekAlit);
    t.is(BD.Lintang.SALAH_UKUR, bdate.lintang);
    t.is(BD.Pararasan.LAKU_BUMI, bdate.pararasan);
    t.is(BD.PancaSuda.LEBU_KATIUB_ANGIN, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.PATINING_AMERTA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([1], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SADAYATANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1921, bdate.saka);
    t.is(BD.Sasih.KADASA, bdate.sasih);
});

test("2000-01-01-node", t => {
    const date = new Date(2000,0,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.SUNGSANG, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.LABA, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.PANIRON, bdate.sadWara);
    t.is(BD.SaptaWara.SANISCARA, bdate.saptaWara);
    t.is(BD.AstaWara.BRAHMA, bdate.astaWara);
    t.is(BD.SangaWara.NOHAN, bdate.sangaWara);
    t.is(BD.DasaWara.SRI, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.MANUK, bdate.ingkel);
    t.is(BD.Jejepan.PATRA, bdate.jejepan);
    t.is(BD.WatekMadya.SUKU, bdate.watekMadya);
    t.is(BD.WatekAlit.GAJAH, bdate.watekAlit);
    t.is(BD.Lintang.BEGOONG, bdate.lintang);
    t.is(BD.Pararasan.LAKU_BULAN, bdate.pararasan);
    t.is(BD.PancaSuda.BUMI_KAPETAK, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BAGNA_MAPASAH, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([9], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PANGELONG, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SADAYATANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1921, bdate.saka);
    t.is(BD.Sasih.KANEM, bdate.sasih);
});

test("2000-01-17-node", t => {
    const date = new Date(2000,0,17);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.LANGKIR, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.MENALA, bdate.caturWara);
    t.is(BD.PancaWara.PAING, bdate.pancaWara);
    t.is(BD.SadWara.ARYANG, bdate.sadWara);
    t.is(BD.SaptaWara.SOMA, bdate.saptaWara);
    t.is(BD.AstaWara.YAMA, bdate.astaWara);
    t.is(BD.SangaWara.JANGUR, bdate.sangaWara);
    t.is(BD.DasaWara.DUKA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.WONG, bdate.ingkel);
    t.is(BD.Jejepan.TARU, bdate.jejepan);
    t.is(BD.WatekMadya.BUTA, bdate.watekMadya);
    t.is(BD.WatekAlit.ULER, bdate.watekAlit);
    t.is(BD.Lintang.KUKUS, bdate.lintang);
    t.is(BD.Pararasan.LAKU_BINTANG, bdate.pararasan);
    t.is(BD.PancaSuda.BUMI_KAPETAK, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.BUAT_SEBET, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([11], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SADAYATANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1921, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("2001-08-18-node", t => {
    const date = new Date(2001,7,18);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.TOLU, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.JAYA, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.WAS, bdate.sadWara);
    t.is(BD.SaptaWara.SANISCARA, bdate.saptaWara);
    t.is(BD.AstaWara.GURU, bdate.astaWara);
    t.is(BD.SangaWara.OGAN, bdate.sangaWara);
    t.is(BD.DasaWara.SRI, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.WONG, bdate.jejepan);
    t.is(BD.WatekMadya.SUKU, bdate.watekMadya);
    t.is(BD.WatekAlit.GAJAH, bdate.watekAlit);
    t.is(BD.Lintang.BEGOONG, bdate.lintang);
    t.is(BD.Pararasan.LAKU_BULAN, bdate.pararasan);
    t.is(BD.PancaSuda.BUMI_KAPETAK, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.SUKA_PINANGGIH, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([15], bdate.sasihDay);
    t.is(BD.SasihDayInfo.TILEM, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SADAYATANA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1923, bdate.saka);
    t.is(BD.Sasih.KARO, bdate.sasih);

});

test("2001-09-17-node", t => {
    const date = new Date(2001,8,17);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.SUNGSANG, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.BETENG, bdate.triWara);
    t.is(BD.CaturWara.SRI, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.WAS, bdate.sadWara);
    t.is(BD.SaptaWara.SOMA, bdate.saptaWara);
    t.is(BD.AstaWara.SRI, bdate.astaWara);
    t.is(BD.SangaWara.TULUS, bdate.sangaWara);
    t.is(BD.DasaWara.RAKSASA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.MANUK, bdate.ingkel);
    t.is(BD.Jejepan.WONG, bdate.jejepan);
    t.is(BD.WatekMadya.SUKU, bdate.watekMadya);
    t.is(BD.WatekAlit.ULER, bdate.watekAlit);
    t.is(BD.Lintang.KELAPA, bdate.lintang);
    t.is(BD.Pararasan.LAKU_ANGIN, bdate.pararasan);
    t.is(BD.PancaSuda.TUNGGAK_SEMI, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.TININGGALING_SUKA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([15], bdate.sasihDay);
    t.is(BD.SasihDayInfo.TILEM, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SEPARSA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1923, bdate.saka);
    t.is(BD.Sasih.KATIGA, bdate.sasih);
});

test("2001-09-24-node", t => {
    const date = new Date(2001,8,24);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.DUNGULAN, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.LUANG, bdate.ekaWara);
    t.is(BD.DwiWara.PEPET, bdate.dwiWara);
    t.is(BD.TriWara.KAJENG, bdate.triWara);
    t.is(BD.CaturWara.JAYA, bdate.caturWara);
    t.is(BD.PancaWara.PON, bdate.pancaWara);
    t.is(BD.SadWara.MAULU, bdate.sadWara);
    t.is(BD.SaptaWara.SOMA, bdate.saptaWara);
    t.is(BD.AstaWara.KALA, bdate.astaWara);
    t.is(BD.SangaWara.ERANGAN, bdate.sangaWara);
    t.is(BD.DasaWara.PATI, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.PAKSI, bdate.jejepan);
    t.is(BD.WatekMadya.GAJAH, bdate.watekMadya);
    t.is(BD.WatekAlit.LEMBU, bdate.watekAlit);
    t.is(BD.Lintang.KIRIMAN, bdate.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pararasan);
    t.is(BD.PancaSuda.SUMUR_SINABA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.SUKA_PINANGGIH, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([7], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.NAMARUPA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1923, bdate.saka);
    t.is(BD.Sasih.NAMPIH_KATIGA, bdate.sasih);
});

test("2003-01-03-node", t => {
    const date = new Date(2003,0,3);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.KRULUT, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.MENALA, bdate.caturWara);
    t.is(BD.PancaWara.WAGE, bdate.pancaWara);
    t.is(BD.SadWara.PANIRON, bdate.sadWara);
    t.is(BD.SaptaWara.SUKRA, bdate.saptaWara);
    t.is(BD.AstaWara.YAMA, bdate.astaWara);
    t.is(BD.SangaWara.URUNGAN, bdate.sangaWara);
    t.is(BD.DasaWara.PANDITA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.TARU, bdate.ingkel);
    t.is(BD.Jejepan.PATRA, bdate.jejepan);
    t.is(BD.WatekMadya.WONG, bdate.watekMadya);
    t.is(BD.WatekAlit.GAJAH, bdate.watekAlit);
    t.is(BD.Lintang.MAGELUT, bdate.lintang);
    t.is(BD.Pararasan.LAKU_PANDITA_SAKTI, bdate.pararasan);
    t.is(BD.PancaSuda.SUMUR_SINABA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.PATINING_AMERTA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([1], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.SASKARA, bdate.pratithiSamutPada);

    // Sasih
    t.is(1924, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("2017-01-01-node", t => {
    const date = new Date(2017,0,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is(BD.Wuku.KLAWU, bdate.wuku);

    // WeWaran
    t.is(BD.EkaWara.VOID, bdate.ekaWara);
    t.is(BD.DwiWara.MENGA, bdate.dwiWara);
    t.is(BD.TriWara.PASAH, bdate.triWara);
    t.is(BD.CaturWara.MENALA, bdate.caturWara);
    t.is(BD.PancaWara.UMANIS, bdate.pancaWara);
    t.is(BD.SadWara.PANIRON, bdate.sadWara);
    t.is(BD.SaptaWara.REDITE, bdate.saptaWara);
    t.is(BD.AstaWara.YAMA, bdate.astaWara);
    t.is(BD.SangaWara.URUNGAN, bdate.sangaWara);
    t.is(BD.DasaWara.PANDITA, bdate.dasaWara);

    // Another weWaran
    t.is(BD.Ingkel.MANUK, bdate.ingkel);
    t.is(BD.Jejepan.PATRA, bdate.jejepan);
    t.is(BD.WatekMadya.WONG, bdate.watekMadya);
    t.is(BD.WatekAlit.GAJAH, bdate.watekAlit);
    t.is(BD.Lintang.KALA_SUNGSANG, bdate.lintang);
    t.is(BD.Pararasan.LAKU_PANDITA_SAKTI, bdate.pararasan);
    t.is(BD.PancaSuda.SUMUR_SINABA, bdate.pancaSuda);

    t.is(BD.EkaJalaRsi.PATINING_AMERTA, bdate.ekaJalaRsi);

    // Penanggal
    t.deepEqual([4], bdate.sasihDay);
    t.is(BD.SasihDayInfo.PENANGGAL, bdate.sasihDayInfo);
    t.is(BD.PratithiSamutPada.JATI, bdate.pratithiSamutPada);

    // Sasih
    t.is(1938, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("2017-01-01-STR-node", t => {
    const date = new Date(2017,0,1);
    const bdate = new BD.BalineseDate(date);

    // Wuku
    t.is("Klawu", bdate.wuku.name);

    // WeWaran
    t.is("", bdate.ekaWara.name);
    t.is("Menga", bdate.dwiWara.name);
    t.is("Pasah", bdate.triWara.name);
    t.is("Menala", bdate.caturWara.name);
    t.is("Umanis", bdate.pancaWara.name);
    t.is("Paniron", bdate.sadWara.name);
    t.is("Redite", bdate.saptaWara.name);
    t.is("Yama", bdate.astaWara.name);
    t.is("Urungan", bdate.sangaWara.name);
    t.is("Pandita", bdate.dasaWara.name);

    // Another weWaran
    t.is("Manuk", bdate.ingkel.name);
    t.is("Patra", bdate.jejepan.name);
    t.is("Wong", bdate.watekMadya.name);
    t.is("Gajah", bdate.watekAlit.name);
    t.is("Kala Sungsang", bdate.lintang.name);
    t.is("Laku Pandita Sakti", bdate.pararasan.name);
    t.is("Sumur Sinaba", bdate.pancaSuda.name);

    t.is("Patining Amerta", bdate.ekaJalaRsi.name);

    // Penanggal
    t.is("Penanggal", bdate.sasihDayInfo.name);

    // Sasih
    t.is("Kapitu", bdate.sasih.name);
    t.is("Jati", bdate.pratithiSamutPada.name);
});

test("test_query_1_year_watugunung", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku = BD.Wuku.WATUGUNUNG;

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 14);
});

test("test_query_1_year_watugunung_kliwon", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku      = BD.Wuku.WATUGUNUNG;
    q.pancaWara = BD.PancaWara.KLIWON;

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 4);
});

test("test_query_1_year_watugunung_saniscara", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku      = BD.Wuku.WATUGUNUNG;
    q.saptaWara = BD.SaptaWara.SANISCARA;

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 2);
});

test("test_query_1_year_watugunung_saniscara_kliwon", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku      = BD.Wuku.WATUGUNUNG;
    q.saptaWara = BD.SaptaWara.SANISCARA;
    q.pancaWara = BD.PancaWara.KLIWON;

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 0);
});

test("test_query_1_month_agustus_katiga", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.sasih      = BD.Sasih.KATIGA;

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 9);
});

test("test_query_1_month_agustus_1", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.sasihDay = [1];

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 2);
});

test("test_query_1_month_agustus_penanggal_9", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.sasihDay = [9];
    q.sasihDayInfo = BD.SasihDayInfo.PENANGGAL;

    const arr = BD.BalineseDateUtil.filterByDateRange(start, finish, q);

    t.is(arr.length, 2);
});