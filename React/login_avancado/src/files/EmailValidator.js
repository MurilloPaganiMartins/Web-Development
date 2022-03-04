export default class EmailValidator {
    isValid(email) {
        if (!email || email === "") {
            return false;
        }
        if (typeof email !== "string") {
            //retirar dps
            return false;
        }

        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) !== null;
    }
}