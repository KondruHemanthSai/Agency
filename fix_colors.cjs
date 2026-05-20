const fs = require('fs');
let content = fs.readFileSync('src/pages/Services.tsx', 'utf8');

const colors = {
  'web': '#3b82f6', // blue
  'landing': '#a855f7', // purple
  'social': '#ec4899', // pink
  'video': '#f97316', // orange
  'branding': '#10b981', // emerald
  'ads': '#ef4444', // red
  'management': '#6366f1' // indigo
};

for (const [type, color] of Object.entries(colors)) {
  const regex = new RegExp(`type: "${type}",\\s*gradient: "from-\\[#4F8EF7\\]/10 to-transparent"`, 'g');
  content = content.replace(regex, `type: "${type}",\n    gradient: "from-[${color}]/10 to-transparent",\n    color: "${color}"`);
}

// Now replace colors inside the JSX for each type
const typeRegex = /{type === '([^']+)' && \(([\s\S]*?)\)}/g;

content = content.replace(typeRegex, (match, type, innerHtml) => {
  const c = colors[type];
  if (c) {
    // replace #4F8EF7 with the specific color c
    const replaced = innerHtml.replace(/#4F8EF7/g, c);
    return `{type === '${type}' && (${replaced})}`;
  }
  return match;
});

// We also need to fix the colors in the grid rendering for tag, icon, etc.
// In the grid mapping:
// <span className="text-[10px] font-semibold tracking-[0.2em] text-[#4F8EF7] mb-5 block">
// Replace text-[#4F8EF7] with text-[${service.color}] but since Tailwind needs full classes we can't do that.
// Wait, we CAN use inline styles for dynamic colors!
// Let's replace: text-[#4F8EF7] -> text-[${service.color}] ? No, Tailwind doesn't support dynamic arbitrary values.
// Let's replace the grid mapping part.

content = content.replace(
  /<span className="text-\[10px\] font-semibold tracking-\[0\.2em\] text-\[#4F8EF7\] mb-5 block">/g,
  `<span className="text-[10px] font-semibold tracking-[0.2em] mb-5 block" style={{ color: service.color }}>`
);

content = content.replace(
  /<div className="absolute inset-0 bg-gradient-to-b from-\[#4F8EF7\]\/0 to-\[#4F8EF7\]\/0 group-hover:from-\[#4F8EF7\]\/\[0\.03\] group-hover:to-transparent transition-all duration-500 rounded-2xl" \/>/g,
  `<div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl" style={{ backgroundImage: \`linear-gradient(to bottom, \${service.color}22, transparent)\` }} />`
);

fs.writeFileSync('src/pages/Services.tsx', content);
