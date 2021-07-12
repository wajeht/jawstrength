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
