(function () {
  var GITHUB_USER = 'lzxuandev';

  var svgStar = '<svg class="project-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  var svgFork = '<svg class="project-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><path d="M18 9v12"/><path d="M6 15a3 3 0 1 0 6 0"/><path d="M12 15a3 3 0 1 0 6 0"/><path d="M6 3a3 3 0 1 0 6 0"/><path d="M18 9a3 3 0 1 0 6 0"/></svg>';

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

    return '<a href="' + escapeHtml(repo.html_url) + '" target="_blank" class="project-card">'
      + '<div class="project-card-top">'
      + '<div class="project-name-row">'
      + '<span class="project-name">' + escapeHtml(repo.name) + '</span>'
      + '<span class="project-lang-label">' + (lang ? '<span class="project-lang-dot" style="background:' + dotColor + '"></span>' + escapeHtml(lang) : '') + '</span>'
      + '</div>'
      + '<p class="project-desc">' + (repo.description ? escapeHtml(repo.description) : 'No description') + '</p>'
      + '</div>'
      + '<div class="project-card-bottom">'
      + '<span class="project-date">' + formatDate(repo.created_at) + '</span>'
      + '<div class="project-stats">'
      + '<span class="project-stat">' + svgStar + repo.stargazers_count + '</span>'
      + '<span class="project-stat">' + svgFork + repo.forks_count + '</span>'
      + '</div>'
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
      var cards = container.querySelectorAll('.project-card');
      cards.forEach(function(card, i) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        setTimeout(function() {
          card.style.opacity = '0.9';
          card.style.transform = 'translateY(0)';
        }, 100 + i * 60);
      });
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
