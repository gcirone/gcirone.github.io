const storedTheme = typeof localStorage !== 'undefined' && localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
document.documentElement.dataset.theme = (storedTheme || systemTheme) === 'dark' ? 'dark' : 'light';
