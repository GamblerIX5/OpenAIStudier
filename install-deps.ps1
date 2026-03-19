$env:HTTPS_PROXY = 'http://127.0.0.1:10808'
$env:HTTP_PROXY = 'http://127.0.0.1:10808'
$reg = 'https://registry.npmjs.org'
Set-Location -Path 'D:\HugoMoveData\User\Administrator\Downloads\OpenAIStudier'
bun install --registry=$reg
