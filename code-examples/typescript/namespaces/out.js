"use strict";
var NS;
(function (NS) {
    function log() {
        console.log(123);
    }
    NS.log = log;
})(NS || (NS = {}));
/// <reference path="ns.ts" />
NS.log();
// import log = NS
// log.log()
// import logA from "./module"
// logA()
