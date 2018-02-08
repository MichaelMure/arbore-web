// @flow
import marked from 'marked'
import Release from './Release'
import Asset from './Asset'
import path from 'path'

marked.setOptions({
  gfm: true,
})

export default class releaseParser {

  releases: Release[]

  constructor(data) {
    this.releases = data.map(releaseParser.releaseTransformer)
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
      {__html: marked(data.body)},
      linux.map(releaseParser.assetTransformer),
      windows.map(releaseParser.assetTransformer),
      macos.map(releaseParser.assetTransformer)
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
}