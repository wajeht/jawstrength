const nodemailer = require('nodemailer');
const config = require('../config/config.js');

const smtpConfig = {
    host: config.email.host,
    port: config.email.port,
    secure: config.email.secure,
    auth: {
        user: config.email.auth_user,
        pass: config.email.auth_pass,
    },
};
const transporter = nodemailer.createTransport(smtpConfig);

exports.getIndex = (req, res, next) => {
    res.render('index.ejs', {
        pageTitle: 'JAWSTRENGTH',
        path: '/',
    });
};

exports.getServices = (req, res, next) => {
    res.render('services.ejs', {
        pageTitle: 'JAWSTRENGTH | Services',
        path: '/services',
    });
};

exports.getContact = (req, res, next) => {
    res.render('contact.ejs', {
        pageTitle: 'JAWSTRENGTH | Contact',
        path: '/contact',
    });
};

exports.getAbout = (req, res, next) => {
    res.render('about.ejs', {
        pageTitle: 'JAWSTRENGTH | About',
        path: '/about',
    });
};

exports.getPrivacy = (req, res, next) => {
    res.render('privacy.ejs', {
        pageTitle: 'JAWSTRENGTH | Privacy',
        path: '/privacy',
    });
};

exports.getTerms = (req, res, next) => {
    res.render('terms.ejs', {
        pageTitle: 'JAWSTRENGTH | About',
        path: '/terms',
    });
};

exports.getThankYou = (req, res, next) => {
    res.render('thank-you.ejs', {
        pageTitle: 'JAWSTRENGTH | Thank you',
        path: '/thank-you',
    });
};

exports.postContact = (req, res, next) => {
    try {
        transporter.sendMail({
            from: `"JAWSTRENGTH.COM" <contact@jawstrength.com>`,
            to: 'contact@jawstrength.com',
            subject: `${req.body.name} - ${req.body.email}`,
            html: `<pre> ${req.body.message} </pre>`,
        });
        return res.redirect('/thank-you');
    } catch (err) {
        if (err) next(err);
    }
};

exports.postApplication = (req, res, next) => {
    // const { micro_cycle } = req.body;
    // console.log(micro_cycle);

    res.render('application.ejs', {
        pageTitle: 'JAWSTRENGTH | Application',
        path: '/application',
    });
};

exports.postAthleteApplication = (req, res, next) => {
    try {
        transporter.sendMail({
            from: `"JAWSTRENGTH.COM" <contact@jawstrength.com>`,
            to: 'contact@jawstrength.com',
            subject: `${req.body.name} - ${req.body.email}`,
            html: `<pre> ${JSON.stringify(req.body, null, "  ")} </pre>`,
        });
        return res.redirect('https://calendly.com/jawstrength/');
    } catch (err) {
        if (err) next(err);
    }
};
