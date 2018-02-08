// @flow

import humanize from 'humanize'

export default class Asset {
  id: number
  icon: string
  os: string
  browserDownloadUrl: string
  name: string
  size: number
  downloadCount: number

  constructor(id: number, icon: string, os: string, browserDownloadUrl: string, name: string, size: number, download_count: number) {
    this.id = id
    this.icon = icon
    this.os = os
    this.browserDownloadUrl = browserDownloadUrl
    this.name = name
    this.size = size
    this.downloadCount = download_count
  }

  get humanSize() : string {
    return humanize.filesize(this.size)
  }
}