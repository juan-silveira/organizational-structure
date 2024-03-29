document.addEventListener("DOMContentLoaded", function () {
    const chart = document.querySelector('.organizational-chart');

    // Function to add a new structure below the given element
    function addNewStructure(element) {
        const newStructure = document.createElement('li');
        newStructure.innerHTML = `
        <div>
            <h3>General Manager</h3>
            <div class="row py-3">
                <div class="col-3 text-end">
                    <img class="rounded-circle" src="profile.svg" alt="profile" height="60" width="60">
                </div>
                <div class="col-7 text-start">
                    <h4>CEO</h4>
                    <h6>José Florido</h6>
                </div>
                <div class="col-2">
                    <div>
                        <button class="btn btn-outline-success add-btn"><i class="ion ion-plus-round fs-3"></i></button>
                    </div>
                        <button class="btn btn-outline-danger delete-btn"><i class="ion ion-close-round fs-3"></i></button>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <ol class="conditional-line"></ol>
        `;
        element.querySelector('ol').appendChild(newStructure);
        initializeButtons(newStructure);
        toggleConditionalLine(element);
    }

    // Function to delete the given element and its children
    function deleteStructure(element) {
        element.remove();
    }

    // Function to toggle conditional line based on the presence of structures
    function toggleConditionalLine(element) {
        const olElement = element.querySelector('ol');
        if (olElement && olElement.children.length > 0) {
            olElement.classList.add('show-line');
        } else if (olElement) {
            olElement.classList.remove('show-line');
        }
    }

    // Function to initialize buttons for the given element
    function initializeButtons(element) {
        const addButton = element.querySelector('.add-btn');
        const deleteButton = element.querySelector('.delete-btn');

        if (addButton) {
            addButton.addEventListener('click', function () {
                addNewStructure(element);
            });
        }

        if (deleteButton) {
            deleteButton.addEventListener('click', function () {
                deleteStructure(element);
            });
        }
    }

    // Initialize buttons for the initial structure
    const initialStructure = chart.querySelector('.organizational-chart > li');
    if (initialStructure) {
        initializeButtons(initialStructure);
        toggleConditionalLine(initialStructure);
    }

    // Add event listener to CEO button
    const ceoButton = document.querySelector('.organizational-chart > li:first-child > div > .add-btn');
    if (ceoButton) {
        ceoButton.addEventListener('click', function () {
            const ol = initialStructure.querySelector('ol');
            if (!ol.querySelector('li')) {
                addNewStructure(initialStructure);
            }
        });
    }
});
