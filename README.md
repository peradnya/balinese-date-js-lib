# BalineseDate Javascript Library

[![pipeline status](https://gitlab.com/peradnya/balinese-date-js-lib/badges/master/pipeline.svg)](https://gitlab.com/peradnya/balinese-date-js-lib/commits/master)
[![coverage report](https://gitlab.com/peradnya/balinese-date-js-lib/badges/master/coverage.svg)](https://gitlab.com/peradnya/balinese-date-js-lib/commits/master)

## NodeJS Download

[![NPM](https://nodei.co/npm/balinese-date-js-lib.png)](https://nodei.co/npm/balinese-date-js-lib/)

## Web Page Library (UMD) Download

* [balinese-date-js-lib.js](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.js) (development)
* [balinese-date-js-lib.js.map](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.js.map)
* [balinese-date-js-lib.min.js](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.min.js) (release)
* [balinese-date-js-lib.min.js.map](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.min.js.map)

## Documentation

* [Latest Documentation](https://peradnya.gitlab.io/balinese-date-js-lib/index.html)

## Introduction

BalineseDate is an open source javascript library to build Balinese Saka Calendar in NodeJS or web page.

**Note**: This library is in **Beta Phase**. Feedbacks, corrections, or bug reports are welcomed ... :)

## Features

BalineseDate provide a easy way to convert gregorian date into balinese date.

BalineseDate support several features:

1. Immutable (Thread Safe)
2. Sasih
    1. Penanggal / Pangelong
    2. Purnama / Tilem
    3. Mala Masa / Nampih Sasih
    4. NgunaRatri
    5. Pratithi Samut Pada __(v0.3.0)__
3. Saka Year
4. Pawukon
    1. Wuku
    2. Wewaran (Ekawara - Dasawara)
    3. Ingkel
    4. Jejapan
    5. Pawatekan (Alit + Madya)
    6. Lintang
    7. Pancasuda
    8. Pararasan
    9. Rakam
    10. Eka Jala Rsi __(v0.3.0)__
5. Utilities
    1. Get the BalineseDate(s) from selected Date and Filter __(v0.2.0)__

## How to Build

### Requirement

The recomended requirement to build this project is:

1. Latest NodeJS (Recomended >= 8.11.x LTS)
2. Latest Git Client

### Install Depedencies

To install depedencies that nessesary to build this project, developer should using following command:

```sh
[project root]$ npm install
```

### Building BalineseDate Library

To build all BalineseDate Library (NodeJS, UMD, minimized UMD), developer should using following command:

```sh
[project root]$ npm run build
```

if developer only need to build specific BalineseDate library, developer should using following command:

```sh
# Build NodeJS Lib
[project root]$ npm run build:nodejs

# Build Web Page (UMD) Lib
[project root]$ npm run build:umd

# Build minimized Web Page (UMD) Lib
[project root]$ npm run build:umd-dist
```

### Building Documentation (Typedoc)

Documentation of BalineseDate Library could be built by using following command:

```sh
[project root]$ npm run doc
```

You could find the documentation at:

```sh
[project root]/doc/index.html
```

### Testing & Checking

Testing and checking of BalineseDate Library could be done by using following command:

```sh
[project root]$ npm run test
```

To build test result, developer should using following command:

```sh
[project root]$ npm run report
```

You could find the test results at:

```sh
[project root]/coverage/lcov-report/index.html
```

## Using in Code

### NodeJS

```COMING SOON```

### Browser (Web Page)

```COMING SOON```

## References

* Ardhana, I.B.S.(2005). *"Pokok-Pokok Wariga"*. Surabaya : Paramita.
* babadbali.com (Yayasan Bali Galang) for [wewaran](http://www.babadbali.com/pewarigaan/perhitungan.htm) and [paringkelan](http://www.babadbali.com/pewarigaan/paringkelan.htm) algorithm.
* kalenderbali.org and kalenderbali.info for cross-checking and building sample test-cases.
* Pendit, Nyoman.(2001). *"Nyepi: kebangkitan, toleransi, dan kerukunan"*. Jakarta : Gramedia. Retrieved at [google book](https://books.google.co.id/books?id=4ND9KPn2o8AC).
* Prawira, I Putu Candra et.al.(2015).*"Pengembangan Aplikasi Kalender Saka Bali pada Sistem Operasi Machintos"*. E-Jurnal Merpati, Vol.3. Retrieved at [ojs.unud.ac.id](https://ojs.unud.ac.id/index.php/merpati/article/view/17799/11547).