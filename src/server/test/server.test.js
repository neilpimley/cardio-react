const expect = require('expect')
const request = require('supertest')
const { app } = require('../../server')

describe('POST /patientContact', () => { // 1
    it('should send an email from a patient', (done) => {
         
      request(app) // 3
        .post('/patientContact')
        .send({text})
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe('')
        })
        .end((err, res) => { // 4
          if (err) {
            return done(err)
          }
        })
    })
   
  })