exports.getIndex = (req, res, next) => {
    res.render('index.ejs', {
        pageTitle: 'JAWSTRENGTH',
    });
};

exports.getServices = (req, res, next) => {
    res.render('services.ejs', {
        pageTitle: 'JAWSTRENGTH | Services',
    });
};

exports.getContact = (req, res, next) => {
    res.render('contact.ejs', {
        pageTitle: 'JAWSTRENGTH | Contact',
    });
};

exports.getTrainingVlog = (req, res, next) => {
    res.render('contact.ejs', {
        pageTitle: 'JAWSTRENGTH | TrainingVlog',
    });
};
