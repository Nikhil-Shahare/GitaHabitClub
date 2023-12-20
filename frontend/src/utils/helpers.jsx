// Function to convert HTML to plain text
const convertHtmlToPlainText = (html) => {

  const doc = new DOMParser().parseFromString(html, 'text/html');

  const stack = [...doc.body.childNodes];
  let result = '';

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.nodeType === Node.TEXT_NODE) {
      result += node.textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();

      if (tag === 'p' || tag === 'h1' || tag === 'h2') {
        result += `${convertHtmlToPlainText(node.innerHTML)} `;
      } else {
        for (const childNode of node.childNodes) {
          stack.push(childNode);
        }
        // Add a space between text content of other elements
        result += ' ';
      }
    }
  }

  return result.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space
};


  const  textConverter = (html) => {
    // console.log("i am html",html)
  
  const data = html.map((blog)=>{
    const doc = new DOMParser().parseFromString(blog.description, 'text/html');
  
    const imgElement = doc.querySelector('img');
     
    const text= convertHtmlToPlainText(blog.description)
  
    return {
      title:blog.title,
      id:blog._id,
      text,
      img:imgElement ? imgElement.src : null
    } // Trim any leading or trailing whitespace
  
  }   )
  return data;
  }


export default textConverter;