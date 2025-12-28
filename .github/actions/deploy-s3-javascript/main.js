const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec')

async function run() {
    try{
        // get inputs
        const bucketName = core.getInput('bucket-name', { required: true });
        const region = core.getInput('region', {required: true });
        const distFolder = core.getInput('dist-folder', {required: true });
        // Upload to S3 logic here
        const s3Uri = `s3://${bucketName}/`;
        exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`);

        const websiteUrl = `http://${bucketName}.s3-website-${region}.amazonaws.com`;
        core.setOutput('website-url', websiteUrl); // set output variable
        console.log(`Website deployed to: ${websiteUrl}`);

    } catch (error) {
        console.error("Deployment failed:", error);
    }
}

run();
