const router = require('express').Router();
const ApiError = require('../helpers/ApiError');
const { regSchema, updateSchema } = require('../validation/nurse');
const { registrationService, updateService } = require('../service/nurse');

// registration page
router.get('/register', (req, res, next) => {
    res.status(200).render('patientReg', {});
});

router.post('/register', async (req, res, next) => {
    try {
        const { value, error } = regSchema.validate(req.body);
        if (error) {
            next(ApiError.unprocessableEntity(error));
            return;
        }
        await registrationService(value);
        res.status(201).send('Patient registered');
    } catch (err) {
        next(err);
    }
})

router.put('/updatePatient/:nic', async (req, res, next) => {
    try{
        const { value, error } = updateSchema.validate(req.body);
        if (error) {
            next(ApiError.unprocessableEntity(error));
            return;
        }
        await updateService(req.params.nic, value);
        res.status(201).send('Updated succussfully');
    } catch(err) {
        next(err);
    }
})

module.exports = router;
