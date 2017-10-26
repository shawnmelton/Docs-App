import chai from 'chai'

import User from '../../src/models/user'

export const userModelUnitTests = () => {
    const assert = chai.assert

    let user

    before(() => {
        user = new User()
    })

    describe('Testing User Model', () => {
        it('should properly instantiate', () => {
            assert.isObject(user)
        })

        it('should set and get Email Address', () => {
            const value = 'shawn.melton@test.com'
            user.setEmailAddress(value)
            assert.equal(value, user.getEmailAddress())
        })

        it('should set and get First Name', () => {
            const value = 'Shawn'
            user.setFirstName(value)
            assert.equal(value, user.getFirstName())
        })

        it('should set and get Last Name', () => {
            const value = 'Melton'
            user.setLastName(value)
            assert.equal(value, user.getLastName())
        })

        it('should set and get Username', () => {
            const value = 'username123'
            user.setUsername(value)
            assert.equal(value, user.getUsername())
        })
    })
}