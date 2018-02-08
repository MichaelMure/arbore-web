// @flow

import Asset from './Asset'

export default class Release {
  publishedAt: Date
  url: string
  name: string
  bodyHtml: string
  linuxAssets: Asset[]
  windowsAssets: Asset[]
  macosAssets: Asset[]

  constructor(publishedAt: Date, url: string, name: string, bodyHtml: string, linuxAssets: Asset[], windowsAssets: Asset[], macosAssets: Asset[]) {
    this.publishedAt = publishedAt
    this.url = url
    this.name = name
    this.bodyHtml = bodyHtml
    this.linuxAssets = linuxAssets
    this.windowsAssets = windowsAssets
    this.macosAssets = macosAssets
  }
}