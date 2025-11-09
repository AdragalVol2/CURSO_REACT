const techReact = (params) => (
    <div className="tech">
        <img src={`https://logo.clearbit.com/${params.url}`} />
        <span>{params.name}</span>
    </div>
);

// React.createElement('div', { className: 'tech' }, [
//     React.createElement('img', {
//         src: `https://logo.clearbit.com/${params.url}`,
//     }),
//     React.createElement('span', null, params.name),
// ]);

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

const techRendered = TECHNOLOGIES.map((techProps) => techReact(techProps));

ReactDOM.render(techRendered, document.getElementById('root'));