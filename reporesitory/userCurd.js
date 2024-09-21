const userModel = require("../models/user");

const saveAdminData = (data) => {
  const user = new userModel(data);

  return user.save();
};

const getAdminData = () => {
  return userModel.find();
};

const getDataByAdminEmail = (adminEmail) => {
  return userModel.findOne({ email: adminEmail });
};

module.exports = {
  saveAdminData,
  getAdminData,
  getDataByAdminEmail,
};
