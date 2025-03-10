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

exports.loginAdmin = async (req, res) => {
    try {
        const userToBeLogged = req.body;
        const admin = await Admin.findOne({ email: userToBeLogged.email });
        if(!admin){
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password',
            });
        }
        const isMatch = await bcrypt.compare(userToBeLogged.password, admin.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            data : {
                admin
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server error occurred while creating admin',
        });
    }
}
