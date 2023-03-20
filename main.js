//////////////////////CẤU HÌNH KẾT NỐI KEPWARE////////////////////
const { TagBuilder, IotGateway } = require('kepserverex-js');
const tagBuilder = new TagBuilder({ namespace: 'tram 10.10T3' });
const tagBuilder1 = new TagBuilder({ namespace: 'tram 10.10T1' });
const tagBuilder2 = new TagBuilder({ namespace: 'tram 10.10T2' });
const tagBuilder3 = new TagBuilder({ namespace: 'tram 10.10T4' });
const tram11_1 = new TagBuilder({ namespace: 'tram 11.11T1' });
const tram11_2 = new TagBuilder({ namespace: 'tram 11.11T2' });
const tram15 = new TagBuilder({ namespace: 'tram 13.13T1' });
const tram12_1 = new TagBuilder({ namespace: 'tram 12.12T1' });
const tram12_2 = new TagBuilder({ namespace: 'tram 12.12T2' });
const tram14 = new TagBuilder({ namespace: 'tram 14.14T1' });
const tram9_1 = new TagBuilder({ namespace: 'tram 9A.9T1' });
const tram9_2 = new TagBuilder({ namespace: 'tram 9A.9T2' });
const tram9_3 = new TagBuilder({ namespace: 'tram 9B.9T3' });
const tram9_4 = new TagBuilder({ namespace: 'tram 9B.9T4' });
const tram3_1 = new TagBuilder({ namespace: 'tram 3.3T1' });
const tram3_2 = new TagBuilder({ namespace: 'tram 3.3T2' });
const tram4_1 = new TagBuilder({ namespace: 'tram 4.4T1' });
const tram4_2 = new TagBuilder({ namespace: 'tram 4.4T2' });
const tram4_3 = new TagBuilder({ namespace: 'tram 4.4T3' });
const tram2_1 = new TagBuilder({ namespace: 'tram2.2t1' });
const tram2_2 = new TagBuilder({ namespace: 'tram2.2t2' });
const tram2_3 = new TagBuilder({ namespace: 'tram2.2t3' });
const tram2_4 = new TagBuilder({ namespace: 'tram2.2t4' });
const tram5_1 = new TagBuilder({ namespace: 'tram 5.5T1' });
const tram5_2 = new TagBuilder({ namespace: 'tram 5.5T2' });
const tram5_3 = new TagBuilder({ namespace: 'tram 5.5T3' });
const tram5_4 = new TagBuilder({ namespace: 'tram 5.5T4' });
const iotGateway = new IotGateway({
    host: '127.0.0.1',
    port: 5000,
});
/////////////HÀM ĐỌC/GHI DỮ LIỆU XUỐNG KEPWARE(PLC)//////////////
//Đọc dữ liệu
// tram 10
///////////////////// tram 10T3
var tagArr = [];
function fn_tagRead() {
    iotGateway.read(TagList).then((data) => {
        var lodash = require('lodash');
        tagArr = lodash.map(data, (item) => item.v);
        console.log(tagArr);
    });
}
// tram 10t1
var tagArr1 = [];
function fn_tagRead1() {
    iotGateway.read(TagList1).then((data) => {
        var lodash1 = require('lodash');
        tagArr1 = lodash1.map(data, (item) => item.v);
        console.log(tagArr1);
    });
}
// TRAM 10T2
var tagArr2 = [];
function fn_tagRead2() {
    iotGateway.read(TagList2).then((data) => {
        var lodash2 = require('lodash');
        tagArr2 = lodash2.map(data, (item) => item.v);
        console.log(tagArr2);
    });
}
// TRAM 10T4
var tagArr3 = [];
function fn_tagRead3() {
    iotGateway.read(TagList3).then((data) => {
        var lodash3 = require('lodash');
        tagArr3 = lodash3.map(data, (item) => item.v);
        console.log(tagArr3);
    });
}
////////////// TRAM 11
var ArrTram11_1 = [];
function fn_tagTram11_1() {
    iotGateway.read(TagTram11_1).then((data) => {
        var lodash4 = require('lodash');
        ArrTram11_1 = lodash4.map(data, (item) => item.v);
        console.log(ArrTram11_1);
    });
}
var ArrTram11_2 = [];
function fn_tagTram11_2() {
    iotGateway.read(TagTram11_2).then((data) => {
        var lodash5 = require('lodash');
        ArrTram11_2 = lodash5.map(data, (item) => item.v);
        console.log(ArrTram11_2);
    });
}
/// TRẠM 15
var tagArrTram15 = [];
function fn_tagTram15() {
    iotGateway.read(TagTram15).then((data) => {
        var lodash6 = require('lodash');
        tagArrTram15 = lodash6.map(data, (item) => item.v);
        console.log(tagArrTram15);
    });
}
/// TRẠM 12
var tagArrTram12_1 = [];
function fn_tagTram12_1() {
    iotGateway.read(TagTram12_1).then((data) => {
        var lodash7 = require('lodash');
        tagArrTram12_1 = lodash7.map(data, (item) => item.v);
        console.log(tagArrTram12_1);
    });
}
var tagArrTram12_2 = [];
function fn_tagTram12_2() {
    iotGateway.read(TagTram12_2).then((data) => {
        var lodash8 = require('lodash');
        tagArrTram12_2 = lodash8.map(data, (item) => item.v);
        console.log(tagArrTram12_2);
    });
}
var tagArrTram14 = [];
function fn_tagTram14() {
    iotGateway.read(TagTram14).then((data) => {
        var lodash9 = require('lodash');
        tagArrTram14 = lodash9.map(data, (item) => item.v);
        console.log(tagArrTram14);
    });
}
///////// TRAM 9
var tagArrTram9_1 = [];
function fn_tagTram9_1() {
    iotGateway.read(TagTram9_1).then((data) => {
        var lodash10 = require('lodash');
        tagArrTram9_1 = lodash10.map(data, (item) => item.v);
        console.log(tagArrTram9_1);
    });
}
var tagArrTram9_2 = [];
function fn_tagTram9_2() {
    iotGateway.read(TagTram9_2).then((data) => {
        var lodash11 = require('lodash');
        tagArrTram9_2 = lodash11.map(data, (item) => item.v);
        console.log(tagArrTram9_2);
    });
}
var tagArrTram9_3 = [];
function fn_tagTram9_3() {
    iotGateway.read(TagTram9_3).then((data) => {
        var lodash12 = require('lodash');
        tagArrTram9_3 = lodash12.map(data, (item) => item.v);
        console.log(tagArrTram9_3);
    });
}
var tagArrTram9_4 = [];
function fn_tagTram9_4() {
    iotGateway.read(TagTram9_4).then((data) => {
        var lodash13 = require('lodash');
        tagArrTram9_4 = lodash13.map(data, (item) => item.v);
        console.log(tagArrTram9_4);
    });
}
var tagArrTram3_1 = [];
function fn_tagTram3_1() {
    iotGateway.read(TagTram3_1).then((data) => {
        var lodash14 = require('lodash');
        tagArrTram3_1 = lodash14.map(data, (item) => item.v);
        console.log(tagArrTram3_1);
    });
}
var tagArrTram3_2 = [];
function fn_tagTram3_2() {
    iotGateway.read(TagTram3_2).then((data) => {
        var lodash15 = require('lodash');
        tagArrTram3_2 = lodash15.map(data, (item) => item.v);
        console.log(tagArrTram3_2);
    });
}
var tagArrTram4_1 = [];
function fn_tagTram4_1() {
    iotGateway.read(TagTram4_1).then((data) => {
        var lodash16 = require('lodash');
        tagArrTram4_1 = lodash16.map(data, (item) => item.v);
        console.log(tagArrTram4_1);
    });
}
var tagArrTram4_2 = [];
function fn_tagTram4_2() {
    iotGateway.read(TagTram4_2).then((data) => {
        var lodash17 = require('lodash');
        tagArrTram4_2 = lodash17.map(data, (item) => item.v);
        console.log(tagArrTram4_2);
    });
}
var tagArrTram4_3 = [];
function fn_tagTram4_3() {
    iotGateway.read(TagTram4_3).then((data) => {
        var lodash18 = require('lodash');
        tagArrTram4_3 = lodash18.map(data, (item) => item.v);
        console.log(tagArrTram4_3);
    });
}
var tagArrTram2_1 = [];
function fn_tagTram2_1() {
    iotGateway.read(TagTram2_1).then((data) => {
        var lodash19 = require('lodash');
        tagArrTram2_1 = lodash19.map(data, (item) => item.v);
        console.log(tagArrTram2_1);
    });
}
var tagArrTram2_2 = [];
function fn_tagTram2_2() {
    iotGateway.read(TagTram2_2).then((data) => {
        var lodash20 = require('lodash');
        tagArrTram2_2 = lodash20.map(data, (item) => item.v);
        console.log(tagArrTram2_2);
    });
}
var tagArrTram2_3 = [];
function fn_tagTram2_3() {
    iotGateway.read(TagTram2_3).then((data) => {
        var lodash21 = require('lodash');
        tagArrTram2_3 = lodash21.map(data, (item) => item.v);
        console.log(tagArrTram2_3);
    });
}
var tagArrTram2_4 = [];
function fn_tagTram2_4() {
    iotGateway.read(TagTram2_4).then((data) => {
        var lodash22 = require('lodash');
        tagArrTram2_4 = lodash22.map(data, (item) => item.v);
        console.log(tagArrTram2_4);
    });
}
var tagArrTram5_1 = [];
function fn_tagTram5_1() {
    iotGateway.read(TagTram5_1).then((data) => {
        var lodash23 = require('lodash');
        tagArrTram5_1 = lodash23.map(data, (item) => item.v);
        console.log(tagArrTram5_1);
    });
}
var tagArrTram5_2 = [];
function fn_tagTram5_2() {
    iotGateway.read(TagTram5_2).then((data) => {
        var lodash24 = require('lodash');
        tagArrTram5_2 = lodash24.map(data, (item) => item.v);
        console.log(tagArrTram5_2);
    });
}
var tagArrTram5_3 = [];
function fn_tagTram5_3() {
    iotGateway.read(TagTram5_3).then((data) => {
        var lodash25 = require('lodash');
        tagArrTram5_3 = lodash25.map(data, (item) => item.v);
        console.log(tagArrTram5_3);
    });
}
var tagArrTram5_4 = [];
function fn_tagTram5_4() {
    iotGateway.read(TagTram5_4).then((data) => {
        var lodash26 = require('lodash');
        tagArrTram5_4 = lodash26.map(data, (item) => item.v);
        console.log(tagArrTram5_4);
    });
}
///////////////////////////ĐỊNH NGHĨA TAG////////////////////////
// Khai báo tag
//// TRAM 10

