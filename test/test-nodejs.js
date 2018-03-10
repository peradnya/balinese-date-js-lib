import test from "ava";
import { BalineseDate, Wuku } from "../build/nodejs/BalineseDate";

var BD = require("../build/nodejs/BalineseDate");

test('1969-1-1-es6', t => {
	const date  = new Date(1969,0,1);
    const bdate = new BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

	t.is(Wuku.LANGKIR, bdate.pawukon.wuku, "");
});

test('1969-1-1-node', t => {
	const date  = new Date(1969,0,1);
    const bdate = new BD.BalineseDate(date.getFullYear(), date.getMonth(), date.getDate());

	t.is(BD.Wuku.LANGKIR, bdate.pawukon.wuku, "Salah");
});