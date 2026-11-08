# Lutian Quest (desktop app)

## Run it
    npm install
    npm start

## Build an installer for your computer
    npm run dist
The installer appears in the `dist` folder (.exe on Windows, .dmg on Mac, .AppImage on Linux).
Send that file to your friend. They install it and play. No account needed.

## Build all three installers without installing anything
1. Create a free GitHub repository and upload these files (keep the .github folder).
2. On GitHub open Actions > "Build installers" > Run workflow.
3. When it finishes, download the installers from the run's Artifacts section.

## Co-op in the app
One player presses O > "Host with invite codes". The other presses O > "Join with an invite code".
Swap the two codes (text, Discord, anything), and you are playing together.
