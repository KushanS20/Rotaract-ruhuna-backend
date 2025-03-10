const Modal = require('../Modals/AvenuesModal')

exports.createAvenue = async(req, res) => {
    try{
        const avenue = await Modal.create(req.body);
        if(avenue){
            res.status(200).json({
                success: true,
                data: {
                    avenue
                }
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

exports.getAvenues = async(req, res) => {
    try{
        const avenues = await Modal.find()
        if(avenues){
            res.status(200).json({
                success: true,
                length:avenues.length,
                data : {
                    avenues
                }
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}