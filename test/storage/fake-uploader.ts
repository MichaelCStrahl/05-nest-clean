import {
  UploadParams,
  Uploader,
} from '@/domain/forum/application/storage/uploader'

interface Upload {
  fileName: string
  url: string
}

export class FakeUploader implements Uploader {
  public uploads: Upload[] = []

  async upload({ fileName }: UploadParams) {
    const url = `https://fake.url/${fileName}`

    this.uploads.push({
      fileName,
      url,
    })

    return { url }
  }
}
