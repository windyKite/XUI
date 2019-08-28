import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon'

describe('Icon', () => {
    it('是个 Icon', () => {
        const json = renderer.create(<Icon name="wechat"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
}) 