var T10T3_A = 'PHASE A';
var T10T1_A = 'PHASE A';
var T10T2_A = 'PHASE A';
var T10T4_A = 'PHASE A';

var T10T3_B = 'PHASE B';
var T10T1_B = 'PHASE B';
var T10T2_B = 'PHASE B';
var T10T4_B = 'PHASE B';

var T10T3_C = 'PHASE C';
var T10T1_C = 'PHASE C';
var T10T2_C = 'PHASE C';
var T10T4_C = 'PHASE C';

var T10T3_Status = 'STATUS_FAN';
var T10T4_Status = 'STATUS_FAN';
var T10T1_Status = 'STATUS_FAN';
var T10T2_Status = 'STATUS_FAN';

//tram 11
var T11T1_A = 'PHASE A';
var T11T1_B = 'PHASE B';
var T11T1_C = 'PHASE C';

var T11T2_A = 'PHASE A';
var T11T2_B = 'PHASE B';
var T11T2_C = 'PHASE C';

var T11T1_Status = 'STATUS_FAN';
var T11T2_Status = 'STATUS_FAN';
// tram 15
var T15T1_A = 'PHASE A';
var T15T1_B = 'PHASE B';
var T15T1_C = 'PHASE C';
var T15T1_Status = 'STATUS_FAN';
////////// TRAM 12
/// TRẠM 12_1
var T12T1_A = 'PHASE A';
var T12T2_A = 'PHASE A';

