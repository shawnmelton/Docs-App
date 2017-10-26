import chai from 'chai'

import { ROUTES, ROUTE_CHANGE, ROUTE_INITIAL } from '../../src/constants/routes'
import routes from '../../src/reducers/routes'

export const routesReducerUnitTests = () => {
    const assert = chai.assert

    const defaultState = {
        currentRoute: ROUTES.HOME
    }

    describe('Testing Routes Reducer', () => {
        it('should properly instantiate', () => {
            assert.isFunction(routes)
        })

        it('should return an object', () => {
            assert.isObject(routes(defaultState, {
                type: ROUTE_INITIAL
            }))
        })

        it('should default to home', () => {
            assert.equal(routes(defaultState, {
                type: ROUTE_INITIAL
            }).currentRoute, ROUTES.HOME)
        })

        it('should default to home', () => {
            assert.equal(routes(defaultState, {
                type: ROUTE_CHANGE,
                route: ROUTES.SIGN_IN
            }).currentRoute, ROUTES.SIGN_IN)
        })
    })
}