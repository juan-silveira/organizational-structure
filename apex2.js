
const data2 = {
    id: 'Manuel Poppe',
    data: {
        department: 'General Manager',
        jobTitle: 'CEO',
        name: 'Manuel Poppe',
        imageURL: 'https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/351055511_814586096560645_4512857285447269041_n.jpg?ccb=11-4&oh=01_AdQFNXWt_WVcvtwxobVlwhZB6Xq0Ajya9bMZSL7wrXRlmQ&oe=65E33965&_nc_sid=e6ed6c&_nc_cat=106',
        borderColor: '#94ddff',
    },

    children: [
        {
            id: 'Diogo Souza',
            data: {
                department: 'Development',
                jobTitle: 'CTO',
                name: 'Diogo Souza',
                imageURL: 'https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/319771244_191186986895919_7591198153057933735_n.jpg?ccb=11-4&oh=01_AdSCJL8X4xNqdm3rB_Cmpdhxu1jSpo_RqhiUScu9mhXDnQ&oe=65E33FE0&_nc_sid=e6ed6c&_nc_cat=100',
                borderColor: '#ffc7c2',
            },

            children: [
                {
                    id: 'Juan Silveira',
                    data: {
                        department: 'FrontEnd Development',
                        jobTitle: 'FrontEnd Developer',
                        name: 'Juan Silveira',
                        imageURL: 'https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/164227712_1145271382934950_4358834584354374232_n.jpg?ccb=11-4&oh=01_AdS6Zu5n9do4XAPSAieve_DWCDxv678CkdSY8noF23JdXA&oe=65E33E81&_nc_sid=e6ed6c&_nc_cat=107',
                        borderColor: '#d2edc5',
                    },
                },
                {
                    id: 'Eduardo Felipe',
                    data: {
                        department: 'Development Manager',
                        jobTitle: 'BackEnd Developer',
                        name: 'Eduardo Felipe',
                        imageURL: 'https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/366762982_1014197553333625_1558679557428469627_n.jpg?ccb=11-4&oh=01_AdTuua5a9x-Ch_z4boQQrg9Y4b3ypdZjmQjMN0L5Vki1IA&oe=65E345DD&_nc_sid=e6ed6c&_nc_cat=106',
                        borderColor: '#d2edc5',
                    },
                },
                // {
                //     id: 'Zoe_Wang',
                //     data: {
                //         department: 'General Manager',
                //         jobTitle: 'CEO',
                //         name: 'Zoe Wang',
                //         imageURL: 'https://i.pravatar.cc/300?img=54',
                //         borderColor: '#e3c2ff',
                //     },
                // },
            ],
        },
        {
            id: 'Eduardo Felipe 2',
            data: {
                department: 'Information Office',
                jobTitle: 'CIO',
                name: 'Eduardo Felipe',
                imageURL: 'https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/366762982_1014197553333625_1558679557428469627_n.jpg?ccb=11-4&oh=01_AdTuua5a9x-Ch_z4boQQrg9Y4b3ypdZjmQjMN0L5Vki1IA&oe=65E345DD&_nc_sid=e6ed6c&_nc_cat=106',
                borderColor: '#ffc7c2',
            },

            // children: [
            //     {
            //         id: 'Ava_Jones',
            //         data: {
            //             department: 'General Manager',
            //             jobTitle: 'CEO',
            //             name: 'Ava Jones',
            //             imageURL: 'https://i.pravatar.cc/300?img=51',
            //             borderColor: '#d2edc5',
            //         },
            //     },
            //     {
            //         id: 'Maya_Gupta',
            //         data: {
            //             department: 'General Manager',
            //             jobTitle: 'CEO',
            //             name: 'Maya Gupta',
            //             imageURL: 'https://i.pravatar.cc/300?img=45',
            //             borderColor: '#d2edc5',
            //         },
            //     },
            // ],
        },

        // {
        //     id: 'Max_Ruiz',
        //     data: {
        //         department: 'General Manager',
        //         jobTitle: 'CEO',
        //         name: 'Max Ruiz',
        //         imageURL: 'https://i.pravatar.cc/300?img=50',
        //         borderColor: '#ffc7c2',
        //     },
        // },
    ],
};
const options2 = {
    contentKey: 'data',
    width: 1200,
    height: 500,
    nodeWidth: 300,
    nodeHeight: 150,
    childrenSpacing: 70,
    siblingSpacing: 30,
    direction: 'top',
    nodeTemplate: (content) => {
        console.log(content);
        return `<div class="d-flex flex-column" style="height: 100%;">
                    <h4 class="text-center mt-2 mb-4">${content.department}</h4>
                    <div class="d-flex flex-row align-items-center">
                        <img class="border rounded-circle mx-3" width="60" height="60" style='padding: 1px;' src='${content.imageURL}' alt='profile'>
                        <div>
                            <h5>${content.jobTitle}</h5>
                            <div>${content.name}</div>
                        </div>
                    </div>
                    <div style='margin-top: auto; border-bottom: 10px solid ${content.borderColor}'></div>
                </div>`;
    },
    nodeStyle: 'box-shadow: -3px -6px 8px -5px rgba(0,0,0,0.31);',
    tooltipMaxWidth: 120,
    enableTooltip: true,
    tooltipTemplate: (content) => {
      return `<div style='display: flex;justify-content: space-between;text-align: center; align-items: center;padding: 10px;background-color: grey;color: white;'>${content.jobTitle}</div>`;
    },
    canvasStyle: 'border: 1px solid black;background: #f6f6f6;',
};
const tree2 = new ApexTree(document.getElementById('svg-tree-2'), options2);
tree2.render(data2);
