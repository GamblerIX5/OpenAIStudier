function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

function falsy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "false" || value === "0"
}

export namespace Flag {
  export const OPENSTUDIER_AUTO_SHARE = truthy("OPENSTUDIER_AUTO_SHARE")
  export const OPENSTUDIER_GIT_BASH_PATH = process.env["OPENSTUDIER_GIT_BASH_PATH"]
  export const OPENSTUDIER_CONFIG = process.env["OPENSTUDIER_CONFIG"]
  export declare const OPENSTUDIER_TUI_CONFIG: string | undefined
  export declare const OPENSTUDIER_CONFIG_DIR: string | undefined
  export const OPENSTUDIER_CONFIG_CONTENT = process.env["OPENSTUDIER_CONFIG_CONTENT"]
  export const OPENSTUDIER_DISABLE_AUTOUPDATE = truthy("OPENSTUDIER_DISABLE_AUTOUPDATE")
  export const OPENSTUDIER_DISABLE_PRUNE = truthy("OPENSTUDIER_DISABLE_PRUNE")
  export const OPENSTUDIER_DISABLE_TERMINAL_TITLE = truthy("OPENSTUDIER_DISABLE_TERMINAL_TITLE")
  export const OPENSTUDIER_PERMISSION = process.env["OPENSTUDIER_PERMISSION"]
  export const OPENSTUDIER_DISABLE_DEFAULT_PLUGINS = truthy("OPENSTUDIER_DISABLE_DEFAULT_PLUGINS")
  export const OPENSTUDIER_DISABLE_LSP_DOWNLOAD = truthy("OPENSTUDIER_DISABLE_LSP_DOWNLOAD")
  export const OPENSTUDIER_ENABLE_EXPERIMENTAL_MODELS = truthy("OPENSTUDIER_ENABLE_EXPERIMENTAL_MODELS")
  export const OPENSTUDIER_DISABLE_AUTOCOMPACT = truthy("OPENSTUDIER_DISABLE_AUTOCOMPACT")
  export const OPENSTUDIER_DISABLE_MODELS_FETCH = truthy("OPENSTUDIER_DISABLE_MODELS_FETCH")
  export const OPENSTUDIER_DISABLE_CLAUDE_CODE = truthy("OPENSTUDIER_DISABLE_CLAUDE_CODE")
  export const OPENSTUDIER_DISABLE_CLAUDE_CODE_PROMPT =
    OPENSTUDIER_DISABLE_CLAUDE_CODE || truthy("OPENSTUDIER_DISABLE_CLAUDE_CODE_PROMPT")
  export const OPENSTUDIER_DISABLE_CLAUDE_CODE_SKILLS =
    OPENSTUDIER_DISABLE_CLAUDE_CODE || truthy("OPENSTUDIER_DISABLE_CLAUDE_CODE_SKILLS")
  export const OPENSTUDIER_DISABLE_EXTERNAL_SKILLS =
    OPENSTUDIER_DISABLE_CLAUDE_CODE_SKILLS || truthy("OPENSTUDIER_DISABLE_EXTERNAL_SKILLS")
  export declare const OPENSTUDIER_DISABLE_PROJECT_CONFIG: boolean
  export const OPENSTUDIER_FAKE_VCS = process.env["OPENSTUDIER_FAKE_VCS"]
  export declare const OPENSTUDIER_CLIENT: string
  export const OPENSTUDIER_SERVER_PASSWORD = process.env["OPENSTUDIER_SERVER_PASSWORD"]
  export const OPENSTUDIER_SERVER_USERNAME = process.env["OPENSTUDIER_SERVER_USERNAME"]
  export const OPENSTUDIER_ENABLE_QUESTION_TOOL = truthy("OPENSTUDIER_ENABLE_QUESTION_TOOL")

