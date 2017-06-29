import chai from 'chai'

import AjaxRequest from '../../src/services/ajax/ajaxRequest'
import AjaxMethods from '../../src/services/ajax/ajaxMethods'

export const ajaxUnitTests = () => {
    const assert = chai.assert
    let request, url

    before(() => {
        url = '/'
    })

    describe('Testing Ajax Service', () => {
        describe('Get Ajax Requests', () => {
            before(() => {
                request = new AjaxRequest(AjaxMethods.GET, url)
            })

            it('should be an object', () => {
                assert.isObject(request)
            })

            it('should have the appropriate url', () => {
                assert.equal(url, request.url)
            })

            it('should have the appropriate request method', () => {
                assert.equal('GET', request.method)
            })
        })

        describe('Post Ajax Requests', () => {
            before(() => {
                request = new AjaxRequest(AjaxMethods.POST, url)
            })

            it('should be an object', () => {
                assert.isObject(request)
            })

            it('should have the appropriate url', () => {
                assert.equal(url, request.url)
            })

            it('should have the appropriate request method', () => {
                assert.equal('POST', request.method)
            })
        })
    })
}