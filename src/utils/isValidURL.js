export const isValidURL = urlString=> {
    let url;
    try { 
        url =new URL(urlString); 
    }
    catch(e){ 
        return false; 
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
};
