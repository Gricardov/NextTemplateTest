/*const setCookieSameSite = (res, value) => {
    //const cookies = res.getHeader('Set-Cookie');
    //res.setHeader('Set-Cookie', cookies?.map((cookie) => cookie.replace("SameSite=Lax", `SameSite=${value};Secure`)), { httpOnly: false });
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3007');
    //res.setHeader('Access-Control-Allow-Credentials', 'true');
}*/

export default async function handler(req, res) {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    // Fetch the headless CMS to check if the provided `slug` exists
    // getPostBySlug would implement the required fetching logic to the headless CMS
    /*const post = await getPostBySlug(req.query.slug)

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post) {
        return res.status(401).json({ message: 'Invalid slug' })
    }*/
    console.log('req', req)
    // Enable Preview Mode by setting the cookies
    res.setPreviewData(JSON.parse(req.body))
    //setCookieSameSite(res, "None");

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    //res.json({ path: req.query.slug });
    res.redirect(req.query.slug);
}