const emailTemplate = app => {
    try{
        app.set()
    } catch (error) {
        return {
            status: 400,
            errorMessage: `Something went wrong: ${error}`
        }
    }
}