var T12T1_B = 'PHASE B';
var T12T2_B = 'PHASE B';

var T12T1_C = 'PHASE C';
var T12T2_C = 'PHASE C';

var T12T1_Status = 'STATUS_FAN';
var T12T2_Status = 'STATUS_FAN';
////////////// TRẠM 14
var T14T1_A = 'PHASE A';

var T14T1_B = 'PHASE B';

var T14T1_C = 'PHASE C';

var T14T1_Status = 'STATUS_FAN';
////////// TRAM 9
/// TRẠM 9_1
var T9T1_A = 'PHASE A';
var T9T2_A = 'PHASE A';
var T9T3_A = 'PHASE A';
var T9T4_A = 'PHASE A';

var T9T1_B = 'PHASE B';
var T9T2_B = 'PHASE B';
var T9T3_B = 'PHASE B';
var T9T4_B = 'PHASE B';

var T9T1_C = 'PHASE C';
var T9T2_C = 'PHASE C';
var T9T3_C = 'PHASE C';
var T9T4_C = 'PHASE C';

var T9T1_Status = 'STATUS_FAN';
var T9T2_Status = 'STATUS_FAN';

var T9T3_Status = 'STATUS_FAN';
var T9T4_Status = 'STATUS_FAN';
//// TRAM 3
var T3T1_A = 'PHASE A';
var T3T2_A = 'PHASE A';

