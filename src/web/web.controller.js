import sendEmail from '../utils/email.js';

export function getIndex(req, res, next) {
  res.render('index.ejs', {
    pageTitle: 'JAWSTRENGTH',
    path: '/',
  });
}

export function getServices(req, res, next) {
  res.render('services.ejs', {
    pageTitle: 'JAWSTRENGTH | Services',
    path: '/services',
  });
}

export function getContact(req, res, next) {
  res.render('contact.ejs', {
    pageTitle: 'JAWSTRENGTH | Contact',
    path: '/contact',
  });
}

export function getAbout(req, res, next) {
  res.render('about.ejs', {
    pageTitle: 'JAWSTRENGTH | About',
    path: '/about',
  });
}

export function getPrivacy(req, res, next) {
  res.render('privacy.ejs', {
    pageTitle: 'JAWSTRENGTH | Privacy',
    path: '/privacy',
  });
}

export function getTerms(req, res, next) {
  res.render('terms.ejs', {
    pageTitle: 'JAWSTRENGTH | About',
    path: '/terms',
  });
}

export function getThankYou(req, res, next) {
  res.render('thank-you.ejs', {
    pageTitle: 'JAWSTRENGTH | Thank you',
    path: '/thank-you',
  });
}

export function postContact(req, res, next) {
  try {
    const subject = `${req.body.name} - ${req.body.email}`;
    const message = `<pre> ${req.body.message} </pre>`;
    sendEmail(subject, message);
    return res.redirect('/thank-you');
  } catch (err) {
    next(err);
  }
}

export function postApplication(req, res, next) {
  const subject = `${req.body.name} - ${req.body.email}`;
  const message = `<pre> ${req.body.message} </pre>`;
  sendEmail(subject, message);
  res.render('application.ejs', {
    pageTitle: 'JAWSTRENGTH | Application',
    path: '/application',
  });
}

export function postAthleteApplication(req, res, next) {
  try {
    const subject = `${req.body.name} - ${req.body.email}`;
    const message = `<pre> ${JSON.stringify(req.body, null, '  ')} </pre>`;
    sendEmail(subject, message);
    return res.redirect('https://calendly.com/jawstrength/');
  } catch (err) {
    next(err);
  }
}
