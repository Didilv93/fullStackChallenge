const titlesByRoute = {
    admin: 'Resultado Top 5',
    sugestoes: 'Sugestoes Top 5'
}

export function selectTitle(pathName){
    const objectKey = pathName.replace(/[/]+/g, '');
    return objectKey && titlesByRoute[objectKey];
}