var T3T1_B = 'PHASE B';
var T3T2_B = 'PHASE B';

var T3T1_C = 'PHASE C';
var T3T2_C = 'PHASE C';

var T3T1_Status = 'STATUS_FAN';
var T3T2_Status = 'STATUS_FAN';
/////// TRẠM 4

var T4T1_A = 'PHASE A';
var T4T2_A = 'PHASE A';
var T4T3_A = 'PHASE A';

var T4T1_B = 'PHASE B';
var T4T2_B = 'PHASE B';
var T4T3_B = 'PHASE B';

var T4T1_C = 'PHASE C';
var T4T2_C = 'PHASE C';
var T4T3_C = 'PHASE C';

var T4T1_Status = 'STATUS_FAN';
var T4T2_Status = 'STATUS_FAN';
var T4T3_Status = 'STATUS_FAN';
/// tram 2
var T2T1_A = 'PHASEA';
var T2T2_A = 'PHASE A';
var T2T3_A = 'PHASE A';
var T2T4_A = 'PHASE A';

var T2T1_B = 'PHASE B';
var T2T2_B = 'PHASE B';
var T2T3_B = 'PHASE B';
var T2T4_B = 'PHASE B';

var T2T1_C = 'PHASE C';
var T2T2_C = 'PHASE C';
var T2T3_C = 'PHASE C';
var T2T4_C = 'PHASE C';

var T2T1_Status = 'STATUS_FAN';
var T2T2_Status = 'STATUS_FAN';
var T2T3_Status = 'STATUS_FAN';
var T2T4_Status = 'STATUS_FAN';
///// TRAM 5
var T5T1_A = 'PHASE A';
var T5T2_A = 'PHASE A';
var T5T3_A = 'PHASE A';
var T5T4_A = 'PHASE A';

var T5T1_B = 'PHASE B';
var T5T2_B = 'PHASE B';
var T5T3_B = 'PHASE B';
var T5T4_B = 'PHASE B';

var T5T1_C = 'PHASE C';
var T5T2_C = 'PHASE C';
var T5T3_C = 'PHASE C';
var T5T4_C = 'PHASE C';

var T5T1_Status = 'STATUS_FAN';
var T5T2_Status = 'STATUS_FAN';
var T5T3_Status = 'STATUS_FAN';
var T5T4_Status = 'STATUS_FAN';
// ĐỌC DỮ LIỆU
// TRAM 10
// TRAM 10T3
const TagList = tagBuilder.read(T10T3_A).read(T10T3_B).read(T10T3_C).read(T10T3_Status).get();
// TRAM 10T1
const TagList1 = tagBuilder1.read(T10T1_A).read(T10T1_B).read(T10T1_C).read(T10T1_Status).get();
// TRAM 10T2
const TagList2 = tagBuilder2.read(T10T2_A).read(T10T2_B).read(T10T2_C).read(T10T2_Status).get();
// TRAM 10T4
const TagList3 = tagBuilder3.read(T10T4_A).read(T10T4_B).read(T10T4_C).read(T10T4_Status).get();
/////////////////////////////// TRẠM 11
const TagTram11_1 = tram11_1.read(T11T1_A).read(T11T1_B).read(T11T1_C).read(T11T1_Status).get();

