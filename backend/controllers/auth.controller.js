import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const login = (req, res) => {
  res.send("Login User");
  console.log("Login User");
};

export const logout = (req, res) => {
  res.send("Logout User");
  console.log("Logout User");
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.send(400).json({ error: "Password doesn't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      res.status(400).json({ error: "Username already exists!" });
    }

    // hashed password here
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // https://avatar.iran.liara.run/
    const boyPfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyPfp : girlPfp,
    });

    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data!" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
