// Updated other_projects.js for fetching and displaying additional GitHub projects dynamically

async function get_repos() {
    let result = await fetch("https://api.github.com/users/Azka1212/repos");
    let response = await result.json();
    return response;
}

(async function () {
    try {
        console.log('Fetching additional GitHub repositories for other projects...');
        let repos = await get_repos();
        for_other_projects(repos);  // Populate the "other projects" section with the fetched repos
    } catch (err) {
        console.error('Error fetching GitHub repositories:', err.message);
    }
})();

// Display other projects dynamically in the other projects section
function for_other_projects(data) {
    const container = document.getElementById("other_projects");
    data.forEach((result) => {
        const content = `
            <div class="portfolio-box">
                <img src="./images/projects_placeholder.png" alt="Project Placeholder Image" />
                <div class="portfolio-layer">
                    <h4>${result.name}</h4>
                    <p>${result.description ? result.description : 'No description available'}</p>
                    <a href="${result.html_url}" target="_blank"><i class="bx bx-link-external"></i></a>
                </div>
            </div>`;

        container.innerHTML += content;
    });
}
