// @flow
import Release from '../models/Release'
import Asset from '../models/Asset'
import path from 'path'

export default class ReleaseParser {

  releases: Release[]

  constructor(data) {
    this.releases = data.map(ReleaseParser.releaseTransformer)
  }

  static releaseTransformer(data) : Release {
    const linux = []
    const windows = []
    const macos = []

    data.assets.forEach(asset => {
      switch(path.extname(asset.name)) {
        case '.deb':
        case '.AppImage':
        case '.rpm':
          asset.icon = "linux"; asset.os = "Linux"; linux.push(asset); break
        case '.exe':
          asset.icon = "windows"; asset.os = "Windows"; windows.push(asset); break
        case '.dmg':
          asset.icon = "apple"; asset.os = "MacOS"; macos.push(asset); break
        default:
          throw('unrecognized')
      }
    })

    return new Release(
      new Date(Date.parse(data.published_at)),
      data.url,
      data.name,
      data.body,
      linux.map(ReleaseParser.assetTransformer),
      windows.map(ReleaseParser.assetTransformer),
      macos.map(ReleaseParser.assetTransformer)
    )
  }

  static assetTransformer(data): Asset {
    return new Asset(
      data.id,
      data.icon,
      data.os,
      data.browser_download_url,
      data.name,
      data.size,
      data.download_count
    )
  }

  get length() : number {
    return this.releases.length
  }

  get current() : Release {
    return this.releases[0]
  }

  get olds() : Release[] {
    return this.releases.slice(1)
  }

  get linuxDownloads() : number {
    return this.releases.map((release : Release) =>
      release.linuxAssets.reduce((acc, asset: Asset) => acc + asset.downloadCount, 0)
    ).reduce((acc, count) => acc + count, 0)
  }

  get windowsDownloads() : number {
    return this.releases.map((release : Release) =>
      release.windowsAssets.reduce((acc, asset: Asset) => acc + asset.downloadCount, 0)
    ).reduce((acc, count) => acc + count, 0)
  }

  get macosDownloads() : number {
    return this.releases.map((release : Release) =>
      release.macosAssets.reduce((acc, asset: Asset) => acc + asset.downloadCount, 0)
    ).reduce((acc, count) => acc + count, 0)
  }

  get totalDownloads() : number {
    return this.releases.map((release : Release) =>
      [].concat(
        release.linuxAssets.reduce((acc, asset: Asset) => acc + asset.downloadCount, 0),
        release.windowsAssets.reduce((acc, asset: Asset) => acc + asset.downloadCount, 0),
        release.macosAssets.reduce((acc, asset: Asset) => acc + asset.downloadCount, 0),
      ).reduce((acc, count) => acc + count, 0)
    ).reduce((acc, count) => acc + count, 0)
  }
}