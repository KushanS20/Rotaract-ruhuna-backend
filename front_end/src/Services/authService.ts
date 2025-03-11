import Api from '../Services/api.ts';

const API_URL = "/api/v1/admin/";


// Define the types for the parameters explicitly
const register = async (
    fName: string,
    lName: string,
    clubIdNumber: string,
    studentNumber: string,
    email: string,
    password: string
) => {
    try {
        const response = await Api.post(API_URL + "sign-up", {
            fName,
            lName,
            clubIdNumber,
            studentNumber,
            email,
            password,
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const signin = async (email : string,password: string) => {
    try {
        const response = await Api.post(API_URL + "sign-in", {
            email,
            password,
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export default {
    register,
    signin
};
