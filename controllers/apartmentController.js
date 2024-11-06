import { apartmentModel } from "../model/apartmentModel.js"
import { propertySchema, updatePropertySchema } from "../validator/property-validator.js"

export const getApartment = async (req, res, next) => {
    try {
        // input validation with joi
        const apartment = await apartmentModel.find()
        res.status(200).json(apartment)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



export const getApartmentById = async (req, res, next) => {
    try {
        // input validation with joi
        const { id } = req.params
        const apartment = await apartmentModel.findById(id);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' })
        }
        res.status(200).json(apartment)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const addApartment = async (req, res, next) => {
    try {
        const imageFilenames = req.files ? req.files.map(file => file.filename) : []
        console.log(imageFilenames)

        // input validation with joi
        const { error, value } = propertySchema.validate({ ...req.body, images: imageFilenames })
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        await apartmentModel.create(value)

        res.status(200).json({ message: 'Property created successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


export const updateApartment = async (req, res, next) => {
    try {
        const imageFilenames = req.files ? req.files.map(file => file.filename) : [];
        // input validation with joi
        const { error, value } = updatePropertySchema.validate({ ...req.body, images:imageFilenames})
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params
        const apartment = await apartmentModel.findByIdAndUpdate(id, value, { new: true })
        // check whather the apartment is there to be updated
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' })
        }
        res.status(400).json({ message: "Property updated successfully", apartment })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const deleteApartment = async (req, res, next) => {
    try {
        // input validation with joi
        const { id } = req.params
        const property = await apartmentModel.findByIdAndDelete(id)
        // check if the id is valid to be deleted
        if (!property) {
            return res.status(404).json({ message: 'Property not found' })
        }

        res.status(200).json({ message: 'Property deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Approve property by the Admin
export const approveProperty = async (req, res, next) => {
    try {
        // input validation with joi
        const { id } = req.params;
        const property = await apartmentModel.findByIdAndUpdate(id, { isApproved: true }, { new: true })
        // check if the id exist
        if (!property) {
            return res.status(404).json({ message: 'Property not found' })
        }
        res.status(200).json({ message: 'Property approved successfully', property })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}