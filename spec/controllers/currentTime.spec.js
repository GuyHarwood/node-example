const CurrentTime = require('../../controllers/currentTime')

describe('The current time controller', () => {
  let offset
  let mockedRequest
  let mockedResponse

  beforeAll(() => {
    mockedRequest = {
      params: {offset}
    }
    mockedResponse = {
      status: jasmine.createSpy('status'),
      send: jasmine.createSpy('send')
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
    jasmine.spyOn(controller.timeService, 'getCurrent').and.callThrough(() => {
      return '12:34:56'
    })

    controller.process()

    expect(controller.timeService.getCurrent)
      .toHaveBeenCalledWith(6)

    expect(mockedResponse.status)
      .toHaveBeenCalledWith(200)

    expect(mockedResponse.send)
      .toHaveBeenCalledWith({time: '12:34:56'})
  })
})
