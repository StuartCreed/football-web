export const serve = async (event, _context)=> {
    try {
        // We use asynchronous import here so we can better catch server-side errors during development
        const render = (await import("./src/ssr")).default;
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "text/html",
            },
            body: await render(event),
        };
    } catch (error) {
        // Custom error handling for server-side errors
        console.error(error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "text/html",
            },
            body: `<html><body>${error.toString()}</body></html>`,
        };
    }
};