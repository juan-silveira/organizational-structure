
const data = {
    id: '1',
    Role: 'General Manager',
    Manager: 'parent',
    children: [
      {
        id: '2',
        Role: 'HR Manager',
        Manager: '1',
        children: [
          {
            id: '3',
            Role: 'Trainers',
            Manager: '2',
          },
          {
            id: '4',
            Role: 'Recruiting Team',
            Manager: '2',
          },
        ],
      },
      {
        id: '6',
        Role: 'Design Manager',
        Manager: '1',
        children: [
          {
            id: '7',
            Role: 'Design Supervisor',
            Manager: '6',
          },
          {
            id: '8',
            Role: 'Development Supervisor',
            Manager: '6',
          },
        ],
      },
      {
        id: '10',
        Role: 'Operations Manager',
        Manager: '1',
        children: [
          {
            id: '11',
            Role: 'Statistics Department',
            Manager: '10',
          },
          {
            id: '12',
            Role: 'Logistics Department',
            Manager: '10',
          },
        ],
      },
    ],
  };
  const options = {
    contentKey: 'Role',
    width: 1200,
    height: 500,
    nodeWidth: 400,
    nodeHeight: 200,
    childrenSpacing: 100,
    siblingSpacing: 30,
    direction: 'top',
    nodeTemplate: (content) => {
      return `<div style='display: flex;justify-content: space-around;align-items: center;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>${content}</div>`;
    },
    tooltipMaxWidth: 120,
    enableTooltip: true,
    tooltipTemplate: (content) => {
      return `<div style='display: flex;justify-content: space-between;text-align: center; align-items: center;padding: 10px;background-color: grey;color: white;'>${content}</div>`;
    },
    fontSize: '24px',
    fontFamily: 'Satisfy, "cursive"',
    fontWeight: 600,
    fontColor: '#388ac4',
    borderColorHover: '#388ac4',
    canvasStyle: 'border: 1px solid black;background: #f6f6f6;',
  };
  const tree = new ApexTree(document.getElementById('svg-tree'), options);
  tree.render(data);