const TagTram11_2 = tram11_2.read(T11T2_A).read(T11T2_B).read(T11T2_C).read(T11T2_Status).get();
///////// TRẠM 15
const TagTram15 = tram15.read(T15T1_A).read(T15T1_B).read(T15T1_C).read(T15T1_Status).get();
///////////// TRAM 12
const TagTram12_1 = tram12_1.read(T12T1_A).read(T12T1_B).read(T12T1_C).read(T12T1_Status).get();
const TagTram12_2 = tram12_2.read(T12T2_A).read(T12T2_B).read(T12T2_C).read(T12T2_Status).get();
/////////// trạm 14
const TagTram14 = tram14.read(T14T1_A).read(T14T1_B).read(T14T1_C).read(T14T1_Status).get();
/////////// trạm 9
const TagTram9_1 = tram9_1.read(T9T1_A).read(T9T1_B).read(T9T1_C).read(T9T1_Status).get();
const TagTram9_2 = tram9_2.read(T9T2_A).read(T9T2_B).read(T9T2_C).read(T9T2_Status).get();
const TagTram9_3 = tram9_3.read(T9T3_A).read(T9T3_B).read(T9T3_C).read(T9T3_Status).get();
const TagTram9_4 = tram9_4.read(T9T4_A).read(T9T4_B).read(T9T4_C).read(T9T4_Status).get();
////// TRẠM 3
const TagTram3_1 = tram3_1.read(T3T1_A).read(T3T1_B).read(T3T1_C).read(T3T1_Status).get();
const TagTram3_2 = tram3_2.read(T3T2_A).read(T3T2_B).read(T3T2_C).read(T3T2_Status).get();
//// TRẠM 4
const TagTram4_1 = tram4_1.read(T4T1_A).read(T4T1_B).read(T4T1_C).read(T4T1_Status).get();

const TagTram4_2 = tram4_2.read(T4T2_A).read(T4T2_B).read(T4T2_C).read(T4T2_Status).get();

const TagTram4_3 = tram4_3.read(T4T3_A).read(T4T3_B).read(T4T3_C).read(T4T3_Status).get();
//////// TRAM 2
const TagTram2_1 = tram2_1.read(T2T1_A).read(T2T1_B).read(T2T1_C).read(T2T1_Status).get();
const TagTram2_2 = tram2_2.read(T2T2_A).read(T2T2_B).read(T2T2_C).read(T2T2_Status).get();
const TagTram2_3 = tram2_3.read(T2T3_A).read(T2T3_B).read(T2T3_C).read(T2T3_Status).get();
const TagTram2_4 = tram2_4.read(T2T4_A).read(T2T4_B).read(T2T4_C).read(T2T4_Status).get();
//////// TRAM 5
const TagTram5_1 = tram5_1.read(T5T1_A).read(T5T1_B).read(T5T1_C).read(T5T1_Status).get();
const TagTram5_2 = tram5_2.read(T5T2_A).read(T5T2_B).read(T5T2_C).read(T5T2_Status).get();
const TagTram5_3 = tram5_3.read(T5T3_A).read(T5T3_B).read(T5T3_C).read(T5T3_Status).get();
const TagTram5_4 = tram5_4.read(T5T4_A).read(T5T4_B).read(T5T4_C).read(T5T4_Status).get();
///////////////////////////QUÉT DỮ LIỆU////////////////////////
// Tạo Timer quét dữ liệu
setInterval(
    () => fn_read_data_scan(),
    1000 //1000ms = 1s
);

// Quét dữ liệu
function fn_read_data_scan() {
    ///TRAM 10
    fn_tagRead();
    fn_tagRead1(); // Đọc giá trị tag
    fn_tagRead2();
    fn_tagRead3();

    fn_tagTram11_1();
    fn_tagTram11_2();
    fn_tagTram15();
    fn_tagTram12_1();
    fn_tagTram12_2();
    fn_tagTram14();
    fn_tagTram9_1();
    fn_tagTram9_2();
    fn_tagTram9_3();
    fn_tagTram9_4();
    fn_tagTram3_1();
    fn_tagTram3_2();
    fn_tagTram4_1();
    fn_tagTram4_2();
    fn_tagTram4_3();
    fn_tagTram2_1();
    fn_tagTram2_2();
    fn_tagTram2_3();
    fn_tagTram2_4();
    fn_tagTram5_1();
    fn_tagTram5_2();
    fn_tagTram5_3();
    fn_tagTram5_4();
}

// /////////////////////////THIẾT LẬP KẾT NỐI WEB/////////////////////////
var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
// var server = require('http').Server(app);
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// server.listen(5000, '127.0.0.1');

server.listen(process.env.PORT || 5000);
// Home calling
app.get('/', function (req, res) {
    res.render('home');
});

