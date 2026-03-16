$env:HTTPS_PROXY = 'http://127.0.0.1:10808'
$env:HTTP_PROXY = 'http://127.0.0.1:10808'
Set-Location -Path 'D:\HugoMoveData\User\Administrator\Downloads\OpenAIStudier\packages\desktop'
bun run tauri build