  // Experimental
  export const OPENSTUDIER_EXPERIMENTAL = truthy("OPENSTUDIER_EXPERIMENTAL")
  export const OPENSTUDIER_EXPERIMENTAL_FILEWATCHER = truthy("OPENSTUDIER_EXPERIMENTAL_FILEWATCHER")
  export const OPENSTUDIER_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("OPENSTUDIER_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const OPENSTUDIER_EXPERIMENTAL_ICON_DISCOVERY =
    OPENSTUDIER_EXPERIMENTAL || truthy("OPENSTUDIER_EXPERIMENTAL_ICON_DISCOVERY")

  const copy = process.env["OPENSTUDIER_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
  export const OPENSTUDIER_EXPERIMENTAL_DISABLE_COPY_ON_SELECT =
    copy === undefined ? process.platform === "win32" : truthy("OPENSTUDIER_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const OPENSTUDIER_ENABLE_EXA =
    truthy("OPENSTUDIER_ENABLE_EXA") || OPENSTUDIER_EXPERIMENTAL || truthy("OPENSTUDIER_EXPERIMENTAL_EXA")
  export const OPENSTUDIER_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("OPENSTUDIER_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const OPENSTUDIER_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("OPENSTUDIER_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const OPENSTUDIER_EXPERIMENTAL_OXFMT = OPENSTUDIER_EXPERIMENTAL || truthy("OPENSTUDIER_EXPERIMENTAL_OXFMT")
  export const OPENSTUDIER_EXPERIMENTAL_LSP_TY = truthy("OPENSTUDIER_EXPERIMENTAL_LSP_TY")
  export const OPENSTUDIER_EXPERIMENTAL_LSP_TOOL = OPENSTUDIER_EXPERIMENTAL || truthy("OPENSTUDIER_EXPERIMENTAL_LSP_TOOL")
  export const OPENSTUDIER_DISABLE_FILETIME_CHECK = truthy("OPENSTUDIER_DISABLE_FILETIME_CHECK")
  export const OPENSTUDIER_EXPERIMENTAL_PLAN_MODE = OPENSTUDIER_EXPERIMENTAL || truthy("OPENSTUDIER_EXPERIMENTAL_PLAN_MODE")
  export const OPENSTUDIER_EXPERIMENTAL_WORKSPACES = OPENSTUDIER_EXPERIMENTAL || truthy("OPENSTUDIER_EXPERIMENTAL_WORKSPACES")
  export const OPENSTUDIER_EXPERIMENTAL_MARKDOWN = !falsy("OPENSTUDIER_EXPERIMENTAL_MARKDOWN")
  export const OPENSTUDIER_MODELS_URL = process.env["OPENSTUDIER_MODELS_URL"]
  export const OPENSTUDIER_MODELS_PATH = process.env["OPENSTUDIER_MODELS_PATH"]
  export const OPENSTUDIER_DISABLE_CHANNEL_DB = truthy("OPENSTUDIER_DISABLE_CHANNEL_DB")
  export const OPENSTUDIER_SKIP_MIGRATIONS = truthy("OPENSTUDIER_SKIP_MIGRATIONS")

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}

// Dynamic getter for OPENSTUDIER_DISABLE_PROJECT_CONFIG
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "OPENSTUDIER_DISABLE_PROJECT_CONFIG", {
  get() {
    return truthy("OPENSTUDIER_DISABLE_PROJECT_CONFIG")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for OPENSTUDIER_TUI_CONFIG
// This must be evaluated at access time, not module load time,
// because tests and external tooling may set this env var at runtime
Object.defineProperty(Flag, "OPENSTUDIER_TUI_CONFIG", {
  get() {
    return process.env["OPENSTUDIER_TUI_CONFIG"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for OPENSTUDIER_CONFIG_DIR
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "OPENSTUDIER_CONFIG_DIR", {
  get() {
    return process.env["OPENSTUDIER_CONFIG_DIR"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for OPENSTUDIER_CLIENT
// This must be evaluated at access time, not module load time,
// because some commands override the client at runtime
Object.defineProperty(Flag, "OPENSTUDIER_CLIENT", {
  get() {
    return process.env["OPENSTUDIER_CLIENT"] ?? "cli"
  },
  enumerable: true,
  configurable: false,
})
