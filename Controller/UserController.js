const User = require("../Model/User");
const userStoreValidation = require("../Validation/userValidation");

// All User show
const index = (req, res) => {
  User.find({}, (err, data) => {
    res.json(data);
  });
};
//Store
const store = (req, res) => {
  if (userStoreValidation.validate(req.body).error) {
    return res.send(userStoreValidation.validate(req.body).error.details[0].message);
  }
  const usersValidate = userStoreValidation.validate(req.body);
  const user = new User(usersValidate.value);
  console.log(user);
  user.save((err, data) => {
    if (err) {
      return console.log(err);
    } else {
      res.send(data);
    }
    console.log(err);
  });
  console.log(usersValidate);
};
// Only one user show
const show = (req, res) => {
  const search = req.params.id;
  console.log(search);
  // res.send(req.params.id)
  User.findById(search, (err, data) => {
    res.json(data);
  });
};

// User generater

// One User Update
const update = (req, res) => {
  const usersValidate = userStoreValidation.validate(req.body);
  if (userStoreValidation.validate(req.body).error) {
    console.log("dasdsa");
    return res.send(userStoreValidation.validate(req.body).error.details[0].message);
  }
  User.findOneAndUpdate(
    { _id: req.params.id },
    usersValidate.value,
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(data, "basarili guncelleme");
    }
  );
  User.findById(req.params.id, (err, data) => {
    res.send(data);
  });
};

// One User Delete
const destroy = (req, res) => {
  const params = req.params.id;
  console.log(params);
  User.deleteOne({ _id: params }, (err, data) => {
    console.log(params);
    res.send(data);
  });
};
// All Users Delete


module.exports = {
  index,
  store,
  show,
  update,
  destroy,
 
};
