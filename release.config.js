/** @type {import("semantic-release").Options} */
module.exports = {
  branches: [
    { name: "master" },
    { name: "pre/rc", channel: "pre/rc", prerelease: "rc" },
    { name: "beta", channel: "beta", prerelease: true },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "refactor", scope: "core-*", release: "minor" },
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "chore", scope: "deps*", release: "patch" },
          { type: "fix", scope: "chore-*", release: false },
          { scope: "no-release", release: false },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
