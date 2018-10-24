const DateApiController = require('../../../../controllers/api/v1/DateApiController');
const OffsetDateService = require('../../../../services/date/OffsetDateService');
const sinon = require('sinon');

describe('Date Api v1 Controller', () => {
    let sandbox;

    beforeEach(function () {
        sandbox = sinon.createSandbox();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe('get', () => {
        it('should return the current date with offset', () => {
            sandbox.stub(OffsetDateService.prototype, 'getTime').callsFake(() => {
                return "11:22:33";
            });

            let data = null;

            DateApiController.get({
                query: {
                    offset: 10
                }
            }, {json(d){data = d}});

            expect(data).toEqual({time: '11:22:33', offset: 10});
        })
    })
});