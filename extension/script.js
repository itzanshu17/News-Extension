// script.js

fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=674dd924144045f6ae4ebc307c563c59')
    .then(response => response.json())
    .then(newsData => {
        const newsContainer = document.getElementById('news-container');
        
        // Check if articles exist in the response
        if (newsData.articles && newsData.articles.length > 0) {
            newsContainer.innerHTML = ''; // Clear any existing content

            // Loop through the articles and create HTML elements to display them
            newsData.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');

                const articleTitle = document.createElement('h2');
                articleTitle.textContent = article.title;

                const articleDescription = document.createElement('p');
                articleDescription.textContent = article.description;

                const articleLink = document.createElement('a');
                articleLink.textContent = 'Read more';
                articleLink.href = article.url;
                articleLink.target = '_blank';

                articleElement.appendChild(articleTitle);
                articleElement.appendChild(articleDescription);
                articleElement.appendChild(articleLink);

                newsContainer.appendChild(articleElement);
            });
        } else {
            newsContainer.innerHTML = 'No news articles available.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
