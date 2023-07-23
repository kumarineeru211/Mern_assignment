const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, email, title, department, role } = req.body;
    if (!name || !email || !title || !role || !department) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }

       // Email format validation
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email)) {
         console.log("invalid email format...");
         return res.status(400).json({
           status: 400,
           message: "Invalid email format",
         });
       }
   
       // Name length validation (at least 2 characters)
       if (name.trim().length < 2) {
         console.log("invalid name length...");
         return res.status(400).json({
           status: 400,
           message: "Name should be at least 2 characters long",
         });
       }
   
    const user = await User.create({
      name,
      email,
      title,
      department,
      role,
     
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
