var schedule = "https://docs.google.com/spreadsheets/d/1QhWSYjOyVXGbim4p9tD2JDxoco_7U3Y95UQbyqiyqLk";
var journal = "https://docs.google.com/spreadsheets/d/1u5P09AJLjQ2h1DOcNeYCFgSgYqnrTy3hdT2xUrchWtA";
var attendant = "https://docs.google.com/spreadsheets/d/1QOIyewyj3MQz2eOk3gBVmw4AacRRll7rI9w8m3zhzmk";
var grade = "https://docs.google.com/spreadsheets/d/1dOLeyPwdLV4TweDUfaZUJOpVjjJ1UOttIvLX1Hb5SVE";
var promes_x = "";
var promes_xi = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQp1yrHhEsV8UbjJGAYSWXNHDuOt4KHRPy_84BfD7i9mRdHchxexrji2u4zinGXkaomh9izOrtXbkMN/pub?gid=1859272054";
var promes_xii = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQp1yrHhEsV8UbjJGAYSWXNHDuOt4KHRPy_84BfD7i9mRdHchxexrji2u4zinGXkaomh9izOrtXbkMN/pub?gid=1844983322";
var prota_x = "";
var prota_xi = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQp1yrHhEsV8UbjJGAYSWXNHDuOt4KHRPy_84BfD7i9mRdHchxexrji2u4zinGXkaomh9izOrtXbkMN/pub?gid=1452074246";
var prota_xii = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQp1yrHhEsV8UbjJGAYSWXNHDuOt4KHRPy_84BfD7i9mRdHchxexrji2u4zinGXkaomh9izOrtXbkMN/pub?gid=953679332";
var rpp_x = "";
var rpp_xi = "https://drive.google.com/drive/folders/1fOmGCnhnCtS4W033gqQvfUHXvhuXKuVs?usp=sharing";
var rpp_xii = "https://drive.google.com/drive/folders/1WrIXiaFZAGdYpyniF53_YP-vZOl7NbTL?usp=sharing";
var silabus_x = "https://docs.google.com/document/d/e/2PACX-1vT8IdfDnc81yJdKaoaTrgART2o42DbpUWPHkU1p1oljKv5A8oHM74uNdOi4hLlGXRWKJvBRSXMuxNiU/pub?embedded=true";
var silabus_xi = "https://docs.google.com/document/d/e/2PACX-1vRmI27Y7seXhmpiv50B6ciwBaBPluEhVRfIJDqppmZPFTtoBqlpTxENiZKacwWVwXKufaNWCDXE9TBc/pub?embedded=true";
var silabus_xii = "https://docs.google.com/document/d/e/2PACX-1vTlhq4SSk13_6V36CyqZyQVtADfjQMmvY9vojmUGHdobyAhJoBpBf8oHZNkaNyCY-rR89Cg6InhkETy/pub?embedded=true";
var ulangan_x = "";
var ulangan_xi = "";
var ulangan_xii = "";


function writeSchedule() {
    document.write(sche);
}
function writeJournal() {
    document.write(jour);
}
function writeAttendant() {
    document.write(atte);
}
function writeGrades() {
    document.write(grad);
}
function edit(link) {
    var toBeWritten = `<a href=` + link + `/edit#gid=0` + ` class="btn btn-info" role="button">
        <i class="icon-edit"></i>Edit</a></br></br>`;
    document.write(toBeWritten);
}
function showMain(link) {
    var toBeWritten = `<iframe src=` + link + `/preview` + ` height="100%" width="100%"></iframe>`;
    document.write(toBeWritten);
}
function show(link) {
    var toBeWritten = `<iframe src=` + link + `&amp;single=true&amp;widget=true&amp;headers=false` + ` height="100%" width="100%"></iframe>`;
    document.write(toBeWritten);
}
function download(link) {
    var toBeWritten = `<a href=` + link + `&single=true&output=pdf` + ` class="btn btn-info" role="button">
        <i class="icon-download"></i>
    Download
    </a>
    </br>
    </br >`;
    document.write(toBeWritten);
}
