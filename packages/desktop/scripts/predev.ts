import { $ } from "bun"

import { copyBinaryToSidecarFolder, getCurrentSidecar, windowsify } from "./utils"

const RUST_TARGET = Bun.env.TAURI_ENV_TARGET_TRIPLE

const sidecarConfig = getCurrentSidecar(RUST_TARGET)

const binaryPath = windowsify(`../openstudier/dist/${sidecarConfig.ocBinary}/bin/openstudier`)

await (sidecarConfig.ocBinary.includes("-baseline")
  ? $`cd ../openstudier && bun run build --single --baseline`
  : $`cd ../openstudier && bun run build --single`)

await copyBinaryToSidecarFolder(binaryPath, RUST_TARGET)
