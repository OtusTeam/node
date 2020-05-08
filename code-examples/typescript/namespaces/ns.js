var NS;
(function (NS) {
    function log() {
        console.log(123);
    }
    NS.log = log;
})(NS || (NS = {}));
