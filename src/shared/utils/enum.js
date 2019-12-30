const titlesByRoute = {
  admin: 'Classificação final',
  sugestoes: 'Sugestão 5 músicas favoritas'
};

export function selectTitle(pathName) {
  const objectKey = pathName.replace(/[/]+/g, '');
  return objectKey && titlesByRoute[objectKey];
}
