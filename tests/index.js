const chai = require('chai')
const { expect } = chai
const server = require('../server')
const request = require('supertest')
describe('TEST-GraphQL', () => {

    it('should return records with words starting with letter a and type VS', (done) => {
        request(server).post('/graphql')
            .send({ query: '{result(type:vs,word:"a*"){__typename... on VS{word}}}' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body).to.have.nested.property('data.result');
                let result = res.body['data']['result'];
                expect(result).to.be.instanceOf(Array);
                result.forEach(item => {
                    expect(item['__typename'] == 'VS' && item['word'].startsWith('a') && Object.keys(item).length == 2).to.be.true
                })
                done()
            })
    })

    it('should return records with mandal 1 and type RV', (done) => {

        request(server).post('/graphql')
            .send({ query: '{result(type:rv,mandal:1){__typename... on RV{mandal}}}' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body).to.have.nested.property('data.result');
                let result = res.body['data']['result'];
                expect(result).to.be.instanceOf(Array);
                result.forEach(item => {
                    expect(item['__typename'] == 'RV' && item['mandal'] == 1 && Object.keys(item).length == 2).to.be.true
                })

                done()
            })

    })
})