const dateService = new (require(process.cwd() + '/services/date/OffsetDateService'));

module.exports = class DateApiController {
    static get(req, res) {
        const offset = req.query.offset;

        res.json({
            time: dateService.getTime(undefined, req.query.offset),
            //Timezone offsets can sometimes be non integer values
            offset: parseFloat(offset)
        });
    }
};