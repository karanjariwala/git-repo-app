

export const findLastPage = (headers, page_num) => {
    if(!headers.link){
      // if headers do not have link that means this is the last page
      return page_num;
    }
    // filter the link which has last page 
    const linkArray= headers.link.split(',').filter(linkObj=> linkObj.includes('rel="last"')); 
    if(!linkArray.length){
      // if `headers.link` do not have that has `rel="last"` also means this is the last page.
      return page_num;
    }
    // here we find the index of integer after page= i.e. last page.
    return parseInt(linkArray[0].slice(linkArray[0].indexOf('page=')+5), 10)
  }