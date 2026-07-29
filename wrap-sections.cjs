const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') && !dirFile.includes('ScrollReveal.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src/pages').concat(walkSync('./src/components/sections'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('<section') && !content.includes('ScrollReveal')) {
    // Add import statement
    const importRegex = /import .+ from '.+';/g;
    const allMatches = [...content.matchAll(importRegex)];
    const lastImportMatch = allMatches.pop();
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + "\nimport { ScrollReveal } from '@/components/ScrollReveal';" + content.slice(insertPos);
    }

    content = content.replace(/(<section\b[^>]*>)/g, '<ScrollReveal>\n$1');
    content = content.replace(/(<\/section>)/g, '$1\n</ScrollReveal>');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
