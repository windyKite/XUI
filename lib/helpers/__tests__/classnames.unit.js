import classNames from "../classnames";

describe('测试classNames', () => {
  it('接受 1 个参数', () => {
    expect(classNames('a')).toEqual('a');
  })
  it('接受 2 个参数', () => {
    expect(classNames('a', 'b')).toEqual('a b');
  })
  it('接受多个奇怪的值', () => {
    expect(classNames('a', undefined, false, null, 1, 0, '中文')).toEqual('a 1 中文');
  })
  it('不传参数', () => {
    expect(classNames()).toEqual('');
  })
})