const fs = require('fs');
const path = require('path');
const {chalk, render, mkdirp, highlight, classNameFromHyphens} = require('zuix-cli/common/utils');
const config = require('config');
const moment = require('moment');

const zuixConfig = config.get('zuix');
const sourceFolder = zuixConfig.get('build.input');
const buildFolder = zuixConfig.get('build.output');

const newsBlogFolder = 'pages/news-blog';

function addPage(args) {
  const pageTemplatesPath = './templates/pages/';
  const template = args.layout;
  let outputFile = args.name.toLowerCase();
  const pageName = path.basename(outputFile);
  const pageTitle = classNameFromHyphens(pageName);
  console.log(
    chalk.cyanBright('*') + ' Generating',
    chalk.yellow.bold(template),
    '→',
    outputFile
  );
  let extension = '.liquid';
  let componentTemplate = `${pageTemplatesPath}${template}${extension}`;
  if (!fs.existsSync(componentTemplate)) {
    extension = '.md'
    componentTemplate = `${pageTemplatesPath}${template}${extension}`;
  }
  if (fs.existsSync(componentTemplate)) {
    let sectionFolder = path.join(sourceFolder, newsBlogFolder);
    if (args.section) {
      args.section = args.section.toLowerCase();
      sectionFolder = path.join(sectionFolder, args.section);
    }
    const frontMatter = args.frontMatter && args.frontMatter.join('\n') + '\n';
    const date = new moment().format('yyyy-MM-DD hh:mm:ss');
    let pageTemplate = fs.readFileSync(componentTemplate).toString('utf8');
    pageTemplate = render(pageTemplate, {
      title: pageTitle,
      name: pageName,
      section: args.section,
      frontMatter,
      date
    });
    const outputPath = path.join(sectionFolder, outputFile, '..');
    outputFile = path.join(sectionFolder, outputFile + extension);
    if (!fs.existsSync(outputFile)) {
      mkdirp.sync(outputPath);
      fs.writeFileSync(outputFile, pageTemplate);
      console.log(chalk.cyanBright('*') + ' NEW page:', chalk.green.bold(outputFile));
      // Create section if it does not exist
      if (args.section) {
        const sectionFile = path.join(sectionFolder, '..', args.section + '.liquid');
        if (!fs.existsSync(sectionFile)) {
          addPage({layout: 'section', name: args.section});
        } else {
          touch(sectionFile);
        }
      }
    } else {
      console.error(
        chalk.red.bold('A file with that name already exists.')
      );
    }
  } else {
    console.error(
      chalk.red.bold('Invalid page template:', componentTemplate)
    );
  }
}

function cleanDemo() {
  const demoSourceFolder = path.join(sourceFolder, newsBlogFolder);
  const demoBuildFolder = path.join(buildFolder, newsBlogFolder)
  if (fs.existsSync(demoSourceFolder)) {
    console.log(chalk.cyanBright('*') + ' Removing', chalk.green.bold(demoSourceFolder));
    fs.rmSync(demoSourceFolder, { recursive: true });
  }
  if (fs.existsSync(demoBuildFolder)) {
    console.log(chalk.cyanBright('*') + ' Removing', chalk.green.bold(demoBuildFolder));
    fs.rmSync(demoBuildFolder, { recursive: true });
  }
  // "touch" index file to force reload
  const filename = path.join(sourceFolder, 'news-blog.liquid');
  touch(filename);
}

function touch(filename) {
  try {
    const touchStream = fs.createWriteStream(filename, {flags: 'a'});
    touchStream.close();
  } catch (err) {
    // TODO: log error
  }
}

function collect(value, previous) {
  return previous.concat([value]);
}

module.exports = (program) => {
  program
    .command('add')
    .alias('a')
    .description('Add new page')
    .requiredOption('-s, --section <section_name>', 'Page section')
    .requiredOption('-n, --name <page_name>', 'Page name')
    .requiredOption('-l, --layout <layout_template>', 'Layout template name')
    .option('-fm, --front-matter "<field>: <value>"', 'Set a front matter field value', collect, [])
    .action(addPage);
  program
      .command('cleanDemo')
      //.alias('cd')
      .description('Delete all site content.')
      .action(cleanDemo);
};
