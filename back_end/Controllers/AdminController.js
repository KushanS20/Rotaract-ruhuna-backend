const bcrypt = require('bcryptjs');
const Admin = require('../Modals/AdminModal')

exports.createAdmin = async (req, res) => {
    try {
        const { fName, lName, clubIdNumber, StudentNumber, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password do not match",
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newAdmin = new Admin({
            fName,
            lName,
            clubIdNumber,
            StudentNumber,
            email,
            password: hashedPassword,
        });
        await newAdmin.save();
        res.status(201).json({
            success: true,
            data: newAdmin,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server error occurred while creating admin',
        });
    }
};
