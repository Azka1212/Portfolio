async function get_repos() {
    let result = await fetch("https://api.github.com/users/Azka1212/repos");
    let response = await result.json();

    return response;
}

(async function () {
    try {
        let repos = await get_repos();
        console.log(repos);

        for_other_projects(repos);
    } catch (err) {
        console.error(err.message);
    }
})();

function for_other_projects(data) {
    const container = document.getElementById("other_projects");
    data.forEach((result) => {
        const content = `
            <div class="portfolio-box">
                <img src="./images/projects_placeholder.png" alt="" />
                <div class="portfolio-layer">
                    <h4>${result.name}</h4>
                    <p>${result.description}</p>
                    <a id="latest_projects_anchor" href="${result.html_url}"><i class="bx bx-link-external"></i></a>
                </div>
            </div>
        `;

        container.innerHTML += content;
    });
}
