const searchInput = document.querySelector('input[name="dzSearch"]');
const submitButton = document.querySelector('button[name="submit"]');

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

submitButton.addEventListener('click', handleSearch);

function handleSearch() {
  const searchQuery = searchInput.value.trim();

  if (searchQuery) {
    const searchURL = new URL(window.location.href);
    searchURL.searchParams.set('q', searchQuery);
    window.location.href = searchURL.toString();
  }
}

// end search






// clear search

 const clearSearchBtn = document.getElementById('clearSearchBtn');
 const clearSearchBtn2 = document.getElementById('clearSearchBtn2');

if(clearSearchBtn){
  clearSearchBtn.addEventListener('click', clearSearch);
}
if(clearSearchBtn2){
  clearSearchBtn2.addEventListener('click', clearSearch);
}






  function clearSearch() {
     const currentURL = new URL(window.location.href);
  const searchParams = currentURL.searchParams;

  // Remove the "q" parameter from the URL
  searchParams.delete('q');

  // Create a new URL without the "q" parameter
  const newURL = new URL(currentURL.origin + currentURL.pathname);

  // Append the remaining search parameters (if any)
  for (const [key, value] of searchParams.entries()) {
    newURL.searchParams.append(key, value);
  }

  // Navigate to the new URL
  window.location.href = newURL.toString();
  }