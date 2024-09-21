const {
  getDataByAdminEmail,
  saveAdminData,
  getAdminData,
} = require("../reporesitory/userCurd");

const getAllAdmins = (req, res) => {
  getAdminData()
    .then((result) => {
      res.json({
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed to fetch admins ",
        data: null,
        error: err.toString(),
      });
    });
};

const saveAdmin = (req, res) => {
  const adminData = req.body;

  if (!adminData || !adminData.name || !adminData.email || !adminData.age) {
    return res.status(400).json({
      message: "Invalid input: All fields are required.",
      data: null,
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(adminData.email)) {
    return res.status(400).json({
      message: "Invalid email format.",
      data: null,
    });
  }

  if (adminData.age < 1 || adminData.age > 130) {
    return res.status(400).json({
      message: "Invalid age: Age must be between 1 and 130.",
      data: null,
    });
  }

  saveAdminData(adminData)
    .then((result) => {
      res.status(201).json({
        message: "Admin added successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to add admin",
        data: null,
        error: err.toString(),
      });
    });
};

const getAdminDataByEmail = (req, res) => {
  const { email } = req.query;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
      data: null,
      error: "Please provide a valid email address.",
    });
  }

  getDataByAdminEmail(email)
    .then((result) => {
      if (result) {
        console.log(result, "userdata");
        res.json({
          data: result,
        });
      } else {
        res.json({
          message: "Failed",
          data: null,
          error: "Email not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Failed",
        data: null,
        error: err.toString(),
      });
    });
};

module.exports = { saveAdmin, getAdminDataByEmail, getAllAdmins };
