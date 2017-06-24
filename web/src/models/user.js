class User {
    constructor() {
        this.emailAddress = ''
        this.firstName = ''
        this.lastName = ''
        this.username = ''
    }

    getEmailAddress() {
        return this.emailAddress
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }

    getUsername() {
        return this.username
    }

    setEmailAddress(value) {
        this.emailAddress = value
    }

    setFirstName(value) {
        this.firstName = value
    }

    setLastName(value) {
        this.lastName = value
    }

    setUsername(value) {
        this.username = value
    }
}

export default User