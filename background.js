function navigate(url) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(
  function(text) {
	navigate('http://reddit.com/r/' + text);
  });
  
  
  chrome.omnibox.onInputStarted.addListener(function() {
		chrome.omnibox.setDefaultSuggestion({
    description: 'Enter a Subreddit Name'
  });
	
});
chrome.omnibox.onInputChanged.addListener(function(text,suggest) {
	suggest([{
	'content' : text,
	'description' : '<url>http://reddit.com/r/<match>'+ text +'</match></url> <dim>Reddit</dim>'
	}]);
	chrome.omnibox.setDefaultSuggestion({
    description: 'Go To Subreddit ' + text
  });
});

chrome.omnibox.onInputCancelled.addListener(function(text) {

chrome.omnibox.setDefaultSuggestion({
    description: 'Enter a Subreddit Name'
  });

});