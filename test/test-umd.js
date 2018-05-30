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

const BD = require("../umd/balinese-date-js-lib.min");

test("1969-01-01-node", t => {
    const date = new Date(1969,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    t.is(BD.Wuku.LANGKIR, bdate.pawukon.wuku);

    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.LABA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.WAGE, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.PANIRON, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.BUDA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.BRAHMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.NOHAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.PATI, bdate.pawukon.dasawara);

    t.is(BD.Ingkel.WONG, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PATRA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.GAJAH, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LEMBU, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KARTIKA, bdate.pawukon.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SATRIA_WIBAWA, bdate.pawukon.pancasuda);

    t.is(12, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(true, bdate.isNgunaRatri);

    t.is(1890, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("1970-01-01-node", t => {
    const date = new Date(1970,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.TOLU, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.KAJENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.SRI, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.WAGE, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.URUKUNG, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.WRESPATI, bdate.pawukon.saptawara);
    t.is(BD.Astawara.SRI, bdate.pawukon.astawara);
    t.is(BD.Sangawara.GIGIS, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.SUKA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.SATO, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.WATU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LINTAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KUMBA, bdate.pawukon.lintang);
    t.is(BD.Pararasan.ARAS_KEMBANG, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.TUNGGAK_SEMI, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(8, bdate.penanggal);
    t.is(BD.PenanggalInfo.PANGELONG, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1891, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});


test("1976-03-31-node", t => {
    const date = new Date(1976,2,31);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.SINTA, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.MENALA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.KLIWON, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.PANIRON, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.BUDA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.YAMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.DANGU, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.MANUH, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.WONG, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PATRA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.WONG, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LEMBU, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.TIWA_TIWA, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_SURYA, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.LEBU_KATIUB_ANGIN, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(15, bdate.penanggal);
    t.is(BD.PenanggalInfo.TILEM, bdate.penanggalInfo);
    t.is(true, bdate.isNgunaRatri);

    // Sasih
    t.is(1897, bdate.saka);
    t.is(BD.Sasih.KASANGA, bdate.sasih);
});


test("1976-04-01-node", t => {
    const date = new Date(1976,3,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.SINTA, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.SRI, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.WAS, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.WRESPATI, bdate.pawukon.saptawara);
    t.is(BD.Astawara.LUDRA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.JANGUR, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.DUKA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.WONG, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.WONG, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.BUTA, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.ULER, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.SANGKA_TIKEL, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_BINTANG, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SATRIA_WIBAWA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(2, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1898, bdate.saka);
    t.is(BD.Sasih.KADASA, bdate.sasih);
});


test("1978-05-08-node", t => {
    const date = new Date(1978,4,8);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.MATAL, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.MENALA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.PON, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.PANIRON, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SOMA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.YAMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.NOHAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.PATI, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.MINA, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PATRA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.GAJAH, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LEMBU, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KIRIMAN, bdate.pawukon.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SUMUR_SINABA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(1, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1900, bdate.saka);
    t.is(BD.Sasih.MALA_DESTHA, bdate.sasih);
});


test("1993-03-24-node", t => {
    const date = new Date(1993,2,24);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.KRULUT, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.LABA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.PAING, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.ARYANG, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.BUDA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.INDRA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.OGAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.MANUSA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.TARU, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.GAJAH, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LINTAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.GAJAH_MINA, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_AIR, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.WISESA_SEGARA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(1, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1915, bdate.saka);
    t.is(BD.Sasih.KADASA, bdate.sasih);
});


test("1993-09-01-node", t => {
    const date = new Date(1993,8,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.SUNGSANG, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.JAYA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.PON, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.TUNGLEH, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.BUDA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.GURU, bdate.pawukon.astawara);
    t.is(BD.Sangawara.DANGU, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.SRI, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.MANUK, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.MINA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.SUKU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.GAJAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.LUMBUNG, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_BULAN, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.BUMI_KAPETAK, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(14, bdate.penanggal);
    t.is(BD.PenanggalInfo.PURNAMA, bdate.penanggalInfo);
    t.is(true, bdate.isNgunaRatri);

    // Sasih
    t.is(1915, bdate.saka);
    t.is(BD.Sasih.NAMPIH_KARO, bdate.sasih);
});


test("1999-01-01-node", t => {
    const date = new Date(1999,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.MERAKIH, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.JAYA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.WAS, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SUKRA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.GURU, bdate.pawukon.astawara);
    t.is(BD.Sangawara.OGAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.PATI, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.BUKU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.WONG, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.GAJAH, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LEMBU, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.ANGSA_ANGREM, bdate.pawukon.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SATRIA_WIRANG, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(13, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1920, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});


test("1999-03-17-node", t => {
    const date = new Date(1999,2,17);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.DUKUT, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.LABA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.ARYANG, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.BUDA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.BRAHMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.TULUS, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.SUKA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.TARU, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.WATU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LINTAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.TANGIS, bdate.pawukon.lintang);
    t.is(BD.Pararasan.ARAS_KEMBANG, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SUMUR_SINABA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(15, bdate.penanggal);
    t.is(BD.PenanggalInfo.TILEM, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1920, bdate.saka);
    t.is(BD.Sasih.KASANGA, bdate.sasih);
});

test("1999-03-18-node", t => {
    const date = new Date(1999,2,18);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.DUKUT, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.KAJENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.JAYA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.PAING, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.URUKUNG, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.WRESPATI, bdate.pawukon.saptawara);
    t.is(BD.Astawara.KALA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.DADI, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.RAJA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.SATO, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.WATU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.ULER, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.SALAH_UKUR, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_BUMI, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.LEBU_KATIUB_ANGIN, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(1, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1921, bdate.saka);
    t.is(BD.Sasih.KADASA, bdate.sasih);
});

test("2000-01-01-node", t => {
    const date = new Date(2000,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.SUNGSANG, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.LABA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.PANIRON, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SANISCARA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.BRAHMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.NOHAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.SRI, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.MANUK, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PATRA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.SUKU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.GAJAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.BEGOONG, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_BULAN, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.BUMI_KAPETAK, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(9, bdate.penanggal);
    t.is(BD.PenanggalInfo.PANGELONG, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1921, bdate.saka);
    t.is(BD.Sasih.KANEM, bdate.sasih);
});

test("2000-01-17-node", t => {
    const date = new Date(2000,0,17);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.LANGKIR, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.MENALA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.PAING, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.ARYANG, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SOMA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.YAMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.JANGUR, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.DUKA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.WONG, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.TARU, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.BUTA, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.ULER, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KUKUS, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_BINTANG, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.BUMI_KAPETAK, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(11, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1921, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("2001-08-18-node", t => {
    const date = new Date(2001,7,18);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.TOLU, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.JAYA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.WAS, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SANISCARA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.GURU, bdate.pawukon.astawara);
    t.is(BD.Sangawara.OGAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.SRI, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.WONG, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.SUKU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.GAJAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.BEGOONG, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_BULAN, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.BUMI_KAPETAK, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(15, bdate.penanggal);
    t.is(BD.PenanggalInfo.TILEM, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1923, bdate.saka);
    t.is(BD.Sasih.KARO, bdate.sasih);

});

test("2001-09-17-node", t => {
    const date = new Date(2001,8,17);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.SUNGSANG, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.BETENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.SRI, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.WAS, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SOMA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.SRI, bdate.pawukon.astawara);
    t.is(BD.Sangawara.TULUS, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.RAKSASA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.MANUK, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.WONG, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.SUKU, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.ULER, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KELAPA, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_ANGIN, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.TUNGGAK_SEMI, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(15, bdate.penanggal);
    t.is(BD.PenanggalInfo.TILEM, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1923, bdate.saka);
    t.is(BD.Sasih.KATIGA, bdate.sasih);
});

test("2001-09-24-node", t => {
    const date = new Date(2001,8,24);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.DUNGULAN, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.LUANG, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.PEPET, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.KAJENG, bdate.pawukon.triwara);
    t.is(BD.Caturwara.JAYA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.PON, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.MAULU, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SOMA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.KALA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.ERANGAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.PATI, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PAKSI, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.GAJAH, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.LEMBU, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KIRIMAN, bdate.pawukon.lintang);
    t.is(BD.Pararasan.ARAS_TUDING, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SUMUR_SINABA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(7, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1923, bdate.saka);
    t.is(BD.Sasih.NAMPIH_KATIGA, bdate.sasih);
});

test("2003-01-03-node", t => {
    const date = new Date(2003,0,3);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.KRULUT, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.MENALA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.WAGE, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.PANIRON, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.SUKRA, bdate.pawukon.saptawara);
    t.is(BD.Astawara.YAMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.URUNGAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.PANDITA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.TARU, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PATRA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.WONG, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.GAJAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.MANGELUT, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_PANDITA_SAKTI, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SUMUR_SINABA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(1, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1924, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("2017-01-01-node", t => {
    const date = new Date(2017,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is(BD.Wuku.KLAWU, bdate.pawukon.wuku);

    // Wewaran
    t.is(BD.Ekawara.VOID, bdate.pawukon.ekawara);
    t.is(BD.Dwiwara.MENGA, bdate.pawukon.dwiwara);
    t.is(BD.Triwara.PASAH, bdate.pawukon.triwara);
    t.is(BD.Caturwara.MENALA, bdate.pawukon.caturwara);
    t.is(BD.Pancawara.UMANIS, bdate.pawukon.pancawara);
    t.is(BD.Sadwara.PANIRON, bdate.pawukon.sadwara);
    t.is(BD.Saptawara.REDITE, bdate.pawukon.saptawara);
    t.is(BD.Astawara.YAMA, bdate.pawukon.astawara);
    t.is(BD.Sangawara.URUNGAN, bdate.pawukon.sangawara);
    t.is(BD.Dasawara.PANDITA, bdate.pawukon.dasawara);

    // Another wewaran
    t.is(BD.Ingkel.MANUK, bdate.pawukon.ingkel);
    t.is(BD.Jejapan.PATRA, bdate.pawukon.jejapan);
    t.is(BD.PawatekanMadya.WONG, bdate.pawukon.watekMadya);
    t.is(BD.PawatekanAlit.GAJAH, bdate.pawukon.watekAlit);
    t.is(BD.Lintang.KALA_SUNGSANG, bdate.pawukon.lintang);
    t.is(BD.Pararasan.LAKU_PANDITA_SAKTI, bdate.pawukon.pararasan);
    t.is(BD.Pancasuda.SUMUR_SINABA, bdate.pawukon.pancasuda);

    // Penanggal
    t.is(4, bdate.penanggal);
    t.is(BD.PenanggalInfo.PENANGGAL, bdate.penanggalInfo);
    t.is(false, bdate.isNgunaRatri);

    // Sasih
    t.is(1938, bdate.saka);
    t.is(BD.Sasih.KAPITU, bdate.sasih);
});

test("2017-01-01-STR-node", t => {
    const date = new Date(2017,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

    // Wuku
    t.is("Klawu", bdate.pawukon.wuku.name);

    // Wewaran
    t.is("Void", bdate.pawukon.ekawara.name);
    t.is("Menga", bdate.pawukon.dwiwara.name);
    t.is("Pasah", bdate.pawukon.triwara.name);
    t.is("Menala", bdate.pawukon.caturwara.name);
    t.is("Umanis", bdate.pawukon.pancawara.name);
    t.is("Paniron", bdate.pawukon.sadwara.name);
    t.is("Redite", bdate.pawukon.saptawara.name);
    t.is("Yama", bdate.pawukon.astawara.name);
    t.is("Urungan", bdate.pawukon.sangawara.name);
    t.is("Pandita", bdate.pawukon.dasawara.name);

    // Another wewaran
    t.is("Manuk", bdate.pawukon.ingkel.name);
    t.is("Patra", bdate.pawukon.jejapan.name);
    t.is("Wong", bdate.pawukon.watekMadya.name);
    t.is("Gajah", bdate.pawukon.watekAlit.name);
    t.is("Kala Sungsang", bdate.pawukon.lintang.name);
    t.is("Laku Pandita Sakti", bdate.pawukon.pararasan.name);
    t.is("Sumur Sinaba", bdate.pawukon.pancasuda.name);

    // Penanggal
    t.is("Penanggal", bdate.penanggalInfo.name);

    // Sasih
    t.is("Kapitu", bdate.sasih.name);
});

test("test_query_1_year_watugunung", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku = BD.Wuku.WATUGUNUNG;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 14);
});

test("test_query_1_year_watugunung_kliwon", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku      = BD.Wuku.WATUGUNUNG;
    q.pancawara = BD.Pancawara.KLIWON;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 4);
});

test("test_query_1_year_watugunung_saniscara", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku      = BD.Wuku.WATUGUNUNG;
    q.saptawara = BD.Saptawara.SANISCARA;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 2);
});

test("test_query_1_year_watugunung_saniscara_kliwon", t => {
    const start = new Date(2017,0,1);
    const finish = new Date(2017,11,31);
    const q = new BD.Filter();

    q.wuku      = BD.Wuku.WATUGUNUNG;
    q.saptawara = BD.Saptawara.SANISCARA;
    q.pancawara = BD.Pancawara.KLIWON;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 0);
});

test("test_query_1_month_agustus_ngunaratri", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.isNgunaRatri      = true;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 1);
});

test("test_query_1_month_agustus_katiga", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.sasih      = BD.Sasih.KATIGA;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 9);
});

test("test_query_1_month_agustus_1", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.penanggal = 1;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 1);
});

test("test_query_1_month_agustus_penanggal_9", t => {
    const start = new Date(2017,7,1);
    const finish = new Date(2017,7,31);
    const q = new BD.Filter();

    q.penanggal = 9;
    q.penanggalInfo = BD.PenanggalInfo.PENANGGAL;

    const arr = BD.BalineseDateUtil.getBalineseDateByDate(q, start, finish);

    t.is(arr.length, 2);
});