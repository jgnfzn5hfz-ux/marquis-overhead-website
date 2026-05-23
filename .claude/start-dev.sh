#!/bin/bash
export PATH="/usr/local/bin:$PATH"
cd "/Users/aaron/Desktop/Marquis Overhead/Web Site"
exec npx next dev --port ${PORT:-3001}
