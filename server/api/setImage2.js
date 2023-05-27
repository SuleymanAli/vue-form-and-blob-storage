export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // const filePath = `${body.path}/${body.name}`

    const res = await fetch('/showcase.png')
    const blob = await res.blob()

    console.log(blob)
    return {
      filePath,
      blob,
    }
    // const response = await supabase.storage
    //   .from("pictures")
    //   .upload(filePath, blob, {
    //     contentType: body.type,
    //     upsert: true,
    //   })

    // return {
    //   data: response.data,
    //   error: response.error?.message,
    // }
  } catch (error) {
    return { error: error.message }
  }
})
