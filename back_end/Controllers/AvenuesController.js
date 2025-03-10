const Modal = require('../Modals/AvenuesModal')

exports.createAvenue = async(req, res) => {
    try{
        const avenue = await new Modal.create(req.body);
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