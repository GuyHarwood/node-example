const CurrentTime = require('../../controllers/currentTime')

describe('The current time controller', () => {
  let offset
  let mockedRequest
  let mockedResponse

  beforeAll(() => {
    mockedRequest = {
      params: {offset}
    }

    const jsonMock = jasmine.createSpy('json')
    mockedResponse = {
      status: jasmine.createSpy('status').and.returnValue({
        json: jsonMock
      }),
      json: jsonMock
    }
  })

  it('should reject a non-allowed offset', () => {
    offset = -13
    const controller = new CurrentTime(mockedRequest, mockedResponse)   

    controller.process()

    expect(mockedResponse.status)
      .toHaveBeenCalledWith(400)
  })
  it('should get and return time from time service', () => {
    offset = 6
    const controller = new CurrentTime(mockedRequest, mockedResponse)   
    controller.timeService.getCurrent = jasmine.createSpy('getCurrent')
      .and.returnValue('12:34:56')

    controller.process()

    expect(controller.timeService.getCurrent)
      .toHaveBeenCalledWith(6)

    expect(mockedResponse.status)
      .toHaveBeenCalledWith(200)

    expect(mockedResponse.json)
      .toHaveBeenCalledWith({time: '12:34:56'})
  })
})
