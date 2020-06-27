module.exports.postContact = (req, res, next) => {
  const bodyName = req.body.name;
  const bodyEmail = req.body.email;

  const errors = [];

  if(bodyName === '') {
    errors.push('Tên là bắt buộc')
  }

  if(bodyEmail === '') {
    errors.push('Email là bắt buộc')
  }

  if(errors.length) {
    res.render('contact/index', {
      errors: errors,
      values: req.body
    });
    return;
  }

  next();
}