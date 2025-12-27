const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec')

async function run() {
    try{
        console.log("Deploying to AWS S3...");
        core.notice("Logging for S3 deployment logic."); // Placeholder for actual deployment logic
    } catch (error) {
        console.error("Deployment failed:", error);
    }
}

run();
