const sgMail = require('@sendgrid/mail');

module.exports.index = (req, res) => {
  res.render('contact/index');
}

module.exports.postContact = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const caption = req.body.caption;
  const content = req.body.content;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'developerthienkim@gmail.com',
    from: email,
    subject: caption,
    text: content,
    html: content,
  };
  
  sgMail
  .send(msg)
  .then(() => {}, error => {
    if (error.response) {
      console.error(error.response.body)
    }
  });

  res.redirect('/contact');
}