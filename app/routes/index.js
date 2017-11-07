var session = require('express-session');
var nodemailer = require('nodemailer');

var modelProduct = [{
        id: "1",
        name: "Bánh gạo vị gà",
        image: "/images/BANH GAO VI GA.jpg",
        price: 20000
    },
    {
        id: "2",
        name: "Bánh gạo vị phô mai",
        image: "/images/BANH GAO VI PHO MAI.jpg",
        price: 20000
    },
    {
        id: "3",
        name: "Bánh gạo vị rong biển",
        image: "/images/BANH GAO VI RONG BIEN.jpg",
        price: 20000
    },
    {
        id: "4",
        name: "Nước Trái Cây Phúc Bồn Tử Blackcurrant Juice",
        image: "/images/blackcurrant juice_02-10.jpg",
        price: 22000
    },
    {
        id: "5",
        name: "Nước Trái Cây Táo Apple Juice",
        image: "/images/blackcurrant juice_02-07.jpg",
        price: 22000
    },
    {
        id: "6",
        name: "Nước Trái Cây Lựu Pomerganate Juice",
        image: "/images/blackcurrant juice_02-03.jpg",
        price: 22000
    },
    {
        id: "7",
        name: "Nước Trái Cây Lựu & Trà Xanh Green Tea with Pomerganate Juice",
        image: "/images/D_Origina_blacktea_lemon_260516_06.jpg",
        price: 17000
    },
    {
        id: "8",
        name: "Nước Trái Cây Đào & Trà Xanh Green Tea with Peach Juice",
        image: "/images/D_Origina_blacktea_lemon_260516_09.jpg",
        price: 17000
    },
    {
        id: "9",
        name: "Nước Chanh & Trà Đen Black Tea with Lemon Juice",
        image: "/images/D_Origina_blacktea_lemon_260516_04.jpg",
        price: 17000
    },
    {
        id: "10",
        name: "Nước Trái Cây Táo & Trà Đen Black Tea with Lemon Juice",
        image: "/images/D_Origina_blacktea_lemon_260516_11.jpg",
        price: 17000
    },
    {
        id: "11",
        name: "Nước Socola Sữa Chocojoy",
        image: "/images/promotion_Nov2016_1000x1000_02_301016-02.jpg",
        price: 22000
    }
];
module.exports = function(app) {

    app.get('/api/product', function(req, res) {
        res.json(modelProduct);
    });
    app.get('/api/product/detail/:id', function(req, res) {
        var product = {};
        modelProduct.forEach(function(value) {
            if (value.id == req.params.id) {
                product = value;
            }
        });
        console.log(JSON.stringify(product));
        res.json(product);
    });
    app.post('/feedback', function(req, res, next) {
        var body = req.body.body;
        var email = req.body.email;
        var name = req.body.name;
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'tranthanhvt0982@gmail.com',
                pass: '26121995'
            }
        });
        var mailOptions = {
            from: 'tranthanhvt0982@gmail.com',
            to: 'sales.thaiboss@gmail.com',
            subject: 'Feedback Từ Khách Hàng',
            text: 'Xin Chào ',
            html: "<b>Tên khách hàng: " + name + "</b><br><b>Emai: " + email + "</b><br><b>Nội dung: " + body + "</b>",
        };

        transporter.sendMail(mailOptions, function(err) {
            if (err) throw err;
            else {
                res.redirect('/contact');
            }
        });
    });
    app.post('/api/thanhtoan', function(req, res, next) {
        var sdt = req.body.sdt;
        var email = req.body.email;
        var name = req.body.name;
        var address = req.body.address;
        var stk = req.body.stk;
        var fname = req.body.fname;
        var buy = req.body.buy;
        var priceCart = req.body.priceCart;

        var item = "";
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'tranthanhvt0982@gmail.com',
                pass: '26121995'
            }
        });
        modelProduct.forEach(function(value) {
            if (value.id == req.params.id) {
                product = value;
            }
        });
        buy.forEach(function(value) {
            item = item + "<br><h2>" + value.name + ". Số lượng: " + value.quanity + "</h2>"
        });
        var mailOptionsSale = {
            from: 'tranthanhvt0982@gmail.com',
            /*to: 'sales.thaiboss@gmail.com',*/
            to: 'tranthanhvt0982@gmail.com',
            subject: 'Đơn đặt hàng',
            text: 'Xin Chào ',
            html: "<h2>Tên khách hàng: " + name + "</h2><br><h2>Emai: " + email + "</h2><br><h2>Số điện thoại: " + sdt + "</h2><br><h2>Địa chỉ: " + address + "</h2><br><h2>Số tài khoản: " + stk + "</h2><br><br><h2>Danh sách sản phẩm: </h2>" + item + "<br><h2>Thành tiền: " + priceCart + "</h2>",
        };

        var mailOptionsCustomer = {
            from: 'tranthanhvt0982@gmail.com',
            /*to: 'sales.thaiboss@gmail.com',*/
            to: 'tranthanhvt0982@gmail.com',
            subject: 'Đặt hàng thành công',
            text: 'Xin Chào ',
            html: "<h1>Cảm ơn bạn đã đặt hàng công ty chúng tôi.</h1><br><h2>Chúng tôi sẽ giao hàng sau khi bạn chuyển khoản đầy đủ vào tài khoản công ty: </h2><br><h1>0987654546576654</h1><br><h2>Vui lòng kiểm tra lại thông tin bên dưới:</h2><br><h2>Tên khách hàng: " + name + "</h2><br><h2>Emai: " + email + "</h2><br><h2>Số điện thoại: " + sdt + "</h2><br><h2>Địa chỉ: " + address + "</h2><br><h2>Số tài khoản: " + stk + "</h2><br><br><h2>Danh sách sản phẩm: </h2>" + item + "<br><h2>Thành tiền: " + priceCart + "</h2><br><h2>Nếu có thắc mắc hoặc thay đổi, hãy liên hệ theo Hotline: 0901 31 32 38</h2>",
        };

        transporter.sendMail(mailOptionsSale, function(err) {
            if (err) throw err;
            else {
                transporter.sendMail(mailOptionsCustomer, function(err) {
                    if (err) throw err;
                    else {
                        res.send(true);
                    }
                });
            }
        });
    });
    app.get('*', function(req, res) {
        res.sendfile('public/index.html');
    });
};