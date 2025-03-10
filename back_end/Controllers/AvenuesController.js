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

exports.deleteAvenue = async(req, res) => {
    try{
        const avenueToBeDeleted = await Modal.findByIdAndDelete(req.query.id)
        if(avenueToBeDeleted){
            res.status(200).json({
                success: true,
                data : null
            })
        }
        res.status(404).json({
            success: false,
            message : "The Avenue with this ID does not exist"
        })
    }
    catch (error){
        console.log(error);
    }
}


exports.updateAvenue = async(req, res) => {
    try{
        const avenueToBeUpdated = await Modal.findByIdAndUpdate(req.query.id, req.body, { new:true })
        if(avenueToBeUpdated){
            res.status(200).json({
                success: true,
                data : {
                    avenueToBeUpdated
                }
            })
        }
        res.status(404).json({
            success: false,
            message : "The Avenue with this ID does not exist"
        })
    }
    catch (error) {
        console.log(error)
    }
}
