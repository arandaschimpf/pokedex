import { writeFile } from 'fs/promises'

export async function processFileUpload(data: FormData, fileName: string) {
  const image = data.get('image') as File;

  if (!image) {
    throw new Error('No image was uploaded')
  }

  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = `/public/images/${fileName}.${image.type.split('/')[1]}`
  await writeFile(path, buffer)

  return path
}