// ///////////LẬP BẢNG TAG ĐỂ GỬI QUA CLIENT (TRÌNH DUYỆT)///////////
function fn_tag() {
    io.sockets.emit('T10T3_A', tagArr[0]);
    io.sockets.emit('T10T3_B', tagArr[1]);
    io.sockets.emit('T10T3_C', tagArr[2]);
    io.sockets.emit('T10T3_Status', tagArr[3]);
    io.sockets.emit('T10T1_A', tagArr1[0]);
    io.sockets.emit('T10T1_B', tagArr1[1]);
    io.sockets.emit('T10T1_C', tagArr1[2]);
    io.sockets.emit('T10T1_Status', tagArr1[3]);
    // io.sockets.emit("T10T1_Status", tagArr[3]);
    io.sockets.emit('T10T2_A', tagArr2[0]);
    io.sockets.emit('T10T2_B', tagArr2[1]);
    io.sockets.emit('T10T2_C', tagArr2[2]);
    io.sockets.emit('T10T2_Status', tagArr2[3]);
    io.sockets.emit('T10T4_A', tagArr3[0]);
    io.sockets.emit('T10T4_B', tagArr3[1]);
    io.sockets.emit('T10T4_C', tagArr3[2]);
    io.sockets.emit('T10T4_Status', tagArr3[3]);
    ///////////////
    io.sockets.emit('T11T1_A', ArrTram11_1[0]);
    io.sockets.emit('T11T1_B', ArrTram11_1[1]);
    io.sockets.emit('T11T1_C', ArrTram11_1[2]);
    io.sockets.emit('T11T1_Status', ArrTram11_1[3]);

    io.sockets.emit('T11T2_A', ArrTram11_2[0]);
    io.sockets.emit('T11T2_B', ArrTram11_2[1]);
    io.sockets.emit('T11T2_C', ArrTram11_2[2]);
    io.sockets.emit('T11T2_Status', ArrTram11_2[3]);

    io.sockets.emit('T15T1_A', tagArrTram15[0]);
    io.sockets.emit('T15T1_B', tagArrTram15[1]);
    io.sockets.emit('T15T1_C', tagArrTram15[2]);
    io.sockets.emit('T15T1_Status', tagArrTram15[3]);

    io.sockets.emit('T12T1_A', tagArrTram12_1[0]);
    io.sockets.emit('T12T1_B', tagArrTram12_1[1]);
    io.sockets.emit('T12T1_C', tagArrTram12_1[2]);
    io.sockets.emit('T12T1_Status', tagArrTram12_1[3]);

    io.sockets.emit('T12T2_A', tagArrTram12_2[0]);
    io.sockets.emit('T12T2_B', tagArrTram12_2[1]);
    io.sockets.emit('T12T2_C', tagArrTram12_2[2]);
    io.sockets.emit('T12T2_Status', tagArrTram12_2[3]);

    io.sockets.emit('T14T1_A', tagArrTram14[0]);
    io.sockets.emit('T14T1_B', tagArrTram14[1]);
    io.sockets.emit('T14T1_C', tagArrTram14[2]);
    io.sockets.emit('T14T1_Status', tagArrTram14[3]);

    io.sockets.emit('T9T1_A', tagArrTram9_1[0]);
    io.sockets.emit('T9T1_B', tagArrTram9_1[1]);
    io.sockets.emit('T9T1_C', tagArrTram9_1[2]);
    io.sockets.emit('T9T1_Status', tagArrTram9_1[3]);

    io.sockets.emit('T9T2_A', tagArrTram9_2[0]);
    io.sockets.emit('T9T2_B', tagArrTram9_2[1]);
    io.sockets.emit('T9T2_C', tagArrTram9_2[2]);
    io.sockets.emit('T9T2_Status', tagArrTram9_2[3]);

    io.sockets.emit('T9T3_A', tagArrTram9_3[0]);
    io.sockets.emit('T9T3_B', tagArrTram9_3[1]);
    io.sockets.emit('T9T3_C', tagArrTram9_3[2]);
    io.sockets.emit('T9T3_Status', tagArrTram9_3[3]);

    io.sockets.emit('T9T4_A', tagArrTram9_4[0]);
    io.sockets.emit('T9T4_B', tagArrTram9_4[1]);
    io.sockets.emit('T9T4_C', tagArrTram9_4[2]);
    io.sockets.emit('T9T4_Status', tagArrTram9_4[3]);

    io.sockets.emit('T9T4_A', tagArrTram9_4[0]);
    io.sockets.emit('T9T4_B', tagArrTram9_4[1]);
    io.sockets.emit('T9T4_C', tagArrTram9_4[2]);
    io.sockets.emit('T9T4_Status', tagArrTram9_4[3]);

    io.sockets.emit('T3T1_A', tagArrTram3_1[0]);
    io.sockets.emit('T3T1_B', tagArrTram3_1[1]);
    io.sockets.emit('T3T1_C', tagArrTram3_1[2]);
    io.sockets.emit('T3T1_Status', tagArrTram3_1[3]);

    io.sockets.emit('T3T2_A', tagArrTram3_2[0]);
    io.sockets.emit('T3T2_B', tagArrTram3_2[1]);
    io.sockets.emit('T3T2_C', tagArrTram3_2[2]);
    io.sockets.emit('T3T2_Status', tagArrTram3_2[3]);

    io.sockets.emit('T4T1_A', tagArrTram4_1[0]);
    io.sockets.emit('T4T1_B', tagArrTram4_1[1]);
    io.sockets.emit('T4T1_C', tagArrTram4_1[2]);
    io.sockets.emit('T4T1_Status', tagArrTram4_1[3]);

    io.sockets.emit('T4T2_A', tagArrTram4_2[0]);
    io.sockets.emit('T4T2_B', tagArrTram4_2[1]);
    io.sockets.emit('T4T2_C', tagArrTram4_2[2]);
    io.sockets.emit('T4T2_Status', tagArrTram4_2[3]);

    io.sockets.emit('T4T3_A', tagArrTram4_3[0]);
    io.sockets.emit('T4T3_B', tagArrTram4_3[1]);
    io.sockets.emit('T4T3_C', tagArrTram4_3[2]);
    io.sockets.emit('T4T3_Status', tagArrTram4_3[3]);

    io.sockets.emit('T2T1_A', tagArrTram2_1[0]);
    io.sockets.emit('T2T1_B', tagArrTram2_1[1]);
    io.sockets.emit('T2T1_C', tagArrTram2_1[2]);
    io.sockets.emit('T2T1_Status', tagArrTram2_1[3]);

    io.sockets.emit('T2T2_A', tagArrTram2_2[0]);
    io.sockets.emit('T2T2_B', tagArrTram2_2[1]);
    io.sockets.emit('T2T2_C', tagArrTram2_2[2]);
    io.sockets.emit('T2T2_Status', tagArrTram2_2[3]);

    io.sockets.emit('T2T3_A', tagArrTram2_3[0]);
    io.sockets.emit('T2T3_B', tagArrTram2_3[1]);
    io.sockets.emit('T2T3_C', tagArrTram2_3[2]);
    io.sockets.emit('T2T3_Status', tagArrTram2_3[3]);

    io.sockets.emit('T2T4_A', tagArrTram2_4[0]);
    io.sockets.emit('T2T4_B', tagArrTram2_4[1]);
    io.sockets.emit('T2T4_C', tagArrTram2_4[2]);
    io.sockets.emit('T2T4_Status', tagArrTram2_4[3]);

    io.sockets.emit('T5T1_A', tagArrTram5_1[0]);
    io.sockets.emit('T5T1_B', tagArrTram5_1[1]);
    io.sockets.emit('T5T1_C', tagArrTram5_1[2]);
    io.sockets.emit('T5T1_Status', tagArrTram5_1[3]);

    io.sockets.emit('T5T2_A', tagArrTram5_2[0]);
    io.sockets.emit('T5T2_B', tagArrTram5_2[1]);
    io.sockets.emit('T5T2_C', tagArrTram5_2[2]);
    io.sockets.emit('T5T2_Status', tagArrTram5_2[3]);

    io.sockets.emit('T5T3_A', tagArrTram5_3[0]);
    io.sockets.emit('T5T3_B', tagArrTram5_3[1]);
    io.sockets.emit('T5T3_C', tagArrTram5_3[2]);
    io.sockets.emit('T5T3_Status', tagArrTram5_3[3]);

    io.sockets.emit('T5T4_A', tagArrTram5_4[0]);
    io.sockets.emit('T5T4_B', tagArrTram5_4[1]);
    io.sockets.emit('T5T4_C', tagArrTram5_4[2]);
    io.sockets.emit('T5T4_Status', tagArrTram5_4[3]);
}

// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////
io.on('connection', function (socket) {
    socket.on('Client-send-data', function (data) {
        fn_tag();
    });
});
