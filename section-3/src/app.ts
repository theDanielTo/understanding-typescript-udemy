// tsc --init => tsconfig.json file
// tsc -w => watch mode

const $btn = document.querySelector('button');
$btn?.addEventListener('click', () => {
  console.log('Clicked!');
});
// "sourceMap" => shows ts files in browser dev tools
// "outDir" => dist folder
// "rootDir" => src folder
