Set-PSDebug -Trace 1

curl -I http://127.0.0.1:4321/rss.xml


# I always forgot to check RSS feed and then slow Vercel build fails.
$CurlResponse = $(curl -I "http://127.0.0.1:4321/rss.xml")

if ($CurlResponse -match ' 200 ') {
    # SUCCESS!
    Write-Output "✅ Success! curl response contained 200."
} else {
    # FAIL!
    # Write-Debug $CurlResponse
    throw "❌ curl response did not contain 200: $CurlResponse"
}