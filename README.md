# Campus Site (React + Vite) — Deployed to AWS S3

Static SPA for a College Information website. Built with React + Vite, routed with react-router, deployed automatically to an AWS S3 bucket via GitHub Actions.

Bucket: arghyadevs-aws-collageinfo (Region: us-east-1)

## Local Development

- Prerequisites: Node.js 18+ and npm; optional AWS CLI for local deploys.
- Install and run:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
The build output is in `dist/`.

## S3 Static Website Hosting

1. Create or use the S3 bucket `arghyadevs-aws-collageinfo` in `us-east-1`.
2. Enable "Static website hosting" with:
   - Index document: `index.html`
   - Error document: `index.html` (SPA fallback)
3. Make the site public (for basic hosting):
   - Attach a Bucket Policy that allows public `s3:GetObject` on `arn:aws:s3:::arghyadevs-aws-collageinfo/*`.
   - Or prefer CloudFront for secure/public delivery.

Example bucket policy (public, simple demo):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::arghyadevs-aws-collageinfo/*"
    }
  ]
}
```

## CI/CD via GitHub Actions

- The workflow `.github/workflows/deploy.yml` builds the app and deploys to S3 on pushes to `main`.
- Configure repository secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION` = `us-east-1`

## Optional: Local Deploy

If you have AWS CLI configured locally with access to the bucket:
```bash
npm run deploy
```
This builds, copies `index.html` to `404.html` (for some static hosts), and syncs to S3.

## CloudFront + SSL (Optional, Production)

For better performance and HTTPS with a custom domain:
- Create a CloudFront distribution with the S3 website endpoint as origin.
- Set Default Root Object to `index.html`.
- Error Responses: 403 and 404 -> `/index.html` (200) to support SPA routing.
- Attach ACM certificate for your domain and route via Route 53.

## Repository

This project is initialized with git and points to: https://github.com/Arghyadevs/CampusSite.git

