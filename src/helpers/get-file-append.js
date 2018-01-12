function getFileAppend(content) {
  return (
    `\n\n\n` +
    `// content created by create-action-handlers\n` +
    `/*\n` +
    `${content}\n` +
    `*/\n`
  );
}

module.exports = getFileAppend;
