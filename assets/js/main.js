'use strict';
(function () {
	const root = document.documentElement;
	const toggle = document.getElementById('themeToggle');
	const stored = localStorage.getItem('pref-theme');
	if (stored === 'light') {
		root.classList.add('light');
	}
	const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
	if (!stored && prefersLight) {
		root.classList.add('light');
	}
	if (toggle) {
		toggle.addEventListener('click', function () {
			const isLight = root.classList.toggle('light');
			localStorage.setItem('pref-theme', isLight ? 'light' : 'dark');
		});
	}
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());
	// Simple focus ring for keyboard users only
	function handleFirstTab(e) {
		if (e.key !== 'Tab') return;
		document.body.classList.add('user-is-tabbing');
		window.removeEventListener('keydown', handleFirstTab);
	}
	window.addEventListener('keydown', handleFirstTab);
})();
