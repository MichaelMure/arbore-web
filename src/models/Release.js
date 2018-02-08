// @flow
import Asset from './Asset'
import marked from 'marked'

marked.setOptions({
  gfm: true,
})

export default class Release {
  publishedAt: Date
  url: string
  name: string
  body: string
  linuxAssets: Asset[]
  windowsAssets: Asset[]
  macosAssets: Asset[]

  constructor(publishedAt: Date, url: string, name: string, body: string, linuxAssets: Asset[], windowsAssets: Asset[], macosAssets: Asset[]) {
    this.publishedAt = publishedAt
    this.url = url
    this.name = name
    this.body = body
    this.linuxAssets = linuxAssets
    this.windowsAssets = windowsAssets
    this.macosAssets = macosAssets
  }

  get bodyHtml() : string {
    return {__html: marked(this.body)}
  }
}