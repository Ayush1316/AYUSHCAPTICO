import multer from 'multer';
import path from 'path';

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Specify the directory where you want to save the files
    },
    filename: (req, file, cb) => {
        // Rename the file to avoid naming conflicts (you can customize this logic)
        const filename = `${Date.now()}-${path.basename(file.originalname)}`;
        cb(null, filename);
    },
});

// Create multer instance
const upload = multer({ storage: storage });

// Express middleware to handle file upload
const fileUploadMiddleware = upload.single('courseFile');

export { fileUploadMiddleware };
