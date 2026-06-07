(function () {
  var GITHUB_USER = 'lzxuandev';

  var langColors = {
    C: '#085e9f', 'C++': '#085e9f', Java: '#b07219', Python: '#3572A5',
    HTML: '#e34c26', CSS: '#563d7c', JavaScript: '#f1e05a', TypeScript: '#3178c6',
    Shell: '#89e051', Rust: '#dea584', Go: '#00ADD8', Lua: '#000080',
    Makefile: '#427819', Kotlin: '#A97BFF', Jupyter: '#DA5B0F',
  };

  function escapeHtml(text) {
    var d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  function formatDate(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function renderCard(repo) {
    var lang = repo.language || '';
    var dotColor = langColors[lang] || '#888';
    var socialifyUrl = 'https://socialify.git.ci/' + repo.full_name + '/image?language=1&owner=1&stargazers=1&theme=Dark';

    return '<a href="' + escapeHtml(repo.html_url) + '" target="_blank" class="project-card">'
      + '<div class="project-image" style="background-image: url(' + socialifyUrl + ');">'
      + '</div>'
      + '<div class="project-info">'
      + '<div class="project-name-row">'
      + '<span class="project-name">' + escapeHtml(repo.name) + '</span>'
      + '<span class="project-visibility">' + (repo.private ? 'Private' : 'Public') + '</span>'
      + '</div>'
      + '<span class="project-date">' + formatDate(repo.created_at) + '</span>'
      + '<p class="project-desc">' + (repo.description ? escapeHtml(repo.description) : 'No description') + '</p>'
      + '</div>'
      + '</a>';
  }

  async function loadProjects() {
    var container = document.getElementById('projects-list');
    if (!container) return;

    container.innerHTML = '<div style="padding: 2rem; text-align: center; opacity: 0.5; font-size: 0.875rem;">Loading projects...</div>';

    try {
      var res = await fetch('https://api.github.com/users/' + GITHUB_USER + '/repos?per_page=100&sort=updated&type=owner');
      if (!res.ok) {
        container.innerHTML = '<div style="padding: 2rem; text-align: center; opacity: 0.5;">Failed to load projects.</div>';
        return;
      }
      var repos = await res.json();
      repos.sort(function (a, b) { return new Date(b.created_at) - new Date(a.created_at); });
      container.innerHTML = repos.map(function (repo) { return renderCard(repo); }).join('');
    } catch (_) {
      container.innerHTML = '<div style="padding: 2rem; text-align: center; opacity: 0.5;">Network error.</div>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
  } else {
    loadProjects();
  }
})();
