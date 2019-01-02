import { logger } from '../../../tool/index'
import 'jasmine'

describe('A spy', () => {
  const process = { argv: [0, 0, 'g'] }
  let temp: any

  beforeEach(() => {
    temp = spyOn(logger, 'info')
  })

  it('tracks that the spy was called', () => {
    expect(temp.calls.count()).toEqual(1)
    console.log(temp.calls.count())
  })
})
