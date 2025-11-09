const tech = (params) => `
    <div class="tech">
        <img src="https://logo.clearbit.com/${params.url}" />
        <span>${params.name}</span>
    </div>
`;

const techDom = (params) => {
    const div = document.createElement('div');
    div.className = 'tech';
    const img = document.createElement('img');
    img.src = `https://logo.clearbit.com/${params.url}`;
    const span = document.createElement('span');
    const text = document.createTextNode(params.name);

    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(text);

    return div;
};

const TECHNOLOGIES = [
    {
        url: 'reactjs.org',
        name: 'React JS',
    },
    {
        url: 'nodejs.org',
        name: 'Node JS',
    },
    {
        url: 'graphql.org',
        name: 'GraphQL',
    },
];

// TECHNOLOGIES.forEach(
//     (techParams) => (document.body.innerHTML += tech(techParams))
// );

TECHNOLOGIES.forEach((techParams) =>
    document.body.appendChild(techDom(techParams))
);