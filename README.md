# remind-cli

A simple CLI tool to schedule local reminders directly from your terminal.

## Features

- Schedule reminders using easy-to-understand time formats like `10s`, `5m`, or `2h`.
- Get desktop notifications with your custom reminder messages.
- Lightweight and simple to use from the command line.
- Works on Windows, macOS, and Linux (requires Node.js).

## Installation

1. Clone the repo or download the source.
2. Run `npm install` to install dependencies.
3. (Optional) Run `npm link` to use `remind-cli` as a global command.

## Usage

```bash
node index.js --time <time> --message "<your message>"
