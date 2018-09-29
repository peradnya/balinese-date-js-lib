# BalineseDate Javascript Library

[![pipeline status](https://gitlab.com/peradnya/balinese-date-js-lib/badges/master/pipeline.svg)](https://gitlab.com/peradnya/balinese-date-js-lib/commits/master)
[![coverage report](https://gitlab.com/peradnya/balinese-date-js-lib/badges/master/coverage.svg)](https://gitlab.com/peradnya/balinese-date-js-lib/commits/master)

## Introduction

BalineseDate is an open source javascript library to build Balinese Saka Calendar in HTML-page or NodeJS.

> **Note**: This library is in **Beta Phase**, the API may change without notice.

## Features

BalineseDate is designed to be __immutable__. BalineseDate have several features like:

* [Pawukon](http://www.babadbali.com/pewarigaan/kalender-pawukon.htm)
* [Pawewaran](http://www.babadbali.com/pewarigaan/pawewaran.htm)
  * [EkaWara](http://www.babadbali.com/pewarigaan/ekawara.htm)
  * [DwiWara](http://www.babadbali.com/pewarigaan/dwiwara.htm)
  * [TriWara](http://www.babadbali.com/pewarigaan/triwara.htm)
  * [CaturWara](http://www.babadbali.com/pewarigaan/caturwara.htm)
  * [PancaWara](http://www.babadbali.com/pewarigaan/pancawara.htm)
  * [SadWara](http://www.babadbali.com/pewarigaan/sadwara.htm)
  * [SaptaWara](http://www.babadbali.com/pewarigaan/saptawara.htm)
  * [AstaWara](http://www.babadbali.com/pewarigaan/astawara.htm)
  * [SangaWara](http://www.babadbali.com/pewarigaan/sangawara.htm)
  * [DasaWara](http://www.babadbali.com/pewarigaan/dasawara.htm)
* [Paringkelan](http://www.babadbali.com/pewarigaan/paringkelan.htm)
  * [Jejepan](http://www.babadbali.com/pewarigaan/jejepan.htm)
  * [Ingkel](http://www.babadbali.com/pewarigaan/ingkel.htm)
  * [Pawatekan Madya & Alit](http://www.babadbali.com/pewarigaan/watek.htm)
  * [Lintang](http://www.babadbali.com/pewarigaan/lintang.htm)
  * [PancaSuda](http://www.babadbali.com/pewarigaan/pancasuda.htm)
  * [Pararasan](http://www.babadbali.com/pewarigaan/paarasan.htm)
  * [Rakam](http://www.babadbali.com/pewarigaan/rakam.htm)
* Eka Jala Rsi __(v0.3.0)__
* Pratithi Samut Pada __(v0.3.0)__
* Dewasa __(v0.5.0)__
* Sasih
  * Pawukon/Penanggal and Nguna Ratri.
  * Pengalantaka Eka Sungsang Pon (before 2000) & Paing (2000 and after)
  * Malamasa (< 1993), Sasih Kesinambungan (1993 - 2002), Nampih Sasih (>= 2003)
* [Saka Year](http://www.babadbali.com/pewarigaan/kalender-saka.htm)

BalineseDate also have several utilities that can be use by developer like:

* Filter BalineseDate(s) from selected Date __(v0.2.0)__
* Filter BalineseDate(s) from selected BalineseDate List __(v0.4.0)__

## Import BalineseDate into Your Project

BalineseDate Javascript Library use [**unpkg**](https://unpkg.com/balinese-date-js-lib/) as repository to publish UMD Library and also use [**npmjs.com**](https://www.npmjs.com/package/balinese-date-js-lib) as repository to publish NodeJS Library.

To import BalineseDate to your project, please choose one of these following method:

### Direct Download

* [balinese-date-js-lib.js (development)](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.js)
* [balinese-date-js-lib.js.map](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.js.map)
* [balinese-date-js-lib.min.js (production)](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.min.js)
* [balinese-date-js-lib.min.js.map](https://unpkg.com/balinese-date-js-lib/umd/balinese-date-js-lib.min.js.map)

### NPM Install

[![NPM](https://nodei.co/npm/balinese-date-js-lib.png)](https://nodei.co/npm/balinese-date-js-lib/)

## Documentation

* [Latest (master)](https://peradnya.gitlab.io/balinese-date-js-lib/index.html)

## How to Build

### Requirement

The recomended requirement to build this project are:

1. Latest NodeJS (Recomended >= 10.x)
2. Latest Git Client

### Download and Install BalineseDate Depedencies

To install NPM depedencies that nessesary to build this project, you should execute the command below:

```sh
[project root]$ npm install
```

### Building BalineseDate Library

To build all type of BalineseDate Libraries (NodeJS library, UMD library, and production-ready UMD library), you should execute the command below:

```sh
[project root]$ npm run build
```

If you only need to build specific type of BalineseDate library, you can execute the commands below:

```sh
# Build NodeJS Library
[project root]$ npm run build:nodejs

# Build UMD Library
[project root]$ npm run build:umd

# Build production-ready UMD Library
[project root]$ npm run build:umd-dist
```

### Building Documentation (Typedoc)

Documentation of BalineseDate Library can be built by executing the command below:

```sh
[project root]$ npm run doc
```

You can find the documentation at:

```sh
[project root]/doc/index.html
```

### Testing & Checking

Testing and checking of BalineseDate Library can be done by executing the command below:

```sh
[project root]$ npm run test
```

To build test result, you should enter the command below:

```sh
[project root]$ npm run report
```

You could find the test results at:

```sh
[project root]/coverage/lcov-report/index.html
```

## Using in Code

### Typescript Support

BalineseDate support Typescript by implementing declaration file ```*.d.ts``` inside the **NodeJS** library.

Below code is an example of how to use of BalineseDate (**NodeJS** version) library in Typescript:

```js
import { BalineseDate } from "BalineseDate";

const now = new BalineseDate();

console.log(now.saka); // show the saka
console.log(now.sasih.name); // show the sasih name
console.log(now.wuku.name); // show the wuku name
```

### CommonJS (NodeJS) Approach

Below code is an example of how to use of BalineseDate (**UMD** or **NodeJS** version) library using CommonJS (NodeJS) approach:

```js
const BD = require('BalineseDate');

const now = new BD.BalineseDate();

console.log(now.saka); // show the saka
console.log(now.sasih.name); // show the sasih name
console.log(now.wuku.name); // show the wuku name
```

### RequireJS (AMD) Approach

Below code is an example of how to use of BalineseDate (**UMD** version) library using RequireJS (AMD) approach:

```js
require(['BalineseDate'], function (BalineseDate) {
  const BD  = BalineseDate;
  const now = new BD.BalineseDate();

  console.log(now.saka); // show the saka
  console.log(now.sasih.name); // show the sasih name
  console.log(now.wuku.name); // show the wuku name
});
```

### HTML-page Approach

To use BalineseDate library in your HTML-page, you should use the __UMD version__ of BalineseDate library.

Below code is an example of how to use __UMD version__ of BalineseDate directly in the HTML-page:

```html
<script src="../../umd/balinese-date-js-lib.min.js"></script>
<script>
    var BD = window.BalineseDate;
    var now = new BD.BalineseDate();

    document.getElementById("saka").innerHTML = now.saka;
    document.getElementById("sasih").innerHTML = now.sasih.name;
    document.getElementById("wuku").innerHTML = now.wuku.name;
</script>
```

The example(s) of how to use  __UMD version__ of BalineseDate library in the HTML-page are available at:

```sh
[project root]/example/webpage/*.html
```

## References

* Ardhana, I.B.S. (2005). *"Pokok-Pokok Wariga"*. Surabaya : Paramita.
* babadbali.com (Yayasan Bali Galang) for [wewaran](http://www.babadbali.com/pewarigaan/perhitungan.htm) and [paringkelan](http://www.babadbali.com/pewarigaan/paringkelan.htm) algorithm.
* Pendit, Nyoman. (2001). *"Nyepi: kebangkitan, toleransi, dan kerukunan"*. Jakarta : Gramedia. Retrieved at [google book](https://books.google.co.id/books?id=4ND9KPn2o8AC).
* kalenderbali.org and kalenderbali.info for validation and building sample test-cases.