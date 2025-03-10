exports.passwordComparisonMiddleware = (req, res, next) => {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password and Confirm Password do not match",
        });
    }
    next();
};

