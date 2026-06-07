async function fetchGitHubStats() {
  try {
    // Fetch num of repo, stars, commits, and follwing

    const userRes = await fetch('https://api.github.com/users/lzxuandev');
    if (!userRes.ok) throw new Error('API limit');
    const user = await userRes.json();
    document.getElementById('gh-repos').textContent = user.public_repos;
    document.getElementById('gh-following').textContent = user.following;

    const reposRes = await fetch('https://api.github.com/users/lzxuandev/repos?per_page=100');
    if (!reposRes.ok) throw new Error('API limit');
    const repos = await reposRes.json();
    const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    document.getElementById('gh-stars').textContent = stars;

    const commitRes = await fetch('https://api.github.com/search/commits?q=author:lzxuandev', {
      headers: { 'Accept': 'application/vnd.github.cloak-preview' }
    });
    if (commitRes.ok) {
      const commitData = await commitRes.json();
      document.getElementById('gh-commits').textContent = commitData.total_count;
    }

    // Fetch language usage

    const langCount = {};
    for (const repo of repos) {
      if (repo.language) {
        langCount[repo.language] = (langCount[repo.language] || 0) + 1;
      }
    }
    const sorted = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const total = sorted.reduce((s, [, c]) => s + c, 0);
    const langColors = {
      C: '#085e9f', 'C++': '#085e9f', Java: '#b07219', Python: '#3572A5',
      HTML: '#e34c26', CSS: '#563d7c', JavaScript: '#f1e05a', TypeScript: '#3178c6',
      Shell: '#89e051', Makefile: '#427819', CMake: '#DA3434', Kotlin: '#A97BFF',
      Lua: '#000080', Rust: '#dea584', Go: '#00ADD8', Dart: '#00B4AB',
      Swift: '#F05138', Ruby: '#701516', PHP: '#4F5D95', 'Jupyter Notebook': '#DA5B0F',
    };
    document.getElementById('gh-langs').innerHTML = sorted.map(([lang, count]) =>
      `<span class="gh-lang-item"><span class="gh-lang-dot" style="background:${langColors[lang] || '#888'}"></span>${lang} ${Math.round(count / total * 100)}%</span>`
    ).join('');
  } catch (e) {
    const msg = e.message === 'API limit' ? 'GitHub API rate limit reached. Try again later.' : 'Failed to load';
    document.getElementById('gh-langs').textContent = msg;
  }
}
fetchGitHubStats();

new Typed('#typed-text', {
  strings: ["I'm ZhiXuan"],
  typeSpeed: 90,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
  showCursor: false,
});
