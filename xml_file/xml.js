document.getElementById("generateXmlButton").addEventListener("click", function() {
  // Generate XML dynamically
  var xmlString = generateXml();
  
  // Display XML on the page
  document.getElementById("xmlOutput").innerText = xmlString;
});

function generateXml() {
  var xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xmlString += '<library>\n';
  xmlString += '  <book>\n';
  xmlString += '    <title>Introduction to XML</title>\n';
  xmlString += '    <author>John Doe</author>\n';
  xmlString += '    <publication_year>2020</publication_year>\n';
  xmlString += '  </book>\n';
  xmlString += '  <book>\n';
  xmlString += '    <title>Web Development with XML</title>\n';
  xmlString += '    <author>Jane Smith</author>\n';
  xmlString += '    <publication_year>2021</publication_year>\n';
  xmlString += '  </book>\n';
  xmlString += '</library>';

  return xmlString;
}
