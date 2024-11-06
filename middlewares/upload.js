import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";



export const upload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/RentLink/Property/*'
    }),
    limits: {
        fileSize: 10000000
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(file.mimetype);
        const mimetype = fileTypes.test(file.originalname.split('.').pop().toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        else {
            cb('Please upload a valid image file');
        }
    },
    preservePath: true
});


