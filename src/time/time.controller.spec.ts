import axio from "axios"
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { Request } from 'express';
import { HttpStatusCodes } from "../shared/HttpStatusCodes";

describe('TimeControllerSpec', () => {
    let mockResponse = jasmine.createSpyObj('Response', ['status']);
    let mockStatus = {
        send: jasmine.createSpy()
    }
    const testCases = [{
        offset: '+1:00',
    }, {
        offset: undefined,
    }, {
        emptyRequest: 'emptyRequest'
    }];

    testCases.forEach(testCase => {
        it('should respond with status code 200 with the current time', () => {
            spyOn(TimeService, 'now').and.returnValue('2019-03-02T00:30');
            let mockRequest = <Request>{
                query: {
                    offset: testCase.offset
                }
            }
            mockResponse.status.and.returnValue(mockStatus)

            TimeController.getCurrentTime(mockRequest, mockResponse)

            expect(mockResponse.status).toHaveBeenCalledWith(HttpStatusCodes.OK)
            expect(mockStatus.send).toHaveBeenCalledWith('2019-03-02T00:30')
        });
    });

    it('should respond with status code 400 when an unexpected error is thrown', () => {
        spyOn(TimeService, 'now').and.callFake(() => {
            throw 'Dummy Error Thrown'
        });
        let mockRequest = <Request>{
            query: {
                offset: '+01:00'
            }
        }
        mockResponse.status.and.returnValue(mockStatus)

        TimeController.getCurrentTime(mockRequest, mockResponse)

        expect(mockResponse.status).toHaveBeenCalledWith(HttpStatusCodes.BadRequest)
        expect(mockStatus.send).toHaveBeenCalledWith('Dummy Error Thrown')
    })
});