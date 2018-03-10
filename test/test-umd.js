import test from "ava";

var BD = require("../build/umd/balinese-date-js-lib.min");

test("1969-1-1-node", t => {
    const date = new Date(1969,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

	t.is(BD.Wuku.LANGKIR, bdate.pawukon.wuku, "Salah");
});

