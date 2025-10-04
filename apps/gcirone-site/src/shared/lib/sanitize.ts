export function sanitizeCss(css: string): string {
  return (
    css
      // Remove CSS comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove newlines, carriage returns, and tabs
      .replace(/(\r\n|\n|\r|\t)/g, '')
      // Remove whitespace around CSS delimiters
      .replace(/\s*([;:{},])\s*/g, '$1')
      // Remove unnecessary whitespace inside parentheses
      .replace(/\(\s*/g, '(')
      .replace(/\s*\)/g, ')')
      // Normalize "!important"
      .replace(/\s*!important/g, '!important')
      // Collapse multiple spaces
      .replace(/\s\s+/g, ' ')
      // Trim leading/trailing whitespace
      .trim()
  );
}

export function sanitizeJs(js: string): string {
  return (
    js
      // Remove block comments (/* ... */)
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove line comments (//...)
      .replace(/(^|\s)\/\/.*$/gm, '')
      // Remove newlines, carriage returns, and tabs
      .replace(/(\r\n|\n|\r|\t)/g, ' ')
      // Remove whitespace around delimiters
      .replace(/\s*([=;:{}(),+\-*/<>])\s*/g, '$1')
      // Collapse multiple spaces
      .replace(/\s\s+/g, ' ')
      // Trim leading/trailing whitespace
      .trim()
  );
}
