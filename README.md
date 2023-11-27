# Scoreboard

Interactive timer, user CRUD and crown score rating.

To deploy to gh-pages

2. **Install GitHub Pages Package**:
   In your project directory, run the command:

   ```bash
   npm install gh-pages --save-dev
   ```

3. **Update `package.json`**:

   - Add a `homepage` field in your `package.json` file. This should be the URL where your project will be hosted.
     ```json
     "homepage": "https://<your-github-username>.github.io/<repository-name>"
     ```
   - Add deployment scripts in the `scripts` section of `package.json`:
     ```json
     "scripts": {
       // ... other scripts ...
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

4. **Build the Project**:
   Run `npm run build` to create a build version of your project.

5. **Deploy to GitHub Pages**:

   - Run `npm run deploy`. This will create a `gh-pages` branch in your repository with the built content.
   - Go to your repository settings on GitHub, find the "GitHub Pages" section, and select the `gh-pages` branch as the source.

6. **Check Your Live Site**:
   Your site should now be live at `https://<your-github-username>.github.io/<repository-name>`.

7. **Update Your Project**:
   Every time you make changes to your project, you'll need to run `npm run deploy` again to update the live site.

Remember to replace `<your-github-username>` and `<repository-name>` with your actual GitHub username and repository name, respectively. Also, ensure that your repository is public if you're using GitHub Pages with a free account, as private repositories require a paid account for GitHub Pages.
