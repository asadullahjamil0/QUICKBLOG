import jwt from 'jsonwebtoken';

export const adminLogin = async (req, res) => {

    try {
        // Getting email and password from req.body
        const { email, password } = req.body;

        // check if email and password are correct
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: 'false', message: "Invalid credentials" });
        }
        // create a token
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.json({ success: "true", token });
    } catch (error) {
        // response in case of error
        res.send({ success: 'false', message: error.message });
    }

}