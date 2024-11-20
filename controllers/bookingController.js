import { apartmentModel } from "../model/apartmentModel.js";
import { bookingModel } from "../model/bookingModel.js"
import { notificationModel } from "../model/notificationModel.js";
import { bookingSchemavalidator } from "../validator/booking-validator.js";
export const createBooking = async (req, res, next) => {
    try {
        const tenantId = req.auth.id;
        const {error,value} = bookingSchemavalidator.validate(req.body);
        if (error) {
            return res.status(400).json(error);
        }
        const property=await apartmentModel.findById(value.apartmentId);
        if (!property) {
            return res.status(404).json({message:"Property not found"})
        }
        const booking=await bookingModel.create({
            ...value,
            user: tenantId,
            notes:value.notes
        });
        const admin = await userModel.findOne({role:"admin"});

        const notification = await notificationModel.create({
            user:admin._id,
            type:"booking",
            message:`A new booking has been made by ${apartmentModel.title}`
        })

        res.status(201).json({message:"Booking request sent successfully",booking});
    } catch (error) {
        next(error);
    }
}

export const getBookings = async (req, res, next) => {
    try {
        const booking = await bookingModel.find().populate('apartmentId',"title ").populate('user','firstName lastName');
        if (!booking) {
            res.status(404).json({ message: "Booking not found" })
        }
        res.status(200).json({message:"Booking found successfully", booking});
    } catch (error) {
        next(error)
    }
}

export const getMyBooking = async (req, res, next) => {
    try {
        const booking = await bookingModel.find({user: req.auth.id}).populate('apartmentId',"title")
        if (!booking||booking.length===0) {
            return res.status(404).json({message:"Booking not found"})
        }
        res.status(200).json({message:"Booking found successfully", booking});
    } catch (error) {
       next(error)
    }
}


export const updateBooking = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {status} = req.body;
        const bookingRequest = await bookingModel.findByIdAndUpdate(id);
        if (!bookingRequest) {
            return res.status(404).json({ message: "Booking request not found" });
        }
        bookingRequest.status = status;
        await bookingRequest.save();
         
        const tenant = await userModel.findById(bookingRequest.user);

        const property = await apartmentModel.findById(bookingRequest.apartmentId);

        const notification = new notificationModel({
            user:tenant._id,
            type:"booking",
            message:`Your booking request for ${property.title} has been ${status}`
        })

        await notification.save();

        res.status(200).json({ message: `Booking request ${status} successfully`,bookingRequest });
        
    } catch (error) {
        next(error)
    }
}
