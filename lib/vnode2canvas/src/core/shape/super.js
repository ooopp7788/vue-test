/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {constants} from '../utils'

const defaultStyle = {
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
}
export class Super {
  constructor(drawStyle) {
    this.render = false
    this.drawStyle = Object.assign({}, defaultStyle, drawStyle)
    this.startX = this.drawStyle.left * constants.rate
    this.startY = this.drawStyle.top * constants.rate
    this.width = this.drawStyle.width * constants.rate
    this.height = this.drawStyle.height * constants.rate
    this.fillStyle = this.drawStyle.fill || '#fff'
  }

  /**
   * if in weixin Mini Program
   * offsetX = point.target.x - point.target.offsetLeft
   * offsetY = point.target.y - point.target.offsetTop
   * @param point
   * @returns {boolean}
   */
  isInPath (point) {
    let x = constants.IN_BROWSER ? point.offsetX : point.target.x - point.target.offsetLeft
    let y = constants.IN_BROWSER ? point.offsetY : point.target.y - point.target.offsetTop
    if (
      this.render &&
      x >= this.startX &&
      x <= this.width + this.startX &&
      y >= this.startY &&
      y <= this.height + this.startY) {
      return true
    }
    return false
  }

  isVisible (scrollTop) {
    if (constants.IN_BROWSER) {
      return this.startY - scrollTop + this.height <= 0 || this.startY - scrollTop > window.innerHeight
    }
    let mobile = wx.getSystemInfoSync()
    return this.startY - scrollTop + this.height <= 0 || this.startY - scrollTop > mobile.innerHeight
  }
}
